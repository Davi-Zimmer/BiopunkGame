export interface p5 {
    constructor: ( sketch?: ( p: p5 ) => void ) => void

    Color: any
    Image: any
    Vector: any
    Renderer: any

    canvas: HTMLCanvasElement

    background (color: p5['Color']) : void
    background (colorstring: string, a: number) : void
    background (gray: number, a: number): void
    background (v1: number, v2: number, v3: number, a: number): void
    background (values: number[]): void
    background (image: p5['Image'], a: number): void



    createCanvas(width: number, height: number, renderer: any, canvas: HTMLCanvasElement): p5['Renderer']
    createCanvas(width: number, height: number, canvas: HTMLCanvasElement): p5['Renderer']

    resizeCanvas(width: number, height: number, noRedraw: boolean): void


    applyMatrix(arr: Array<number>): void
    applyMatrix(a: number, b: number, c: number, d: number, e: number, f: number): void
    applyMatrix(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number): void
    resetMatrix(): void


    rotate(angle: number, axis: p5['Vector'] | number[]): void
    rotateX(angle: number): void
    rotateY(angle: number): void
    rotateZ(angle: number): void

    scale(s: number | p5['Vector'] | number[], y: number, z: number): void
    scale(scales: p5['Vector'] | number[]): void



    draw: () => void
    setup: () => void


    arc(x: number, y: number, w: number, h: number, start: number, stop: number ): void

}