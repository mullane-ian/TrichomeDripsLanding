import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import logoText from '/images/logoTexture.jpg'
import * as THREE from 'three'
import lerp from "lerp"
import './nftPage.css'
import MetaMask from '/images/logos/metaMask.png'
import OpenSea from '/images/logos/opensea.png'

import Footer from '../footer/Footer'

 function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/trickhomeMap-transformed.glb')
  const texture = useLoader(
    THREE.TextureLoader, logoText
    
  )
  
  let mat = new THREE.MeshBasicMaterial({map: texture })
  let mat1 = new THREE.MeshBasicMaterial({color: 'white' })


  useFrame(({  clock }) => {
    const a = clock.getElapsedTime()
    // group.current.rotation.y = Math.cos(a) + 1
    group.current.rotation.x = lerp(group.current.rotation.x,Math.sin(a ) * 0.05 - 0.15,0.1)
    group.current.rotation.z = lerp(group.current.rotation.z,Math.sin(a ) * 0.025,0.1)
  
  })
  return (
      
    <group ref={group} position={[0,-2,0]} {...props} dispose={null}>
     
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
      <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
      <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
     
     
      {/* Main letter Fronts */}
      <mesh geometry={nodes.mesh_3.geometry}  material={mat1} />
      
      {/* Main letter backs */}
      <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />

      {/* O AND C FRONTS*/}

      <mesh geometry={nodes.mesh_5.geometry} material={mat1} />

      {/* O AND C BACKS*/}
      <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} />
    </group>
  )
}

function CanvasHolder(){
    return(
        <Suspense fallback={null}>
            <Canvas  linear dpr={[1, 2]}  >
                <ambientLight color={0xbf92d1} intensity={1.} />
                <directionalLight position={[1, 0, 1]} />
                <directionalLight position={[-1, 0, 1]} />
                <Model />
                <OrbitControls />
            </Canvas>
        </Suspense>

    )

}


function NftPage() {
  return (
    <div className="nftPage">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-xl-7 canvas-holder">
            <CanvasHolder  />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">NFT Membership</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              <a href="/">this is a link</a>
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center my-5">
   
          <div className="col-lg-5">
            <h1 className="font-weight-light">MetaMask Wallet</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              <a href="https://metamask.io/download" target="_blank">this is a link</a>
            </p>
          </div>
          <div className="col-xl-7 metamask-holder">
            <a href="https://metamask.io/download" target="_blank">
              <img src={MetaMask} className='metamask-logo' />
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-xl-7 opensea-holder">
          <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/22974471245364731157991630316520467162017615464286176598067262604820044841210" target="_blank">
              <img src={OpenSea} className='opensea-logo' />
            </a>
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">OpenSea</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/22974471245364731157991630316520467162017615464286176598067262604820044841210" target="_blank">this is a link</a>
            </p>
            
          </div>
        </div>
        
      </div>
      
      <Footer />

    </div>
  );
}

export default NftPage;
