type anyData = any | undefined

export function debounce( callback: ( data: anyData ) => void, delay: number ){

    let timeout: NodeJS.Timeout

    return ( data:anyData ) => {
        
        clearTimeout( timeout )

        timeout = setTimeout( () => callback( data ), delay )

    }

}