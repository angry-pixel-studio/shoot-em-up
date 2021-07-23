(() => {
    "use strict";
    var t,
        e,
        i,
        n,
        r,
        o,
        a = {
            467: (t, e, i) => {
                i.r(e),
                    i.d(e, {
                        Animation: () => kt,
                        Animator: () => xe,
                        AssetManager: () => dt,
                        AudioPlayer: () => Me,
                        BoxCollider: () => Zt,
                        Camera: () => It,
                        ColliderComponent: () => Rt,
                        CollisionData: () => ot,
                        CollisionMethodConfig: () => X,
                        Component: () => Pt,
                        Context2DConfig: () => Q,
                        CsvTilemapRenderer: () => ve,
                        DomManager: () => ft,
                        EngineComponent: () => Ct,
                        GAME_CAMERA_ID: () => Ut,
                        Game: () => Mt,
                        GameCamera: () => Lt,
                        GameObject: () => Bt,
                        GameObjectManager: () => vt,
                        GamepadController: () => C,
                        GamepadData: () => R,
                        InputManager: () => mt,
                        KeyboardController: () => T,
                        LAYER_DEFAULT: () => Dt,
                        MouseController: () => A,
                        PhysicsComponent: () => St,
                        Rectangle: () => r,
                        RenderComponent: () => Tt,
                        RigidBody: () => Pe,
                        RigidBodyType: () => wt,
                        Scene: () => Nt,
                        SceneManager: () => gt,
                        SpacePointer: () => Ce,
                        Sprite: () => Ht,
                        SpriteRenderer: () => re,
                        TYPE_ANIMATOR: () => be,
                        TYPE_AUDIO_PLAYER: () => Oe,
                        TYPE_BOX_COLLIDER: () => Kt,
                        TYPE_CAMERA: () => Ft,
                        TYPE_RIGIDBODY: () => je,
                        TYPE_SPRITE_RENDERER: () => ne,
                        TYPE_TEXT_RENDERER: () => ae,
                        TYPE_TILED_RENDERER: () => pe,
                        TYPE_TILEMAP_COLLIDER: () => Jt,
                        TYPE_TILEMAP_RENDERER: () => ye,
                        TYPE_TRANSFORM: () => At,
                        TextRenderer: () => se,
                        TiledTilemapRenderer: () => de,
                        TilemapCollider: () => te,
                        Tileset: () => Wt,
                        TimeManager: () => yt,
                        TouchController: () => st,
                        Transform: () => Et,
                        Vector2: () => n,
                        clamp: () => o,
                        fixedRound: () => s,
                        random: () => a,
                        range: () => h,
                    });
                var n = (function () {
                        function t(t, e) {
                            void 0 === t && (t = 0), void 0 === e && (e = 0), (this._x = t), (this._y = e);
                        }
                        return (
                            Object.defineProperty(t.prototype, "x", {
                                get: function () {
                                    return this._x;
                                },
                                set: function (t) {
                                    this._x = t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "y", {
                                get: function () {
                                    return this._y;
                                },
                                set: function (t) {
                                    this._y = t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "magnitude", {
                                get: function () {
                                    return Math.sqrt(Math.pow(this._x, 2) + Math.pow(this._y, 2));
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.prototype.set = function (t, e) {
                                (this._x = t), (this._y = e);
                            }),
                            (t.prototype.copy = function (t) {
                                this.set(t.x, t.y);
                            }),
                            (t.prototype.equals = function (t) {
                                return this._x === t.x && this._y === t.y;
                            }),
                            (t.prototype.clone = function () {
                                return new t(this._x, this._y);
                            }),
                            (t.prototype.distance = function (t) {
                                return Math.sqrt(Math.pow(this._x - t.x, 2) + Math.pow(this._y - t.y, 2));
                            }),
                            (t.add = function (t, e, i) {
                                return t.set(e.x + i.x, e.y + i.y), t;
                            }),
                            (t.subtract = function (t, e, i) {
                                return t.set(e.x - i.x, e.y - i.y), t;
                            }),
                            (t.unit = function (t, e) {
                                return 0 === e.magnitude ? t.set(0, 0) : t.set(e.x / e.magnitude, e.y / e.magnitude), t;
                            }),
                            (t.normal = function (t, e) {
                                return t.set(-e.y, e.x), this.unit(t, t);
                            }),
                            (t.scale = function (t, e, i) {
                                return t.set(e.x * i, e.y * i), t;
                            }),
                            (t.dot = function (t, e) {
                                return t.x * e.x + t.y * e.y;
                            }),
                            (t.cross = function (t, e) {
                                return t.x * e.y - t.y * e.x;
                            }),
                            (t.round = function (t, e) {
                                return t.set(Math.round(e.x), Math.round(e.y)), t;
                            }),
                            t
                        );
                    })(),
                    r = (function () {
                        function t(t, e, i, r) {
                            (this._position = new n()),
                                (this._center = new n()),
                                (this._width = 0),
                                (this._height = 0),
                                this.set(t, e, i, r);
                        }
                        return (
                            Object.defineProperty(t.prototype, "x", {
                                get: function () {
                                    return this._position.x;
                                },
                                set: function (t) {
                                    this._position.set(t, this._position.y);
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "y", {
                                get: function () {
                                    return this._position.y;
                                },
                                set: function (t) {
                                    this._position.set(this._position.x, t);
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "x1", {
                                get: function () {
                                    return this._position.x + this._width;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "y1", {
                                get: function () {
                                    return this._position.y + this._height;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "position", {
                                get: function () {
                                    return this._position;
                                },
                                set: function (t) {
                                    this._position.set(t.x, t.y);
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "width", {
                                get: function () {
                                    return this._width;
                                },
                                set: function (t) {
                                    this._width = t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "height", {
                                get: function () {
                                    return this._height;
                                },
                                set: function (t) {
                                    this._height = t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "center", {
                                get: function () {
                                    return (
                                        this._center.set(this.x + this.width / 2, this.y + this.height / 2),
                                        this._center
                                    );
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.prototype.set = function (t, e, i, n) {
                                this._position.set(t, e), (this._width = i), (this._height = n);
                            }),
                            (t.prototype.equals = function (t) {
                                return (
                                    this.position.equals(t.position) &&
                                    this.width === t.width &&
                                    this.height === t.height
                                );
                            }),
                            (t.prototype.updateFromRect = function (t) {
                                this.set(t.x, t.y, t.width, t.height);
                            }),
                            (t.prototype.overlappingRectangle = function (t) {
                                return this.x1 >= t.x && this.x <= t.x1 && this.y1 >= t.y && this.y <= t.y1;
                            }),
                            t
                        );
                    })(),
                    o = function (t, e, i) {
                        return Math.min(i, Math.max(e, t));
                    },
                    a = function (t, e) {
                        return Math.floor(Math.random() * (e - t)) + t;
                    },
                    s = function (t, e) {
                        return Math.round(t * (10 ^ e)) / (10 ^ e);
                    },
                    h = function (t, e, i) {
                        void 0 === i && (i = 1);
                        for (var n = [], r = t; r <= e; r += i) n.push(r);
                        return n;
                    },
                    c = function (t, e) {
                        return (c =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                            })(t, e);
                    };
                function u(t, e) {
                    function i() {
                        this.constructor = t;
                    }
                    c(t, e), (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                }
                var l,
                    p = function () {
                        return (p =
                            Object.assign ||
                            function (t) {
                                for (var e, i = 1, n = arguments.length; i < n; i++)
                                    for (var r in (e = arguments[i]))
                                        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t;
                            }).apply(this, arguments);
                    };
                function d(t, e, i, n) {
                    return new (i || (i = Promise))(function (r, o) {
                        function a(t) {
                            try {
                                h(n.next(t));
                            } catch (t) {
                                o(t);
                            }
                        }
                        function s(t) {
                            try {
                                h(n.throw(t));
                            } catch (t) {
                                o(t);
                            }
                        }
                        function h(t) {
                            var e;
                            t.done
                                ? r(t.value)
                                : ((e = t.value),
                                  e instanceof i
                                      ? e
                                      : new i(function (t) {
                                            t(e);
                                        })).then(a, s);
                        }
                        h((n = n.apply(t, e || [])).next());
                    });
                }
                function f(t, e) {
                    var i,
                        n,
                        r,
                        o,
                        a = {
                            label: 0,
                            sent: function () {
                                if (1 & r[0]) throw r[1];
                                return r[1];
                            },
                            trys: [],
                            ops: [],
                        };
                    return (
                        (o = { next: s(0), throw: s(1), return: s(2) }),
                        "function" == typeof Symbol &&
                            (o[Symbol.iterator] = function () {
                                return this;
                            }),
                        o
                    );
                    function s(o) {
                        return function (s) {
                            return (function (o) {
                                if (i) throw new TypeError("Generator is already executing.");
                                for (; a; )
                                    try {
                                        if (
                                            ((i = 1),
                                            n &&
                                                (r =
                                                    2 & o[0]
                                                        ? n.return
                                                        : o[0]
                                                        ? n.throw || ((r = n.return) && r.call(n), 0)
                                                        : n.next) &&
                                                !(r = r.call(n, o[1])).done)
                                        )
                                            return r;
                                        switch (((n = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                                            case 0:
                                            case 1:
                                                r = o;
                                                break;
                                            case 4:
                                                return a.label++, { value: o[1], done: !1 };
                                            case 5:
                                                a.label++, (n = o[1]), (o = [0]);
                                                continue;
                                            case 7:
                                                (o = a.ops.pop()), a.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(
                                                        (r = (r = a.trys).length > 0 && r[r.length - 1]) ||
                                                        (6 !== o[0] && 2 !== o[0])
                                                    )
                                                ) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === o[0] && (!r || (o[1] > r[0] && o[1] < r[3]))) {
                                                    a.label = o[1];
                                                    break;
                                                }
                                                if (6 === o[0] && a.label < r[1]) {
                                                    (a.label = r[1]), (r = o);
                                                    break;
                                                }
                                                if (r && a.label < r[2]) {
                                                    (a.label = r[2]), a.ops.push(o);
                                                    break;
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        o = e.call(t, a);
                                    } catch (t) {
                                        (o = [6, t]), (n = 0);
                                    } finally {
                                        i = r = 0;
                                    }
                                if (5 & o[0]) throw o[1];
                                return { value: o[0] ? o[1] : void 0, done: !0 };
                            })([o, s]);
                        };
                    }
                }
                function m() {
                    for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                    var n = Array(t),
                        r = 0;
                    for (e = 0; e < i; e++)
                        for (var o = arguments[e], a = 0, s = o.length; a < s; a++, r++) n[r] = o[a];
                    return n;
                }
                !(function (t) {
                    (t.Image = "Image"), (t.Audio = "Audio"), (t.Video = "Video");
                })(l || (l = {}));
                var g,
                    y = function () {
                        (this.type = null), (this.url = null), (this.loaded = !1), (this.element = null);
                    },
                    v = (function () {
                        function t() {
                            this.assets = [];
                        }
                        return (
                            (t.prototype.getAssetsLoaded = function () {
                                return this.assets.reduce(function (t, e) {
                                    return t && e.loaded;
                                }, !0);
                            }),
                            (t.prototype.createImage = function (t) {
                                var e = this.createAsset(t, l.Image);
                                return (
                                    (e.element = new Image()),
                                    (e.element.src = t),
                                    e.element.naturalWidth
                                        ? (e.loaded = !0)
                                        : e.element.addEventListener("load", function () {
                                              return (e.loaded = !0);
                                          }),
                                    e.element
                                );
                            }),
                            (t.prototype.createAudio = function (t) {
                                var e = this.createAsset(t, l.Audio);
                                return (
                                    (e.element = new Audio()),
                                    (e.element.src = t),
                                    e.element.duration
                                        ? (e.loaded = !0)
                                        : e.element.addEventListener("canplaythrough", function () {
                                              return (e.loaded = !0);
                                          }),
                                    e.element
                                );
                            }),
                            (t.prototype.createVideo = function (t) {
                                var e = this.createAsset(t, l.Video);
                                return (
                                    (e.element = document.createElement("video")),
                                    (e.element.src = t),
                                    e.element.duration
                                        ? (e.loaded = !0)
                                        : e.element.addEventListener("canplaythrough", function () {
                                              return (e.loaded = !0);
                                          }),
                                    e.element
                                );
                            }),
                            (t.prototype.getImage = function (t) {
                                return this.getAsset(t, l.Image);
                            }),
                            (t.prototype.getVideo = function (t) {
                                return this.getAsset(t, l.Video);
                            }),
                            (t.prototype.getAudio = function (t) {
                                return this.getAsset(t, l.Audio);
                            }),
                            (t.prototype.getAsset = function (t, e) {
                                return (
                                    void 0 === e && (e = null),
                                    this.assets.reduce(function (i, n) {
                                        return n.url !== t || (null !== e && e !== n.type) ? i : n;
                                    }, null).element
                                );
                            }),
                            (t.prototype.createAsset = function (t, e) {
                                var i = new y();
                                return (i.type = e), (i.url = t), this.assets.push(i), i;
                            }),
                            t
                        );
                    })();
                !(function (t) {
                    (t[(t.Image = 0)] = "Image"),
                        (t[(t.Text = 1)] = "Text"),
                        (t[(t.Geometric = 2)] = "Geometric"),
                        (t[(t.Collider = 3)] = "Collider"),
                        (t[(t.Tilemap = 4)] = "Tilemap");
                })(g || (g = {}));
                var b,
                    x = (function () {
                        function t() {
                            (this.ui = !1),
                                (this.debug = !1),
                                (this.layer = null),
                                (this._position = new n(0, 0)),
                                (this._positionInViewport = new n(0, 0));
                        }
                        return (
                            Object.defineProperty(t.prototype, "position", {
                                get: function () {
                                    return this._position;
                                },
                                set: function (t) {
                                    this._position.set(t.x, t.y);
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "positionInViewport", {
                                get: function () {
                                    return this._positionInViewport;
                                },
                                set: function (t) {
                                    this._positionInViewport.set(t.x, t.y);
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            t
                        );
                    })(),
                    _ = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e.type = g.Geometric),
                                (e.color = null),
                                (e.geometricType = null),
                                (e.geometric = null),
                                e
                            );
                        }
                        return (
                            u(e, t),
                            (e.prototype.getGeometric = function () {
                                return this.geometric;
                            }),
                            e
                        );
                    })(x),
                    w = (function (t) {
                        function e(i) {
                            var n = t.call(this, e.messagePrefix + ": " + i) || this;
                            return (n.name = "MiniEngineException"), n;
                        }
                        return u(e, t), (e.messagePrefix = "MiniEngine Exception"), e;
                    })(Error),
                    O = (function () {
                        function t(t, e, i, o) {
                            void 0 === i && (i = 6),
                                void 0 === o && (o = 15),
                                (this._bounds = new r(0, 0, 0, 0)),
                                (this._quadrants = []),
                                (this.colliders = []),
                                (this.sw = 0),
                                (this.se = 1),
                                (this.nw = 2),
                                (this.ne = 3),
                                (this.center = new n()),
                                (this.childrenWidth = 0),
                                (this.childrenHeight = 0),
                                (this.quadrantsForCollider = []),
                                (this.level = t),
                                this._bounds.updateFromRect(e),
                                (this.maxLevels = i),
                                (this.maxColliders = o),
                                this.updateCache();
                        }
                        return (
                            Object.defineProperty(t.prototype, "bounds", {
                                get: function () {
                                    return this._bounds;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "quadrants", {
                                get: function () {
                                    return this._quadrants;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.prototype.updateBounds = function (t) {
                                this._bounds.updateFromRect(t), this.updateCache();
                            }),
                            (t.prototype.clearColliders = function () {
                                (this.colliders = []),
                                    this._quadrants.forEach(function (t) {
                                        return t.clearColliders();
                                    });
                            }),
                            (t.prototype.clearQuadrants = function () {
                                this._quadrants.forEach(function (t) {
                                    return t.clearQuadrants();
                                }),
                                    (this._quadrants = []);
                            }),
                            (t.prototype.addCollider = function (t) {
                                this._quadrants.length > 0
                                    ? this.insertColliderIntoChildrenQuads(t)
                                    : (this.colliders.push(t),
                                      this.colliders.length > this.maxColliders &&
                                          this.level < this.maxLevels &&
                                          this.splitQuad());
                            }),
                            (t.prototype.retrieve = function (t) {
                                var e = [];
                                this._quadrants.length > 0 &&
                                    this.getChildrenQuadrantForCollider(t).forEach(function (i) {
                                        return e.push.apply(e, i.retrieve(t));
                                    }),
                                    e.push.apply(e, this.colliders);
                                var i = e.indexOf(t);
                                return -1 !== i && e.splice(i, 1), e;
                            }),
                            (t.prototype.splitQuad = function () {
                                var e = this;
                                this._quadrants = [
                                    new r(
                                        this.center.x - this.childrenWidth,
                                        this.center.y - this.childrenHeight,
                                        this.childrenWidth,
                                        this.childrenHeight
                                    ),
                                    new r(
                                        this.center.x,
                                        this.center.y - this.childrenHeight,
                                        this.childrenWidth,
                                        this.childrenHeight
                                    ),
                                    new r(
                                        this.center.x - this.childrenWidth,
                                        this.center.y,
                                        this.childrenWidth,
                                        this.childrenHeight
                                    ),
                                    new r(this.center.x, this.center.y, this.childrenWidth, this.childrenHeight),
                                ].map(function (i) {
                                    return new t(e.level + 1, i, e.maxLevels, e.maxColliders);
                                });
                                for (var i = 0, n = this.colliders; i < n.length; i++) {
                                    var o = n[i];
                                    this.insertColliderIntoChildrenQuads(o);
                                }
                                this.colliders = [];
                            }),
                            (t.prototype.getChildrenQuadrantForCollider = function (t) {
                                if (0 === this._quadrants.length)
                                    throw new w("Current quadrant does not have quadrant children.");
                                if (
                                    ((this.quadrantsForCollider = []),
                                    t.bottomLeftQuadVertex.x <= this.center.x &&
                                        t.bottomLeftQuadVertex.y <= this.center.y &&
                                        this.quadrantsForCollider.push(this._quadrants[this.sw]),
                                    t.bottomRightQuadVertex.x >= this.center.x &&
                                        t.bottomRightQuadVertex.y <= this.center.y &&
                                        this.quadrantsForCollider.push(this._quadrants[this.se]),
                                    t.topLeftQuadVertex.x <= this.center.x &&
                                        t.topLeftQuadVertex.y >= this.center.y &&
                                        this.quadrantsForCollider.push(this._quadrants[this.nw]),
                                    t.topRightQuadVertex.x >= this.center.x &&
                                        t.topRightQuadVertex.y >= this.center.y &&
                                        this.quadrantsForCollider.push(this._quadrants[this.ne]),
                                    0 === this.quadrantsForCollider.length)
                                )
                                    throw new w("Children does not fit in any children quadrant");
                                return this.quadrantsForCollider;
                            }),
                            (t.prototype.insertColliderIntoChildrenQuads = function (t) {
                                this.getChildrenQuadrantForCollider(t).forEach(function (e) {
                                    return e.addCollider(t);
                                });
                            }),
                            (t.prototype.updateCache = function () {
                                this.center.set(
                                    this._bounds.width / 2 + this._bounds.x,
                                    this._bounds.height / 2 + this._bounds.y
                                ),
                                    (this.childrenWidth = this._bounds.width / 2),
                                    (this.childrenHeight = this._bounds.height / 2);
                            }),
                            t
                        );
                    })(),
                    M = (function () {
                        function t(t, e, i, o, a, s) {
                            void 0 === i && (i = null),
                                void 0 === s && (s = !1),
                                (this.minBounds = new n()),
                                (this.maxBounds = new n()),
                                (this.newBounds = new r(0, 0, 0, 0)),
                                (this.fixedQuadTree = null !== i),
                                (this.resolver = t),
                                (this.debug = s),
                                (this.renderManager = e),
                                (this.colliders = []),
                                this.fixedQuadTree ? (this.bounds = i) : (this.bounds = new r(0, 0, 0, 0)),
                                (this.quadTree = new O(0, this.bounds, o, a));
                        }
                        return (
                            (t.prototype.addCollider = function (t) {
                                this.colliders.push(t);
                            }),
                            (t.prototype.removeCollider = function (t) {
                                var e = this.colliders.indexOf(t);
                                -1 !== e && (delete this.colliders[e], this.colliders.splice(e, 1));
                            }),
                            (t.prototype.getCollisionsForCollider = function (t) {
                                return -1 === this.colliders.indexOf(t) ? [] : this.narrowPhase(t, this.broadPhase(t));
                            }),
                            (t.prototype.broadPhase = function (t) {
                                return this.quadTree.retrieve(t);
                            }),
                            (t.prototype.narrowPhase = function (t, e) {
                                var i = this,
                                    n = [];
                                return (
                                    e
                                        .filter(function (e) {
                                            return e.gameObject !== t.gameObject;
                                        })
                                        .forEach(function (e) {
                                            var r = i.resolver.getCollisionData(t.shape, e.shape);
                                            null !== r &&
                                                n.push({ localCollider: t, remoteCollider: e, collisionData: r });
                                        }),
                                    n
                                );
                            }),
                            (t.prototype.update = function () {
                                if (0 !== this.colliders.length) {
                                    this.quadTree.clearColliders(),
                                        this.quadTree.clearQuadrants(),
                                        !1 === this.fixedQuadTree &&
                                            (this.updateNewBounds(),
                                            !1 === this.newBounds.equals(this.bounds) &&
                                                (this.bounds.updateFromRect(this.newBounds),
                                                this.quadTree.updateBounds(this.bounds)));
                                    for (var t = 0, e = this.colliders; t < e.length; t++) {
                                        var i = e[t];
                                        this.quadTree.addCollider(i);
                                    }
                                    this.debug && this.debugQuads(this.quadTree);
                                }
                            }),
                            (t.prototype.updateNewBounds = function () {
                                var t = this;
                                this.colliders.forEach(function (e) {
                                    t.minBounds.set(
                                        Math.min(e.bottomLeftQuadVertex.x, t.minBounds.x),
                                        Math.min(e.bottomLeftQuadVertex.y, t.minBounds.y)
                                    ),
                                        t.maxBounds.set(
                                            Math.max(e.topRightQuadVertex.x, t.maxBounds.x),
                                            Math.max(e.topRightQuadVertex.y, t.maxBounds.y)
                                        );
                                }),
                                    this.newBounds.set(
                                        this.minBounds.x,
                                        this.minBounds.y,
                                        this.maxBounds.x - this.minBounds.x,
                                        this.maxBounds.y - this.minBounds.y
                                    );
                            }),
                            (t.prototype.debugQuads = function (t) {
                                for (var e = 0, i = t.quadrants; e < i.length; e++) {
                                    var r = i[e];
                                    this.debugQuads(r);
                                }
                                if (!(t.quadrants.length > 0)) {
                                    var o = new _();
                                    (o.debug = !0),
                                        (o.position = new n(
                                            t.bounds.x + t.bounds.width / 2,
                                            t.bounds.y + t.bounds.height / 2
                                        )),
                                        (o.layer = "QuadTree"),
                                        (o.geometric = t.bounds),
                                        (o.geometricType = "Rectangle"),
                                        (o.color = "#0000FF"),
                                        this.renderManager.addRenderData(o);
                                }
                            }),
                            t
                        );
                    })(),
                    j = (function () {
                        function t(t, e, i) {
                            if (((this._canvas = null), !t)) throw new w("containerNode cannot be empty or null.");
                            (this.containerNode = t), (this.gameWidth = e), (this.gameHeight = i), this.setupCanvas();
                        }
                        return (
                            Object.defineProperty(t.prototype, "canvas", {
                                get: function () {
                                    return this._canvas;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.prototype.setupCanvas = function () {
                                (this._canvas = document.createElement("canvas")),
                                    (this._canvas.id = "miniEngineGameCanvas"),
                                    (this._canvas.width = Math.floor(this.gameWidth)),
                                    (this._canvas.height = Math.floor(this.gameHeight)),
                                    (this.canvas.tabIndex = 0),
                                    this._canvas.addEventListener("contextmenu", function (t) {
                                        return t.preventDefault();
                                    }),
                                    this.containerNode.appendChild(this._canvas),
                                    this.canvas.focus();
                            }),
                            t
                        );
                    })(),
                    P = (function () {
                        function t() {
                            this.gameObjects = [];
                        }
                        return (
                            (t.prototype.addGameObject = function (t, e, i) {
                                if ((void 0 === i && (i = null), this.findGameObjectByName(e)))
                                    throw new w("There is already a GameObject with the name " + e);
                                var n = t();
                                return (n.name = e), (n.parent = i), this.gameObjects.push(n), n;
                            }),
                            (t.prototype.getGameObjects = function () {
                                return this.gameObjects;
                            }),
                            (t.prototype.findGameObjectById = function (t) {
                                return this.gameObjects.reduce(function (e, i) {
                                    return i.id === t ? i : e;
                                }, null);
                            }),
                            (t.prototype.findGameObjectByName = function (t) {
                                return this.gameObjects.reduce(function (e, i) {
                                    return i.name === t ? i : e;
                                }, null);
                            }),
                            (t.prototype.findGameObjectsByParent = function (t) {
                                return this.gameObjects.filter(function (e) {
                                    return e.parent === t;
                                });
                            }),
                            (t.prototype.findGameObjectByParentAndName = function (t, e) {
                                return this.gameObjects.reduce(function (i, n) {
                                    return n.name === e && n.parent === t ? n : i;
                                }, null);
                            }),
                            (t.prototype.findGameObjectsByTag = function (t) {
                                return this.gameObjects.filter(function (e) {
                                    return e.tag === t;
                                });
                            }),
                            (t.prototype.findGameObjectByTag = function (t) {
                                var e;
                                return null !== (e = this.findGameObjectsByTag(t)[0]) && void 0 !== e ? e : null;
                            }),
                            (t.prototype.destroyAllGameObjects = function () {
                                var t = this;
                                this.gameObjects.forEach(function (e) {
                                    return t._destroyGameObject(e, !1);
                                }),
                                    (this.gameObjects = []);
                            }),
                            (t.prototype.destroyGameObject = function (t) {
                                this._destroyGameObject(t, !0);
                            }),
                            (t.prototype._destroyGameObject = function (t, e) {
                                var i = this.gameObjects.indexOf(t);
                                -1 !== i && (e && this.destroyChildren(t), t.destroy(), delete this.gameObjects[i]);
                            }),
                            (t.prototype.destroyChildren = function (t) {
                                var e = this;
                                this.findGameObjectsByParent(t).forEach(function (t) {
                                    e.destroyChildren(t), e.destroyGameObject(t);
                                });
                            }),
                            t
                        );
                    })(),
                    C = (function () {
                        function t() {
                            var t = this;
                            (this.gamepads = new Map()),
                                (this.eventHandler = function (e) {
                                    "gamepadconnected" === e.type
                                        ? t.gamepadConnected(e.gamepad)
                                        : "gamepaddisconnected" === e.type && t.gamepadDisconected(e.gamepad);
                                }),
                                window.addEventListener("gamepadconnected", this.eventHandler),
                                window.addEventListener("gamepaddisconnected", this.eventHandler),
                                window.addEventListener(xt, function () {
                                    return t.update();
                                });
                        }
                        return (
                            (t.prototype.getGamepad = function (t) {
                                var e;
                                return null !== (e = this.gamepads.get(t)) && void 0 !== e ? e : null;
                            }),
                            (t.prototype.gamepadConnected = function (t) {
                                this.gamepads.set(t.index, new R()), this.gamepads.get(t.index).updateFromGamepad(t);
                            }),
                            (t.prototype.gamepadDisconected = function (t) {
                                this.gamepads.delete(t.index);
                            }),
                            (t.prototype.update = function () {
                                for (var t = 0, e = navigator.getGamepads(); t < e.length; t++) {
                                    var i = e[t];
                                    null !== i &&
                                        (!1 === this.gamepads.has(i.index) && this.gamepadConnected(i),
                                        this.gamepads.get(i.index).updateFromGamepad(i));
                                }
                            }),
                            t
                        );
                    })(),
                    R = (function () {
                        function t() {
                            (this._connected = !1),
                                (this._id = null),
                                (this.buttons = new Map()),
                                (this.axes = new Map());
                        }
                        return (
                            (t.prototype.updateFromGamepad = function (t) {
                                var e = this;
                                (this._id = t.id),
                                    (this._connected = t.connected),
                                    t.buttons.forEach(function (t, i) {
                                        return e.buttons.set(i, t.pressed);
                                    }),
                                    t.axes.forEach(function (t, i) {
                                        return e.axes.set(i, t);
                                    });
                            }),
                            (t.prototype.getButtonPressed = function (t) {
                                return this.buttons.get(t);
                            }),
                            (t.prototype.getAxis = function (t) {
                                return this.axes.get(t);
                            }),
                            Object.defineProperty(t.prototype, "connected", {
                                get: function () {
                                    return this._connected;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "id", {
                                get: function () {
                                    return this._id;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "dpadUp", {
                                get: function () {
                                    var t;
                                    return null !== (t = this.buttons.get(12)) && void 0 !== t && t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "dpadDown", {
                                get: function () {
                                    var t;
                                    return null !== (t = this.buttons.get(13)) && void 0 !== t && t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "dpadLeft", {
                                get: function () {
                                    var t;
                                    return null !== (t = this.buttons.get(14)) && void 0 !== t && t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "dpadRight", {
                                get: function () {
                                    var t;
                                    return null !== (t = this.buttons.get(15)) && void 0 !== t && t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "bottomFace", {
                                get: function () {
                                    var t;
                                    return null !== (t = this.buttons.get(0)) && void 0 !== t && t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "rightFace", {
                                get: function () {
                                    var t;
                                    return null !== (t = this.buttons.get(1)) && void 0 !== t && t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "leftFace", {
                                get: function () {
                                    var t;
                                    return null !== (t = this.buttons.get(2)) && void 0 !== t && t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "topFace", {
                                get: function () {
                                    var t;
                                    return null !== (t = this.buttons.get(3)) && void 0 !== t && t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "leftShoulder", {
                                get: function () {
                                    var t;
                                    return null !== (t = this.buttons.get(4)) && void 0 !== t && t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "rightShoulder", {
                                get: function () {
                                    var t;
                                    return null !== (t = this.buttons.get(5)) && void 0 !== t && t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "leftTrigger", {
                                get: function () {
                                    var t;
                                    return null !== (t = this.buttons.get(6)) && void 0 !== t && t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "rightTrigger", {
                                get: function () {
                                    var t;
                                    return null !== (t = this.buttons.get(7)) && void 0 !== t && t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "back", {
                                get: function () {
                                    var t;
                                    return null !== (t = this.buttons.get(8)) && void 0 !== t && t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "start", {
                                get: function () {
                                    var t;
                                    return null !== (t = this.buttons.get(9)) && void 0 !== t && t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "leftStickButton", {
                                get: function () {
                                    var t;
                                    return null !== (t = this.buttons.get(10)) && void 0 !== t && t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "rightStickButton", {
                                get: function () {
                                    var t;
                                    return null !== (t = this.buttons.get(11)) && void 0 !== t && t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "leftStickHorizontal", {
                                get: function () {
                                    var t;
                                    return null !== (t = this.axes.get(0)) && void 0 !== t ? t : 0;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "leftStickVertical", {
                                get: function () {
                                    var t;
                                    return null !== (t = -this.axes.get(1)) && void 0 !== t ? t : 0;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "rightStickHorizontal", {
                                get: function () {
                                    var t;
                                    return null !== (t = this.axes.get(2)) && void 0 !== t ? t : 0;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "rightStickVertical", {
                                get: function () {
                                    var t;
                                    return null !== (t = -this.axes.get(3)) && void 0 !== t ? t : 0;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            t
                        );
                    })(),
                    S = function (t, e, i, n) {
                        (this.mouse = t), (this.keyboard = e), (this.gamepad = i), (this.touch = n);
                    },
                    T = (function () {
                        function t(t) {
                            var e = this;
                            (this.keyPresses = new Map()),
                                (this.eventHandler = function (t) {
                                    "keydown" === t.type && e.keyPresses.set(t.code, !0),
                                        "keyup" === t.type && e.keyPresses.set(t.code, !1);
                                }),
                                (this.canvas = t),
                                this.canvas.addEventListener("keydown", this.eventHandler),
                                this.canvas.addEventListener("keyup", this.eventHandler);
                        }
                        return (
                            (t.prototype.isPressed = function (t) {
                                var e;
                                return null !== (e = this.keyPresses.get(t)) && void 0 !== e && e;
                            }),
                            t
                        );
                    })(),
                    A = (function () {
                        function t(t) {
                            (this._leftButtonPressed = !1),
                                (this._scrollButtonPressed = !1),
                                (this._rightButtonPressed = !1),
                                (this._positionInViewport = new n(0, 0)),
                                (this._hasMoved = !1),
                                (this.lastPositionInViewport = new n(0, 0)),
                                (this.canvas = t),
                                this.setup();
                        }
                        return (
                            Object.defineProperty(t.prototype, "leftButtonPressed", {
                                get: function () {
                                    return this._leftButtonPressed;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "scrollButtonPressed", {
                                get: function () {
                                    return this._scrollButtonPressed;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "rightButtonPressed", {
                                get: function () {
                                    return this._rightButtonPressed;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "positionInViewport", {
                                get: function () {
                                    return this._positionInViewport;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "hasMoved", {
                                get: function () {
                                    return this._hasMoved;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.prototype.setup = function () {
                                var t = this;
                                this.canvas.addEventListener("mousemove", function (e) {
                                    return t.updatePosition(e);
                                }),
                                    this.canvas.addEventListener("mousedown", function (e) {
                                        return t.updateButtonDown(e);
                                    }),
                                    this.canvas.addEventListener("mouseup", function (e) {
                                        return t.updateButtonUp(e);
                                    }),
                                    window.addEventListener(xt, function () {
                                        return t.update();
                                    });
                            }),
                            (t.prototype.updateButtonDown = function (t) {
                                this.canvas.focus(),
                                    t.preventDefault(),
                                    t.stopPropagation(),
                                    (this._leftButtonPressed = 0 === t.button),
                                    (this._scrollButtonPressed = 1 === t.button),
                                    (this._rightButtonPressed = 2 === t.button);
                            }),
                            (t.prototype.updateButtonUp = function (t) {
                                t.preventDefault(),
                                    t.stopPropagation(),
                                    (this._leftButtonPressed = 0 !== t.button && this._leftButtonPressed),
                                    (this._scrollButtonPressed = 1 !== t.button && this._scrollButtonPressed),
                                    (this._rightButtonPressed = 2 !== t.button && this._rightButtonPressed);
                            }),
                            (t.prototype.updatePosition = function (t) {
                                t.preventDefault(),
                                    t.stopPropagation(),
                                    this._positionInViewport.set(
                                        t.offsetX / (this.canvas.clientWidth / this.canvas.width) -
                                            this.canvas.width / 2,
                                        -t.offsetY / (this.canvas.clientHeight / this.canvas.height) +
                                            this.canvas.height / 2
                                    );
                            }),
                            (t.prototype.update = function () {
                                this._positionInViewport.x !== this.lastPositionInViewport.x ||
                                this._positionInViewport.y !== this.lastPositionInViewport.y
                                    ? ((this._hasMoved = !0),
                                      this.lastPositionInViewport.set(
                                          this._positionInViewport.x,
                                          this._positionInViewport.y
                                      ))
                                    : (this._hasMoved = !1);
                            }),
                            t
                        );
                    })();
                !(function (t) {
                    t[(t.Rectangle = 0)] = "Rectangle";
                })(b || (b = {}));
                var E = (function () {
                        function t() {
                            (this._model = []),
                                (this._vertices = []),
                                (this._position = new n()),
                                (this._direction = new n()),
                                (this._height = 0),
                                (this._width = 0),
                                (this._angle = 0);
                        }
                        return (
                            Object.defineProperty(t.prototype, "type", {
                                get: function () {
                                    return this._type;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "position", {
                                get: function () {
                                    return this._position;
                                },
                                set: function (t) {
                                    this._position.set(t.x, t.y);
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "angle", {
                                get: function () {
                                    return this._angle;
                                },
                                set: function (t) {
                                    this._angle = t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "width", {
                                get: function () {
                                    return this._width;
                                },
                                set: function (t) {
                                    this._width = t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "height", {
                                get: function () {
                                    return this._height;
                                },
                                set: function (t) {
                                    this._height = t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "direction", {
                                get: function () {
                                    return this._direction;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "vertices", {
                                get: function () {
                                    return this._vertices;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            t
                        );
                    })(),
                    D = (function () {
                        function t(t) {
                            (this.canvas = null),
                                (this.canvasContext = null),
                                (this.imagePosition = new n(0, 0)),
                                (this.canvas = t),
                                (this.canvasContext = t.getContext("2d"));
                        }
                        return (
                            (t.prototype.clearCanvas = function (t) {
                                void 0 === t && (t = null),
                                    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height),
                                    null !== t &&
                                        ((this.canvasContext.fillStyle = t),
                                        this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height));
                            }),
                            (t.prototype.render = function (t, e) {
                                e.type === g.Image && this.renderImage(e, t.zoom),
                                    e.type === g.Text && this.renderText(e),
                                    e.type === g.Geometric && this.renderGeometric(e, t.zoom),
                                    e.type === g.Collider && this.renderCollider(e, t.zoom);
                            }),
                            (t.prototype.renderImage = function (t, e) {
                                this.updateRenderPosition(t),
                                    this.imagePosition.set(0, 0),
                                    this.canvasContext.save(),
                                    !0 !== t.ui &&
                                        this.canvasContext.setTransform(
                                            e,
                                            0,
                                            0,
                                            e,
                                            (this.canvas.width * (1 - e)) / 2,
                                            (this.canvas.height * (1 - e)) / 2
                                        ),
                                    t.rotation
                                        ? (this.canvasContext.translate(
                                              t.positionInViewport.x + t.width / 2,
                                              t.positionInViewport.y + t.height / 2
                                          ),
                                          this.imagePosition.set(-t.width / 2, -t.height / 2),
                                          this.canvasContext.rotate((-t.rotation * Math.PI) / 180))
                                        : (this.canvasContext.translate(t.positionInViewport.x, t.positionInViewport.y),
                                          this.imagePosition.set(
                                              t.flipHorizontal ? -t.width : this.imagePosition.x,
                                              t.flipVertical ? -t.height : this.imagePosition.y
                                          )),
                                    (this.canvasContext.imageSmoothingEnabled = t.smooth),
                                    this.canvasContext.scale(t.flipHorizontal ? -1 : 1, t.flipVertical ? -1 : 1),
                                    void 0 !== t.slice && null !== t.slice
                                        ? this.canvasContext.drawImage(
                                              t.image,
                                              t.slice.x,
                                              t.slice.y,
                                              t.slice.width,
                                              t.slice.height,
                                              this.imagePosition.x,
                                              this.imagePosition.y,
                                              t.width,
                                              t.height
                                          )
                                        : this.canvasContext.drawImage(
                                              t.image,
                                              this.imagePosition.x,
                                              this.imagePosition.y,
                                              t.width,
                                              t.height
                                          ),
                                    this.canvasContext.restore();
                            }),
                            (t.prototype.renderText = function (t) {
                                var e = this;
                                this.updateRenderPosition(t),
                                    this.canvasContext.save(),
                                    (this.canvasContext.font = t.fontSize + "px " + t.fontFamily),
                                    (this.canvasContext.fillStyle = t.color),
                                    (this.canvasContext.textBaseline = "middle"),
                                    (this.canvasContext.textAlign = t.pivot),
                                    t.text.split("\n").length > 1
                                        ? t.text.split("\n").forEach(function (i, n) {
                                              e.canvasContext.fillText(
                                                  i,
                                                  t.positionInViewport.x,
                                                  t.positionInViewport.y + (t.lineSeparation + t.fontSize) * n
                                              );
                                          })
                                        : this.canvasContext.fillText(
                                              t.text,
                                              t.positionInViewport.x,
                                              t.positionInViewport.y
                                          ),
                                    this.canvasContext.restore();
                            }),
                            (t.prototype.renderGeometric = function (t, e) {
                                this.canvasContext.save(),
                                    !0 !== t.ui &&
                                        this.canvasContext.setTransform(
                                            e,
                                            0,
                                            0,
                                            e,
                                            (this.canvas.width * (1 - e)) / 2,
                                            (this.canvas.height * (1 - e)) / 2
                                        ),
                                    this.updateRenderPosition(t),
                                    "Rectangle" === t.geometricType &&
                                        ((this.canvasContext.strokeStyle = t.color),
                                        this.canvasContext.strokeRect(
                                            t.positionInViewport.x - t.getGeometric().width / 2,
                                            t.positionInViewport.y - t.getGeometric().height / 2,
                                            t.getGeometric().width,
                                            t.getGeometric().height
                                        )),
                                    this.canvasContext.restore();
                            }),
                            (t.prototype.renderCollider = function (t, e) {
                                var i = this;
                                this.canvasContext.save(),
                                    !0 !== t.ui &&
                                        this.canvasContext.setTransform(
                                            e,
                                            0,
                                            0,
                                            e,
                                            (this.canvas.width * (1 - e)) / 2,
                                            (this.canvas.height * (1 - e)) / 2
                                        ),
                                    this.updateRenderPosition(t),
                                    this.canvasContext.beginPath(),
                                    (this.canvasContext.strokeStyle = t.color);
                                var n = t.shape.clone();
                                switch (((n.position = t.positionInViewport), n.update(), n.type)) {
                                    case b.Rectangle:
                                        this.canvasContext.moveTo(n.vertices[0].x, n.vertices[0].y),
                                            [1, 2, 3, 0].forEach(function (t) {
                                                i.canvasContext.lineTo(n.vertices[t].x, n.vertices[t].y);
                                            });
                                }
                                (this.canvasContext.strokeStyle = t.color),
                                    this.canvasContext.stroke(),
                                    this.canvasContext.closePath(),
                                    this.canvasContext.restore();
                            }),
                            (t.prototype.updateRenderPosition = function (t) {
                                t.type === g.Image && this.centerImage(t),
                                    t.positionInViewport.set(
                                        Number((t.positionInViewport.x + this.canvas.width / 2).toFixed(0)),
                                        Number((this.canvas.height / 2 - t.positionInViewport.y).toFixed(0))
                                    );
                            }),
                            (t.prototype.centerImage = function (t) {
                                t.positionInViewport.set(
                                    t.positionInViewport.x - Math.floor(t.width / 2),
                                    t.positionInViewport.y + Math.floor(t.height / 2)
                                );
                            }),
                            t
                        );
                    })(),
                    B = (function () {
                        function t(t, e, i) {
                            void 0 === i && (i = !1),
                                (this.debug = !1),
                                (this.renderData = []),
                                (this.cameraData = []),
                                (this.gameRenderer = t),
                                (this.cullingService = e),
                                (this.debug = i);
                        }
                        return (
                            (t.prototype.clearCanvas = function (t) {
                                void 0 === t && (t = null), this.gameRenderer.clearCanvas(t);
                            }),
                            (t.prototype.addRenderData = function (t) {
                                (!1 === this.debug && t.debug) || this.renderData.push(t);
                            }),
                            (t.prototype.addCameraData = function (t) {
                                this.cameraData.push(t);
                            }),
                            (t.prototype.render = function () {
                                var t = this;
                                this.cameraData
                                    .sort(function (t, e) {
                                        return t.depth - e.depth;
                                    })
                                    .forEach(function (e) {
                                        return t.renderByCamera(e);
                                    }),
                                    this.clearData();
                            }),
                            (t.prototype.clearData = function () {
                                (this.renderData = []), (this.cameraData = []);
                            }),
                            (t.prototype.renderByCamera = function (t) {
                                var e = this;
                                this.orderRendeData(t),
                                    this.cullingService.applyCulling(t, this.renderData).forEach(function (i) {
                                        e.updateFromCameraViewport(t, i), e.gameRenderer.render(t, i);
                                    });
                            }),
                            (t.prototype.orderRendeData = function (t) {
                                this.renderData.sort(function (e, i) {
                                    return t.layers.indexOf(e.layer) - t.layers.indexOf(i.layer);
                                });
                            }),
                            (t.prototype.updateFromCameraViewport = function (t, e) {
                                var i = this;
                                !0 !== e.ui
                                    ? e.type === g.Tilemap
                                        ? e.tilesToRender.forEach(function (e) {
                                              return i.setPositionInViewport(t, e);
                                          })
                                        : this.setPositionInViewport(t, e)
                                    : (e.positionInViewport = e.position);
                            }),
                            (t.prototype.setPositionInViewport = function (t, e) {
                                e.positionInViewport.set(
                                    Math.round(e.position.x - t.worldSpaceRect.x - t.worldSpaceRect.width / 2),
                                    Math.round(e.position.y - t.worldSpaceRect.y - t.worldSpaceRect.height / 2)
                                );
                            }),
                            t
                        );
                    })(),
                    G = "undefined" != typeof Float32Array ? Float32Array : Array;
                function V() {
                    var t = new G(16);
                    return (
                        G != Float32Array &&
                            ((t[1] = 0),
                            (t[2] = 0),
                            (t[3] = 0),
                            (t[4] = 0),
                            (t[6] = 0),
                            (t[7] = 0),
                            (t[8] = 0),
                            (t[9] = 0),
                            (t[11] = 0),
                            (t[12] = 0),
                            (t[13] = 0),
                            (t[14] = 0)),
                        (t[0] = 1),
                        (t[5] = 1),
                        (t[10] = 1),
                        (t[15] = 1),
                        t
                    );
                }
                function F(t) {
                    return (
                        (t[0] = 1),
                        (t[1] = 0),
                        (t[2] = 0),
                        (t[3] = 0),
                        (t[4] = 0),
                        (t[5] = 1),
                        (t[6] = 0),
                        (t[7] = 0),
                        (t[8] = 0),
                        (t[9] = 0),
                        (t[10] = 1),
                        (t[11] = 0),
                        (t[12] = 0),
                        (t[13] = 0),
                        (t[14] = 0),
                        (t[15] = 1),
                        t
                    );
                }
                function I(t, e, i) {
                    var n,
                        r,
                        o,
                        a,
                        s,
                        h,
                        c,
                        u,
                        l,
                        p,
                        d,
                        f,
                        m = i[0],
                        g = i[1],
                        y = i[2];
                    return (
                        e === t
                            ? ((t[12] = e[0] * m + e[4] * g + e[8] * y + e[12]),
                              (t[13] = e[1] * m + e[5] * g + e[9] * y + e[13]),
                              (t[14] = e[2] * m + e[6] * g + e[10] * y + e[14]),
                              (t[15] = e[3] * m + e[7] * g + e[11] * y + e[15]))
                            : ((n = e[0]),
                              (r = e[1]),
                              (o = e[2]),
                              (a = e[3]),
                              (s = e[4]),
                              (h = e[5]),
                              (c = e[6]),
                              (u = e[7]),
                              (l = e[8]),
                              (p = e[9]),
                              (d = e[10]),
                              (f = e[11]),
                              (t[0] = n),
                              (t[1] = r),
                              (t[2] = o),
                              (t[3] = a),
                              (t[4] = s),
                              (t[5] = h),
                              (t[6] = c),
                              (t[7] = u),
                              (t[8] = l),
                              (t[9] = p),
                              (t[10] = d),
                              (t[11] = f),
                              (t[12] = n * m + s * g + l * y + e[12]),
                              (t[13] = r * m + h * g + p * y + e[13]),
                              (t[14] = o * m + c * g + d * y + e[14]),
                              (t[15] = a * m + u * g + f * y + e[15])),
                        t
                    );
                }
                function L(t, e, i) {
                    var n = i[0],
                        r = i[1],
                        o = i[2];
                    return (
                        (t[0] = e[0] * n),
                        (t[1] = e[1] * n),
                        (t[2] = e[2] * n),
                        (t[3] = e[3] * n),
                        (t[4] = e[4] * r),
                        (t[5] = e[5] * r),
                        (t[6] = e[6] * r),
                        (t[7] = e[7] * r),
                        (t[8] = e[8] * o),
                        (t[9] = e[9] * o),
                        (t[10] = e[10] * o),
                        (t[11] = e[11] * o),
                        (t[12] = e[12]),
                        (t[13] = e[13]),
                        (t[14] = e[14]),
                        (t[15] = e[15]),
                        t
                    );
                }
                function U(t, e, i) {
                    var n = Math.sin(i),
                        r = Math.cos(i),
                        o = e[0],
                        a = e[1],
                        s = e[2],
                        h = e[3],
                        c = e[4],
                        u = e[5],
                        l = e[6],
                        p = e[7];
                    return (
                        e !== t &&
                            ((t[8] = e[8]),
                            (t[9] = e[9]),
                            (t[10] = e[10]),
                            (t[11] = e[11]),
                            (t[12] = e[12]),
                            (t[13] = e[13]),
                            (t[14] = e[14]),
                            (t[15] = e[15])),
                        (t[0] = o * r + c * n),
                        (t[1] = a * r + u * n),
                        (t[2] = s * r + l * n),
                        (t[3] = h * r + p * n),
                        (t[4] = c * r - o * n),
                        (t[5] = u * r - a * n),
                        (t[6] = l * r - s * n),
                        (t[7] = p * r - h * n),
                        t
                    );
                }
                function N(t, e, i, n, r, o, a) {
                    var s = 1 / (e - i),
                        h = 1 / (n - r),
                        c = 1 / (o - a);
                    return (
                        (t[0] = -2 * s),
                        (t[1] = 0),
                        (t[2] = 0),
                        (t[3] = 0),
                        (t[4] = 0),
                        (t[5] = -2 * h),
                        (t[6] = 0),
                        (t[7] = 0),
                        (t[8] = 0),
                        (t[9] = 0),
                        (t[10] = 2 * c),
                        (t[11] = 0),
                        (t[12] = (e + i) * s),
                        (t[13] = (r + n) * h),
                        (t[14] = (a + o) * c),
                        (t[15] = 1),
                        t
                    );
                }
                Math.hypot ||
                    (Math.hypot = function () {
                        for (var t = 0, e = arguments.length; e--; ) t += arguments[e] * arguments[e];
                        return Math.sqrt(t);
                    });
                var H,
                    k = function (t) {
                        var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                        return e
                            ? { r: parseInt(e[1], 16) / 256, g: parseInt(e[2], 16) / 256, b: parseInt(e[3], 16) / 256 }
                            : null;
                    },
                    z = (function () {
                        function t(t, e, i) {
                            (this.lastTexture = null),
                                (this.maskColor = null),
                                (this.gl = e.getContext(t)),
                                (this.programManager = i),
                                (this.projectionMatrix = V()),
                                (this.modelMatrix = V()),
                                (this.textureMatrix = V()),
                                (this.posVertices = new Float32Array([
                                    -0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5,
                                ])),
                                (this.texVertices = new Float32Array([0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0]));
                        }
                        return (
                            (t.prototype.render = function (t, e, i, n) {
                                "image" !== n &&
                                    (this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.programManager.positionBuffer),
                                    this.gl.bufferData(this.gl.ARRAY_BUFFER, this.posVertices, this.gl.STATIC_DRAW),
                                    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.programManager.textureBuffer),
                                    this.gl.bufferData(this.gl.ARRAY_BUFFER, this.texVertices, this.gl.STATIC_DRAW)),
                                    (this.modelMatrix = F(this.modelMatrix)),
                                    I(this.modelMatrix, this.modelMatrix, [
                                        i.positionInViewport.x,
                                        i.positionInViewport.y,
                                        0,
                                    ]),
                                    U(this.modelMatrix, this.modelMatrix, i.rotation * (Math.PI / 180)),
                                    L(this.modelMatrix, this.modelMatrix, [
                                        i.width * (i.flipHorizontal ? -1 : 1),
                                        i.height * (i.flipVertical ? -1 : 1),
                                        1,
                                    ]),
                                    (this.textureMatrix = F(this.textureMatrix)),
                                    null !== i.slice &&
                                        (I(this.textureMatrix, this.textureMatrix, [
                                            i.slice.x / i.image.naturalWidth,
                                            i.slice.y / i.image.naturalHeight,
                                            0,
                                        ]),
                                        L(this.textureMatrix, this.textureMatrix, [
                                            (i.slice.width - 0.5) / i.image.naturalWidth,
                                            (i.slice.height - 0.5) / i.image.naturalHeight,
                                            1,
                                        ])),
                                    (this.projectionMatrix = F(this.projectionMatrix)),
                                    N(this.projectionMatrix, t.x, t.x1, t.y, t.y1, -1, 1),
                                    this.gl.uniformMatrix4fv(
                                        this.programManager.projectionMatrixUniform,
                                        !1,
                                        this.projectionMatrix
                                    ),
                                    this.gl.uniformMatrix4fv(
                                        this.programManager.modelMatrixUniform,
                                        !1,
                                        this.modelMatrix
                                    ),
                                    this.gl.uniformMatrix4fv(
                                        this.programManager.textureMatrixUniform,
                                        !1,
                                        this.textureMatrix
                                    ),
                                    i.alpha < 1 ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND),
                                    (this.lastTexture === e && "image" === n) ||
                                        (this.gl.bindTexture(this.gl.TEXTURE_2D, e),
                                        this.gl.uniform1i(this.programManager.textureUniform, 0),
                                        (this.lastTexture = e)),
                                    this.gl.uniform1i(this.programManager.renderTextureUniform, 1),
                                    this.gl.uniform1f(this.programManager.alphaUniform, i.alpha),
                                    (this.maskColor = null !== i.maskColor ? k(i.maskColor) : { r: 1, g: 1, b: 1 }),
                                    this.gl.uniform4f(
                                        this.programManager.colorUniform,
                                        this.maskColor.r,
                                        this.maskColor.g,
                                        this.maskColor.b,
                                        1
                                    ),
                                    this.gl.uniform1f(this.programManager.colorMixUniform, i.maskColorMix),
                                    this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
                            }),
                            t
                        );
                    })(),
                    W = (function () {
                        function t(t) {
                            this.shaderLoader = t;
                        }
                        return (
                            (t.prototype.create = function (t, e, i) {
                                var n = t.createProgram(),
                                    r = this.shaderLoader.load(t, t.VERTEX_SHADER, e),
                                    o = this.shaderLoader.load(t, t.FRAGMENT_SHADER, i);
                                return this.link(t, n, r, o), n;
                            }),
                            (t.prototype.link = function (t, e, i, n) {
                                t.attachShader(e, i), t.attachShader(e, n), t.linkProgram(e);
                                var r = t.LINK_STATUS;
                                if (!t.getProgramParameter(e, r)) {
                                    var o = t.getProgramInfoLog(e);
                                    throw (t.deleteProgram(e), new w("Unable to initialize the Program: " + o));
                                }
                            }),
                            t
                        );
                    })(),
                    q = (function () {
                        function t() {}
                        return (
                            (t.prototype.load = function (t, e, i) {
                                var n = t.createShader(e);
                                t.shaderSource(n, i), t.compileShader(n);
                                var r = t.COMPILE_STATUS;
                                if (!t.getShaderParameter(n, r)) {
                                    var o = t.getShaderInfoLog(n);
                                    throw (t.deleteShader(n), new w("Unable to initialize the shader program: " + o));
                                }
                                return n;
                            }),
                            t
                        );
                    })(),
                    Y = (function () {
                        function t(t, e) {
                            this.gl = e.getContext(t);
                        }
                        return (
                            (t.prototype.createFromImage = function (t, e, i) {
                                var n = this;
                                return (
                                    void 0 === e && (e = !0),
                                    void 0 === i && (i = null),
                                    (i = null != i ? i : this.gl.createTexture()),
                                    t.naturalWidth
                                        ? this.create(t, i, e)
                                        : t.addEventListener("load", function () {
                                              return n.create(t, i, e);
                                          }),
                                    i
                                );
                            }),
                            (t.prototype.createFromCanvas = function (t, e, i) {
                                return (
                                    void 0 === e && (e = !0),
                                    void 0 === i && (i = null),
                                    (i = null != i ? i : this.gl.createTexture()),
                                    this.create(t, i, e),
                                    i
                                );
                            }),
                            (t.prototype.create = function (t, e, i) {
                                void 0 === i && (i = !0),
                                    this.gl.bindTexture(this.gl.TEXTURE_2D, e),
                                    this.gl.texImage2D(
                                        this.gl.TEXTURE_2D,
                                        0,
                                        this.gl.RGBA,
                                        this.gl.RGBA,
                                        this.gl.UNSIGNED_BYTE,
                                        t
                                    ),
                                    this.gl.texParameteri(
                                        this.gl.TEXTURE_2D,
                                        this.gl.TEXTURE_WRAP_S,
                                        this.gl.CLAMP_TO_EDGE
                                    ),
                                    this.gl.texParameteri(
                                        this.gl.TEXTURE_2D,
                                        this.gl.TEXTURE_WRAP_T,
                                        this.gl.CLAMP_TO_EDGE
                                    ),
                                    !1 === i
                                        ? (this.gl.texParameteri(
                                              this.gl.TEXTURE_2D,
                                              this.gl.TEXTURE_MIN_FILTER,
                                              this.gl.NEAREST
                                          ),
                                          this.gl.texParameteri(
                                              this.gl.TEXTURE_2D,
                                              this.gl.TEXTURE_MAG_FILTER,
                                              this.gl.NEAREST
                                          ))
                                        : (this.gl.texParameteri(
                                              this.gl.TEXTURE_2D,
                                              this.gl.TEXTURE_MIN_FILTER,
                                              this.gl.LINEAR
                                          ),
                                          this.gl.texParameteri(
                                              this.gl.TEXTURE_2D,
                                              this.gl.TEXTURE_MAG_FILTER,
                                              this.gl.LINEAR
                                          )),
                                    this.gl.bindTexture(this.gl.TEXTURE_2D, null);
                            }),
                            t
                        );
                    })();
                !(function (t) {
                    (t.LegacyWebGL = "webgl"), (t.WebGL2 = "webgl2");
                })(H || (H = {}));
                var Q,
                    X,
                    K = (function () {
                        function t(t, e, i, n, r, o, a, s, h) {
                            (this.fontAtlas = new Map()),
                                (this.canvas = e),
                                (this.gl = this.canvas.getContext(t)),
                                i.loadProgram(),
                                (this.textureManager = n),
                                (this.imageRenderer = o),
                                (this.tilemapRenderer = a),
                                (this.textRenderer = s),
                                (this.geometricRenderer = h),
                                (this.fontAtlasFactory = r);
                        }
                        return (
                            (t.prototype.clearCanvas = function (t) {
                                var e = k(t);
                                this.gl.clearColor(e.r, e.g, e.b, 1), this.gl.clear(this.gl.COLOR_BUFFER_BIT);
                            }),
                            (t.prototype.render = function (t, e) {
                                e.type === g.Image && (this.renderImage(t, e), (this.lastRender = "image")),
                                    e.type === g.Tilemap && (this.renderTilemap(t, e), (this.lastRender = "tilemap")),
                                    e.type === g.Text && (this.renderText(t, e), (this.lastRender = "text")),
                                    e.type === g.Collider &&
                                        (this.geometricRenderer.renderCollider(t.viewportRect, e, this.lastRender),
                                        (this.lastRender = "geometric")),
                                    e.type === g.Geometric &&
                                        (this.geometricRenderer.renderGeometric(t.viewportRect, e, this.lastRender),
                                        (this.lastRender = "geometric"));
                            }),
                            (t.prototype.renderImage = function (t, e) {
                                this.imageRenderer.render(
                                    !0 === e.ui ? t.originalViewportRect : t.viewportRect,
                                    this.textureManager.getOrCreateTextureFromImage(e.image, e.smooth),
                                    e,
                                    this.lastRender
                                );
                            }),
                            (t.prototype.renderTilemap = function (t, e) {
                                this.tilemapRenderer.render(
                                    !0 === e.ui ? t.originalViewportRect : t.viewportRect,
                                    this.textureManager.getOrCreateTextureFromImage(e.image, e.smooth),
                                    e,
                                    this.lastRender
                                );
                            }),
                            (t.prototype.renderText = function (t, e) {
                                var i = this,
                                    n = Symbol.for(e.fontFamily);
                                !1 === this.fontAtlas.has(n)
                                    ? this.fontAtlasFactory
                                          .create(e.charRanges, e.fontFamily, e.fontUrl, e.bitmapSize)
                                          .then(function (r) {
                                              i.fontAtlas.set(n, r), i.fontAtlasLoaded(r, t, e);
                                          })
                                    : this.fontAtlasLoaded(this.fontAtlas.get(n), t, e);
                            }),
                            (t.prototype.fontAtlasLoaded = function (t, e, i) {
                                this.textRenderer.render(
                                    !0 === i.ui ? e.originalViewportRect : e.viewportRect,
                                    this.textureManager.getOrCreateTextureFromCanvas(i.fontFamily, t.canvas, i.smooth),
                                    t,
                                    i,
                                    this.lastRender
                                );
                            }),
                            t
                        );
                    })(),
                    Z = (function () {
                        function t(t, e) {
                            (this.game = null),
                                (this.scenes = new Map()),
                                (this.currentScene = null),
                                (this.openingSceneName = null),
                                (this.game = t),
                                (this.renderManager = e);
                        }
                        return (
                            (t.prototype.getCurrentScene = function () {
                                return this.currentScene;
                            }),
                            (t.prototype.addScene = function (t, e, i) {
                                if ((void 0 === i && (i = !1), this.scenes.has(t)))
                                    throw new w("There is already a scene with the name '" + t + "'");
                                this.scenes.set(t, e),
                                    (!0 !== i && null !== this.openingSceneName) || (this.openingSceneName = t);
                            }),
                            (t.prototype.loadOpeningScene = function () {
                                if (null === this.openingSceneName) throw new w("There is no opening scene");
                                this.loadScene(this.openingSceneName);
                            }),
                            (t.prototype.loadScene = function (t) {
                                if (null === this.game) throw new w("Game not initialized.");
                                if (!1 === this.scenes.has(t)) throw new w("Scene with name " + t + " does not exists");
                                this.unloadCurrentScene(),
                                    (this.currentScene = this.scenes.get(t)()),
                                    (this.currentScene.name = t),
                                    (this.currentScene.game = this.game);
                            }),
                            (t.prototype.unloadCurrentScene = function () {
                                null !== this.currentScene &&
                                    (this.currentScene.destroy(),
                                    (this.currentScene = null),
                                    (this.currentSceneName = null),
                                    this.renderManager.clearData());
                            }),
                            t
                        );
                    })(),
                    $ = (function () {
                        function t(t, e) {
                            if (
                                ((this.maxGameDeltatime = 0),
                                (this.maxPhysicsDeltaTime = 0),
                                (this.timeScale = 1),
                                (this.browserDeltaTime = 0),
                                (this.unscaledGameDeltaTime = 0),
                                (this.unscaledPhysicsDeltaTime = 0),
                                (this.max = 1 / 15),
                                (this.then = 0),
                                t < 15)
                            )
                                throw new w("Game framerate cannot be less than 15");
                            if (e < 60) throw new w("Physics framerate cannot be less than 60");
                            if (e < t) throw new w("Physics framerate cannot be less than game framerate");
                            (this.maxGameDeltatime = parseFloat((1 / t).toFixed(6))),
                                (this.maxPhysicsDeltaTime = parseFloat((1 / e).toFixed(6)));
                        }
                        return (
                            (t.prototype.update = function (t) {
                                var e = 0.001 * t;
                                (this.browserDeltaTime = Math.min(Math.max(0, e - this.then), this.max)),
                                    (this.then = e);
                            }),
                            Object.defineProperty(t.prototype, "deltaTime", {
                                get: function () {
                                    return this.unscaledGameDeltaTime * this.timeScale;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "physicsDeltaTime", {
                                get: function () {
                                    return this.unscaledPhysicsDeltaTime * this.timeScale;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            t
                        );
                    })(),
                    J = (function () {
                        function t(t) {
                            (this.textures = new Map()), (this.textureFactory = t);
                        }
                        return (
                            (t.prototype.getTexture = function (t) {
                                var e;
                                return null !== (e = this.textures.get(Symbol.for(t))) && void 0 !== e ? e : null;
                            }),
                            (t.prototype.getOrCreateTextureFromImage = function (t, e) {
                                var i;
                                return (
                                    void 0 === e && (e = !0),
                                    null !== (i = this.textures.get(Symbol.for(t.src))) && void 0 !== i
                                        ? i
                                        : this.createTextureFromImage(t, e)
                                );
                            }),
                            (t.prototype.createTextureFromImage = function (t, e) {
                                void 0 === e && (e = !0);
                                var i = this.textureFactory.createFromImage(t, e);
                                return this.textures.set(Symbol.for(t.src), i), i;
                            }),
                            (t.prototype.getOrCreateTextureFromCanvas = function (t, e, i) {
                                var n;
                                return (
                                    void 0 === i && (i = !0),
                                    null !== (n = this.textures.get(Symbol.for(t))) && void 0 !== n
                                        ? n
                                        : this.createTextureFromCanvas(t, e, i)
                                );
                            }),
                            (t.prototype.createTextureFromCanvas = function (t, e, i) {
                                void 0 === i && (i = !0);
                                var n = this.textureFactory.createFromCanvas(e, i);
                                return this.textures.set(Symbol.for(t), n), n;
                            }),
                            t
                        );
                    })(),
                    tt = (function () {
                        function t(t, e, i) {
                            (this.gl = i.getContext(e)), (this.programFactory = t), (this.contextVersion = e);
                        }
                        return (
                            (t.prototype.loadProgram = function () {
                                (this.program =
                                    this.contextVersion === H.WebGL2
                                        ? this.programFactory.create(
                                              this.gl,
                                              "#version 300 es\nprecision mediump float;\n\nin vec2 positionCoords;\nin vec2 textureCoords;\n\nout vec2 texCoords;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 textureMatrix;\n\nvoid main()\n{\n    gl_Position = projectionMatrix * modelMatrix * vec4(positionCoords, 0, 1);\n    texCoords = (textureMatrix * vec4(textureCoords, 0, 1)).xy;\n}",
                                              "#version 300 es\nprecision mediump float;\n\nout vec4 fragColor;\n\nin vec2 texCoords;\n\nuniform int u_renderTexture;\nuniform sampler2D u_texImage;\nuniform float u_alpha;\nuniform vec4 u_color;\nuniform float u_colorMix;\n\nvoid main()\n{\n    if (u_renderTexture == 1) {\n        vec4 texColor = texture(u_texImage, texCoords);\n    \n        if(texColor.a < 0.0001)\n            discard;\n        \n        fragColor = mix(vec4(texColor.rgb, u_alpha), u_color, clamp(u_colorMix, 0.0, 1.0));\n    } else {\n        fragColor = u_color;\n    }\n}"
                                          )
                                        : this.programFactory.create(
                                              this.gl,
                                              "precision mediump float;\n\nattribute vec2 positionCoords;\nattribute vec2 textureCoords;\n\nvarying vec2 texCoords;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 textureMatrix;\n\nvoid main()\n{\n    gl_Position = projectionMatrix * modelMatrix * vec4(positionCoords, 0, 1);\n    texCoords = (textureMatrix * vec4(textureCoords, 0, 1)).xy;\n}",
                                              "precision mediump float;\n\nvarying vec2 texCoords;\n\nuniform int u_renderTexture;\nuniform sampler2D u_texImage;\nuniform float u_alpha;\nuniform vec4 u_color;\nuniform float u_colorMix;\n\nvoid main()\n{\n    if (u_renderTexture == 1) {\n        vec4 texColor = texture2D(u_texImage, texCoords);\n\n        if(texColor.a < 0.0001)\n            discard;\n\n        gl_FragColor = mix(vec4(texColor.rgb, u_alpha), u_color, clamp(u_colorMix, 0.0, 1.0));\n        \n    } else {\n        gl_FragColor = u_color;\n    }\n    \n}"
                                          )),
                                    (this.positionBuffer = this.gl.createBuffer()),
                                    (this.textureBuffer = this.gl.createBuffer()),
                                    (this.positionCoordsAttr = this.gl.getAttribLocation(
                                        this.program,
                                        "positionCoords"
                                    )),
                                    (this.texCoordsAttr = this.gl.getAttribLocation(this.program, "textureCoords")),
                                    (this.modelMatrixUniform = this.gl.getUniformLocation(this.program, "modelMatrix")),
                                    (this.projectionMatrixUniform = this.gl.getUniformLocation(
                                        this.program,
                                        "projectionMatrix"
                                    )),
                                    (this.textureMatrixUniform = this.gl.getUniformLocation(
                                        this.program,
                                        "textureMatrix"
                                    )),
                                    (this.textureUniform = this.gl.getUniformLocation(this.program, "u_texImage")),
                                    (this.alphaUniform = this.gl.getUniformLocation(this.program, "u_alpha")),
                                    (this.colorUniform = this.gl.getUniformLocation(this.program, "u_color")),
                                    (this.colorMixUniform = this.gl.getUniformLocation(this.program, "u_colorMix")),
                                    (this.renderTextureUniform = this.gl.getUniformLocation(
                                        this.program,
                                        "u_renderTexture"
                                    )),
                                    this.gl.useProgram(this.program),
                                    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA),
                                    this.gl.enableVertexAttribArray(this.positionCoordsAttr),
                                    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer),
                                    this.gl.vertexAttribPointer(this.positionCoordsAttr, 2, this.gl.FLOAT, !1, 0, 0),
                                    this.gl.enableVertexAttribArray(this.texCoordsAttr),
                                    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.textureBuffer),
                                    this.gl.vertexAttribPointer(this.texCoordsAttr, 2, this.gl.FLOAT, !1, 0, 0);
                            }),
                            t
                        );
                    })(),
                    et = (function () {
                        function t() {
                            this.bitmapSize = 64;
                        }
                        return (
                            (t.prototype.create = function (t, e, i, n) {
                                return (
                                    void 0 === i && (i = null),
                                    void 0 === n && (n = null),
                                    d(this, void 0, void 0, function () {
                                        var r, o, a;
                                        return f(this, function (s) {
                                            switch (s.label) {
                                                case 0:
                                                    for (
                                                        this.bitmapSize = null != n ? n : this.bitmapSize,
                                                            r = new it(e),
                                                            this.chars = [],
                                                            o = 0;
                                                        o < t.length;
                                                        o += 2
                                                    )
                                                        for (a = t[o]; a <= t[o + 1]; a++)
                                                            this.chars.push(String.fromCharCode(a));
                                                    return (
                                                        (r.canvas.width =
                                                            Math.round(Math.sqrt(this.chars.length)) * this.bitmapSize),
                                                        (r.canvas.height = r.canvas.width),
                                                        null === i ? [3, 2] : [4, this.loadFont(r, e, i)]
                                                    );
                                                case 1:
                                                    return s.sent(), [3, 3];
                                                case 2:
                                                    this.renderAtlas(r, e), (s.label = 3);
                                                case 3:
                                                    return [2, r];
                                            }
                                        });
                                    })
                                );
                            }),
                            (t.prototype.loadFont = function (t, e, i) {
                                return d(this, void 0, void 0, function () {
                                    var n, r;
                                    return f(this, function (o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, (n = new FontFace(e, "url(" + i + ")")).load()];
                                            case 1:
                                                return (
                                                    (r = o.sent()),
                                                    document.fonts.add(n),
                                                    this.renderAtlas(t, r.family),
                                                    [2]
                                                );
                                        }
                                    });
                                });
                            }),
                            (t.prototype.renderAtlas = function (t, e) {
                                var i = t.canvas.getContext("2d");
                                i.clearRect(0, 0, t.canvas.width, t.canvas.height),
                                    (i.textBaseline = "top"),
                                    (i.fillStyle = "#000"),
                                    (i.font = this.bitmapSize + "px " + e);
                                for (var n = 0, r = 0, o = 0; o < this.chars.length; o++)
                                    i.fillText(this.chars[o], n, r),
                                        t.glyphsData.set(this.chars[o], {
                                            x: n,
                                            y: r,
                                            width: this.bitmapSize,
                                            height: this.bitmapSize,
                                        }),
                                        (n += this.bitmapSize) > t.canvas.width - this.bitmapSize &&
                                            ((n = 0), (r += this.bitmapSize));
                            }),
                            t
                        );
                    })(),
                    it = function (t) {
                        (this.canvas = document.createElement("canvas")),
                            (this.glyphsData = new Map()),
                            (this.name = t);
                    },
                    nt = (function () {
                        function t(t, e, i) {
                            (this.posVertices = []),
                                (this.texVertices = []),
                                (this.posVerticesSize = new n()),
                                (this.lastTexture = null),
                                (this.maskColor = null),
                                (this.gl = e.getContext(t)),
                                (this.programManager = i),
                                (this.projectionMatrix = V()),
                                (this.modelMatrix = V()),
                                (this.textureMatrix = V());
                        }
                        return (
                            (t.prototype.render = function (t, e, i, n, r) {
                                this.generateTextVertices(i, n),
                                    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.programManager.positionBuffer),
                                    this.gl.bufferData(
                                        this.gl.ARRAY_BUFFER,
                                        new Float32Array(this.posVertices),
                                        this.gl.DYNAMIC_DRAW
                                    ),
                                    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.programManager.textureBuffer),
                                    this.gl.bufferData(
                                        this.gl.ARRAY_BUFFER,
                                        new Float32Array(this.texVertices),
                                        this.gl.DYNAMIC_DRAW
                                    ),
                                    (this.modelMatrix = F(this.modelMatrix)),
                                    I(this.modelMatrix, this.modelMatrix, [
                                        n.positionInViewport.x +
                                            ("center" === n.pivot
                                                ? -this.posVerticesSize.x / 2
                                                : "right" === n.pivot
                                                ? -this.posVerticesSize.x
                                                : 0),
                                        n.positionInViewport.y + this.posVerticesSize.y / 2,
                                        0,
                                    ]),
                                    (this.textureMatrix = F(this.textureMatrix)),
                                    L(this.textureMatrix, this.textureMatrix, [
                                        1 / i.canvas.width,
                                        1 / i.canvas.height,
                                        1,
                                    ]),
                                    (this.projectionMatrix = F(this.projectionMatrix)),
                                    N(this.projectionMatrix, t.x, t.x1, t.y, t.y1, -1, 1),
                                    this.gl.uniformMatrix4fv(
                                        this.programManager.projectionMatrixUniform,
                                        !1,
                                        this.projectionMatrix
                                    ),
                                    this.gl.uniformMatrix4fv(
                                        this.programManager.modelMatrixUniform,
                                        !1,
                                        this.modelMatrix
                                    ),
                                    this.gl.uniformMatrix4fv(
                                        this.programManager.textureMatrixUniform,
                                        !1,
                                        this.textureMatrix
                                    ),
                                    this.gl.disable(this.gl.BLEND),
                                    (this.lastTexture === e && "text" === r) ||
                                        (this.gl.bindTexture(this.gl.TEXTURE_2D, e),
                                        this.gl.uniform1i(this.programManager.textureUniform, 0),
                                        (this.lastTexture = e)),
                                    this.gl.uniform1i(this.programManager.renderTextureUniform, 1),
                                    this.gl.uniform1f(this.programManager.alphaUniform, 1),
                                    (this.maskColor = k(n.color)),
                                    this.gl.uniform4f(
                                        this.programManager.colorUniform,
                                        this.maskColor.r,
                                        this.maskColor.g,
                                        this.maskColor.b,
                                        1
                                    ),
                                    this.gl.uniform1f(this.programManager.colorMixUniform, 1),
                                    this.gl.drawArrays(this.gl.TRIANGLES, 0, this.posVertices.length / 2);
                            }),
                            (t.prototype.generateTextVertices = function (t, e) {
                                (this.posVertices = []), (this.texVertices = []);
                                for (
                                    var i = { x1: 0, y1: -e.fontSize, x2: 0, y2: 0 },
                                        n = { x1: 0, y1: 0, x2: 0, y2: 0 },
                                        r = 0,
                                        o = 1,
                                        a = 0;
                                    a < e.text.length;
                                    a++
                                ) {
                                    var s = e.text[a];
                                    if ("\n" !== s)
                                        if (" " !== s) {
                                            var h = t.glyphsData.get(s);
                                            h &&
                                                ((i.x2 = i.x1 + e.fontSize),
                                                (r = Math.max(i.x2, r)),
                                                (n.x1 = h.x + e.bitmapOffset.x),
                                                (n.y1 = h.y + e.bitmapOffset.y),
                                                (n.x2 = h.x + h.width - 1),
                                                (n.y2 = h.y + h.height - 1),
                                                this.posVertices.push(
                                                    i.x1,
                                                    i.y1,
                                                    i.x2,
                                                    i.y1,
                                                    i.x1,
                                                    i.y2,
                                                    i.x1,
                                                    i.y2,
                                                    i.x2,
                                                    i.y1,
                                                    i.x2,
                                                    i.y2
                                                ),
                                                this.texVertices.push(
                                                    n.x1,
                                                    n.y2,
                                                    n.x2,
                                                    n.y2,
                                                    n.x1,
                                                    n.y1,
                                                    n.x1,
                                                    n.y1,
                                                    n.x2,
                                                    n.y2,
                                                    n.x2,
                                                    n.y1
                                                )),
                                                (i.x1 += e.fontSize + e.letterSpacing);
                                        } else i.x1 += e.fontSize + e.letterSpacing;
                                    else
                                        (i.y1 -= e.fontSize + e.lineSeparation),
                                            (i.y2 = i.y1 + e.fontSize),
                                            (i.x1 = 0),
                                            o++;
                                }
                                this.posVerticesSize.set(r, o * e.fontSize + (o - 1) * e.lineSeparation);
                            }),
                            t
                        );
                    })(),
                    rt = (function () {
                        function t(t, e, i) {
                            (this.vertices = new Map()),
                                (this.texVertices = new Float32Array([
                                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                ])),
                                (this.lastVertices = null),
                                (this.lastRender = null),
                                (this.gl = e.getContext(t)),
                                (this.programManager = i),
                                (this.projectionMatrix = V()),
                                (this.modelMatrix = V()),
                                (this.textureMatrix = V());
                        }
                        return (
                            (t.prototype.renderCollider = function (t, e, i) {
                                (this.lastRender = i),
                                    e.shape.type === b.Rectangle &&
                                        this.renderRectangle(
                                            t,
                                            e.positionInViewport,
                                            { width: e.shape.width, height: e.shape.height },
                                            e.color,
                                            e.shape.angle
                                        );
                            }),
                            (t.prototype.renderGeometric = function (t, e, i) {
                                (this.lastRender = i),
                                    "Rectangle" === e.geometricType &&
                                        this.renderRectangle(
                                            t,
                                            e.positionInViewport,
                                            { width: e.getGeometric().width, height: e.getGeometric().height },
                                            e.color
                                        );
                            }),
                            (t.prototype.renderRectangle = function (t, e, i, n, r) {
                                void 0 === r && (r = 0);
                                var o = Symbol.for("RW" + i.width + "H" + i.height);
                                !1 === this.vertices.has(o) &&
                                    this.vertices.set(
                                        o,
                                        new Float32Array(this.generateRectangleVertices(i.width, i.height, 1))
                                    );
                                var a = this.vertices.get(o);
                                (this.lastVertices === o && "geometric" === this.lastRender) ||
                                    (this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.programManager.positionBuffer),
                                    this.gl.bufferData(this.gl.ARRAY_BUFFER, a, this.gl.DYNAMIC_DRAW)),
                                    (this.lastVertices = o),
                                    "geometric" !== this.lastRender &&
                                        (this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.programManager.textureBuffer),
                                        this.gl.bufferData(
                                            this.gl.ARRAY_BUFFER,
                                            this.texVertices,
                                            this.gl.DYNAMIC_DRAW
                                        )),
                                    (this.modelMatrix = F(this.modelMatrix)),
                                    I(this.modelMatrix, this.modelMatrix, [e.x, e.y, 0]),
                                    U(this.modelMatrix, this.modelMatrix, r),
                                    (this.projectionMatrix = F(this.projectionMatrix)),
                                    N(this.projectionMatrix, t.x, t.x1, t.y, t.y1, -1, 1),
                                    this.gl.uniformMatrix4fv(
                                        this.programManager.projectionMatrixUniform,
                                        !1,
                                        this.projectionMatrix
                                    ),
                                    this.gl.uniformMatrix4fv(
                                        this.programManager.modelMatrixUniform,
                                        !1,
                                        this.modelMatrix
                                    ),
                                    this.gl.uniformMatrix4fv(
                                        this.programManager.textureMatrixUniform,
                                        !1,
                                        this.textureMatrix
                                    ),
                                    this.gl.uniform1i(this.programManager.renderTextureUniform, 0),
                                    (this.rgbColor = k(n)),
                                    this.gl.uniform4f(
                                        this.programManager.colorUniform,
                                        this.rgbColor.r,
                                        this.rgbColor.g,
                                        this.rgbColor.b,
                                        1
                                    ),
                                    this.gl.drawArrays(this.gl.TRIANGLES, 0, a.length / 2);
                            }),
                            (t.prototype.generateRectangleVertices = function (t, e, i) {
                                var n = e / 2,
                                    r = t / 2;
                                return m(
                                    this.generateLineVertices(-r, -n, r, -n + i),
                                    this.generateLineVertices(r - i, -n, r, n),
                                    this.generateLineVertices(-r, n - i, r, n),
                                    this.generateLineVertices(-r, -n, -r + i, n)
                                );
                            }),
                            (t.prototype.generateLineVertices = function (t, e, i, n) {
                                return [t, e, i, e, t, n, t, n, i, e, i, n];
                            }),
                            t
                        );
                    })(),
                    ot = (function () {
                        function t(t, e) {
                            (this._displacementDirection = new n()),
                                (this._penetration = t),
                                this._displacementDirection.set(e.x, e.y);
                        }
                        return (
                            Object.defineProperty(t.prototype, "penetration", {
                                get: function () {
                                    return this._penetration;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "displacementDirection", {
                                get: function () {
                                    return this._displacementDirection;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            t
                        );
                    })(),
                    at = (function () {
                        function t() {
                            (this.proj1 = { min: 0, max: 0 }), (this.proj2 = { min: 0, max: 0 });
                        }
                        return (
                            (t.prototype.getCollisionData = function (t, e) {
                                (this.currentOverlap = null),
                                    (this.minOverlap = null),
                                    (this.displaceDirection = null),
                                    (this.axes = m(t.getAxes(), e.getAxes()));
                                for (var i = 0; i < this.axes.length; i++) {
                                    if (
                                        (this.projectShapeOntoAxis(this.proj1, this.axes[i], t),
                                        this.projectShapeOntoAxis(this.proj2, this.axes[i], e),
                                        (this.currentOverlap =
                                            Math.min(this.proj1.max, this.proj2.max) -
                                            Math.max(this.proj1.min, this.proj2.min)),
                                        this.currentOverlap < 0)
                                    )
                                        return null;
                                    this.preventContainment(i),
                                        (this.currentOverlap < this.minOverlap || null === this.minOverlap) &&
                                            ((this.minOverlap = this.currentOverlap),
                                            (this.displaceDirection = this.axes[i]),
                                            this.proj1.max < this.proj2.max &&
                                                n.scale(this.displaceDirection, this.displaceDirection, -1));
                                }
                                return new ot(this.minOverlap, this.displaceDirection);
                            }),
                            (t.prototype.projectShapeOntoAxis = function (t, e, i) {
                                return (
                                    (t.min = n.dot(e, i.vertices[0])),
                                    (t.max = t.min),
                                    i.vertices.forEach(function (i) {
                                        (t.min = Math.min(n.dot(e, i), t.min)), (t.max = Math.max(n.dot(e, i), t.max));
                                    }),
                                    t
                                );
                            }),
                            (t.prototype.preventContainment = function (t) {
                                if (
                                    (this.proj1.max > this.proj2.max && this.proj1.min < this.proj2.min) ||
                                    (this.proj1.max < this.proj2.max && this.proj1.min > this.proj2.min)
                                ) {
                                    var e = Math.abs(this.proj1.min - this.proj2.min),
                                        i = Math.abs(this.proj1.max - this.proj2.max);
                                    e < i
                                        ? (this.currentOverlap += e)
                                        : ((this.currentOverlap += i), n.scale(this.axes[t], this.axes[t], -1));
                                }
                            }),
                            t
                        );
                    })(),
                    st = (function () {
                        function t(t) {
                            var e = this;
                            (this._touching = !1),
                                (this._positionInViewport = new n(0, 0)),
                                (this._radius = new n(0, 0)),
                                (this.eventHandler = function (t) {
                                    "touchstart" === t.type && ((e._touching = !0), e.updatePosition(t)),
                                        "touchmove" === t.type && e.updatePosition(t),
                                        ("touchend" !== t.type && "touchcancel" !== t.type) || (e._touching = !1);
                                }),
                                (this.canvas = t),
                                this.canvas.addEventListener("touchstart", this.eventHandler),
                                this.canvas.addEventListener("touchend", this.eventHandler),
                                this.canvas.addEventListener("touchcancel", this.eventHandler),
                                this.canvas.addEventListener("touchmove", this.eventHandler);
                        }
                        return (
                            Object.defineProperty(t.prototype, "positionInViewport", {
                                get: function () {
                                    return this._positionInViewport;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "touching", {
                                get: function () {
                                    return this._touching;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "radius", {
                                get: function () {
                                    return this._radius;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.prototype.updatePosition = function (t) {
                                t.preventDefault(),
                                    t.stopPropagation(),
                                    0 !== t.targetTouches.length &&
                                        (this._positionInViewport.set(
                                            (t.targetTouches[0].clientX - this.canvas.offsetLeft) /
                                                (this.canvas.clientWidth / this.canvas.width) -
                                                this.canvas.width / 2,
                                            -(t.targetTouches[0].clientY - this.canvas.offsetTop) /
                                                (this.canvas.clientHeight / this.canvas.height) +
                                                this.canvas.height / 2
                                        ),
                                        this._radius.set(t.targetTouches[0].radiusX, t.targetTouches[0].radiusY));
                            }),
                            t
                        );
                    })(),
                    ht = (function () {
                        function t() {
                            (this.shape1Rect = new r(0, 0, 0, 0)),
                                (this.shape2Rect = new r(0, 0, 0, 0)),
                                (this.displaceDirection = new n());
                        }
                        return (
                            (t.prototype.getCollisionData = function (t, e) {
                                return (
                                    this.setShapeRect(t, this.shape1Rect),
                                    this.setShapeRect(e, this.shape2Rect),
                                    (this.overlapX =
                                        Math.min(this.shape1Rect.x1, this.shape2Rect.x1) -
                                        Math.max(this.shape1Rect.x, this.shape2Rect.x)),
                                    (this.overlapY =
                                        Math.min(this.shape1Rect.y1, this.shape2Rect.y1) -
                                        Math.max(this.shape1Rect.y, this.shape2Rect.y)),
                                    this.overlapX < 0 || this.overlapY < 0
                                        ? null
                                        : (this.overlapY < this.overlapX
                                              ? ((this.minOverlap = this.overlapY),
                                                this.displaceDirection.set(
                                                    0,
                                                    Math.sign(this.shape1Rect.y1 - this.shape2Rect.y1)
                                                ),
                                                this.preventContainment(
                                                    this.shape1Rect.y,
                                                    this.shape2Rect.y,
                                                    this.shape1Rect.y1,
                                                    this.shape2Rect.y1
                                                ))
                                              : ((this.minOverlap = this.overlapX),
                                                this.displaceDirection.set(
                                                    Math.sign(this.shape1Rect.x1 - this.shape2Rect.x1),
                                                    this.overlapY === this.overlapX
                                                        ? Math.sign(this.shape1Rect.y1 - this.shape2Rect.y1)
                                                        : 0
                                                ),
                                                this.preventContainment(
                                                    this.shape1Rect.x,
                                                    this.shape2Rect.x,
                                                    this.shape1Rect.x1,
                                                    this.shape2Rect.x1
                                                )),
                                          new ot(this.minOverlap, this.displaceDirection))
                                );
                            }),
                            (t.prototype.setShapeRect = function (t, e) {
                                e.set(t.position.x - t.width / 2, t.position.y - t.height / 2, t.width, t.height);
                            }),
                            (t.prototype.preventContainment = function (t, e, i, r) {
                                if ((t > i && e < r) || (i > t && r < e)) {
                                    var o = Math.abs(t - i),
                                        a = Math.abs(e - r);
                                    o < a
                                        ? (this.minOverlap += o)
                                        : ((this.minOverlap += a),
                                          n.scale(this.displaceDirection, this.displaceDirection, -1));
                                }
                            }),
                            t
                        );
                    })(),
                    ct = (function () {
                        function t() {}
                        return (
                            (t.prototype.applyCulling = function (t, e) {
                                var i = this;
                                return e.filter(function (e) {
                                    if (!1 === t.layers.includes(e.layer)) return !1;
                                    switch (e.type) {
                                        case g.Image:
                                            return i.cullSprite(t, e);
                                        case g.Tilemap:
                                            return i.cullTilemap(t, e);
                                        case g.Collider:
                                            return i.cullCollider(t, e);
                                        case g.Geometric:
                                            return i.cullGeometric(t, e);
                                        case g.Text:
                                            return !0;
                                    }
                                });
                            }),
                            (t.prototype.cullSprite = function (t, e) {
                                return this.isTargetVisible(t.worldSpaceRect, {
                                    x: e.position.x - e.width / 2,
                                    x1: e.position.x + e.width / 2,
                                    y: e.position.y - e.height / 2,
                                    y1: e.position.y + e.height / 2,
                                });
                            }),
                            (t.prototype.cullTilemap = function (t, e) {
                                var i = this;
                                return (
                                    (e.tilesToRender = e.tilesData.filter(function (n) {
                                        return i.isTargetVisible(t.worldSpaceRect, {
                                            x: n.position.x - e.tileWidth / 2,
                                            x1: n.position.x + e.tileWidth / 2,
                                            y: n.position.y - e.tileHeight / 2,
                                            y1: n.position.y + e.tileHeight / 2,
                                        });
                                    })),
                                    e.tilesData.length > 0
                                );
                            }),
                            (t.prototype.cullCollider = function (t, e) {
                                return this.isTargetVisible(t.worldSpaceRect, {
                                    x: e.position.x - e.shape.width / 2,
                                    x1: e.position.x + e.shape.width / 2,
                                    y: e.position.y - e.shape.height / 2,
                                    y1: e.position.y + e.shape.height / 2,
                                });
                            }),
                            (t.prototype.cullGeometric = function (t, e) {
                                return this.isTargetVisible(t.worldSpaceRect, {
                                    x: e.position.x - e.geometric.width / 2,
                                    x1: e.position.x + e.geometric.width / 2,
                                    y: e.position.y - e.geometric.height / 2,
                                    y1: e.position.y + e.geometric.height / 2,
                                });
                            }),
                            (t.prototype.isTargetVisible = function (t, e) {
                                return t.x1 >= e.x && t.x <= e.x1 && t.y1 >= e.y && t.y <= e.y1;
                            }),
                            t
                        );
                    })(),
                    ut = (function () {
                        function t(t, e, i) {
                            (this.posVertices = []),
                                (this.texVertices = []),
                                (this.lastTexture = null),
                                (this.maskColor = null),
                                (this.p = { x1: 0, y1: 0, x2: 0, y2: 0 }),
                                (this.t = { x1: 0, y1: 0, x2: 0, y2: 0 }),
                                (this.gl = e.getContext(t)),
                                (this.programManager = i),
                                (this.projectionMatrix = V()),
                                (this.modelMatrix = V()),
                                (this.textureMatrix = V());
                        }
                        return (
                            (t.prototype.render = function (t, e, i, n) {
                                this.generateVertices(i),
                                    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.programManager.positionBuffer),
                                    this.gl.bufferData(
                                        this.gl.ARRAY_BUFFER,
                                        new Float32Array(this.posVertices),
                                        this.gl.DYNAMIC_DRAW
                                    ),
                                    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.programManager.textureBuffer),
                                    this.gl.bufferData(
                                        this.gl.ARRAY_BUFFER,
                                        new Float32Array(this.texVertices),
                                        this.gl.DYNAMIC_DRAW
                                    ),
                                    (this.modelMatrix = F(this.modelMatrix)),
                                    (this.textureMatrix = F(this.textureMatrix)),
                                    L(this.textureMatrix, this.textureMatrix, [
                                        1 / i.image.naturalWidth,
                                        1 / i.image.naturalHeight,
                                        1,
                                    ]),
                                    (this.projectionMatrix = F(this.projectionMatrix)),
                                    N(this.projectionMatrix, t.x, t.x1, t.y, t.y1, -1, 1),
                                    this.gl.uniformMatrix4fv(
                                        this.programManager.projectionMatrixUniform,
                                        !1,
                                        this.projectionMatrix
                                    ),
                                    this.gl.uniformMatrix4fv(
                                        this.programManager.modelMatrixUniform,
                                        !1,
                                        this.modelMatrix
                                    ),
                                    this.gl.uniformMatrix4fv(
                                        this.programManager.textureMatrixUniform,
                                        !1,
                                        this.textureMatrix
                                    ),
                                    i.alpha < 1 ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND),
                                    (this.lastTexture === e && "tilemap" === n) ||
                                        (this.gl.bindTexture(this.gl.TEXTURE_2D, e),
                                        this.gl.uniform1i(this.programManager.textureUniform, 0),
                                        (this.lastTexture = e)),
                                    this.gl.uniform1i(this.programManager.renderTextureUniform, 1),
                                    this.gl.uniform1f(this.programManager.alphaUniform, i.alpha),
                                    (this.maskColor = { r: 1, g: 1, b: 1 }),
                                    this.gl.uniform4f(
                                        this.programManager.colorUniform,
                                        this.maskColor.r,
                                        this.maskColor.g,
                                        this.maskColor.b,
                                        1
                                    ),
                                    this.gl.uniform1f(this.programManager.colorMixUniform, 0),
                                    this.gl.drawArrays(this.gl.TRIANGLES, 0, this.posVertices.length / 2);
                            }),
                            (t.prototype.generateVertices = function (t) {
                                var e = this;
                                (this.posVertices = []),
                                    (this.texVertices = []),
                                    t.tilesToRender.forEach(function (i) {
                                        var n, r;
                                        (e.p.x1 = i.positionInViewport.x - t.tileWidth / 2),
                                            (e.p.x2 = i.positionInViewport.x + t.tileWidth / 2),
                                            (e.p.y1 = i.positionInViewport.y - t.tileHeight / 2),
                                            (e.p.y2 = i.positionInViewport.y + t.tileHeight / 2),
                                            e.posVertices.push(
                                                e.p.x1,
                                                e.p.y1,
                                                e.p.x2,
                                                e.p.y1,
                                                e.p.x1,
                                                e.p.y2,
                                                e.p.x1,
                                                e.p.y2,
                                                e.p.x2,
                                                e.p.y1,
                                                e.p.x2,
                                                e.p.y2
                                            ),
                                            (e.t.x1 = i.tile.x),
                                            (e.t.y1 = i.tile.y),
                                            (e.t.x2 =
                                                i.tile.x +
                                                i.tile.width -
                                                (null !== (n = t.textureCorrection) && void 0 !== n ? n : 0)),
                                            (e.t.y2 =
                                                i.tile.y +
                                                i.tile.height -
                                                (null !== (r = t.textureCorrection) && void 0 !== r ? r : 0)),
                                            e.texVertices.push(
                                                e.t.x1,
                                                e.t.y2,
                                                e.t.x2,
                                                e.t.y2,
                                                e.t.x1,
                                                e.t.y1,
                                                e.t.x1,
                                                e.t.y1,
                                                e.t.x2,
                                                e.t.y2,
                                                e.t.x2,
                                                e.t.y1
                                            );
                                    });
                            }),
                            t
                        );
                    })(),
                    lt = (function () {
                        function t(t) {
                            (this.gameLoopAccumulator = 0),
                                (this.physicsLoopAccumulator = 0),
                                (this.render = !1),
                                (this.deltaAux = 0),
                                (this.timeManager = t);
                        }
                        return (
                            (t.prototype.update = function (t, e, i) {
                                for (
                                    void 0 === i && (i = null),
                                        this.render = !1,
                                        this.deltaAux = Math.min(
                                            this.timeManager.browserDeltaTime,
                                            this.timeManager.maxGameDeltatime
                                        ),
                                        this.gameLoopAccumulator += this.deltaAux,
                                        this.physicsLoopAccumulator += this.timeManager.browserDeltaTime,
                                        this.timeManager.unscaledGameDeltaTime = Math.max(
                                            this.timeManager.maxGameDeltatime,
                                            this.timeManager.browserDeltaTime
                                        ),
                                        this.timeManager.unscaledPhysicsDeltaTime =
                                            this.timeManager.maxPhysicsDeltaTime,
                                        this.gameLoopAccumulator > this.timeManager.maxGameDeltatime &&
                                            (t(),
                                            (this.gameLoopAccumulator -= this.timeManager.maxGameDeltatime),
                                            (this.render = null !== i));
                                    this.physicsLoopAccumulator > this.timeManager.maxPhysicsDeltaTime;

                                )
                                    this.timeManager.timeScale > 0 && e(),
                                        (this.physicsLoopAccumulator -= this.timeManager.maxPhysicsDeltaTime);
                                i();
                            }),
                            t
                        );
                    })(),
                    pt = (function () {
                        function t() {
                            (this.instances = new Map()), (this.constructors = new Map()), (this.constants = new Map());
                        }
                        return (
                            (t.prototype.add = function (t, e) {
                                if (this.constructors.has(t))
                                    throw new w("There is already an object constructor with the name " + t);
                                this.constructors.set(t, e);
                            }),
                            (t.prototype.getSingleton = function (t) {
                                if (!1 === this.constructors.has(t))
                                    throw new w("Invalid object constructor name: " + t);
                                return (
                                    !1 === this.instances.has(t) && this.instances.set(t, this.constructors.get(t)()),
                                    this.instances.get(t)
                                );
                            }),
                            (t.prototype.getTranscient = function (t) {
                                if (!1 === this.constructors.has(t))
                                    throw new w("Invalid object constructor name: " + t);
                                return this.constructors.get(t)();
                            }),
                            (t.prototype.addConstant = function (t, e) {
                                if (this.constants.has(t))
                                    throw new w("There is already a constant value with the name " + t);
                                this.constants.set(t, e);
                            }),
                            (t.prototype.getConstant = function (t) {
                                if (!1 === this.constants.has(t)) throw new w("Invalid constant name: " + t);
                                return this.constants.get(t);
                            }),
                            t
                        );
                    })(),
                    dt = (function () {
                        function t() {}
                        return (
                            (t.initialize = function () {
                                this.assetManager = _t.getSingleton("AssetManager");
                            }),
                            (t.getAssetsLoaded = function () {
                                return this.assetManager.getAssetsLoaded();
                            }),
                            (t.createImage = function (t) {
                                return this.assetManager.createImage(t);
                            }),
                            (t.createAudio = function (t) {
                                return this.assetManager.createAudio(t);
                            }),
                            (t.getImage = function (t) {
                                return this.assetManager.getImage(t);
                            }),
                            (t.getAudio = function (t) {
                                return this.assetManager.getAudio(t);
                            }),
                            (t.assetManager = null),
                            t
                        );
                    })(),
                    ft = (function () {
                        function t() {}
                        return (
                            (t.initialize = function () {
                                this.domManager = _t.getSingleton("DomManager");
                            }),
                            Object.defineProperty(t, "gameWidth", {
                                get: function () {
                                    return this.domManager.canvas.width;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t, "gameHeight", {
                                get: function () {
                                    return this.domManager.canvas.height;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t, "canvas", {
                                get: function () {
                                    return this.domManager.canvas;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.domManager = null),
                            t
                        );
                    })(),
                    mt = (function () {
                        function t() {}
                        return (
                            (t.initialize = function () {
                                this.inputManager = _t.getSingleton("InputManager");
                            }),
                            Object.defineProperty(t, "mouse", {
                                get: function () {
                                    return this.inputManager.mouse;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t, "keyboard", {
                                get: function () {
                                    return this.inputManager.keyboard;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t, "gamepad", {
                                get: function () {
                                    return this.inputManager.gamepad;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t, "touch", {
                                get: function () {
                                    return this.inputManager.touch;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.inputManager = null),
                            t
                        );
                    })(),
                    gt = (function () {
                        function t() {}
                        return (
                            (t.initialize = function () {
                                this.sceneManager = _t.getSingleton("SceneManager");
                            }),
                            (t.loadScene = function (t) {
                                this.sceneManager.loadScene(t);
                            }),
                            (t.getCurrentSceneName = function () {
                                return this.sceneManager.currentSceneName;
                            }),
                            (t.loadOpeningScene = function () {
                                this.sceneManager.loadOpeningScene();
                            }),
                            (t.sceneManager = null),
                            t
                        );
                    })(),
                    yt = (function () {
                        function t() {}
                        return (
                            (t.initialize = function () {
                                this.timeManager = _t.getSingleton("TimeManager");
                            }),
                            Object.defineProperty(t, "deltaTime", {
                                get: function () {
                                    return this.timeManager.deltaTime;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.getTimeScale = function () {
                                return this.timeManager.timeScale;
                            }),
                            (t.setTimeScale = function (t) {
                                this.timeManager.timeScale = t;
                            }),
                            Object.defineProperty(t, "unscaledDeltaTime", {
                                get: function () {
                                    return this.timeManager.unscaledGameDeltaTime;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.timeManager = null),
                            t
                        );
                    })(),
                    vt = (function () {
                        function t() {}
                        return (
                            (t.initialize = function () {
                                this.manager = _t.getSingleton("GameObjectManager");
                            }),
                            (t.addGameObject = function (t, e, i) {
                                return void 0 === i && (i = null), this.manager.addGameObject(t, e, i);
                            }),
                            (t.getGameObjects = function () {
                                return this.manager.getGameObjects();
                            }),
                            (t.findGameObjectByName = function (t) {
                                return this.manager.findGameObjectByName(t);
                            }),
                            (t.findGameObjectsByParent = function (t) {
                                return this.manager.findGameObjectsByParent(t);
                            }),
                            (t.findGameObjectByParentAndName = function (t, e) {
                                return this.manager.findGameObjectByParentAndName(t, e);
                            }),
                            (t.findGameObjectsByTag = function (t) {
                                return this.manager.findGameObjectsByTag(t);
                            }),
                            (t.findGameObjectByTag = function (t) {
                                return this.manager.findGameObjectByTag(t);
                            }),
                            (t.destroyAllGameObjects = function () {
                                this.manager.destroyAllGameObjects();
                            }),
                            (t.destroyGameObject = function (t) {
                                this.manager.destroyGameObject(t);
                            }),
                            (t.destroyGameObjectByName = function (t) {
                                this.destroyGameObject(this.findGameObjectByName(t));
                            }),
                            t
                        );
                    })(),
                    bt = "mini-engine-start",
                    xt = "mini-engine-update",
                    _t = new pt();
                !(function (t) {
                    (t.Default = "default"), (t.Disabled = "disabled"), (t.Fallback = "fallback");
                })(Q || (Q = {})),
                    (function (t) {
                        (t.AABB = "aabb"), (t.SAT = "sat");
                    })(X || (X = {}));
                var wt,
                    Ot = {
                        containerNode: null,
                        gameWidth: 320,
                        gameHeight: 180,
                        debugEnabled: !1,
                        bgColor: "#000000",
                        context2d: Q.Fallback,
                        spriteDefaultScale: null,
                        gameFrameRate: 60,
                        physicsFramerate: 240,
                        collisions: {
                            method: X.AABB,
                            quadTreeBounds: null,
                            debugQuadTree: !1,
                            quadMaxLevel: 6,
                            collidersPerQuad: 15,
                        },
                    },
                    Mt = (function () {
                        function t(t) {
                            var e = this;
                            (this._running = !1),
                                (this._stop = !1),
                                (this.frameRequestId = null),
                                (this.errorEventHandler = function (t) {
                                    -1 !== t.error.message.indexOf(w.messagePrefix) &&
                                        (e.stop(),
                                        t.stopPropagation(),
                                        t.preventDefault(),
                                        console.error(t.error.message + "\n" + t.filename + ":" + t.lineno));
                                }),
                                (this._config = p(p({}, Ot), t)),
                                (this._config.collisions = p(p({}, Ot.collisions), t.collisions)),
                                window.addEventListener("error", this.errorEventHandler),
                                this.setupManagers(),
                                this.initializeFacades();
                        }
                        return (
                            (t.prototype.setupManagers = function () {
                                !(function (t, e) {
                                    t.addConstant("GameConfig", e.config),
                                        t.add("DomManager", function () {
                                            return new j(
                                                e.config.containerNode,
                                                e.config.gameWidth,
                                                e.config.gameHeight
                                            );
                                        });
                                    var i = t.getSingleton("DomManager");
                                    (function (t, e, i) {
                                        var n =
                                            null !== document.createElement("canvas").getContext(H.WebGL2)
                                                ? H.WebGL2
                                                : null !== document.createElement("canvas").getContext(H.LegacyWebGL)
                                                ? H.LegacyWebGL
                                                : null;
                                        if (
                                            e.config.context2d === Q.Default ||
                                            (e.config.context2d === Q.Fallback && null === n)
                                        )
                                            t.add("Renderer", function () {
                                                return new D(i.canvas);
                                            }),
                                                e.config.debugEnabled && console.log("Using 2d rendering context");
                                        else {
                                            if (null === n)
                                                throw new w("WebGL is not supported, use context2d instead.");
                                            (function (t, e, i) {
                                                e.add("ShaderLoader", function () {
                                                    return new q();
                                                }),
                                                    e.add("ProgramFactory", function () {
                                                        return new W(e.getSingleton("ShaderLoader"));
                                                    }),
                                                    e.add("ProgramManager", function () {
                                                        return new tt(e.getSingleton("ProgramFactory"), t, i.canvas);
                                                    }),
                                                    e.add("TextureFactory", function () {
                                                        return new Y(t, i.canvas);
                                                    }),
                                                    e.add("TextureManager", function () {
                                                        return new J(e.getSingleton("TextureFactory"));
                                                    }),
                                                    e.add("WebGLImageRenderer", function () {
                                                        return new z(t, i.canvas, e.getSingleton("ProgramManager"));
                                                    }),
                                                    e.add("WebGLTextRenderer", function () {
                                                        return new nt(t, i.canvas, e.getSingleton("ProgramManager"));
                                                    }),
                                                    e.add("WebGLGeometricRenderer", function () {
                                                        return new rt(t, i.canvas, e.getSingleton("ProgramManager"));
                                                    }),
                                                    e.add("WebGLTilemapRenderer", function () {
                                                        return new ut(t, i.canvas, e.getSingleton("ProgramManager"));
                                                    }),
                                                    e.add("Renderer", function () {
                                                        return new K(
                                                            t,
                                                            i.canvas,
                                                            e.getSingleton("ProgramManager"),
                                                            e.getSingleton("TextureManager"),
                                                            e.getSingleton("FontAtlasFactory"),
                                                            e.getSingleton("WebGLImageRenderer"),
                                                            e.getSingleton("WebGLTilemapRenderer"),
                                                            e.getSingleton("WebGLTextRenderer"),
                                                            e.getSingleton("WebGLGeometricRenderer")
                                                        );
                                                    });
                                            })(n, t, i),
                                                e.config.debugEnabled &&
                                                    console.log("Using WebGL rendering context (version: " + n + ")");
                                        }
                                        t.add("FontAtlasFactory", function () {
                                            return new et();
                                        }),
                                            t.add("CullingService", function () {
                                                return new ct();
                                            }),
                                            t.add("RenderManager", function () {
                                                return new B(
                                                    t.getSingleton("Renderer"),
                                                    t.getSingleton("CullingService"),
                                                    e.config.debugEnabled
                                                );
                                            });
                                    })(t, e, i),
                                        (function (t, e) {
                                            t.add("Mouse", function () {
                                                return new A(e.canvas);
                                            }),
                                                t.add("Keyboard", function () {
                                                    return new T(e.canvas);
                                                }),
                                                t.add("Gamepad", function () {
                                                    return new C();
                                                }),
                                                t.add("Touch", function () {
                                                    return new st(e.canvas);
                                                }),
                                                t.add("InputManager", function () {
                                                    return new S(
                                                        t.getSingleton("Mouse"),
                                                        t.getSingleton("Keyboard"),
                                                        t.getSingleton("Gamepad"),
                                                        t.getSingleton("Touch")
                                                    );
                                                });
                                        })(t, i),
                                        (function (t, e) {
                                            if (e.config.collisions.method === X.AABB)
                                                t.add("CollisionResolver", function () {
                                                    return new ht();
                                                });
                                            else {
                                                if (e.config.collisions.method !== X.SAT)
                                                    throw new w("Invalid collision method.");
                                                t.add("CollisionResolver", function () {
                                                    return new at();
                                                });
                                            }
                                            t.add("CollisionManager", function () {
                                                return new M(
                                                    t.getSingleton("CollisionResolver"),
                                                    t.getSingleton("RenderManager"),
                                                    e.config.collisions.quadTreeBounds,
                                                    e.config.collisions.quadMaxLevel,
                                                    e.config.collisions.collidersPerQuad,
                                                    e.config.debugEnabled && e.config.collisions.debugQuadTree
                                                );
                                            });
                                        })(t, e),
                                        t.add("SceneManager", function () {
                                            return new Z(e, t.getSingleton("RenderManager"));
                                        }),
                                        t.add("GameObjectManager", function () {
                                            return new P();
                                        }),
                                        t.add("AssetManager", function () {
                                            return new v();
                                        }),
                                        t.add("TimeManager", function () {
                                            return new $(e.config.gameFrameRate, e.config.physicsFramerate);
                                        }),
                                        t.add("GameLoopManager", function () {
                                            return new lt(t.getSingleton("TimeManager"));
                                        });
                                })(_t, this),
                                    (this.renderManager = _t.getSingleton("RenderManager")),
                                    (this.sceneManager = _t.getSingleton("SceneManager")),
                                    (this.collisionManager = _t.getSingleton("CollisionManager")),
                                    (this.timeManager = _t.getSingleton("TimeManager")),
                                    (this.gameLoopManager = _t.getSingleton("GameLoopManager"));
                            }),
                            (t.prototype.initializeFacades = function () {
                                dt.initialize(),
                                    ft.initialize(),
                                    mt.initialize(),
                                    gt.initialize(),
                                    yt.initialize(),
                                    vt.initialize();
                            }),
                            Object.defineProperty(t.prototype, "config", {
                                get: function () {
                                    return this._config;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "running", {
                                get: function () {
                                    return this._running;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.prototype.addScene = function (t, e, i) {
                                void 0 === i && (i = !1), this.sceneManager.addScene(t, e, i);
                            }),
                            (t.prototype.run = function () {
                                this.sceneManager.loadOpeningScene(), this.requestAnimationFrame();
                            }),
                            (t.prototype.stop = function () {
                                this.pauseLoop(),
                                    this.sceneManager.unloadCurrentScene(),
                                    this.renderManager.clearCanvas(this._config.bgColor);
                            }),
                            (t.prototype.gameLoop = function (t) {
                                var e = this;
                                !0 !== this._stop &&
                                    ((this._running = !0),
                                    this.timeManager.update(t),
                                    this.gameLoopManager.update(
                                        function () {
                                            e.dispatchFrameEvent(bt),
                                                e.dispatchFrameEvent(xt),
                                                e.dispatchFrameEvent("mini-engine-update-engine"),
                                                e.dispatchFrameEvent("mini-engine-update-collider"),
                                                e.collisionManager.update();
                                        },
                                        function () {
                                            e.dispatchFrameEvent("mini-engine-update-physics"),
                                                e.dispatchFrameEvent("mini-engine-update-collider");
                                        },
                                        function () {
                                            e.dispatchFrameEvent("mini-engine-update-render"),
                                                e.renderManager.clearCanvas(e._config.bgColor),
                                                e.renderManager.render();
                                        }
                                    ),
                                    this.requestAnimationFrame());
                            }),
                            (t.prototype.pauseLoop = function () {
                                (this._stop = !0),
                                    (this._running = !1),
                                    window.cancelAnimationFrame(this.frameRequestId),
                                    (this.frameRequestId = null);
                            }),
                            (t.prototype.resumeLoop = function () {
                                0 == this._running &&
                                    null === this.frameRequestId &&
                                    ((this._stop = !1), this.requestAnimationFrame());
                            }),
                            (t.prototype.requestAnimationFrame = function () {
                                var t = this;
                                this.frameRequestId = window.requestAnimationFrame(function (e) {
                                    return t.gameLoop(e);
                                });
                            }),
                            (t.prototype.dispatchFrameEvent = function (t) {
                                window.dispatchEvent(new CustomEvent(t));
                            }),
                            t
                        );
                    })(),
                    jt = function () {
                        var t = new Date().getTime(),
                            e = (performance && performance.now && 1e3 * performance.now()) || 0;
                        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (i) {
                            var n = 16 * Math.random();
                            return (
                                t > 0
                                    ? ((n = (t + n) % 16 | 0), (t = Math.floor(t / 16)))
                                    : ((n = (e + n) % 16 | 0), (e = Math.floor(e / 16))),
                                ("x" == i ? n : (7 & n) | 8).toString(16)
                            );
                        });
                    },
                    Pt = (function () {
                        function t() {
                            var t = this;
                            (this.sceneManager = _t.getSingleton("SceneManager")),
                                (this.gameObjectManager = _t.getSingleton("GameObjectManager")),
                                (this.id = jt()),
                                (this.allowMultiple = !0),
                                (this.type = null),
                                (this.name = null),
                                (this.gameObject = null),
                                (this._active = !0),
                                (this.started = !1),
                                (this.gameLoopEventHandler = function (e) {
                                    if (!1 !== t._active)
                                        try {
                                            !1 === t.started && e.type === bt
                                                ? (t.start(), (t.started = !0))
                                                : !0 === t.started && e.type === t.updateEvent && t.update();
                                        } catch (t) {
                                            throw -1 !== t.message.indexOf(w.messagePrefix) ? t : new w(t.message);
                                        }
                                }),
                                window.addEventListener(bt, this.gameLoopEventHandler),
                                window.addEventListener(this.updateEvent, this.gameLoopEventHandler);
                        }
                        return (
                            Object.defineProperty(t.prototype, "updateEvent", {
                                get: function () {
                                    return xt;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "active", {
                                get: function () {
                                    return this._active;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.prototype.setActive = function (t) {
                                this._active = t;
                            }),
                            (t.prototype.start = function () {}),
                            (t.prototype.update = function () {}),
                            (t.prototype.getCurrentScene = function () {
                                return this.sceneManager.getCurrentScene();
                            }),
                            (t.prototype.addGameObject = function (t, e) {
                                return this.gameObjectManager.addGameObject(t, e);
                            }),
                            (t.prototype.getComponentByName = function (t) {
                                return this.gameObject.getComponentByName(t);
                            }),
                            (t.prototype.getComponentByType = function (t) {
                                return this.gameObject.getComponentByType(t);
                            }),
                            (t.prototype.getComponentsByType = function (t) {
                                return this.gameObject.getComponentsByType(t);
                            }),
                            (t.prototype.findGameObjectByName = function (t) {
                                return this.gameObjectManager.findGameObjectByName(t);
                            }),
                            (t.prototype.findGameObjectsByTag = function (t) {
                                return this.gameObjectManager.findGameObjectsByTag(t);
                            }),
                            (t.prototype.findGameObjectByTag = function (t) {
                                return this.gameObjectManager.findGameObjectByTag(t);
                            }),
                            (t.prototype.destroyGameObjectByName = function (t) {
                                this.destroyGameObject(this.findGameObjectByName(t));
                            }),
                            (t.prototype.destroyGameObject = function (t) {
                                this.gameObjectManager.destroyGameObject(t);
                            }),
                            (t.prototype.hasComponentOfName = function (t) {
                                return null !== this.getComponentByName(t);
                            }),
                            (t.prototype.hasComponentOfType = function (t) {
                                return null !== this.getComponentByType(t);
                            }),
                            (t.prototype.removeComponentByName = function (t) {
                                this.gameObject.removeComponentByName(t);
                            }),
                            (t.prototype.removeComponentByType = function (t) {
                                this.gameObject.removeComponentByType(t);
                            }),
                            (t.prototype.destroy = function () {
                                var t = this;
                                window.removeEventListener(bt, this.gameLoopEventHandler),
                                    window.removeEventListener(this.updateEvent, this.gameLoopEventHandler),
                                    Object.keys(this).forEach(function (e) {
                                        return delete t[e];
                                    });
                            }),
                            t
                        );
                    })(),
                    Ct = (function (t) {
                        function e() {
                            return (null !== t && t.apply(this, arguments)) || this;
                        }
                        return (
                            u(e, t),
                            Object.defineProperty(e.prototype, "updateEvent", {
                                get: function () {
                                    return "mini-engine-update-engine";
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            e
                        );
                    })(Pt),
                    Rt = (function (t) {
                        function e() {
                            return (null !== t && t.apply(this, arguments)) || this;
                        }
                        return (
                            u(e, t),
                            Object.defineProperty(e.prototype, "updateEvent", {
                                get: function () {
                                    return "mini-engine-update-collider";
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            e
                        );
                    })(Pt),
                    St = (function (t) {
                        function e() {
                            return (null !== t && t.apply(this, arguments)) || this;
                        }
                        return (
                            u(e, t),
                            Object.defineProperty(e.prototype, "updateEvent", {
                                get: function () {
                                    return "mini-engine-update-physics";
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            e
                        );
                    })(Pt),
                    Tt = (function (t) {
                        function e() {
                            return (null !== t && t.apply(this, arguments)) || this;
                        }
                        return (
                            u(e, t),
                            Object.defineProperty(e.prototype, "updateEvent", {
                                get: function () {
                                    return "mini-engine-update-render";
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            e
                        );
                    })(Pt),
                    At = "Transform",
                    Et = (function (t) {
                        function e() {
                            var e = t.call(this) || this;
                            return (
                                (e._position = new n(0, 0)),
                                (e._innerPosition = new n(0, 0)),
                                (e._scale = new n(1, 1)),
                                (e._rotation = 0),
                                (e.parentTransform = null),
                                (e.v2 = new n()),
                                (e.allowMultiple = !1),
                                (e.type = "Transform"),
                                e
                            );
                        }
                        return (
                            u(e, t),
                            Object.defineProperty(e.prototype, "position", {
                                get: function () {
                                    return this._position;
                                },
                                set: function (t) {
                                    null !== this.parentTransform &&
                                        n.add(
                                            this._innerPosition,
                                            this._innerPosition,
                                            n.subtract(this.v2, t, this._position)
                                        ),
                                        this._position.set(t.x, t.y);
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "innerPosition", {
                                get: function () {
                                    return this._innerPosition;
                                },
                                set: function (t) {
                                    !1 === t.equals(this._innerPosition) &&
                                        (this._innerPosition.set(t.x, t.y), this.update());
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "scale", {
                                get: function () {
                                    return this._scale;
                                },
                                set: function (t) {
                                    this._scale.set(t.x, t.y);
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "rotation", {
                                get: function () {
                                    return this._rotation;
                                },
                                set: function (t) {
                                    this._rotation = t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (e.prototype.update = function () {
                                null === this.parentTransform &&
                                    null !== this.gameObject.parent &&
                                    ((this.parentTransform = this.gameObject.parent.transform),
                                    this.setInnerPositionFromParent()),
                                    null !== this.parentTransform &&
                                        null === this.gameObject.parent &&
                                        (this.parentTransform = null),
                                    null !== this.parentTransform
                                        ? this.translateFromParent()
                                        : this._innerPosition.set(this._position.x, this._position.y);
                            }),
                            (e.prototype.translateFromParent = function () {
                                if (this._innerPosition.magnitude > 0) {
                                    var t = (this.parentTransform.rotation * Math.PI) / 180,
                                        e = Math.atan2(this._innerPosition.x, this._innerPosition.y),
                                        i = Math.hypot(this._innerPosition.x, this._innerPosition.y);
                                    this._position.set(
                                        this.parentTransform.position.x + i * Math.sin(e - t),
                                        this.parentTransform.position.y + i * Math.cos(e - t)
                                    );
                                } else
                                    this._position.set(
                                        this.parentTransform.position.x,
                                        this.parentTransform.position.y
                                    );
                                this._rotation = this.parentTransform.rotation;
                            }),
                            (e.prototype.forceUpdate = function () {
                                this.update();
                            }),
                            (e.prototype.setInnerPositionFromParent = function () {
                                this._innerPosition.set(
                                    this._position.x - this.parentTransform.position.x,
                                    this._position.y - this.parentTransform.position.y
                                );
                            }),
                            e
                        );
                    })(Ct),
                    Dt = "Default",
                    Bt = (function () {
                        function t() {
                            var t = this;
                            (this.id = jt()),
                                (this.name = null),
                                (this.tag = null),
                                (this.layer = "Default"),
                                (this.ui = !1),
                                (this._active = !0),
                                (this.started = !1),
                                (this._parent = null),
                                (this.sceneManager = _t.getSingleton("SceneManager")),
                                (this.gameObjectManager = _t.getSingleton("GameObjectManager")),
                                (this.components = []),
                                (this.inactiveComponents = []),
                                (this.inactiveChildren = []),
                                (this.gameLoopEventHandler = function (e) {
                                    if (!1 !== t._active)
                                        try {
                                            !1 === t.started && e.type === bt
                                                ? (t.start(), (t.started = !0))
                                                : !0 === t.started && e.type === xt && t.update();
                                        } catch (t) {
                                            throw -1 !== t.message.indexOf(w.messagePrefix) ? t : new w(t.message);
                                        }
                                }),
                                this.addComponent(function () {
                                    return new Et();
                                }),
                                window.addEventListener(bt, this.gameLoopEventHandler),
                                window.addEventListener(xt, this.gameLoopEventHandler);
                        }
                        return (
                            Object.defineProperty(t.prototype, "transform", {
                                get: function () {
                                    return this.getComponentByType("Transform");
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "active", {
                                get: function () {
                                    return this._active;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "parent", {
                                get: function () {
                                    return this._parent;
                                },
                                set: function (t) {
                                    (this._parent = t), this.transform.forceUpdate();
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.prototype.start = function () {}),
                            (t.prototype.update = function () {}),
                            (t.prototype.getCurrentScene = function () {
                                return this.sceneManager.getCurrentScene();
                            }),
                            (t.prototype.addGameObject = function (t, e) {
                                return this.gameObjectManager.addGameObject(t, e);
                            }),
                            (t.prototype.findGameObjectByName = function (t) {
                                return this.gameObjectManager.findGameObjectByName(t);
                            }),
                            (t.prototype.findGameObjectsByTag = function (t) {
                                return this.gameObjectManager.findGameObjectsByTag(t);
                            }),
                            (t.prototype.findGameObjectByTag = function (t) {
                                return this.gameObjectManager.findGameObjectByTag(t);
                            }),
                            (t.prototype.addComponent = function (t, e) {
                                void 0 === e && (e = null);
                                var i = t();
                                return (
                                    this.checkMultipleComponent(i),
                                    (i.name = e),
                                    (i.gameObject = this),
                                    this.components.push(i),
                                    i
                                );
                            }),
                            (t.prototype.checkMultipleComponent = function (t) {
                                if (!1 === t.allowMultiple && this.hasComponentOfType(t.type))
                                    throw new w("GameObject only allows one component of type " + t.type);
                            }),
                            (t.prototype.getComponents = function () {
                                return this.components;
                            }),
                            (t.prototype.getComponentByName = function (t) {
                                return this.components.reduce(function (e, i) {
                                    return i.name === t ? i : e;
                                }, null);
                            }),
                            (t.prototype.getComponentByType = function (t) {
                                return this.components.reduce(function (e, i) {
                                    return i.type === t ? i : e;
                                }, null);
                            }),
                            (t.prototype.getComponentsByType = function (t) {
                                return this.components.filter(function (e) {
                                    return e.type === t;
                                });
                            }),
                            (t.prototype.hasComponentOfName = function (t) {
                                return null !== this.getComponentByName(t);
                            }),
                            (t.prototype.hasComponentOfType = function (t) {
                                return null !== this.getComponentByType(t);
                            }),
                            (t.prototype.removeComponentByName = function (t) {
                                var e = this;
                                this.components.every(function (i, n) {
                                    if (i.name === t) return i.destroy(), delete e.components[n], !1;
                                });
                            }),
                            (t.prototype.removeComponentByType = function (t) {
                                var e = this;
                                this.components.every(function (i, n) {
                                    if (i.type === t) return i.destroy(), delete e.components[n], !1;
                                });
                            }),
                            (t.prototype.removeComponents = function () {
                                var t = this;
                                this.components.every(function (e, i) {
                                    return e.destroy(), delete t.components[i];
                                }),
                                    (this.components = []);
                            }),
                            (t.prototype.addChild = function (t, e) {
                                return this.gameObjectManager.addGameObject(t, e, this);
                            }),
                            (t.prototype.getChildren = function () {
                                return this.gameObjectManager.findGameObjectsByParent(this);
                            }),
                            (t.prototype.getChild = function (t) {
                                return this.gameObjectManager.findGameObjectByParentAndName(this, t);
                            }),
                            (t.prototype.destroyChildren = function () {
                                var t = this;
                                this.gameObjectManager.findGameObjectsByParent(this).forEach(function (e) {
                                    return t.gameObjectManager.destroyGameObject(e);
                                });
                            }),
                            (t.prototype.setActive = function (t) {
                                var e = this;
                                !1 === t && this.updateInactiveCache(),
                                    this.components
                                        .filter(function (t) {
                                            return -1 === e.inactiveComponents.indexOf(t.id);
                                        })
                                        .forEach(function (e) {
                                            return e.setActive(t);
                                        }),
                                    this.getChildren()
                                        .filter(function (t) {
                                            return -1 === e.inactiveChildren.indexOf(t.id);
                                        })
                                        .forEach(function (e) {
                                            return e.setActive(t);
                                        }),
                                    this.transform.forceUpdate(),
                                    (this._active = t);
                            }),
                            (t.prototype.updateInactiveCache = function () {
                                var t = this;
                                (this.inactiveComponents = []),
                                    (this.inactiveChildren = []),
                                    this.components
                                        .filter(function (t) {
                                            return !1 === t.active;
                                        })
                                        .forEach(function (e) {
                                            return t.inactiveComponents.push(e.id);
                                        }),
                                    this.getChildren()
                                        .filter(function (t) {
                                            return !1 === t.active;
                                        })
                                        .forEach(function (e) {
                                            return t.inactiveChildren.push(e.id);
                                        });
                            }),
                            (t.prototype.destroyGameObjectByName = function (t) {
                                this.destroyGameObject(this.findGameObjectByName(t));
                            }),
                            (t.prototype.destroyGameObject = function (t) {
                                this.gameObjectManager.destroyGameObject(t);
                            }),
                            (t.prototype.destroy = function () {
                                var t = this;
                                window.removeEventListener(bt, this.gameLoopEventHandler),
                                    window.removeEventListener(xt, this.gameLoopEventHandler),
                                    this.removeComponents(),
                                    Object.keys(this).forEach(function (e) {
                                        return delete t[e];
                                    });
                            }),
                            t
                        );
                    })(),
                    Gt = function () {
                        (this.depth = 0),
                            (this.layers = []),
                            (this.originalViewportRect = null),
                            (this.viewportRect = null),
                            (this.worldSpaceRect = null),
                            (this.zoom = 0);
                    },
                    Vt = ["Default"],
                    Ft = "Camera",
                    It = (function (t) {
                        function e() {
                            var e = t.call(this) || this;
                            return (
                                (e.renderManager = _t.getSingleton("RenderManager")),
                                (e.domManager = _t.getSingleton("DomManager")),
                                (e._layers = Vt),
                                (e._depth = 0),
                                (e._zoom = 1),
                                (e._originalViewportRect = new r(0, 0, 0, 0)),
                                (e._viewportRect = new r(0, 0, 0, 0)),
                                (e._worldSpaceRect = new r(0, 0, 0, 0)),
                                (e.cameraData = new Gt()),
                                (e.allowMultiple = !1),
                                (e.type = "Camera"),
                                (e.canvas = e.domManager.canvas),
                                e
                            );
                        }
                        return (
                            u(e, t),
                            Object.defineProperty(e.prototype, "layers", {
                                get: function () {
                                    return this._layers;
                                },
                                set: function (t) {
                                    this._layers = m(Vt, t);
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "depth", {
                                get: function () {
                                    return this._depth;
                                },
                                set: function (t) {
                                    this._depth = t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "zoom", {
                                get: function () {
                                    return this._zoom;
                                },
                                set: function (t) {
                                    if (this.zoom <= 0) throw new w("zoom must be greather than 0");
                                    this._zoom = t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "originalViewportRect", {
                                get: function () {
                                    return this._originalViewportRect;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "worldSpaceRect", {
                                get: function () {
                                    return this._worldSpaceRect;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "viewportRect", {
                                get: function () {
                                    return this._viewportRect;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (e.prototype.addLayer = function (t) {
                                this._layers.push(t);
                            }),
                            (e.prototype.update = function () {
                                this.updateOriginalViewportRect(),
                                    this.updateViewportRect(),
                                    this.updateWorldSpaceRect(),
                                    this.updateCameraData();
                            }),
                            (e.prototype.updateOriginalViewportRect = function () {
                                (this._originalViewportRect.x = -this.canvas.width / 2),
                                    (this._originalViewportRect.y = -this.canvas.height / 2),
                                    (this._originalViewportRect.width = this.canvas.width),
                                    (this._originalViewportRect.height = this.canvas.height);
                            }),
                            (e.prototype.updateViewportRect = function () {
                                var t = 1 / this._zoom;
                                (this._viewportRect.x = this._originalViewportRect.x * t),
                                    (this._viewportRect.y = this._originalViewportRect.y * t),
                                    (this._viewportRect.width = this._originalViewportRect.width * t),
                                    (this._viewportRect.height = this._originalViewportRect.height * t);
                            }),
                            (e.prototype.updateWorldSpaceRect = function () {
                                (this._worldSpaceRect.x =
                                    this.gameObject.transform.position.x - this._viewportRect.width / 2),
                                    (this._worldSpaceRect.y =
                                        this.gameObject.transform.position.y - this._viewportRect.height / 2),
                                    (this._worldSpaceRect.width = this._viewportRect.width),
                                    (this._worldSpaceRect.height = this._viewportRect.height);
                            }),
                            (e.prototype.updateCameraData = function () {
                                (this.cameraData.depth = this._depth),
                                    (this.cameraData.layers = this._layers),
                                    (this.cameraData.originalViewportRect = this._originalViewportRect),
                                    (this.cameraData.viewportRect = this._viewportRect),
                                    (this.cameraData.worldSpaceRect = this._worldSpaceRect),
                                    (this.cameraData.zoom = this._zoom),
                                    this.renderManager.addCameraData(this.cameraData);
                            }),
                            e
                        );
                    })(Tt),
                    Lt = (function (t) {
                        function e() {
                            var e = t.call(this) || this;
                            return (
                                e.transform.position.set(0, 0),
                                (e.camera = e.addComponent(function () {
                                    return new It();
                                })),
                                e
                            );
                        }
                        return (
                            u(e, t),
                            Object.defineProperty(e.prototype, "layers", {
                                get: function () {
                                    return this.camera.layers;
                                },
                                set: function (t) {
                                    this.camera.layers = t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "depth", {
                                get: function () {
                                    return this.camera.depth;
                                },
                                set: function (t) {
                                    this.camera.depth = t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "zoom", {
                                get: function () {
                                    return this.camera.zoom;
                                },
                                set: function (t) {
                                    this.camera.zoom = t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "originalViewporRect", {
                                get: function () {
                                    return this.camera.originalViewportRect;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "worldSpaceRect", {
                                get: function () {
                                    return this.camera.worldSpaceRect;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "viewportRect", {
                                get: function () {
                                    return this.camera.viewportRect;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (e.prototype.addLayer = function (t) {
                                this.camera.layers.push(t);
                            }),
                            e
                        );
                    })(Bt),
                    Ut = "GameCamera",
                    Nt = (function () {
                        function t() {
                            var t = this;
                            (this.game = null),
                                (this.name = null),
                                (this.gameObjectManager = _t.getSingleton("GameObjectManager")),
                                (this.started = !1),
                                (this.gameLoopEventHandler = function (e) {
                                    try {
                                        !1 === t.started && e.type === bt
                                            ? (t.start(), (t.started = !0))
                                            : !0 === t.started && e.type === xt && t.update();
                                    } catch (t) {
                                        throw -1 !== t.message.indexOf(w.messagePrefix) ? t : new w(t.message);
                                    }
                                }),
                                window.addEventListener(bt, this.gameLoopEventHandler),
                                window.addEventListener(xt, this.gameLoopEventHandler),
                                this.addGameObject(function () {
                                    return new Lt();
                                }, "GameCamera"),
                                this.gameLoopEventHandler.bind(this);
                        }
                        return (
                            Object.defineProperty(t.prototype, "gameCamera", {
                                get: function () {
                                    return this.findGameObjectByName("GameCamera");
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.prototype.start = function () {}),
                            (t.prototype.update = function () {}),
                            (t.prototype.addGameObject = function (t, e) {
                                return this.gameObjectManager.addGameObject(t, e);
                            }),
                            (t.prototype.getGameObjects = function () {
                                return this.gameObjectManager.getGameObjects();
                            }),
                            (t.prototype.findGameObjectByName = function (t) {
                                return this.gameObjectManager.findGameObjectByName(t);
                            }),
                            (t.prototype.findGameObjectsByTag = function (t) {
                                return this.gameObjectManager.findGameObjectsByTag(t);
                            }),
                            (t.prototype.findGameObjectByTag = function (t) {
                                return this.gameObjectManager.findGameObjectByTag(t);
                            }),
                            (t.prototype.destroyAllGameObjects = function () {
                                this.gameObjectManager.destroyAllGameObjects();
                            }),
                            (t.prototype.destroyGameObjectByName = function (t) {
                                this.destroyGameObject(this.findGameObjectByName(t));
                            }),
                            (t.prototype.destroyGameObject = function (t) {
                                this.gameObjectManager.destroyGameObject(t);
                            }),
                            (t.prototype.destroy = function () {
                                var t = this;
                                window.removeEventListener(bt, this.gameLoopEventHandler),
                                    window.removeEventListener(xt, this.gameLoopEventHandler),
                                    this.gameObjectManager.destroyAllGameObjects(),
                                    Object.keys(this).forEach(function (e) {
                                        return delete t[e];
                                    });
                            }),
                            t
                        );
                    })(),
                    Ht = (function () {
                        function t(t) {
                            var e,
                                i,
                                r,
                                o,
                                a = this;
                            (this._image = null),
                                (this._slice = null),
                                (this._scale =
                                    null !== (e = _t.getConstant("GameConfig").spriteDefaultScale) && void 0 !== e
                                        ? e
                                        : new n(1, 1)),
                                (this._smooth = !1),
                                (this._width = null),
                                (this._height = null),
                                (this._loaded = !1),
                                (this._image = t.image),
                                (this._slice = null !== (i = t.slice) && void 0 !== i ? i : this._slice),
                                null !== this._slice &&
                                    ((this._width = this._slice.width), (this._height = this._slice.height)),
                                (this._scale = null !== (r = t.scale) && void 0 !== r ? r : this._scale),
                                (this._smooth = null !== (o = t.smooth) && void 0 !== o ? o : this._smooth),
                                this._image.naturalWidth
                                    ? this.onLoad()
                                    : this._image.addEventListener("load", function () {
                                          return a.onLoad();
                                      });
                        }
                        return (
                            Object.defineProperty(t.prototype, "loaded", {
                                get: function () {
                                    return this._loaded;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "image", {
                                get: function () {
                                    return this._image;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "slice", {
                                get: function () {
                                    return this._slice;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "scale", {
                                get: function () {
                                    return this._scale;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "smooth", {
                                get: function () {
                                    return this._smooth;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "width", {
                                get: function () {
                                    return this._width;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "height", {
                                get: function () {
                                    return this._height;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.prototype.onLoad = function () {
                                var t, e;
                                (this._width =
                                    (null !== (t = this._width) && void 0 !== t ? t : this._image.naturalWidth) *
                                    this._scale.x),
                                    (this._height =
                                        (null !== (e = this._height) && void 0 !== e ? e : this._image.naturalHeight) *
                                        this._scale.y),
                                    (this._loaded = !0);
                            }),
                            t
                        );
                    })(),
                    kt = function (t) {
                        var e, i;
                        (this.sprites = []),
                            (this.speed = 1),
                            (this.loop = !1),
                            (this.sprites = t.sprites),
                            (this.speed = null !== (e = t.speed) && void 0 !== e ? e : this.speed),
                            (this.loop = null !== (i = t.loop) && void 0 !== i ? i : this.loop);
                    },
                    zt = function (t, e, i, n) {
                        (this.x = t), (this.y = e), (this.width = i), (this.height = n);
                    },
                    Wt = (function () {
                        function t(t) {
                            var e, i;
                            (this.image = null),
                                (this.offset = new n(0, 0)),
                                (this.tileSpacing = new n(0, 0)),
                                (this._tiles = []),
                                (this.image = t.image),
                                (this.tileWidth = t.tileWidth),
                                (this.tileHeight = t.tileHeight),
                                (this.gridWidth = t.gridWidth),
                                (this.gridHeight = t.gridHeight),
                                (this.offset = null !== (e = t.offset) && void 0 !== e ? e : this.offset),
                                (this.tileSpacing = null !== (i = t.spacing) && void 0 !== i ? i : this.tileSpacing),
                                this.generateTiles();
                        }
                        return (
                            (t.prototype.generateTiles = function () {
                                for (var t = 0, e = 0; e < this.gridHeight; e++)
                                    for (var i = 0; i < this.gridWidth; i++)
                                        (this._tiles[t] = new zt(
                                            i * this.tileWidth + i * this.tileSpacing.x + this.offset.x,
                                            e * this.tileHeight + e * this.tileSpacing.y + this.offset.y,
                                            this.tileWidth,
                                            this.tileHeight
                                        )),
                                            t++;
                            }),
                            (t.prototype.getTile = function (t) {
                                return this._tiles[t] ? this._tiles[t] : null;
                            }),
                            Object.defineProperty(t.prototype, "tiles", {
                                get: function () {
                                    return this._tiles;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            t
                        );
                    })(),
                    qt = (function (t) {
                        function e(e, i, r, o) {
                            void 0 === o && (o = 0);
                            var a = t.call(this) || this;
                            return (
                                (a.cacheVector = new n()),
                                (a.axes = []),
                                (a._type = b.Rectangle),
                                a._position.set(e.x, e.y),
                                (a._width = i),
                                (a._height = r),
                                (a._angle = o),
                                (a._model = [
                                    new n(-i / 2, -r / 2),
                                    new n(-i / 2, r / 2),
                                    new n(i / 2, r / 2),
                                    new n(i / 2, -r / 2),
                                ]),
                                (a._vertices = [new n(), new n(), new n(), new n()]),
                                (a.axes = [new n(), new n()]),
                                a.update(),
                                a
                            );
                        }
                        return (
                            u(e, t),
                            (e.prototype.update = function () {
                                this.updateModel();
                                for (var t = 0; t < this._model.length; t++)
                                    this._vertices[t].set(
                                        this._model[t].x * Math.cos(this._angle) -
                                            this._model[t].y * Math.sin(this._angle) +
                                            this._position.x,
                                        this._model[t].x * Math.sin(this._angle) +
                                            this._model[t].y * Math.cos(this._angle) +
                                            this._position.y
                                    );
                                this.updateDirection(), this.updateAxes();
                            }),
                            (e.prototype.updateModel = function () {
                                this._model[0].set(-this._width / 2, -this._height / 2),
                                    this._model[1].set(-this._width / 2, this._height / 2),
                                    this._model[2].set(this._width / 2, this._height / 2),
                                    this._model[3].set(this._width / 2, -this._height / 2);
                            }),
                            (e.prototype.updateDirection = function () {
                                n.unit(
                                    this._direction,
                                    n.subtract(this.cacheVector, this._vertices[1], this._vertices[0])
                                );
                            }),
                            (e.prototype.updateAxes = function () {
                                n.normal(this.axes[0], this._direction),
                                    this.axes[1].set(this._direction.x, this._direction.y);
                            }),
                            (e.prototype.clone = function () {
                                return new e(this._position, this._width, this._height, this._angle);
                            }),
                            (e.prototype.getAxes = function () {
                                return this.axes;
                            }),
                            e
                        );
                    })(E),
                    Yt = (function () {
                        function t(t, e, i, r, o, a) {
                            void 0 === a && (a = 0),
                                (this._position = new n()),
                                (this._width = 0),
                                (this._height = 0),
                                (this._angle = 0),
                                (this._quadMaxBounds = new n()),
                                (this._quadMinBounds = new n()),
                                this._position.set(t.x, t.y),
                                (this._quadVertices = [new n(), new n(), new n(), new n()]),
                                (this._width = e),
                                (this._height = i),
                                (this._angle = a),
                                (this.gameObject = o),
                                (this.physics = r),
                                (this.shape = new qt(this._position, this._width, this._height)),
                                this.updateQuadVertices();
                        }
                        return (
                            Object.defineProperty(t.prototype, "position", {
                                get: function () {
                                    return this._position;
                                },
                                set: function (t) {
                                    this._position.set(t.x, t.y), this.updateShape(), this.updateQuadVertices();
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "width", {
                                get: function () {
                                    return this._width;
                                },
                                set: function (t) {
                                    (this._width = t), this.updateShape(), this.updateQuadVertices();
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "height", {
                                get: function () {
                                    return this._height;
                                },
                                set: function (t) {
                                    (this._height = t), this.updateShape(), this.updateQuadVertices();
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "angle", {
                                get: function () {
                                    return this._angle;
                                },
                                set: function (t) {
                                    this._angle = t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "bottomLeftQuadVertex", {
                                get: function () {
                                    return this._quadVertices[0];
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "bottomRightQuadVertex", {
                                get: function () {
                                    return this._quadVertices[3];
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "topLeftQuadVertex", {
                                get: function () {
                                    return this._quadVertices[1];
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "topRightQuadVertex", {
                                get: function () {
                                    return this._quadVertices[2];
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.prototype.updateShape = function () {
                                (this.shape.position = this._position),
                                    (this.shape.width = this._width),
                                    (this.shape.height = this.height),
                                    (this.shape.angle = this._angle * (Math.PI / 180)),
                                    this.shape.update();
                            }),
                            (t.prototype.updateQuadVertices = function () {
                                var t = this;
                                this._quadMaxBounds.set(this.shape.vertices[0].x, this.shape.vertices[0].y),
                                    this._quadMinBounds.set(this.shape.vertices[0].x, this.shape.vertices[0].y),
                                    this.shape.vertices.forEach(function (e) {
                                        t._quadMaxBounds.set(
                                            Math.max(e.x, t._quadMaxBounds.x),
                                            Math.max(e.y, t._quadMaxBounds.y)
                                        ),
                                            t._quadMinBounds.set(
                                                Math.min(e.x, t._quadMinBounds.x),
                                                Math.min(e.y, t._quadMinBounds.y)
                                            );
                                    }),
                                    this._quadVertices[0].set(this._quadMinBounds.x, this._quadMinBounds.y),
                                    this._quadVertices[1].set(this._quadMinBounds.x, this._quadMaxBounds.y),
                                    this._quadVertices[2].set(this._quadMaxBounds.x, this._quadMaxBounds.y),
                                    this._quadVertices[3].set(this._quadMaxBounds.x, this._quadMinBounds.y);
                            }),
                            t
                        );
                    })(),
                    Qt = (function (t) {
                        function e() {
                            var e = t.call(this) || this;
                            return (
                                (e.collisionManager = _t.getSingleton("CollisionManager")),
                                (e.colliders = []),
                                (e._physics = !0),
                                (e.renderer = null),
                                (e.collisionsCache = []),
                                e
                            );
                        }
                        return (
                            u(e, t),
                            Object.defineProperty(e.prototype, "physics", {
                                get: function () {
                                    return this._physics;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (e.prototype.addCollider = function (t) {
                                this.colliders.push(t), this.collisionManager.addCollider(t);
                            }),
                            (e.prototype.collidesWithLayer = function (t) {
                                return null !== this.getCollisionWithLayer(t);
                            }),
                            (e.prototype.getCollisionWithLayer = function (t) {
                                this.updatePosition();
                                for (var e = 0, i = this.colliders; e < i.length; e++)
                                    for (
                                        var n = i[e], r = 0, o = this.collisionManager.getCollisionsForCollider(n);
                                        r < o.length;
                                        r++
                                    ) {
                                        var a = o[r];
                                        if (a.remoteCollider.gameObject.layer === t) return a;
                                    }
                                return null;
                            }),
                            (e.prototype.getCollisionsWithLayer = function (t) {
                                this.updatePosition(), (this.collisionsCache = []);
                                for (var e = 0, i = this.colliders; e < i.length; e++)
                                    for (
                                        var n = i[e], r = 0, o = this.collisionManager.getCollisionsForCollider(n);
                                        r < o.length;
                                        r++
                                    ) {
                                        var a = o[r];
                                        a.remoteCollider.gameObject.layer === t && this.collisionsCache.push(a);
                                    }
                                return m(this.collisionsCache);
                            }),
                            (e.prototype.setActive = function (e) {
                                var i = this;
                                !0 === e && !1 === this.active
                                    ? this.colliders.forEach(function (t) {
                                          return i.collisionManager.addCollider(t);
                                      })
                                    : !1 === e &&
                                      !0 === this.active &&
                                      this.colliders.forEach(function (t) {
                                          return i.collisionManager.removeCollider(t);
                                      }),
                                    this.renderer && this.renderer.setActive(e),
                                    t.prototype.setActive.call(this, e);
                            }),
                            (e.prototype.destroy = function () {
                                var e = this;
                                this.colliders.forEach(function (t) {
                                    return e.collisionManager.removeCollider(t);
                                }),
                                    t.prototype.destroy.call(this);
                            }),
                            e
                        );
                    })(Rt),
                    Xt = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (e.type = g.Collider), (e.color = null), (e.shape = null), e;
                        }
                        return u(e, t), e;
                    })(x),
                    Kt = "BoxCollider",
                    Zt = (function (t) {
                        function e(e) {
                            var i,
                                r,
                                o,
                                a,
                                s,
                                h = t.call(this) || this;
                            return (
                                (h.debug = !1),
                                (h.offsetX = 0),
                                (h.offsetY = 0),
                                (h.rotation = 0),
                                (h.realWidth = 0),
                                (h.realHeight = 0),
                                (h.realOffset = new n()),
                                (h.realPosition = new n()),
                                (h.realRotation = 0),
                                (h.applyRotation = _t.getConstant("GameConfig").collisions.method === X.SAT),
                                (h.type = "BoxCollider"),
                                (h.width = e.width),
                                (h.height = e.height),
                                (h.offsetX = null !== (i = e.offsetX) && void 0 !== i ? i : h.offsetX),
                                (h.offsetY = null !== (r = e.offsetY) && void 0 !== r ? r : h.offsetY),
                                (h._physics = null !== (o = e.physics) && void 0 !== o ? o : h._physics),
                                (h.debug =
                                    (null !== (a = e.debug) && void 0 !== a ? a : h.debug) &&
                                    _t.getConstant("GameConfig").debugEnabled),
                                (h.rotation = null !== (s = e.rotation) && void 0 !== s ? s : h.rotation),
                                h
                            );
                        }
                        return (
                            u(e, t),
                            (e.prototype.start = function () {
                                var t = this;
                                this.updateRealSize(),
                                    this.addCollider(
                                        new Yt(
                                            this.gameObject.transform.position,
                                            this.realWidth,
                                            this.realHeight,
                                            this._physics,
                                            this.gameObject,
                                            this.realRotation
                                        )
                                    ),
                                    this.debug &&
                                        (this.renderer = this.gameObject.addComponent(function () {
                                            return new $t(t.colliders[0]);
                                        }));
                            }),
                            (e.prototype.update = function () {
                                this.updatePosition();
                            }),
                            (e.prototype.updatePosition = function () {
                                this.updateRealSize(),
                                    (this.colliders[0].width = this.realWidth),
                                    (this.colliders[0].height = this.realHeight),
                                    (this.colliders[0].position = n.add(
                                        this.realPosition,
                                        this.gameObject.transform.position,
                                        this.realOffset
                                    )),
                                    0 !== this.realRotation &&
                                        this.applyRotation &&
                                        (this.colliders[0].angle = this.realRotation),
                                    0 !== this.gameObject.transform.rotation && this.translate();
                            }),
                            (e.prototype.updateRealSize = function () {
                                (this.realWidth = this.width * Math.abs(this.gameObject.transform.scale.x)),
                                    (this.realHeight = this.height * Math.abs(this.gameObject.transform.scale.y)),
                                    (this.realOffset.x = this.offsetX * this.gameObject.transform.scale.x),
                                    (this.realOffset.y = this.offsetY * this.gameObject.transform.scale.y),
                                    (this.realRotation = this.gameObject.transform.rotation + this.rotation);
                            }),
                            (e.prototype.translate = function () {
                                var t = (this.gameObject.transform.rotation * Math.PI) / 180,
                                    e = Math.atan2(
                                        this.colliders[0].position.x - this.gameObject.transform.position.x,
                                        this.colliders[0].position.y - this.gameObject.transform.position.y
                                    ),
                                    i = Math.hypot(
                                        this.colliders[0].position.x - this.gameObject.transform.position.x,
                                        this.colliders[0].position.y - this.gameObject.transform.position.y
                                    );
                                this.realPosition.set(
                                    this.gameObject.transform.position.x + i * Math.sin(e - t),
                                    this.gameObject.transform.position.y + i * Math.cos(e - t)
                                ),
                                    (this.colliders[0].position = this.realPosition);
                            }),
                            e
                        );
                    })(Qt),
                    $t = (function (t) {
                        function e(e) {
                            var i = t.call(this) || this;
                            return (
                                (i.renderManager = _t.getSingleton("RenderManager")),
                                (i.type = "BoxColliderRenderer"),
                                (i.renderData = new Xt()),
                                (i.renderData.debug = !0),
                                (i.renderData.color = "#00FF00"),
                                (i.collider = e),
                                i
                            );
                        }
                        return (
                            u(e, t),
                            (e.prototype.update = function () {
                                (this.renderData.layer = this.gameObject.layer),
                                    (this.renderData.position = this.collider.position),
                                    (this.renderData.shape = this.collider.shape),
                                    this.renderManager.addRenderData(this.renderData);
                            }),
                            e
                        );
                    })(Tt),
                    Jt = "TilemapCollider",
                    te = (function (t) {
                        function e(e) {
                            var i,
                                r = t.call(this) || this;
                            return (
                                (r.tilemapRenderer = null),
                                (r.debug = !1),
                                (r.needsCollider = function (t) {
                                    r.cacheVertex[0].set(t.position.x, t.position.y + t.height),
                                        r.cacheVertex[1].set(t.position.x + t.width, t.position.y),
                                        r.cacheVertex[2].set(t.position.x, t.position.y - t.height),
                                        r.cacheVertex[3].set(t.position.x - t.width, t.position.y);
                                    for (
                                        var e = function (t) {
                                                if (
                                                    void 0 ===
                                                    r.tilemapRenderer.tilesData.find(function (e) {
                                                        return e.position.equals(r.cacheVertex[t]);
                                                    })
                                                )
                                                    return { value: !0 };
                                            },
                                            i = 0;
                                        i < r.cacheVertex.length;
                                        i++
                                    ) {
                                        var n = e(i);
                                        if ("object" == typeof n) return n.value;
                                    }
                                    return !1;
                                }),
                                (r.type = "TilemapCollider"),
                                (r.tilemapRenderer = e.tilemapRenderer),
                                (r.debug =
                                    (null !== (i = e.debug) && void 0 !== i ? i : r.debug) &&
                                    _t.getConstant("GameConfig").debugEnabled),
                                (r._physics = !0),
                                (r.cacheVertex = [new n(), new n(), new n(), new n()]),
                                r
                            );
                        }
                        return (
                            u(e, t),
                            (e.prototype.start = function () {
                                var t = this;
                                this.tilemapRenderer.tilesData.filter(this.needsCollider).forEach(function (e) {
                                    t.addCollider(new Yt(e.position, e.width, e.height, t._physics, t.gameObject));
                                }),
                                    this.debug &&
                                        (this.renderer = this.gameObject.addComponent(function () {
                                            return new ee(t.colliders);
                                        }));
                            }),
                            (e.prototype.updatePosition = function () {}),
                            e
                        );
                    })(Qt),
                    ee = (function (t) {
                        function e(e) {
                            var i = t.call(this) || this;
                            return (
                                (i.renderManager = _t.getSingleton("RenderManager")),
                                (i.renderData = []),
                                (i.colliders = []),
                                (i.type = "TilemapColliderRenderer"),
                                (i.colliders = e),
                                i.colliders.forEach(function (t, e) {
                                    (i.renderData[e] = new Xt()),
                                        (i.renderData[e].debug = !0),
                                        (i.renderData[e].color = "#00FF00");
                                }),
                                i
                            );
                        }
                        return (
                            u(e, t),
                            (e.prototype.update = function () {
                                var t = this;
                                this.colliders.forEach(function (e, i) {
                                    (t.renderData[i].layer = t.gameObject.layer),
                                        (t.renderData[i].position = e.position),
                                        (t.renderData[i].shape = e.shape),
                                        t.renderManager.addRenderData(t.renderData[i]);
                                });
                            }),
                            e
                        );
                    })(Tt),
                    ie = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e.type = g.Image),
                                (e.image = null),
                                (e.width = 0),
                                (e.height = 0),
                                (e.slice = null),
                                (e.flipHorizontal = !1),
                                (e.flipVertical = !1),
                                (e.rotation = null),
                                (e.smooth = !0),
                                (e.alpha = 1),
                                (e.maskColor = null),
                                (e.maskColorMix = null),
                                e
                            );
                        }
                        return u(e, t), e;
                    })(x),
                    ne = "SpriteRenderer",
                    re = (function (t) {
                        function e(e) {
                            var i, r, o, a, s, h, c, u, l;
                            void 0 === e && (e = { sprite: null });
                            var p = t.call(this) || this;
                            return (
                                (p.renderManager = _t.getSingleton("RenderManager")),
                                (p.sprite = null),
                                (p.offset = new n()),
                                (p.flipHorizontal = !1),
                                (p.flipVertical = !1),
                                (p.rotation = 0),
                                (p.smooth = !1),
                                (p.opacity = 1),
                                (p._tiled = new n(1, 1)),
                                (p.maskColor = "#ffffff"),
                                (p.maskColorMix = 0),
                                (p.renderData = []),
                                (p.goPosition = null),
                                (p.cachePosition = new n()),
                                (p.cacheRenderPosition = new n()),
                                (p.type = "SpriteRenderer"),
                                (p.sprite = e.sprite),
                                (p.offset = null !== (i = e.offset) && void 0 !== i ? i : p.offset),
                                (p.smooth = null !== (r = e.smooth) && void 0 !== r ? r : p.smooth),
                                (p.rotation = null !== (o = e.rotation) && void 0 !== o ? o : p.rotation),
                                (p.flipHorizontal =
                                    null !== (a = e.flipHorizontal) && void 0 !== a ? a : p.flipHorizontal),
                                (p.flipVertical = null !== (s = e.flipVertical) && void 0 !== s ? s : p.flipVertical),
                                (p.opacity = null !== (h = e.opacity) && void 0 !== h ? h : p.opacity),
                                (p.tiled = null !== (c = e.tiled) && void 0 !== c ? c : p._tiled),
                                (p.maskColor = null !== (u = e.maskColor) && void 0 !== u ? u : p.maskColor),
                                (p.maskColorMix = null !== (l = e.maskColorMix) && void 0 !== l ? l : p.maskColorMix),
                                p
                            );
                        }
                        return (
                            u(e, t),
                            Object.defineProperty(e.prototype, "tiled", {
                                get: function () {
                                    return this._tiled;
                                },
                                set: function (t) {
                                    if (t.x % 1 != 0 || t.y % 1 != 0)
                                        throw new w("SpriteRenderer.tiled: Vector2 components must be integer");
                                    this._tiled.set(t.x, t.y);
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (e.prototype.start = function () {
                                this.goPosition = this.gameObject.transform.position;
                            }),
                            (e.prototype.update = function () {
                                if (this.sprite && !0 === this.sprite.loaded) {
                                    this.updateRenderDataArray();
                                    for (var t = 0, e = 0; e < this._tiled.x; e++)
                                        for (var i = 0; i < this._tiled.y; i++) this.updateRenderData(t, e, i), t++;
                                }
                            }),
                            (e.prototype.updateRenderDataArray = function () {
                                if (this.renderData.length !== this._tiled.x * this._tiled.y) {
                                    this.renderData = [];
                                    for (var t = 0; t <= this._tiled.x * this._tiled.y; t++)
                                        this.renderData[t] = new ie();
                                }
                            }),
                            (e.prototype.updateRenderData = function (t, e, i) {
                                (this.renderData[t].ui = this.gameObject.ui),
                                    (this.renderData[t].layer = this.gameObject.layer),
                                    (this.renderData[t].image = this.sprite.image),
                                    (this.renderData[t].width =
                                        this.sprite.width * Math.abs(this.gameObject.transform.scale.x)),
                                    (this.renderData[t].height =
                                        this.sprite.height * Math.abs(this.gameObject.transform.scale.y)),
                                    (this.renderData[t].slice = this.sprite.slice),
                                    (this.renderData[t].flipHorizontal =
                                        this.flipHorizontal !== this.gameObject.transform.scale.x < 0),
                                    (this.renderData[t].flipVertical =
                                        this.flipVertical !== this.gameObject.transform.scale.y < 0),
                                    (this.renderData[t].rotation = this.gameObject.transform.rotation + this.rotation),
                                    (this.renderData[t].smooth = this.sprite.smooth),
                                    (this.renderData[t].alpha = this.opacity),
                                    (this.renderData[t].maskColor = this.maskColor),
                                    (this.renderData[t].maskColorMix = this.maskColorMix),
                                    this.calculateRenderPosition(t, e, i),
                                    this.renderManager.addRenderData(this.renderData[t]);
                            }),
                            (e.prototype.calculateRenderPosition = function (t, e, i) {
                                n.add(this.cachePosition, this.gameObject.transform.position, this.offset),
                                    this.cacheRenderPosition.set(
                                        (this.renderData[t].width / 2) * (this.tiled.x - 1),
                                        (this.renderData[t].height / 2) * (this.tiled.y - 1)
                                    ),
                                    n.subtract(this.cachePosition, this.cachePosition, this.cacheRenderPosition),
                                    this.cacheRenderPosition.set(
                                        e * this.renderData[t].width,
                                        i * this.renderData[t].height
                                    ),
                                    n.add(this.cachePosition, this.cachePosition, this.cacheRenderPosition),
                                    (this.renderData[t].position = this.cachePosition),
                                    0 !== this.gameObject.transform.rotation && this.translateRenderPosition(t);
                            }),
                            (e.prototype.translateRenderPosition = function (t) {
                                var e = (this.gameObject.transform.rotation * Math.PI) / 180,
                                    i = Math.atan2(
                                        this.renderData[t].position.x - this.goPosition.x,
                                        this.renderData[t].position.y - this.goPosition.y
                                    ),
                                    n = Math.hypot(
                                        this.renderData[t].position.x - this.goPosition.x,
                                        this.renderData[t].position.y - this.goPosition.y
                                    );
                                this.renderData[t].position.set(
                                    this.goPosition.x + n * Math.sin(i - e),
                                    this.goPosition.y + n * Math.cos(i - e)
                                );
                            }),
                            e
                        );
                    })(Tt),
                    oe = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e.type = g.Text),
                                (e.color = null),
                                (e.text = null),
                                (e.fontFamily = null),
                                (e.fontUrl = null),
                                (e.fontSize = null),
                                (e.lineSeparation = null),
                                (e.letterSpacing = null),
                                (e.pivot = null),
                                (e.bitmapSize = null),
                                (e.charRanges = null),
                                (e.smooth = !1),
                                (e.bitmapOffset = null),
                                e
                            );
                        }
                        return u(e, t), e;
                    })(x),
                    ae = "TextRenderer",
                    se = (function (t) {
                        function e(e) {
                            var i,
                                r,
                                o,
                                a,
                                s,
                                h,
                                c,
                                u,
                                l,
                                p,
                                d = t.call(this) || this;
                            if (
                                ((d.text = null),
                                (d.fontFamily = "Sans"),
                                (d.fontUrl = null),
                                (d.size = 12),
                                (d.color = "#000000"),
                                (d.lineSeparation = 0),
                                (d.letterSpacing = 0),
                                (d.pivot = "left"),
                                (d.bitmapSize = 64),
                                (d.charRanges = [32, 126, 161, 255]),
                                (d.smooth = !1),
                                (d.bitmapOffset = new n()),
                                (d.renderManager = _t.getSingleton("RenderManager")),
                                (d.renderData = new oe()),
                                (d.type = "TextRenderer"),
                                (d.text = e.text),
                                (d.fontFamily = e.fontFamily),
                                (d.fontUrl = null !== (i = e.fontUrl) && void 0 !== i ? i : d.fontUrl),
                                (d.size = null !== (r = e.size) && void 0 !== r ? r : d.size),
                                (d.color = null !== (o = e.color) && void 0 !== o ? o : d.color),
                                (d.lineSeparation =
                                    null !== (a = e.lineSeparation) && void 0 !== a ? a : d.lineSeparation),
                                (d.letterSpacing =
                                    null !== (s = e.letterSpacing) && void 0 !== s ? s : d.letterSpacing),
                                (d.pivot = null !== (h = e.pivot) && void 0 !== h ? h : d.pivot),
                                (d.bitmapSize = null !== (c = e.bitmapSize) && void 0 !== c ? c : d.bitmapSize),
                                (d.charRanges = null !== (u = e.charRanges) && void 0 !== u ? u : d.charRanges),
                                (d.smooth = null !== (l = e.smooth) && void 0 !== l ? l : d.smooth),
                                (d.bitmapOffset = null !== (p = e.bitmapOffset) && void 0 !== p ? p : d.bitmapOffset),
                                d.charRanges.length % 2 != 0)
                            )
                                throw new w("TextRenderer.charRanges must be a 2 column matrix");
                            if (d.lineSeparation % 2 != 0)
                                throw new w("TextRenderer.lineSeparation must be multiple of 2");
                            return d;
                        }
                        return (
                            u(e, t),
                            (e.prototype.start = function () {
                                if (!1 === this.gameObject.ui)
                                    throw new w("TextRenderer only can be used on UI GameObjects");
                                (this.renderData.layer = this.gameObject.layer),
                                    (this.renderData.ui = this.gameObject.ui),
                                    (this.renderData.fontFamily = this.fontFamily),
                                    (this.renderData.fontUrl = this.fontUrl),
                                    (this.renderData.lineSeparation = this.lineSeparation),
                                    (this.renderData.letterSpacing = this.letterSpacing),
                                    (this.renderData.pivot = this.pivot),
                                    (this.renderData.bitmapSize = this.bitmapSize),
                                    (this.renderData.charRanges = this.charRanges),
                                    (this.renderData.smooth = this.smooth),
                                    (this.renderData.bitmapOffset = this.bitmapOffset);
                            }),
                            (e.prototype.update = function () {
                                if (!1 === this.gameObject.ui)
                                    throw new w("TextRenderer only can be used on UI GameObjects");
                                (this.renderData.text = this.text),
                                    (this.renderData.fontSize = this.size),
                                    (this.renderData.color = this.color),
                                    this.renderData.position.set(
                                        this.gameObject.transform.position.x,
                                        this.gameObject.transform.position.y
                                    ),
                                    this.renderManager.addRenderData(this.renderData);
                            }),
                            e
                        );
                    })(Tt),
                    he = (function () {
                        function t(t, e, i) {
                            (this._position = new n()),
                                this._position.set(t.x, t.y),
                                (this._width = e),
                                (this._height = i);
                        }
                        return (
                            Object.defineProperty(t.prototype, "position", {
                                get: function () {
                                    return this._position;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "width", {
                                get: function () {
                                    return this._width;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "height", {
                                get: function () {
                                    return this._height;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            t
                        );
                    })(),
                    ce = function () {
                        (this.position = new n()), (this.positionInViewport = new n());
                    },
                    ue = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (e.type = g.Tilemap), (e.tilesData = []), (e.tilesToRender = []), e;
                        }
                        return u(e, t), e;
                    })(x),
                    le = (function (t) {
                        function e(e) {
                            var i,
                                r,
                                o,
                                a,
                                s,
                                h = t.call(this) || this;
                            return (
                                (h.renderOrder = "center"),
                                (h.smooth = !1),
                                (h.textureCorrection = null),
                                (h.tileScale =
                                    null !== (i = _t.getConstant("GameConfig").spriteDefaultScale) && void 0 !== i
                                        ? i
                                        : new n(1, 1)),
                                (h.tileWidth = 0),
                                (h.tileHeight = 0),
                                (h.orientation = new n(1, 1)),
                                (h.renderManager = _t.getSingleton("RenderManager")),
                                (h.tilemapProcessed = !1),
                                (h.renderData = new Map()),
                                (h.cols = []),
                                (h.rows = []),
                                (h._width = 0),
                                (h._height = 0),
                                (h.tiles = []),
                                (h._realWidth = 0),
                                (h._realHeight = 0),
                                (h.cacheV2 = new n()),
                                (h.allowMultiple = !1),
                                (h.tileset = e.tileset),
                                (h.tileScale = null !== (r = e.tileScale) && void 0 !== r ? r : h.tileScale),
                                (h.smooth = null !== (o = e.smooth) && void 0 !== o ? o : h.smooth),
                                (h.renderOrder = null !== (a = e.renderOrder) && void 0 !== a ? a : h.renderOrder),
                                (h.textureCorrection =
                                    null !== (s = e.textureCorrection) && void 0 !== s ? s : h.textureCorrection),
                                h
                            );
                        }
                        return (
                            u(e, t),
                            (e.prototype.start = function () {
                                (this.tileWidth =
                                    this.tileset.tileWidth *
                                    this.tileScale.x *
                                    Math.abs(this.gameObject.transform.scale.x)),
                                    (this.tileHeight =
                                        this.tileset.tileHeight *
                                        this.tileScale.y *
                                        Math.abs(this.gameObject.transform.scale.y)),
                                    this.orientation.set(
                                        Math.sign(this.gameObject.transform.scale.x),
                                        Math.sign(this.gameObject.transform.scale.y)
                                    ),
                                    this.processTilemap(),
                                    this.updatePosition();
                            }),
                            (e.prototype.update = function () {
                                var t = this;
                                this.renderData.forEach(function (e) {
                                    return t.renderManager.addRenderData(e);
                                });
                            }),
                            (e.prototype.processTile = function (t, e, i, n, r, o) {
                                void 0 === n && (n = 1),
                                    void 0 === r && (r = { h: !1, v: !1 }),
                                    void 0 === o && (o = { x: 0, y: 0 }),
                                    null !== t && this.addTileToRenderData(t, e, i, n, r, o),
                                    this.updateSizeInfo(e, i);
                            }),
                            (e.prototype.addTileToRenderData = function (t, e, i, n, r, o) {
                                !1 === this.renderData.has(n) &&
                                    this.renderData.set(n, this.createRenderDataForAlpha(n));
                                var a = new ce();
                                (a.tile = t),
                                    a.position.set(
                                        this.gameObject.transform.position.x +
                                            e * this.tileWidth * this.orientation.x +
                                            o.x * Math.abs(this.gameObject.transform.scale.x) +
                                            (this.tileWidth * this.orientation.x) / 2,
                                        this.gameObject.transform.position.y -
                                            i * this.tileHeight * this.orientation.y -
                                            o.y * Math.abs(this.gameObject.transform.scale.y) -
                                            (this.tileHeight * this.orientation.y) / 2
                                    ),
                                    (a.flipHorizontal = r.h !== this.orientation.x < 0),
                                    (a.flipVertical = r.v !== this.orientation.y < 0),
                                    this.renderData.get(n).tilesData.push(a);
                            }),
                            (e.prototype.createRenderDataForAlpha = function (t) {
                                var e = new ue();
                                return (
                                    (e.ui = !1),
                                    (e.alpha = t),
                                    (e.image = this.tileset.image),
                                    (e.layer = this.gameObject.layer),
                                    (e.smooth = this.smooth),
                                    (e.tileWidth = this.tileWidth),
                                    (e.tileHeight = this.tileHeight),
                                    (e.textureCorrection = this.textureCorrection),
                                    e
                                );
                            }),
                            (e.prototype.updateSizeInfo = function (t, e) {
                                (this._width = !1 === this.cols.includes(t) ? this.cols.push(t) : this._width),
                                    (this._height = !1 === this.rows.includes(e) ? this.rows.push(e) : this._height),
                                    (this._realWidth = this._width * this.tileWidth),
                                    (this._realHeight = this._height * this.tileHeight);
                            }),
                            (e.prototype.updatePosition = function () {
                                var t = this;
                                this.cacheV2.set(
                                    ("center" === this.renderOrder
                                        ? -Math.round(this._realWidth / 2)
                                        : ["left-down", "left-up"].includes(this.renderOrder)
                                        ? -this._realWidth
                                        : 0) * this.orientation.x,
                                    ("center" === this.renderOrder
                                        ? Math.round(this._realHeight / 2)
                                        : ["right-up", "left-up"].includes(this.renderOrder)
                                        ? this._realHeight
                                        : 0) * this.orientation.y
                                ),
                                    this.renderData.forEach(function (e) {
                                        return e.tilesData.forEach(function (e) {
                                            n.add(e.position, e.position, t.cacheV2), t.addTileData(e);
                                        });
                                    });
                            }),
                            (e.prototype.addTileData = function (t) {
                                this.tiles.push(new he(t.position, this.tileWidth, this.tileHeight));
                            }),
                            Object.defineProperty(e.prototype, "width", {
                                get: function () {
                                    return this._width;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "height", {
                                get: function () {
                                    return this._height;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "realWidth", {
                                get: function () {
                                    return this._realWidth;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "realHeight", {
                                get: function () {
                                    return this._realHeight;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "tilesData", {
                                get: function () {
                                    return this.tiles;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            e
                        );
                    })(Tt),
                    pe = "TiledRenderer",
                    de = (function (t) {
                        function e(e) {
                            var i,
                                n = this;
                            return (
                                (e.renderOrder = e.tilemapData.renderorder),
                                ((n = t.call(this, e) || this).type = "TiledRenderer"),
                                (n.tiledTilemap = e.tilemapData),
                                (n.layerName = null !== (i = e.layerName) && void 0 !== i ? i : null),
                                n
                            );
                        }
                        return (
                            u(e, t),
                            (e.prototype.processTilemap = function () {
                                var t = this;
                                this.tiledTilemap.layers.forEach(function (e) {
                                    var i, n;
                                    !0 !== e.visible ||
                                        (null !== t.layerName && t.layerName !== e.name) ||
                                        (!0 === t.tiledTilemap.infinite
                                            ? e.chunks.forEach(function (i) {
                                                  var n, r;
                                                  return t.processChunk(i, e.opacity, {
                                                      x: null !== (n = e.offsetx) && void 0 !== n ? n : 0,
                                                      y: null !== (r = e.offsety) && void 0 !== r ? r : 0,
                                                  });
                                              })
                                            : t.processChunk(e, e.opacity, {
                                                  x: null !== (i = e.offsetx) && void 0 !== i ? i : 0,
                                                  y: null !== (n = e.offsety) && void 0 !== n ? n : 0,
                                              }));
                                }),
                                    (this.tilemapProcessed = !0);
                            }),
                            (e.prototype.processChunk = function (t, e, i) {
                                void 0 === e && (e = 1), void 0 === i && (i = { x: 0, y: 0 });
                                for (var n = 0, r = 0; r < t.height; r++)
                                    for (var o = 0; o < t.width; o++) {
                                        var a = this.tileset.getTile(t.data[n] - 1);
                                        this.processTile(a, o + t.x, r + t.y, e, { h: !1, v: !1 }, i), n++;
                                    }
                            }),
                            e
                        );
                    })(le),
                    fe = 1,
                    me = 2,
                    ge = 3,
                    ye = "TilemapRenderer",
                    ve = (function (t) {
                        function e(e) {
                            var i,
                                n = t.call(this, e) || this;
                            return (
                                (n.alpha = 1),
                                (n.type = "TilemapRenderer"),
                                (n.tilemapData = e.tilemapData),
                                (n.alpha = null !== (i = e.alpha) && void 0 !== i ? i : n.alpha),
                                n
                            );
                        }
                        return (
                            u(e, t),
                            (e.prototype.processTilemap = function () {
                                var t = this;
                                this.tilemapData
                                    .trim()
                                    .split("\n")
                                    .forEach(function (e, i) {
                                        e.split(",").forEach(function (e, n) {
                                            var r = parseInt(e.trim()),
                                                o = null,
                                                a = { h: !1, v: !1 };
                                            if (!1 === isNaN(r)) {
                                                var s = r > 999 ? r % 1e3 : r,
                                                    h = Math.round(r / 1e3);
                                                (o = t.tileset.getTile(s)),
                                                    (a.h = [fe, ge].includes(h)),
                                                    (a.v = [me, ge].includes(h));
                                            }
                                            t.processTile(o, n, i, t.alpha, a);
                                        });
                                    }),
                                    (this.tilemapProcessed = !0);
                            }),
                            e
                        );
                    })(le),
                    be = "Animator",
                    xe = (function (t) {
                        function e(e) {
                            var i = t.call(this) || this;
                            return (
                                (i.timeManager = _t.getSingleton("TimeManager")),
                                (i.spriteRenderer = null),
                                (i.animations = new Map()),
                                (i.currentAnimation = null),
                                (i.defaultSprite = null),
                                (i.type = "Animator"),
                                (i.spriteRenderer = e.spriteRenderer),
                                i
                            );
                        }
                        return (
                            u(e, t),
                            (e.prototype.start = function () {
                                this.defaultSprite = this.spriteRenderer.sprite;
                            }),
                            (e.prototype.update = function () {
                                null !== this.currentAnimation
                                    ? (this.currentAnimation.playFrame(this.timeManager.deltaTime),
                                      !0 === this.currentAnimation.restarted && !1 === this.currentAnimation.loop
                                          ? this.stopAnimation()
                                          : (this.spriteRenderer.sprite = this.currentAnimation.sprite))
                                    : (this.spriteRenderer.sprite = this.defaultSprite);
                            }),
                            (e.prototype.addAnimation = function (t, e) {
                                return this.animations.set(t, new _e(e)), this;
                            }),
                            (e.prototype.playAnimation = function (t) {
                                if (!1 !== this.active) {
                                    if (!1 === this.animations.has(t))
                                        throw new w("Animation with name " + t + " does not exist.");
                                    this.currentAnimation = this.animations.get(t);
                                }
                            }),
                            (e.prototype.stopAnimation = function () {
                                !1 !== this.active && null !== this.currentAnimation && (this.currentAnimation = null);
                            }),
                            (e.prototype.isPlayingAnimation = function (t) {
                                return this.animations.get(t) && this.animations.get(t) === this.currentAnimation;
                            }),
                            e
                        );
                    })(Ct),
                    _e = (function () {
                        function t(t) {
                            (this._sprite = null),
                                (this._restarted = !1),
                                (this.currentFrame = 0),
                                (this.frameTime = 0),
                                (this._animation = t);
                        }
                        return (
                            Object.defineProperty(t.prototype, "sprite", {
                                get: function () {
                                    return this._sprite;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "restarted", {
                                get: function () {
                                    return this._restarted;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "loop", {
                                get: function () {
                                    return this._animation.loop;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "animation", {
                                get: function () {
                                    return this._animation;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.prototype.playFrame = function (t) {
                                (this._restarted = !1),
                                    this.frameTime >= 1 / (24 * this._animation.speed) &&
                                        ((this.frameTime = 0),
                                        (this.currentFrame =
                                            this.currentFrame + 1 === this._animation.sprites.length
                                                ? 0
                                                : this.currentFrame + 1),
                                        (this._restarted = 0 === this.currentFrame)),
                                    (this._sprite = this._animation.sprites[this.currentFrame]),
                                    (this.frameTime += t);
                            }),
                            t
                        );
                    })(),
                    we = [
                        "click",
                        "contextmenu",
                        "auxclick",
                        "dblclick",
                        "mousedown",
                        "mouseup",
                        "pointerup",
                        "touchend",
                        "keydown",
                        "keyup",
                    ],
                    Oe = "AudioPlayer",
                    Me = (function (t) {
                        function e(e) {
                            var i, n, r;
                            void 0 === e && (e = { audio: null, volume: 1, loop: !1 });
                            var o = t.call(this) || this;
                            return (
                                (o.volume = 1),
                                (o.loop = !1),
                                (o.audio = null),
                                (o.clones = new Map()),
                                (o._playing = !1),
                                (o._paused = !1),
                                (o.audioEventHandler = function (t) {
                                    "ended" === t.type &&
                                        ((o._playing = !1), o.audio.removeEventListener("ended", o.audioEventHandler));
                                }),
                                (o.userinputEventHandler = function () {
                                    we.forEach(function (t) {
                                        window.removeEventListener(t, o.userinputEventHandler);
                                    }),
                                        o.audio.play();
                                }),
                                (o.allowMultiple = !1),
                                (o.type = "AudioPlayer"),
                                (o.audio = null !== (i = e.audio) && void 0 !== i ? i : o.audio),
                                (o.volume = null !== (n = e.volume) && void 0 !== n ? n : o.volume),
                                (o.loop = null !== (r = e.loop) && void 0 !== r ? r : o.loop),
                                o
                            );
                        }
                        return (
                            u(e, t),
                            (e.prototype.playAudio = function (t, e) {
                                void 0 === e && (e = null),
                                    !1 === this.clones.has(Symbol.for(t.src)) && this.cloneAudio(t);
                                var i = this.clones.get(Symbol.for(t.src));
                                i.currentTime > 0 && (i.currentTime = 0),
                                    (i.volume = null != e ? e : this.volume),
                                    i.play();
                            }),
                            (e.prototype.cloneAudio = function (t) {
                                var e = t.cloneNode();
                                this.clones.set(Symbol.for(t.src), e);
                            }),
                            (e.prototype.play = function () {
                                var t = this;
                                if (null !== this.audio && (!this._playing || !1 !== this._paused)) {
                                    if (this._paused) return (this._paused = !1), void this.audio.play();
                                    (this.audio.volume = this.volume),
                                        (this.audio.loop = this.loop),
                                        this.audio.addEventListener("ended", this.audioEventHandler),
                                        (this._playing = !0),
                                        this.audio
                                            .play()
                                            .then(function () {})
                                            .catch(function () {
                                                return we.forEach(function (e) {
                                                    return window.addEventListener(e, t.userinputEventHandler);
                                                });
                                            });
                                }
                            }),
                            (e.prototype.stop = function () {
                                this._playing &&
                                    (this.audio.pause(),
                                    (this.audio.currentTime = 0),
                                    this.audio.removeEventListener("ended", this.audioEventHandler),
                                    (this._playing = !1),
                                    (this._paused = !1));
                            }),
                            (e.prototype.pause = function () {
                                this._playing && !1 === this._paused && (this.audio.pause(), (this._paused = !0));
                            }),
                            (e.prototype.setActive = function (e) {
                                !1 === e && this.stop(), t.prototype.setActive.call(this, e);
                            }),
                            (e.prototype.destroy = function () {
                                this.stop(), t.prototype.destroy.call(this);
                            }),
                            e
                        );
                    })(Ct);
                !(function (t) {
                    (t[(t.Static = 0)] = "Static"), (t[(t.Dynamic = 1)] = "Dynamic");
                })(wt || (wt = {}));
                var je = "RigidBody",
                    Pe = (function (t) {
                        function e(e) {
                            var i,
                                r,
                                o = t.call(this) || this;
                            return (
                                (o.timeManager = _t.getSingleton("TimeManager")),
                                (o.gravityScale = 9.8),
                                (o.velocityScale = 60),
                                (o._colliderComponents = []),
                                (o._layersToCollide = []),
                                (o._velocity = new n()),
                                (o._gravity = new n(0, 1)),
                                (o.deltaGravity = new n()),
                                (o.deltaVelocity = new n()),
                                (o.collisions = []),
                                (o.penetrationPerDirection = { x: new Map(), y: new Map() }),
                                (o.updatePosition = !1),
                                (o.penetrationResolution = new n()),
                                (o.nextObjectPosition = new n()),
                                (o.type = "RigidBody"),
                                (o.allowMultiple = !1),
                                (o._rigidBodyType = e.rigidBodyType),
                                (o._layersToCollide =
                                    null !== (i = e.layersToCollide) && void 0 !== i ? i : o._layersToCollide),
                                o._gravity.set(0, null !== (r = e.gravity) && void 0 !== r ? r : o._gravity.y),
                                o
                            );
                        }
                        return (
                            u(e, t),
                            Object.defineProperty(e.prototype, "rigidBodyType", {
                                get: function () {
                                    return this._rigidBodyType;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "velocity", {
                                get: function () {
                                    return this._velocity;
                                },
                                set: function (t) {
                                    this._velocity.set(t.x, t.y);
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "gravity", {
                                get: function () {
                                    return this._gravity.y;
                                },
                                set: function (t) {
                                    this._gravity.set(this._gravity.x, t);
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (e.prototype.start = function () {
                                var t = this;
                                if (
                                    (this.gameObject.getComponents().forEach(function (e) {
                                        return e instanceof Qt && e.physics ? t._colliderComponents.push(e) : null;
                                    }),
                                    0 === this._colliderComponents.length)
                                )
                                    throw new w("RigidBody needs at least one Collider");
                            }),
                            (e.prototype.update = function () {
                                this._rigidBodyType !== wt.Static &&
                                    (this.applyGravity(),
                                    this.deltaVelocity.set(0, 0),
                                    this.applyVelocity("x"),
                                    this.applyReposition("x"),
                                    this.deltaVelocity.set(0, 0),
                                    this.applyVelocity("y"),
                                    this.applyReposition("y"));
                            }),
                            (e.prototype.applyGravity = function () {
                                this._gravity.y <= 0 ||
                                    (this._velocity = n.add(
                                        this._velocity,
                                        this._velocity,
                                        n.scale(
                                            this.deltaGravity,
                                            this._gravity,
                                            -this.gravityScale * this.timeManager.physicsDeltaTime
                                        )
                                    ));
                            }),
                            (e.prototype.applyVelocity = function (t) {
                                (this.deltaVelocity[t] =
                                    this._velocity[t] * this.velocityScale * this.timeManager.physicsDeltaTime),
                                    (0 === this.deltaVelocity.x && 0 === this.deltaVelocity.y) ||
                                        (this.gameObject.transform.position = n.add(
                                            this.nextObjectPosition,
                                            this.gameObject.transform.position,
                                            this.deltaVelocity
                                        ));
                            }),
                            (e.prototype.applyReposition = function (t) {
                                var e = this;
                                0 !== this._layersToCollide.length &&
                                    ((this.updatePosition = !1),
                                    this.penetrationResolution.set(
                                        this.gameObject.transform.position.x,
                                        this.gameObject.transform.position.y
                                    ),
                                    this.penetrationPerDirection[t].clear(),
                                    this.updateCollisions(),
                                    0 !== this.collisions.length &&
                                        (this.collisions.forEach(function (i) {
                                            !0 === i.remoteCollider.physics &&
                                                null !== i.remoteCollider.gameObject.getComponentByType("RigidBody") &&
                                                0 !== i.collisionData.displacementDirection[t] &&
                                                e.setPenetrationPerDirectionPerAxis(t, i);
                                        }),
                                        this.setPenetrationResolution(t),
                                        this.updatePosition &&
                                            (this.gameObject.transform.position = this.penetrationResolution)));
                            }),
                            (e.prototype.setPenetrationPerDirectionPerAxis = function (t, e) {
                                var i;
                                this.penetrationPerDirection[t].set(
                                    e.collisionData.displacementDirection[t],
                                    Math.max(
                                        null !==
                                            (i = this.penetrationPerDirection[t].get(
                                                e.collisionData.displacementDirection[t]
                                            )) && void 0 !== i
                                            ? i
                                            : 0,
                                        e.collisionData.penetration
                                    )
                                );
                            }),
                            (e.prototype.setPenetrationResolution = function (t) {
                                var e = this;
                                this.penetrationPerDirection[t].forEach(function (i, n) {
                                    (e.penetrationResolution[t] += n * i),
                                        0 !== e._velocity[t] &&
                                            Math.sign(e._velocity[t]) !== Math.sign(n) &&
                                            (e._velocity[t] = 0),
                                        (e.updatePosition = !0);
                                });
                            }),
                            (e.prototype.updateCollisions = function () {
                                var t = this;
                                (this.collisions = []),
                                    this._colliderComponents.forEach(function (e) {
                                        return t._layersToCollide.forEach(function (i) {
                                            return e.getCollisionsWithLayer(i).forEach(function (e) {
                                                return t.collisions.push(e);
                                            });
                                        });
                                    });
                            }),
                            e
                        );
                    })(St),
                    Ce = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (e.mousePressed = !1), (e.position = new n()), e;
                        }
                        return (
                            u(e, t),
                            (e.prototype.start = function () {
                                this.camera = this.getCurrentScene().gameCamera;
                            }),
                            (e.prototype.update = function () {
                                mt.mouse.leftButtonPressed &&
                                    !1 === this.mousePressed &&
                                    (n.scale(this.position, mt.mouse.positionInViewport, 1 / this.camera.zoom),
                                    n.add(this.position, this.position, this.camera.worldSpaceRect.center),
                                    n.round(this.position, this.position),
                                    console.log(
                                        "Space position: {x: " + this.position.x + ", y: " + this.position.y + "}"
                                    )),
                                    (this.mousePressed = mt.mouse.leftButtonPressed);
                            }),
                            e
                        );
                    })(Bt);
            },
            457: (t, e, i) => {
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.explosionAnimation = void 0);
                var n = i(467);
                e.explosionAnimation = function () {
                    return new n.Animation({
                        loop: !1,
                        speed: 0.5,
                        sprites: [0, 16, 32, 48, 64].map(function (t) {
                            return new n.Sprite({
                                image: n.AssetManager.getImage("image/explosion.png"),
                                slice: { x: t, y: 0, width: 16, height: 16 },
                                smooth: !1,
                            });
                        }),
                    });
                };
            },
            771: (t, e, i) => {
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.enemyBigAnimation = e.enemyMediumAnimation = e.enemySmallAnimation = void 0);
                var n = i(467);
                (e.enemySmallAnimation = function () {
                    return new n.Animation({
                        loop: !0,
                        speed: 0.5,
                        sprites: [0, 16].map(function (t) {
                            return new n.Sprite({
                                image: n.AssetManager.getImage("image/enemy-small.png"),
                                slice: { x: t, y: 0, width: 16, height: 16 },
                                smooth: !1,
                            });
                        }),
                    });
                }),
                    (e.enemyMediumAnimation = function () {
                        return new n.Animation({
                            loop: !0,
                            speed: 0.5,
                            sprites: [0, 32].map(function (t) {
                                return new n.Sprite({
                                    image: n.AssetManager.getImage("image/enemy-medium.png"),
                                    slice: { x: t, y: 0, width: 32, height: 16 },
                                    smooth: !1,
                                });
                            }),
                        });
                    }),
                    (e.enemyBigAnimation = function () {
                        return new n.Animation({
                            loop: !0,
                            speed: 0.5,
                            sprites: [0, 32].map(function (t) {
                                return new n.Sprite({
                                    image: n.AssetManager.getImage("image/enemy-big.png"),
                                    slice: { x: t, y: 0, width: 32, height: 32 },
                                    smooth: !1,
                                });
                            }),
                        });
                    });
            },
            293: (t, e, i) => {
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.playerFly = void 0);
                var n = i(467);
                e.playerFly = function () {
                    return new n.Animation({
                        loop: !0,
                        speed: 0.5,
                        sprites: [0, 24].map(function (t) {
                            return new n.Sprite({
                                image: n.AssetManager.getImage("image/ship.png"),
                                slice: { x: 32, y: t, width: 16, height: 24 },
                                smooth: !1,
                            });
                        }),
                    });
                };
            },
            727: function (t, e, i) {
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " + String(e) + " is not a constructor or null"
                                );
                            function i() {
                                this.constructor = t;
                            }
                            n(t, e),
                                (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.EnemyMovements = void 0);
                var o = i(467),
                    a = (function (t) {
                        function e(e, i) {
                            void 0 === i && (i = !1);
                            var n = t.call(this) || this;
                            return (
                                (n.direction = new o.Vector2(0, -1)),
                                (n.velocity = new o.Vector2()),
                                (n.position = new o.Vector2()),
                                (n.speed = e),
                                (n.zigzag = i),
                                n
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                this.zigzag && (this.direction.x = o.random(-1, 1));
                            }),
                            (e.prototype.update = function () {
                                this.zigzag && this.applyZigzag(),
                                    o.Vector2.scale(
                                        this.velocity,
                                        this.direction,
                                        this.speed * o.TimeManager.deltaTime
                                    ),
                                    (this.gameObject.transform.position = o.Vector2.add(
                                        this.position,
                                        this.gameObject.transform.position,
                                        this.velocity
                                    ));
                            }),
                            (e.prototype.applyZigzag = function () {
                                var t = this.gameObject.collider.getCollisionWithLayer("StageBounds");
                                t &&
                                    0 !== t.collisionData.displacementDirection.x &&
                                    (this.direction.x = t.collisionData.displacementDirection.x);
                            }),
                            e
                        );
                    })(o.Component);
                e.EnemyMovements = a;
            },
            541: function (t, e, i) {
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " + String(e) + " is not a constructor or null"
                                );
                            function i() {
                                this.constructor = t;
                            }
                            n(t, e),
                                (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.PlayerMovements = void 0);
                var o = i(467),
                    a = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (e.speed = 400), (e.velocity = new o.Vector2()), (e.position = new o.Vector2()), e;
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                (this.playerStatus = this.getComponentByName("PlayerStatus")),
                                    (this.inputController = this.findGameObjectByName("InputController"));
                            }),
                            (e.prototype.update = function () {
                                !1 !== this.playerStatus.alive &&
                                    (o.Vector2.scale(
                                        this.velocity,
                                        this.inputController.axes,
                                        this.speed * o.TimeManager.deltaTime
                                    ),
                                    (this.gameObject.transform.position = o.Vector2.add(
                                        this.position,
                                        this.gameObject.transform.position,
                                        this.velocity
                                    )));
                            }),
                            e
                        );
                    })(o.Component);
                e.PlayerMovements = a;
            },
            440: function (t, e, i) {
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " + String(e) + " is not a constructor or null"
                                );
                            function i() {
                                this.constructor = t;
                            }
                            n(t, e),
                                (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.PlayerStatus = void 0);
                var o = i(467),
                    a = new o.Vector2(0, -360),
                    s = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e.explosionAudio = o.AssetManager.getAudio("audio/player-explosion.mp3")),
                                (e.alive = !0),
                                (e.invulnerable = !1),
                                (e.lifes = 3),
                                (e.respawning = !1),
                                (e.respawnTimer = 0),
                                (e.invulnerabilityTimer = 0),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                (this.collider = this.getComponentByType(o.TYPE_BOX_COLLIDER)),
                                    (this.animator = this.getComponentByType(o.TYPE_ANIMATOR)),
                                    (this.spriteRenderer = this.getComponentByType(o.TYPE_SPRITE_RENDERER)),
                                    (this.audioPlayer = this.getComponentByType(o.TYPE_AUDIO_PLAYER)),
                                    (this.gameObject.transform.position = a),
                                    this.animator.playAnimation("Fly");
                            }),
                            (e.prototype.update = function () {
                                this.getHit(), this.respawn(), this.getInvulnerable();
                            }),
                            (e.prototype.getHit = function () {
                                this.alive &&
                                    !1 === this.invulnerable &&
                                    this.collider.collidesWithLayer("Enemy") &&
                                    ((this.alive = !1),
                                    this.animator.playAnimation("Explosion"),
                                    this.audioPlayer.playAudio(this.explosionAudio, 0.4),
                                    (this.lifes -= 1),
                                    this.lifes > 0 && (this.respawning = !0));
                            }),
                            (e.prototype.respawn = function () {
                                !1 !== this.respawning &&
                                    (this.respawnTimer < 2
                                        ? (this.respawnTimer += o.TimeManager.deltaTime)
                                        : ((this.respawning = !1), (this.respawnTimer = 0), this.getAlive()));
                            }),
                            (e.prototype.getAlive = function () {
                                (this.alive = !0),
                                    (this.invulnerable = !0),
                                    (this.gameObject.transform.position = a),
                                    this.animator.playAnimation("Fly");
                            }),
                            (e.prototype.getInvulnerable = function () {
                                !1 !== this.invulnerable &&
                                    ((this.invulnerabilityTimer += o.TimeManager.deltaTime),
                                    this.invulnerabilityTimer < 3
                                        ? (this.spriteRenderer.opacity = 0.5)
                                        : ((this.spriteRenderer.opacity = 1),
                                          (this.invulnerable = !1),
                                          (this.invulnerabilityTimer = 0)));
                            }),
                            e
                        );
                    })(o.Component);
                e.PlayerStatus = s;
            },
            49: function (t, e, i) {
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " + String(e) + " is not a constructor or null"
                                );
                            function i() {
                                this.constructor = t;
                            }
                            n(t, e),
                                (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.PlayerWeapon = void 0);
                var o = i(467),
                    a = i(186),
                    s = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e.projectiles = []),
                                (e.fireAudio = o.AssetManager.getAudio("audio/player-weapon.mp3")),
                                (e.fire = !1),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                (this.gameController = this.findGameObjectByName("GameController")),
                                    (this.playerStatus = this.getComponentByName("PlayerStatus")),
                                    (this.inputController = this.findGameObjectByName("InputController")),
                                    (this.audioPlayer = this.getComponentByType(o.TYPE_AUDIO_PLAYER)),
                                    this.setupProjectiles();
                            }),
                            (e.prototype.setupProjectiles = function () {
                                for (var t = 0; t < 50; t++) {
                                    var e = o.GameObjectManager.addGameObject(function () {
                                        return new a.PlayerProjectile();
                                    }, "PlayerProjectile" + t);
                                    e.setActive(!1), this.projectiles.push(e);
                                }
                            }),
                            (e.prototype.update = function () {
                                if (
                                    !this.gameController.paused &&
                                    !1 !== this.playerStatus.alive &&
                                    0 !== this.projectiles.length
                                ) {
                                    if (!1 === this.fire && this.inputController.fire) {
                                        var t = this.projectiles.pop();
                                        t.setActive(!0),
                                            (t.transform.position = this.gameObject.transform.position),
                                            (t.fire = !0),
                                            this.audioPlayer.playAudio(this.fireAudio, 0.1);
                                    }
                                    this.fire = this.inputController.fire;
                                }
                            }),
                            (e.prototype.restoreProjectile = function (t) {
                                t.setActive(!1), (t.fire = !1), this.projectiles.push(t);
                            }),
                            e
                        );
                    })(o.Component);
                e.PlayerWeapon = s;
            },
            731: function (t, e, i) {
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " + String(e) + " is not a constructor or null"
                                );
                            function i() {
                                this.constructor = t;
                            }
                            n(t, e),
                                (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.Background = void 0);
                var o = i(467),
                    a = (function (t) {
                        function e() {
                            var e = t.call(this) || this;
                            return (
                                (e.position = new o.Vector2()),
                                (e.moveSpeed = 240),
                                (e.startPosition = 396),
                                (e.endPosition = -148),
                                (e.layer = "Background"),
                                e.addComponent(function () {
                                    return new o.SpriteRenderer({
                                        sprite: new o.Sprite({
                                            image: o.AssetManager.getImage("image/desert-backgorund.png"),
                                            smooth: !1,
                                        }),
                                        tiled: new o.Vector2(1, 3),
                                    });
                                }),
                                (e.position.y = e.startPosition),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.update = function () {
                                (this.position.y -= this.moveSpeed * o.TimeManager.deltaTime),
                                    this.position.y <= this.endPosition && (this.position.y = this.startPosition),
                                    (this.transform.position = this.position);
                            }),
                            e
                        );
                    })(o.GameObject);
                e.Background = a;
            },
            870: function (t, e, i) {
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " + String(e) + " is not a constructor or null"
                                );
                            function i() {
                                this.constructor = t;
                            }
                            n(t, e),
                                (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.GameController = void 0);
                var o = i(467),
                    a = (function (t) {
                        function e() {
                            var e = t.call(this) || this;
                            return (
                                (e.muting = !1),
                                (e.muted = !0),
                                (e.score = 0),
                                (e.pausing = !1),
                                (e.paused = !1),
                                (e.restarting = !1),
                                (e.restartTimer = 0),
                                (e.audioPlayer = e.addComponent(function () {
                                    return new o.AudioPlayer({
                                        audio: o.AssetManager.getAudio("audio/spaceship-shooter.mp3"),
                                        loop: !0,
                                        volume: 0.5,
                                    });
                                })),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                (this.inputController = this.findGameObjectByName("InputController")),
                                    (this.playerStatus =
                                        this.findGameObjectByName("Player").getComponentByName("PlayerStatus")),
                                    (this.gameOverUI = this.findGameObjectByName("GameOverUI")),
                                    this.gameOverUI.setActive(!1),
                                    (this.pausing = !0),
                                    !1 === this.muted && this.audioPlayer.play();
                            }),
                            (e.prototype.update = function () {
                                0 === this.playerStatus.lifes &&
                                    (this.gameOverUI.setActive(!0), (this.restarting = !0)),
                                    this.pause(),
                                    this.mute(),
                                    this.restart();
                            }),
                            (e.prototype.pause = function () {
                                !1 === this.pausing &&
                                    this.inputController.pause &&
                                    ((this.paused = !this.paused),
                                    o.TimeManager.setTimeScale(this.paused ? 0 : 1),
                                    this.paused
                                        ? this.audioPlayer.pause()
                                        : !1 === this.muted && this.audioPlayer.play()),
                                    (this.pausing = this.inputController.pause);
                            }),
                            (e.prototype.mute = function () {
                                this.paused ||
                                    (!1 === this.muting &&
                                        this.inputController.mute &&
                                        ((this.muted = !this.muted),
                                        this.muted ? this.audioPlayer.stop() : this.audioPlayer.play()),
                                    (this.muting = this.inputController.mute));
                            }),
                            (e.prototype.restart = function () {
                                !1 !== this.restarting &&
                                    ((this.restartTimer += o.TimeManager.deltaTime),
                                    this.restartTimer >= 5 && o.SceneManager.loadScene("StartScene"));
                            }),
                            e
                        );
                    })(o.GameObject);
                e.GameController = a;
            },
            955: function (t, e, i) {
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " + String(e) + " is not a constructor or null"
                                );
                            function i() {
                                this.constructor = t;
                            }
                            n(t, e),
                                (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.InputController = void 0);
                var o = i(467),
                    a = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e.axes = new o.Vector2()),
                                (e.fire = !1),
                                (e.pause = !1),
                                (e.mute = !1),
                                (e.enter = !1),
                                (e.quit = !1),
                                (e.keyboard = o.InputManager.keyboard),
                                (e.gamepad = o.InputManager.gamepad.getGamepad(0)),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.update = function () {
                                (this.axes.x = this.keyboard.isPressed("ArrowLeft")
                                    ? -1
                                    : this.keyboard.isPressed("ArrowRight")
                                    ? 1
                                    : 0),
                                    (this.axes.y = this.keyboard.isPressed("ArrowDown")
                                        ? -1
                                        : this.keyboard.isPressed("ArrowUp")
                                        ? 1
                                        : 0),
                                    (this.fire = this.keyboard.isPressed("KeyF")),
                                    (this.pause = this.keyboard.isPressed("KeyP")),
                                    (this.mute = this.keyboard.isPressed("KeyM")),
                                    (this.enter = this.keyboard.isPressed("Enter")),
                                    (this.quit = this.keyboard.isPressed("KeyQ")),
                                    this.gamepad && this.updateGamepad();
                            }),
                            (e.prototype.updateGamepad = function () {
                                this.axes.set(
                                    this.gamepad.dpadRight ? 1 : this.gamepad.dpadLeft ? -1 : this.axes.x,
                                    this.gamepad.dpadUp ? 1 : this.gamepad.dpadDown ? -1 : this.axes.y
                                ),
                                    this.axes.set(
                                        this.gamepad.leftStickHorizontal > 0.1 ||
                                            this.gamepad.leftStickHorizontal < -0.1
                                            ? Math.sign(this.gamepad.leftStickHorizontal)
                                            : this.axes.x,
                                        this.gamepad.leftStickVertical > 0.1 || this.gamepad.leftStickVertical < -0.1
                                            ? Math.sign(this.gamepad.leftStickVertical)
                                            : this.axes.y
                                    ),
                                    (this.fire = this.gamepad.leftFace || this.fire),
                                    (this.pause = this.gamepad.start || this.pause),
                                    (this.enter = this.gamepad.start || this.enter),
                                    (this.mute = this.gamepad.back || this.mute);
                            }),
                            e
                        );
                    })(o.GameObject);
                e.InputController = a;
            },
            953: function (t, e, i) {
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " + String(e) + " is not a constructor or null"
                                );
                            function i() {
                                this.constructor = t;
                            }
                            n(t, e),
                                (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.StageBounds = void 0);
                var o = i(467),
                    a = (function (t) {
                        function e() {
                            var e = t.call(this) || this;
                            return (
                                (e.layer = "StageBounds"),
                                [-428, 428].forEach(function (t) {
                                    return e.addComponent(function () {
                                        return new o.BoxCollider({ width: 512, height: 10, offsetY: t, debug: !0 });
                                    });
                                }),
                                [-264, 264].forEach(function (t) {
                                    return e.addComponent(function () {
                                        return new o.BoxCollider({ width: 10, height: 840, offsetX: t, debug: !0 });
                                    });
                                }),
                                e.addComponent(function () {
                                    return new o.RigidBody({ rigidBodyType: o.RigidBodyType.Static });
                                }),
                                e
                            );
                        }
                        return r(e, t), e;
                    })(o.GameObject);
                e.StageBounds = a;
            },
            834: function (t, e, i) {
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " + String(e) + " is not a constructor or null"
                                );
                            function i() {
                                this.constructor = t;
                            }
                            n(t, e),
                                (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.Enemy = void 0);
                var o = i(467),
                    a = i(457),
                    s = i(354),
                    h = (function (t) {
                        function e(e, i, n, r) {
                            var s = t.call(this) || this;
                            return (
                                (s.explosionAudio = o.AssetManager.getAudio("audio/enemy-explosion.mp3")),
                                (s.position = new o.Vector2()),
                                (s.dead = !1),
                                (s.layer = "Enemy"),
                                (s.type = n),
                                (s.score = r),
                                (s.spriteRenderer = s.addComponent(function () {
                                    return new o.SpriteRenderer();
                                })),
                                (s.animator = s
                                    .addComponent(function () {
                                        return new o.Animator({ spriteRenderer: s.spriteRenderer });
                                    })
                                    .addAnimation("Explosion", a.explosionAnimation())),
                                (s.audioPlayer = s.addComponent(function () {
                                    return new o.AudioPlayer({ volume: 1 });
                                })),
                                s.position.set(e, i),
                                s
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                (this.gameController = this.findGameObjectByName("GameController")),
                                    (this.enemySpawner = this.findGameObjectByName("EnemySpawner")),
                                    this.animator.playAnimation("Fly");
                            }),
                            (e.prototype.update = function () {
                                !1 === this.dead &&
                                    this.transform.position.y <= s.ENEMY_RESTORE_Y &&
                                    this.enemySpawner.restoreEnemy(this),
                                    !1 === this.dead &&
                                        this.collider.collidesWithLayer("PlayerProjectile") &&
                                        (this.collider.setActive(!1),
                                        this.animator.playAnimation("Explosion"),
                                        this.audioPlayer.playAudio(this.explosionAudio),
                                        (this.dead = !0),
                                        (this.gameController.score += this.score)),
                                    this.dead &&
                                        !1 === this.animator.isPlayingAnimation("Explosion") &&
                                        this.enemySpawner.restoreEnemy(this);
                            }),
                            (e.prototype.respawn = function () {
                                (this.dead = !1), this.collider.setActive(!0), this.animator.playAnimation("Fly");
                            }),
                            e
                        );
                    })(o.GameObject);
                e.Enemy = h;
            },
            638: function (t, e, i) {
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " + String(e) + " is not a constructor or null"
                                );
                            function i() {
                                this.constructor = t;
                            }
                            n(t, e),
                                (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.EnemyBig = void 0);
                var o = i(467),
                    a = i(771),
                    s = i(727),
                    h = (function (t) {
                        function e(e, i) {
                            var n = t.call(this, e, i, "big", 100) || this;
                            return (
                                n.animator.addAnimation("Fly", a.enemyBigAnimation()),
                                (n.collider = n.addComponent(function () {
                                    return new o.BoxCollider({ width: 64, height: 64, debug: !0, physics: !1 });
                                })),
                                n.addComponent(function () {
                                    return new s.EnemyMovements(300);
                                }),
                                n
                            );
                        }
                        return r(e, t), e;
                    })(i(834).Enemy);
                e.EnemyBig = h;
            },
            180: function (t, e, i) {
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " + String(e) + " is not a constructor or null"
                                );
                            function i() {
                                this.constructor = t;
                            }
                            n(t, e),
                                (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.EnemyMedium = void 0);
                var o = i(467),
                    a = i(771),
                    s = i(727),
                    h = (function (t) {
                        function e(e, i) {
                            var n = t.call(this, e, i, "medium", 50) || this;
                            return (
                                n.animator.addAnimation("Fly", a.enemyMediumAnimation()),
                                (n.collider = n.addComponent(function () {
                                    return new o.BoxCollider({ width: 64, height: 32, debug: !0, physics: !1 });
                                })),
                                n.addComponent(function () {
                                    return new s.EnemyMovements(400, !0);
                                }),
                                n
                            );
                        }
                        return r(e, t), e;
                    })(i(834).Enemy);
                e.EnemyMedium = h;
            },
            871: function (t, e, i) {
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " + String(e) + " is not a constructor or null"
                                );
                            function i() {
                                this.constructor = t;
                            }
                            n(t, e),
                                (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.EnemySmall = void 0);
                var o = i(467),
                    a = i(771),
                    s = i(727),
                    h = (function (t) {
                        function e(e, i) {
                            var n = t.call(this, e, i, "small", 25) || this;
                            return (
                                n.animator.addAnimation("Fly", a.enemySmallAnimation()),
                                (n.collider = n.addComponent(function () {
                                    return new o.BoxCollider({ width: 32, height: 32, debug: !0, physics: !1 });
                                })),
                                n.addComponent(function () {
                                    return new s.EnemyMovements(500, !0);
                                }),
                                n
                            );
                        }
                        return r(e, t), e;
                    })(i(834).Enemy);
                e.EnemySmall = h;
            },
            354: function (t, e, i) {
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " + String(e) + " is not a constructor or null"
                                );
                            function i() {
                                this.constructor = t;
                            }
                            n(t, e),
                                (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.EnemySpawner = e.ENEMY_RESTORE_Y = void 0);
                var o = i(467),
                    a = i(638),
                    s = i(180),
                    h = i(871),
                    c = { small: 0.4, medium: 0.8, big: 1.8 },
                    u = [-200, 200];
                e.ENEMY_RESTORE_Y = -428;
                var l = (function (t) {
                    function e() {
                        var e = t.call(this) || this;
                        return (
                            (e.spawnPosition = new o.Vector2(0, 428)),
                            (e.pool = { small: [], medium: [], big: [] }),
                            (e.timer = { small: 0, medium: 0, big: 0 }),
                            e
                        );
                    }
                    return (
                        r(e, t),
                        (e.prototype.start = function () {
                            for (var t = 0; t < 10; t++)
                                this.addEnemyToPool(
                                    o.GameObjectManager.addGameObject(function () {
                                        return new h.EnemySmall(0, 0);
                                    }, "EnemySmall" + t)
                                ),
                                    this.addEnemyToPool(
                                        o.GameObjectManager.addGameObject(function () {
                                            return new s.EnemyMedium(0, 0);
                                        }, "EnemyMedium" + t)
                                    ),
                                    this.addEnemyToPool(
                                        o.GameObjectManager.addGameObject(function () {
                                            return new a.EnemyBig(0, 0);
                                        }, "EnemyBig" + t)
                                    );
                        }),
                        (e.prototype.addEnemyToPool = function (t) {
                            t.setActive(!1), this.pool[t.type].push(t);
                        }),
                        (e.prototype.update = function () {
                            this.updateTimers(), this.spawn("small"), this.spawn("medium"), this.spawn("big");
                        }),
                        (e.prototype.updateTimers = function () {
                            (this.timer.small += o.TimeManager.deltaTime),
                                (this.timer.medium += o.TimeManager.deltaTime),
                                (this.timer.big += o.TimeManager.deltaTime);
                        }),
                        (e.prototype.spawn = function (t) {
                            if (!(this.timer[t] < c[t]) && ((this.timer[t] = 0), 0 !== this.pool[t].length)) {
                                this.spawnPosition.x = o.random(u[0], u[1]);
                                var e = this.pool[t].pop();
                                (e.transform.position = this.spawnPosition), e.setActive(!0), e.respawn();
                            }
                        }),
                        (e.prototype.restoreEnemy = function (t) {
                            t.setActive(!1), this.pool[t.type].push(t);
                        }),
                        e
                    );
                })(o.GameObject);
                e.EnemySpawner = l;
            },
            517: function (t, e, i) {
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " + String(e) + " is not a constructor or null"
                                );
                            function i() {
                                this.constructor = t;
                            }
                            n(t, e),
                                (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.Player = void 0);
                var o = i(467),
                    a = i(457),
                    s = i(293),
                    h = i(440),
                    c = i(541),
                    u = i(49),
                    l = (function (t) {
                        function e() {
                            var e = t.call(this) || this;
                            return (
                                (e.layer = "Player"),
                                (e.spriteRenderer = e.addComponent(function () {
                                    return new o.SpriteRenderer();
                                })),
                                e
                                    .addComponent(function () {
                                        return new o.Animator({ spriteRenderer: e.spriteRenderer });
                                    })
                                    .addAnimation("Fly", s.playerFly())
                                    .addAnimation("Explosion", a.explosionAnimation()),
                                e.addComponent(function () {
                                    return new o.BoxCollider({ width: 32, height: 48, debug: !0 });
                                }),
                                e.addComponent(function () {
                                    return new o.RigidBody({
                                        rigidBodyType: o.RigidBodyType.Dynamic,
                                        layersToCollide: ["StageBounds"],
                                        gravity: 0,
                                    });
                                }),
                                e.addComponent(function () {
                                    return new o.AudioPlayer();
                                }),
                                e.addComponent(function () {
                                    return new c.PlayerMovements();
                                }, "PlayerMovements"),
                                e.addComponent(function () {
                                    return new u.PlayerWeapon();
                                }, "PlayerWeapon"),
                                e.addComponent(function () {
                                    return new h.PlayerStatus();
                                }, "PlayerStatus"),
                                e
                            );
                        }
                        return r(e, t), e;
                    })(o.GameObject);
                e.Player = l;
            },
            186: function (t, e, i) {
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " + String(e) + " is not a constructor or null"
                                );
                            function i() {
                                this.constructor = t;
                            }
                            n(t, e),
                                (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.PlayerProjectile = void 0);
                var o = i(467),
                    a = (function (t) {
                        function e() {
                            var e = t.call(this) || this;
                            return (
                                (e.fire = !1),
                                (e.position = new o.Vector2()),
                                (e.velocity = new o.Vector2()),
                                (e.layer = "PlayerProjectile"),
                                (e.spriteRenderer = e.addComponent(function () {
                                    return new o.SpriteRenderer();
                                })),
                                (e.animator = e
                                    .addComponent(function () {
                                        return new o.Animator({ spriteRenderer: e.spriteRenderer });
                                    })
                                    .addAnimation(
                                        "Default",
                                        new o.Animation({
                                            loop: !0,
                                            speed: 0.5,
                                            sprites: [0, 16].map(function (t) {
                                                return new o.Sprite({
                                                    image: o.AssetManager.getImage("image/laser-bolts.png"),
                                                    smooth: !1,
                                                    slice: { x: t, y: 16, width: 16, height: 16 },
                                                });
                                            }),
                                        })
                                    )),
                                (e.collider = e.addComponent(function () {
                                    return new o.BoxCollider({ width: 20, height: 32, physics: !1, debug: !0 });
                                })),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                (this.playerWeapon =
                                    this.findGameObjectByName("Player").getComponentByName("PlayerWeapon")),
                                    this.animator.playAnimation("Default");
                            }),
                            (e.prototype.update = function () {
                                this.fire &&
                                    ((this.velocity.y = 600 * o.TimeManager.deltaTime),
                                    (this.transform.position = o.Vector2.add(
                                        this.position,
                                        this.transform.position,
                                        this.velocity
                                    ))),
                                    this.collider.collidesWithLayer("StageBounds") &&
                                        this.playerWeapon.restoreProjectile(this),
                                    this.collider.collidesWithLayer("Enemy") &&
                                        this.playerWeapon.restoreProjectile(this);
                            }),
                            e
                        );
                    })(o.GameObject);
                e.PlayerProjectile = a;
            },
            525: function (t, e, i) {
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " + String(e) + " is not a constructor or null"
                                );
                            function i() {
                                this.constructor = t;
                            }
                            n(t, e),
                                (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.Loading = void 0);
                var o = i(467),
                    a = (function (t) {
                        function e() {
                            var e = t.call(this) || this;
                            return (
                                (e.ui = !0),
                                e.addComponent(function () {
                                    return new o.TextRenderer({
                                        color: "#FFFFFF",
                                        text: "LOADING",
                                        fontUrl: "font/PrStart.ttf",
                                        fontFamily: "PrStart",
                                        size: 16,
                                        lineSeparation: 4,
                                        pivot: "center",
                                    });
                                }),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                this.transform.position = new o.Vector2(160, -360);
                            }),
                            e
                        );
                    })(o.GameObject);
                e.Loading = a;
            },
            194: function (t, e, i) {
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " + String(e) + " is not a constructor or null"
                                );
                            function i() {
                                this.constructor = t;
                            }
                            n(t, e),
                                (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.StartMenu = void 0);
                var o = i(467),
                    a = (function (t) {
                        function e() {
                            var e = t.call(this) || this;
                            return (
                                (e.starting = !1),
                                (e.ui = !0),
                                (e.spriteRenderer = e.addComponent(function () {
                                    return new o.SpriteRenderer({
                                        sprite: new o.Sprite({
                                            image: o.AssetManager.getImage("image/ship.png"),
                                            slice: { x: 32, y: 0, width: 16, height: 24 },
                                            smooth: !1,
                                            scale: new o.Vector2(4, 4),
                                        }),
                                        offset: new o.Vector2(0, 200),
                                    });
                                })),
                                e.addComponent(function () {
                                    return new o.TextRenderer({
                                        color: "#FFFFFF",
                                        text: "PRESS ENTER TO START\nPRESS Q TO QUIT\n            \nMovements: Arrows\nFire     : F\nPause    : P\nMusic    : M\n",
                                        fontUrl: "font/PrStart.ttf",
                                        fontFamily: "PrStart",
                                        size: 18,
                                        lineSeparation: 4,
                                        pivot: "center",
                                    });
                                }),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                (this.inputController = this.findGameObjectByName("InputController")),
                                    (this.transform.position = new o.Vector2(0, 0));
                            }),
                            (e.prototype.update = function () {
                                if (
                                    ((this.spriteRenderer.rotation += 200 * o.TimeManager.deltaTime),
                                    !1 === this.starting && this.inputController.enter)
                                )
                                    return (this.starting = !0), void o.SceneManager.loadScene("GameScene");
                                this.inputController.quit && this.getCurrentScene().game.stop();
                            }),
                            e
                        );
                    })(o.GameObject);
                e.StartMenu = a;
            },
            950: function (t, e, i) {
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " + String(e) + " is not a constructor or null"
                                );
                            function i() {
                                this.constructor = t;
                            }
                            n(t, e),
                                (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.GameOver = void 0);
                var o = i(467),
                    a = (function (t) {
                        function e() {
                            var e = t.call(this) || this;
                            return (
                                (e.ui = !0),
                                (e.layer = "UI"),
                                e.addComponent(function () {
                                    return new o.TextRenderer({
                                        text: "GAME OVER",
                                        color: "#FFFFFF",
                                        fontUrl: "font/PrStart.ttf",
                                        fontFamily: "PrStart",
                                        size: 24,
                                        pivot: "center",
                                    });
                                }),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                this.transform.position = new o.Vector2(0, 0);
                            }),
                            e
                        );
                    })(o.GameObject);
                e.GameOver = a;
            },
            987: function (t, e, i) {
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " + String(e) + " is not a constructor or null"
                                );
                            function i() {
                                this.constructor = t;
                            }
                            n(t, e),
                                (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.LifeCounter = void 0);
                var o = i(467),
                    a = (function (t) {
                        function e() {
                            var e = t.call(this) || this;
                            return (
                                (e.ui = !0),
                                (e.layer = "UI"),
                                (e.spriteRenderer = e.addComponent(function () {
                                    return new o.SpriteRenderer({
                                        sprite: new o.Sprite({
                                            image: o.AssetManager.getImage("image/ship.png"),
                                            slice: { x: 32, y: 0, width: 16, height: 24 },
                                            smooth: !1,
                                            scale: new o.Vector2(1.5, 1.5),
                                        }),
                                        tiled: new o.Vector2(3, 1),
                                    });
                                })),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                (this.playerStatus =
                                    this.findGameObjectByName("Player").getComponentByName("PlayerStatus")),
                                    (this.transform.position = new o.Vector2(180, 360));
                            }),
                            (e.prototype.update = function () {
                                this.spriteRenderer.tiled.set(this.playerStatus.lifes, 1);
                            }),
                            e
                        );
                    })(o.GameObject);
                e.LifeCounter = a;
            },
            904: function (t, e, i) {
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " + String(e) + " is not a constructor or null"
                                );
                            function i() {
                                this.constructor = t;
                            }
                            n(t, e),
                                (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.Score = void 0);
                var o = i(467),
                    a = (function (t) {
                        function e() {
                            var e = t.call(this) || this;
                            return (
                                (e.ui = !0),
                                (e.layer = "UI"),
                                (e.textRenderer = e.addComponent(function () {
                                    return new o.TextRenderer({
                                        text: "00000000",
                                        color: "#FFFFFF",
                                        fontUrl: "font/PrStart.ttf",
                                        fontFamily: "PrStart",
                                        size: 20,
                                    });
                                })),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                (this.gameController = this.findGameObjectByName("GameController")),
                                    (this.transform.position = new o.Vector2(-220, 360));
                            }),
                            (e.prototype.update = function () {
                                this.textRenderer.text = this.gameController.score.toString();
                            }),
                            e
                        );
                    })(o.GameObject);
                e.Score = a;
            },
            324: function (t, e, i) {
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " + String(e) + " is not a constructor or null"
                                );
                            function i() {
                                this.constructor = t;
                            }
                            n(t, e),
                                (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.GameScene = void 0);
                var o = i(467),
                    a = i(731),
                    s = i(354),
                    h = i(870),
                    c = i(955),
                    u = i(517),
                    l = i(953),
                    p = i(987),
                    d = i(904),
                    f = i(950),
                    m = (function (t) {
                        function e() {
                            return (null !== t && t.apply(this, arguments)) || this;
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                (this.gameCamera.layers = [
                                    "Background",
                                    "StageBounds",
                                    "PlayerProjectile",
                                    "Player",
                                    "Enemy",
                                    "QuadTree",
                                    "UI",
                                ]),
                                    this.addGameObject(function () {
                                        return new c.InputController();
                                    }, "InputController"),
                                    this.addGameObject(function () {
                                        return new a.Background();
                                    }, "Background"),
                                    this.addGameObject(function () {
                                        return new l.StageBounds();
                                    }, "StageBounds"),
                                    this.addGameObject(function () {
                                        return new u.Player();
                                    }, "Player"),
                                    this.addGameObject(function () {
                                        return new s.EnemySpawner();
                                    }, "EnemySpawner"),
                                    this.addGameObject(function () {
                                        return new h.GameController();
                                    }, "GameController"),
                                    this.addGameObject(function () {
                                        return new d.Score();
                                    }, "ScoreUI"),
                                    this.addGameObject(function () {
                                        return new p.LifeCounter();
                                    }, "LifeCounterUI"),
                                    this.addGameObject(function () {
                                        return new f.GameOver();
                                    }, "GameOverUI");
                            }),
                            e
                        );
                    })(o.Scene);
                e.GameScene = m;
            },
            554: function (t, e, i) {
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " + String(e) + " is not a constructor or null"
                                );
                            function i() {
                                this.constructor = t;
                            }
                            n(t, e),
                                (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.LoadingScene = void 0);
                var o = i(467),
                    a = i(525),
                    s = (function (t) {
                        function e() {
                            var e = t.call(this) || this;
                            return (
                                o.AssetManager.createImage("image/desert-backgorund.png"),
                                o.AssetManager.createImage("image/ship.png"),
                                o.AssetManager.createImage("image/enemy-small.png"),
                                o.AssetManager.createImage("image/enemy-medium.png"),
                                o.AssetManager.createImage("image/enemy-big.png"),
                                o.AssetManager.createImage("image/laser-bolts.png"),
                                o.AssetManager.createImage("image/explosion.png"),
                                o.AssetManager.createAudio("audio/spaceship-shooter.mp3"),
                                o.AssetManager.createAudio("audio/player-weapon.mp3"),
                                o.AssetManager.createAudio("audio/player-explosion.mp3"),
                                o.AssetManager.createAudio("audio/enemy-explosion.mp3"),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                this.addGameObject(function () {
                                    return new a.Loading();
                                }, "LoadingUI");
                            }),
                            (e.prototype.update = function () {
                                o.AssetManager.getAssetsLoaded() && o.SceneManager.loadScene("StartScene");
                            }),
                            e
                        );
                    })(o.Scene);
                e.LoadingScene = s;
            },
            485: function (t, e, i) {
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " + String(e) + " is not a constructor or null"
                                );
                            function i() {
                                this.constructor = t;
                            }
                            n(t, e),
                                (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.StartScene = void 0);
                var o = i(467),
                    a = i(955),
                    s = i(194),
                    h = (function (t) {
                        function e() {
                            return (null !== t && t.apply(this, arguments)) || this;
                        }
                        return (
                            r(e, t),
                            (e.prototype.start = function () {
                                this.addGameObject(function () {
                                    return new a.InputController();
                                }, "InputController"),
                                    this.addGameObject(function () {
                                        return new s.StartMenu();
                                    }, "StartMenu");
                            }),
                            e
                        );
                    })(o.Scene);
                e.StartScene = h;
            },
        },
        s = {};
    function h(t) {
        var e = s[t];
        if (void 0 !== e) return e.exports;
        var i = (s[t] = { exports: {} });
        return a[t].call(i.exports, i, i.exports, h), i.exports;
    }
    (h.d = (t, e) => {
        for (var i in e) h.o(e, i) && !h.o(t, i) && Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
    }),
        (h.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (h.r = (t) => {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (t = h(467)),
        (e = h(324)),
        (i = h(485)),
        (n = h(554)),
        (r = {
            containerNode: document.getElementById("app"),
            gameWidth: 512,
            gameHeight: 840,
            debugEnabled: !1,
            spriteDefaultScale: new t.Vector2(2, 2),
            collisions: {
                debugQuadTree: !0,
                quadTreeBounds: new t.Rectangle(-260, -450, 520, 900),
                method: t.CollisionMethodConfig.AABB,
            },
        }),
        (o = new t.Game(r)).addScene(
            "LoadingScene",
            function () {
                return new n.LoadingScene();
            },
            !0
        ),
        o.addScene("StartScene", function () {
            return new i.StartScene();
        }),
        o.addScene("GameScene", function () {
            return new e.GameScene();
        }),
        o.run();
})();
