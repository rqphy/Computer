import * as THREE from 'three'
import Experience from '../Experience'

export default class Computer
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resource = this.resources.items.computer
        this.setModel()
    }

    setModel()
    {
        this.model = this.resource.scene

        this.model.scale.set(0.08, 0.08, 0.08)
        // this.model.rotation.y = 0.2 * Math.PI
        this.model.position.set(-0.2, -0.5, 0)

        this.scene.add(this.model)

        this.model.traverse((child) =>
        {
            if(child instanceof THREE.Mesh)
            {
                child.castShadow = true
            }
        })
    }
}