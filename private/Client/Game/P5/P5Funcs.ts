import { p5 } from "../../Types/P5.js"

export function createRenderer( setup: ( s:p5 ) => void, draw: ( s:p5 ) => void) {

    //@ts-ignore
    new p5((s) => {
        s.setup = () => setup( s )
        s.draw = () => draw( s )
    })
}