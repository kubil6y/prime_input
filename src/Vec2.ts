export class Vec2 {
    public x: number;
    public y: number;

    public constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    public static get zero() {
        return new Vec2();
    }

    public equals(v: Vec2, epsilon = 1e-6): boolean {
        return (
            Math.abs(this.x - v.x) < epsilon && Math.abs(this.y - v.y) < epsilon
        );
    }

    public magnitude(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    public magnitudeSqr(): number {
        return this.x * this.x + this.y * this.y;
    }

    public normalize(): Vec2 {
        const m = this.magnitude();
        const epsilon = 1e-6;
        if (m < epsilon) {
            return Vec2.zero;
        }
        this.x /= m;
        this.y /= m;
        return this;
    }

    public normalized(): Vec2 {
        const m = this.magnitude();
        const epsilon = 1e-6;
        if (m < epsilon) {
            return Vec2.zero;
        }
        return new Vec2(this.x / m, this.y / m);
    }

    // 90 degree
    public normal(): Vec2 {
        return new Vec2(this.y, -this.x).normalized();
    }

    public static add(a: Vec2, b: Vec2): Vec2 {
        return new Vec2(a.x + b.x, a.y + b.y);
    }

    public add(v: Vec2): void {
        this.x += v.x;
        this.y += v.y;
    }

    public static sub(a: Vec2, b: Vec2): Vec2 {
        return new Vec2(a.x - b.x, a.y - b.y);
    }

    public sub(v: Vec2): void {
        this.x -= v.x;
        this.y -= v.y;
    }

    public scale(n: number): Vec2 {
        this.x *= n;
        this.y *= n;
        return this;
    }

    public rotate(angle: number): Vec2 {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return new Vec2(
            this.x * cos - this.y * sin,
            this.x * sin + this.y * cos
        );
    }

    public rotateInPlace(angle: number): Vec2 {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const x = this.x * cos - this.y * sin;
        const y = this.x * sin + this.y * cos;
        this.x = x;
        this.y = y;
        return this;
    }

    public dot(v: Vec2): number {
        return this.x * v.x + this.y * v.y;
    }

    public cross(v: Vec2): number {
        return this.x * v.y - this.y * v.x;
    }

    public distanceTo(v: Vec2): number {
        return Math.sqrt((this.x - v.x) ** 2 + (this.y - v.y) ** 2);
    }

    public angleTo(v: Vec2): number {
        const normalizedThis = this.normalized();
        const normalizedV = v.normalized();
        const dotProduct = normalizedThis.dot(normalizedV);

        // Clamp the dot product to avoid NaN issues with Math.acos
        const clampedDot = Math.max(-1, Math.min(1, dotProduct));
        const angle = Math.acos(clampedDot);

        const crossProduct = this.cross(v);
        return crossProduct < 0 ? -angle : angle;
    }
}
