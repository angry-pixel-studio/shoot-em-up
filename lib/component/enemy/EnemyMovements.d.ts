import { Component } from "angry-pixel";
export declare class EnemyMovements extends Component {
    private readonly speed;
    private readonly zigzag;
    private direction;
    private velocity;
    private position;
    constructor(speed: number, zigzag?: boolean);
    protected start(): void;
    protected update(): void;
    private applyZigzag;
}
