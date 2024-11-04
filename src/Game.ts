import { Input } from "./input";
import { Player } from "./Player";

export class Game {
    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _lastFrameTime: number = 0;
    private _player: Player;

    public constructor() { }

    public setup(): void {
        this._canvas = document.querySelector("canvas")!;
        this._ctx = this._canvas.getContext("2d");
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
        this._player = new Player(
            window.innerWidth / 2,
            window.innerHeight / 2,
            50,
            50
        );
        Input.init();
    }

    public run = (timestamp: number = 0): void => {
        const deltaTime = (timestamp - this._lastFrameTime) / 1000;
        this._lastFrameTime = timestamp;
        this.updateControl(deltaTime);
        this.renderControl();
        requestAnimationFrame(this.run);
    };

    public update(deltaTime: number): void {
        // TODO: Update world here..

        // For multiple scenes(levels) create a World/Scene class.
        // Each Scene will have Actors/Entities
        // Load levels and switch between them...
        // this._currentWorld.update(deltaTime);
        this._player.update(deltaTime);
    }

    public render(): void {
        // TODO: Render world here...
        this._player.render(this._ctx);
    }

    private updateControl(deltaTime: number): void {
        this.update(deltaTime);
        Input.cleanUp(); // Cleans up one frame keys for keydown/keyup
    }

    private renderControl(): void {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this.render();
    }
}
