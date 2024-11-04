import { Input, KeyCode } from "./input";
import { Vec2 } from "./Vec2";

export class Player {
    private _position: Vec2;
    private _width: number;
    private _height: number;
    private _moveSpeed: number;

    public constructor(x: number, y: number, width: number, height: number) {
        this._position = new Vec2(x, y);
        this._width = width;
        this._height = height;
        this._moveSpeed = 200;
    }

    public update(deltaTime: number): void {
        let moveDir = Vec2.zero;
        if (Input.GetKey(KeyCode.W)) {
            moveDir.y = -1;
        }
        if (Input.GetKey(KeyCode.S)) {
            moveDir.y = 1;
        }
        if (Input.GetKey(KeyCode.A)) {
            moveDir.x = -1;
        }
        if (Input.GetKey(KeyCode.D)) {
            moveDir.x = 1;
        }
        if (Input.GetKeyDown(KeyCode.Space)) {
            this._position.x = window.innerWidth / 2;
            this._position.y = window.innerHeight / 2;
        }
        // normalize so you dont go faster when you press both up and right
        moveDir.normalize(); 
        // use magnitudeSqr as much as possible
        if (moveDir.magnitudeSqr() > 0) {
            this._position.x += moveDir.x * this._moveSpeed * deltaTime;
            this._position.y += moveDir.y * this._moveSpeed * deltaTime;
        }
    }

    public render(ctx: CanvasRenderingContext2D): void {
        ctx.fillRect(
            this._position.x,
            this._position.y,
            this._width,
            this._height
        );
        ctx.fillStyle = "orange";
    }
}
