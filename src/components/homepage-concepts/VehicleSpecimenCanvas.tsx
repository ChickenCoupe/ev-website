'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import type { VehicleStage } from './conceptData'

type VehicleSpecimenCanvasProps = {
  stage: VehicleStage
}

type Part = {
  mesh: THREE.Object3D
  base: THREE.Vector3
  targets: Record<VehicleStage, THREE.Vector3>
}

const stageRotation: Record<VehicleStage, number> = {
  shell: -0.5,
  battery: 0.12,
  compute: 0.66,
  assembled: -0.18,
}

function lerpVector(current: THREE.Vector3, target: THREE.Vector3, alpha: number) {
  current.x = THREE.MathUtils.lerp(current.x, target.x, alpha)
  current.y = THREE.MathUtils.lerp(current.y, target.y, alpha)
  current.z = THREE.MathUtils.lerp(current.z, target.z, alpha)
}

export default function VehicleSpecimenCanvas({ stage }: VehicleSpecimenCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const stageRef = useRef(stage)

  useEffect(() => {
    stageRef.current = stage
  }, [stage])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100)
    camera.position.set(0, 1.42, 7.8)

    const vehicle = new THREE.Group()
    vehicle.rotation.set(-0.08, stageRotation.shell, 0)
    scene.add(vehicle)

    scene.add(new THREE.HemisphereLight(0xffffff, 0xb9b2a5, 1.7))

    const stripLight = new THREE.RectAreaLight(0xffffff, 4.2, 6, 2)
    stripLight.position.set(0, 4.6, 4.8)
    stripLight.lookAt(0, 0, 0)
    scene.add(stripLight)

    const redLight = new THREE.PointLight(0xb31b1b, 42, 12)
    redLight.position.set(-3.2, 1.1, 2.4)
    scene.add(redLight)

    const shellMaterial = new THREE.MeshPhysicalMaterial({
      color: '#d8d7d0',
      roughness: 0.2,
      metalness: 0.42,
      clearcoat: 0.5,
      clearcoatRoughness: 0.16,
    })
    const redMaterial = new THREE.MeshPhysicalMaterial({
      color: '#b31b1b',
      roughness: 0.25,
      metalness: 0.35,
      clearcoat: 0.7,
      clearcoatRoughness: 0.2,
    })
    const darkMaterial = new THREE.MeshStandardMaterial({
      color: '#0f1112',
      roughness: 0.55,
      metalness: 0.38,
    })
    const batteryMaterial = new THREE.MeshStandardMaterial({
      color: '#23262b',
      roughness: 0.35,
      metalness: 0.66,
      emissive: '#4a0909',
      emissiveIntensity: 0.28,
    })
    const computeMaterial = new THREE.MeshStandardMaterial({
      color: '#27333e',
      roughness: 0.28,
      metalness: 0.52,
      emissive: '#102133',
      emissiveIntensity: 0.3,
    })
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: '#dce9f1',
      roughness: 0.08,
      metalness: 0.1,
      transparent: true,
      opacity: 0.62,
      transmission: 0.18,
    })
    const lineMaterial = new THREE.LineBasicMaterial({
      color: '#161616',
      transparent: true,
      opacity: 0.34,
    })

    const parts: Part[] = []
    const addPart = (
      mesh: THREE.Object3D,
      base: [number, number, number],
      targets: Partial<Record<VehicleStage, [number, number, number]>>,
    ) => {
      const basePosition = new THREE.Vector3(...base)
      mesh.position.copy(basePosition)
      parts.push({
        mesh,
        base: basePosition,
        targets: {
          shell: new THREE.Vector3(...(targets.shell ?? base)),
          battery: new THREE.Vector3(...(targets.battery ?? base)),
          compute: new THREE.Vector3(...(targets.compute ?? base)),
          assembled: new THREE.Vector3(...(targets.assembled ?? base)),
        },
      })
      vehicle.add(mesh)
    }

    const body = new THREE.Mesh(new THREE.BoxGeometry(4.9, 0.48, 1.34, 4, 1, 1), shellMaterial)
    addPart(body, [0, 0, 0], {
      battery: [0, 0.34, -0.18],
      compute: [0, 0.18, -0.12],
    })

    const nose = new THREE.Mesh(new THREE.CapsuleGeometry(0.54, 1.2, 8, 24), shellMaterial)
    nose.scale.set(0.72, 0.32, 1.02)
    nose.rotation.z = Math.PI / 2
    addPart(nose, [2.8, 0.02, 0], {
      battery: [3.08, 0.18, 0],
      compute: [2.96, 0.14, 0.1],
    })

    const rear = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.54, 1.38), darkMaterial)
    addPart(rear, [-2.62, 0.02, 0], {
      battery: [-2.95, 0.22, 0],
      compute: [-2.7, 0.12, 0.1],
    })

    const canopy = new THREE.Mesh(new THREE.BoxGeometry(1.22, 0.54, 0.86), glassMaterial)
    addPart(canopy, [0.72, 0.55, 0], {
      compute: [0.78, 0.86, 0.16],
    })

    const battery = new THREE.Mesh(new THREE.BoxGeometry(1.38, 0.22, 0.9), batteryMaterial)
    addPart(battery, [-0.72, 0.35, 0], {
      shell: [-0.72, 0.28, 0],
      battery: [-0.72, 1.15, -0.04],
      compute: [-0.92, 0.72, -0.1],
    })

    const compute = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.32, 0.58), computeMaterial)
    addPart(compute, [1.36, 0.46, 0], {
      compute: [1.7, 1.2, 0.1],
      battery: [1.44, 0.72, 0.08],
    })

    const sensor = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.46, 24), redMaterial)
    sensor.rotation.x = Math.PI / 2
    addPart(sensor, [1.82, 0.78, 0], {
      compute: [2.05, 1.5, 0.16],
    })

    const accent = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.055, 1.48), redMaterial)
    addPart(accent, [0.3, 0.31, 0], {
      battery: [0.3, 0.78, 0],
      compute: [0.3, 0.6, 0],
    })

    const wing = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.08, 1.82), darkMaterial)
    addPart(wing, [-2.96, 0.44, 0], {
      battery: [-3.12, 0.86, 0],
      compute: [-3.0, 0.62, 0],
    })

    const wheelGeometry = new THREE.CylinderGeometry(0.42, 0.42, 0.24, 40)
    const wheelPositions: [number, number, number][] = [
      [-1.55, -0.38, -0.84],
      [1.58, -0.38, -0.84],
      [-1.55, -0.38, 0.84],
      [1.58, -0.38, 0.84],
    ]
    wheelPositions.forEach((position, index) => {
      const wheel = new THREE.Mesh(wheelGeometry, darkMaterial)
      wheel.rotation.x = Math.PI / 2
      const targetOffset = index < 2 ? -0.18 : 0.18
      addPart(wheel, position, {
        battery: [position[0], position[1] - 0.08, position[2] + targetOffset],
        compute: [position[0], position[1] - 0.05, position[2] + targetOffset],
      })
    })

    const axisGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-3.8, -0.72, -1.4),
      new THREE.Vector3(3.8, -0.72, -1.4),
      new THREE.Vector3(3.8, -0.72, 1.4),
      new THREE.Vector3(-3.8, -0.72, 1.4),
      new THREE.Vector3(-3.8, -0.72, -1.4),
    ])
    const axis = new THREE.Line(axisGeometry, lineMaterial)
    vehicle.add(axis)

    const resize = () => {
      const parent = canvas.parentElement
      const width = parent?.clientWidth || canvas.clientWidth || 1
      const height = parent?.clientHeight || canvas.clientHeight || 1
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    const resizeObserver = new ResizeObserver(resize)
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement)
    resize()

    let frameId = 0
    const render = () => {
      const currentStage = stageRef.current
      const alpha = prefersReducedMotion ? 1 : 0.085
      const targetRotation = stageRotation[currentStage]

      vehicle.rotation.y = THREE.MathUtils.lerp(vehicle.rotation.y, targetRotation, alpha)
      vehicle.rotation.x = THREE.MathUtils.lerp(vehicle.rotation.x, currentStage === 'assembled' ? -0.04 : -0.1, alpha)

      parts.forEach((part) => {
        lerpVector(part.mesh.position, part.targets[currentStage], alpha)
      })

      batteryMaterial.emissiveIntensity = currentStage === 'battery' ? 0.62 : 0.28
      computeMaterial.emissiveIntensity = currentStage === 'compute' ? 0.72 : 0.3
      redLight.intensity = currentStage === 'assembled' ? 34 : 46

      if (!prefersReducedMotion) {
        vehicle.position.y = Math.sin(performance.now() * 0.0012) * 0.045
      }

      camera.lookAt(0, 0.2, 0)
      renderer.render(scene, camera)
      frameId = window.requestAnimationFrame(render)
    }

    frameId = window.requestAnimationFrame(render)

    return () => {
      window.cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
      axisGeometry.dispose()
      lineMaterial.dispose()
      wheelGeometry.dispose()
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose()
          const material = object.material
          if (Array.isArray(material)) {
            material.forEach((item) => item.dispose())
          } else {
            material.dispose()
          }
        }
      })
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="vehicle-specimen-canvas" aria-hidden="true" />
}
