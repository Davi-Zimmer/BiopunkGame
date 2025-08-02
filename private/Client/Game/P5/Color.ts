interface colorInterface {
    alpha: number
    coords: [ number, number, number ]
    
}

export interface Color {
    mode: 'rgb'
    _color: colorInterface
}