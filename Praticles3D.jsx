import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function FloatingParticles() {
    const mesh = useRef();
    const count = 200;

    const positions = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
        }
        return positions;
    }, []);

    useFrame((state) => {
        mesh.current.rotation.x = state.clock.elapsedTime * 0.05;
        mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#00d4ff"
                transparent
                opacity={0.8}
                sizeAttenuation
            />
        </points>
    );
}

export default function Particles3D() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <FloatingParticles />
            </Canvas>
        </div>
    );
}