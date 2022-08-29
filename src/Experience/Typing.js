import * as THREE from 'three'
import Experience from './Experience'

export default class Typing
{
    constructor()
    {
        this.experience = new Experience()
        this.setEventListener()
    }

    handleKeydown = (_event) =>
    {
        console.log(String.fromCharCode(_event.keyCode))
    }

    setEventListener = () =>
    {
        window.addEventListener('keydown', this.handleKeydown)
    }
}