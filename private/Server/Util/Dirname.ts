import { fileURLToPath } from 'url'
import path from 'path'

export default function getDirname(){

    const filePath = fileURLToPath( import.meta.url )

    const dirname = path.dirname( filePath )

    return dirname
}