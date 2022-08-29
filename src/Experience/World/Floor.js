import * as THREE from 'three'
import { DoubleSide } from 'three'
import Experience from '../Experience'

export default class Floor
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setGeometry()
        this.setMaterial()
        this.setMesh()
    }

    setGeometry()
    {
        this.geometry = new THREE.PlaneGeometry(50, 50)
    }

    setMaterial()
    {
        this.material = new THREE.MeshBasicMaterial({
            color: 0x432818,
            side: DoubleSide
        })
    }

    setMesh()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.set(0, -0.5, -10)
        this.mesh.rotation.x = 0.5 * Math.PI
        this.scene.add(this.mesh)
    }
}