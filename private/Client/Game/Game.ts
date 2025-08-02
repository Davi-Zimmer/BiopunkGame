import { p5 } from "../Types/P5.js";

class Game {

    constructor(){

    }

    public update( s: p5 ) {

        s.background( 0 )

        s.arc( 50, 50, 50, 50, 0, Math.PI * 2 )


    }

}

export default Game