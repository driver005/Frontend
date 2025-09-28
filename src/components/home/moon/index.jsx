import React, { Suspense, memo, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import {
    useGLTF,
    OrbitControls,
    PerspectiveCamera,
    Stats,
    Center,
    AccumulativeShadows,
    RandomizedLight,
    CameraControls,
    Stage,
    Environment,
} from '@react-three/drei';
import './styles.css';
import { Model } from './Model';
import { useMediaQuery } from 'react-responsive';

const Shadows = memo(() => (
    <AccumulativeShadows
        temporal
        frames={100}
        color='#9d4b4b'
        colorBlend={0.5}
        alphaTest={0.9}
        scale={20}>
        <RandomizedLight amount={8} radius={4} position={[5, 5, -10]} />
    </AccumulativeShadows>
));

export default function Moon() {
    const isNotMobile = useMediaQuery({
        query: '(min-width: 768px)',
    });
    return (
        <div className='wrapper'>
            <Suspense fallback={null}>
                <Canvas
                    shadows
                    dpr={[1, 2]}
                    linear
                    frameloop={isNotMobile ? 'demand' : 'never'}
                    hidden={!isNotMobile}>
                    <Environment
                        background={false} // can be true, false or "only" (which only sets the background) (default: false)
                        blur={0} // blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
                        near={1}
                        far={1000}
                        resolution={256}
                        preset='sunset'
                    />
                    <Center>
                        <Model />
                    </Center>
                    <PerspectiveCamera
                        makeDefault
                        fov={75}
                        zoom={1}
                        near={1}
                        far={1000}
                        position={[0, 0, 16]}></PerspectiveCamera>

                    {/*<Stats />
                    <OrbitControls autoRotate enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enableRotate={false} autoRotateSpeed={0.3} />
                    
                    <fog attach="fog" args={['#272730', 16, 30]} />
                    <ambientLight intensity={1} />
                    <pointLight position={[0, 20, 50]} intensity={1.5} />
                    <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>
                    <pointLight intensity={10} />
                    <spotLight castShadow />
                    </PerspectiveCamera>
                    */}
                    <OrbitControls
                        autoRotate
                        enablePan={false}
                        enableZoom={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                        enableRotate={false}
                        autoRotateSpeed={0.3}
                    />
                </Canvas>
            </Suspense>
            <a
                href="https://sketchfab.com/models/91964c1ce1a34c3985b6257441efa500"
                target="_blank"
                rel="noopener noreferrer"
                className='tooltip'
            >
                Space exploration [WLP series #8]
            </a>
        </div>
    );
}
