// src/components/FloatingGrid.jsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import { Suspense } from 'react'
import * as THREE from 'three'

function ProductCard({ position, color }) {
  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <boxGeometry args={[1.5, 2, 0.1]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  )
}

export default function FloatingGrid() {
  const rows = 4
  const cols = 6
  const gap = 2
  const cards = []

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      cards.push({
        position: [x * gap - (cols * gap) / 2, y * gap - (rows * gap) / 2, 0],
        color: `hsl(${Math.random() * 360}, 70%, 60%)`
      })
    }
  }

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        {cards.map((card, index) => (
          <ProductCard key={index} {...card} />
        ))}
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  )
}
