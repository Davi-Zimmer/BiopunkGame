import { KeyEvent } from "../Game/Engine/Events/KeyEvent.js"

export type KeyFunc = ( e: KeyEvent ) => void 

export interface KeyHandlersInterface {
    onPress: Set< KeyFunc >
    onDown : Set< KeyFunc >
    onUp   : Set< KeyFunc >
    pressed: boolean
}