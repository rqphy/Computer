import Experience from '../Experience'
import Environment from './Environment'
import Computer from './Computer'
import Floor from './Floor'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup if source
            this.computer = new Computer()
        })
        
        // Setup if no source
        this.environment = new Environment()
        this.floor = new Floor()
    }
    
    update()
    {
        // Here the update functions
    }
}