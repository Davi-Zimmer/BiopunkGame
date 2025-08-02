import { p5 } from "../Types/P5.js";
import { BaseObject } from "./Engine/Objects/BaseObject.js";

class Game {

    private entities: BaseObject[] = []

    constructor(){

    }

    public addEntity( entity: BaseObject ){

        this.entities.push( entity )

        this.sortEntities()
    }

    public sortEntities(){
        const sorted = this.entities.sort( ( a, b ) => a.getZ() - b.getZ() )

        this.entities = sorted

    }

    public createEntity( x: number=0, y: number=0, w: number, h: number, z: number ){
        const entity = new BaseObject({
            x,
            y,
            w,
            h,
            z
        })

        this.entities.push( entity ) 
    }

    public update( s: p5 ) {

        s.background( 0 )

        // s.arc( 50, 50, 50, 50, 0, Math.PI * 2 )


        for( const entity of this.entities ){

            entity.tick()
            entity.render( s )

        }
    }

}

export default Game