import { SimpleRect } from "./SimpleRect.js"

export interface RectProps extends SimpleRect {
    z?: number
    scale?: number
}