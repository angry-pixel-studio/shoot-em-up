import {
    Animator,
    AssetManager,
    AudioPlayer,
    BoxCollider,
    Component,
    SpriteRenderer,
    TimeManager,
    TYPE_ANIMATOR,
    TYPE_AUDIO_PLAYER,
    TYPE_BOX_COLLIDER,
    TYPE_SPRITE_RENDERER,
    Vector2,
} from "mini-engine";

const invulnerabilityPeriod = 3;
const respawnDelay = 2;
const respawnPosition = new Vector2(0, -360);

export class PlayerStatus extends Component {
    private collider: BoxCollider;
    private animator: Animator;
    private spriteRenderer: SpriteRenderer;
    private audioPlayer: AudioPlayer;

    private explosionAudio: HTMLAudioElement = AssetManager.getAudio("audio/player-explosion.mp3");

    public alive: boolean = true;
    public invulnerable: boolean = false;
    public lifes: number = 3;

    private respawning: boolean = false;
    private respawnTimer: number = 0;
    private invulnerabilityTimer: number = 0;

    protected start(): void {
        this.collider = this.getComponentByType(TYPE_BOX_COLLIDER);
        this.animator = this.getComponentByType(TYPE_ANIMATOR);
        this.spriteRenderer = this.getComponentByType(TYPE_SPRITE_RENDERER);
        this.audioPlayer = this.getComponentByType(TYPE_AUDIO_PLAYER);

        this.gameObject.transform.position = respawnPosition;
        this.animator.playAnimation("Fly");
    }

    protected update(): void {
        this.getHit();
        this.respawn();
        this.getInvulnerable();
    }

    private getHit(): void {
        if (this.alive && this.invulnerable === false && this.collider.collidesWithLayer("Enemy")) {
            this.alive = false;
            this.animator.playAnimation("Explosion");
            this.audioPlayer.playAudio(this.explosionAudio, 0.4);
            this.lifes -= 1;

            if (this.lifes > 0) {
                this.respawning = true;
            }
        }
    }

    private respawn(): void {
        if (this.respawning === false) return;

        if (this.respawnTimer < respawnDelay) {
            this.respawnTimer += TimeManager.deltaTime;
        } else {
            this.respawning = false;
            this.respawnTimer = 0;

            this.getAlive();
        }
    }

    private getAlive(): void {
        this.alive = true;
        this.invulnerable = true;
        this.gameObject.transform.position = respawnPosition;
        this.animator.playAnimation("Fly");
    }

    private getInvulnerable() {
        if (this.invulnerable === false) return;

        this.invulnerabilityTimer += TimeManager.deltaTime;

        if (this.invulnerabilityTimer < invulnerabilityPeriod) {
            this.spriteRenderer.opacity = 0.5;
        } else {
            this.spriteRenderer.opacity = 1;
            this.invulnerable = false;
            this.invulnerabilityTimer = 0;
        }
    }
}
