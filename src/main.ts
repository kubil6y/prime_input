import "./style.css";
import { KeyCode, KeyCodeReverseMap } from "./KeyCode";

const canvas = document.querySelector("canvas")!;
let timestamp: number = 0;

class Input {
    private static _keydownMap: Map<KeyCode, boolean> = new Map();
    private static _keyupMap: Map<KeyCode, boolean> = new Map();
    private static _pressMap: Map<KeyCode, boolean> = new Map();

    public static init(): void {
        for (const key in KeyCode) {
            Input._keydownMap.set(KeyCode[key as keyof typeof KeyCode], false);
            Input._keyupMap.set(KeyCode[key as keyof typeof KeyCode], false);
            Input._pressMap.set(KeyCode[key as keyof typeof KeyCode], false);
        }
        window.addEventListener("keydown", Input.handleKeydown);
        window.addEventListener("keyup", Input.handleKeyup);
    }

    // KeyDown and KeyUp are frame based inputs.
    // They should be cleanup at the of the frame in game loop
    // TODO: Call this function at the end of your game loop.
    public static cleanUp(): void {
        for (const [k] of Input._keyupMap) {
            Input._keyupMap.set(k, false);
        }
        for (const [k] of Input._keydownMap) {
            Input._keydownMap.set(k, false);
        }
    }

    public static GetKey(keyCode: KeyCode): boolean {
        return Input._pressMap.get(keyCode);
    }

    public static GetKeyUp(keyCode: KeyCode): boolean {
        return Input._keyupMap.get(keyCode);
    }

    public static GetKeyDown(keyCode: KeyCode): boolean {
        return Input._keydownMap.get(keyCode);
    }

    public static handleKeydown(e: KeyboardEvent): void {
        Input._keydownMap.set(KeyCodeReverseMap[e.key], true);
        Input._pressMap.set(KeyCodeReverseMap[e.key], true);
    }

    public static handleKeyup(e: KeyboardEvent): void {
        Input._keydownMap.set(KeyCodeReverseMap[e.key], false);
        Input._keyupMap.set(KeyCodeReverseMap[e.key], true);
        Input._pressMap.set(KeyCodeReverseMap[e.key], false);
    }

    public static dispose(): void {
        window.removeEventListener("keydown", Input.handleKeydown);
        window.removeEventListener("keyup", Input.handleKeyup);
    }
}

Input.init();
