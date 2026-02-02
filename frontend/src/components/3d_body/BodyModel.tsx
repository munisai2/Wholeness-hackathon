import React, { useRef } from 'react';
// import { Canvas } from '@react-three/fiber';

/**
 * BodyModel Component
 * Displays the 3D human model that users can interact with.
 */
const BodyModel: React.FC = () => {
    return (
        <div style={{ width: '100%', height: '500px' }}>
            {/* <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <mesh>
                    <boxGeometry />
                    <meshStandardMaterial color="orange" />
                </mesh>
            </Canvas> */}
            <p>3D Body Model Placeholder</p>
        </div>
    );
};

export default BodyModel;
