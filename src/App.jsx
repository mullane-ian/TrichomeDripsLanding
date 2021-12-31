import ReactDOM from "react-dom"
import React, { Suspense, useEffect, useRef, useMemo } from "react"
import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber"
import { Html, useGLTF } from "@react-three/drei"
import { TextureLoader, LinearFilter } from "three"
import lerp from "lerp"
import { Text, MultilineText } from "./components/Text"
import * as THREE from 'three'
import pressImg from '/images/10.png'
import Plane from "./components/Plane"
import { Block, useBlock } from "./blocks"
import state from "./store"
import logoText from '/images/logoTexture.jpg'
import Footer from './components/footer/Footer.jsx'
import "./index.css"

function Startup({...props}) {

  
  
  const ref = useRef()
  const { size, viewport } = useThree();

  let mobile = size.width <= 1024;

  props.func(mobile);
   useFrame(() => (ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.025)))
  return <Plane ref={ref} color="#E3CA4C" position={[0, 0, 200]} scale={[100, 100, 1]} />
}

function Paragraph({ image, index, offset, factor, header, aspect, text}) {
  const { contentMaxWidth: w, canvasWidth, margin, mobile } = useBlock()
  const size = aspect < 1 && !mobile ? 0.65 : 1
  const alignRight = (canvasWidth - w * size - margin) / 2
  const pixelWidth = w * state.zoom * size
  const left = true
  const color = index % 2 ? "#803A6C" : "#C294b8"
  return (
    <Block factor={factor} offset={offset}>
      <group position={[left ? -alignRight : alignRight, mobile?2:0, 0]}>
        <Plane position={[mobile?-w/10:7,mobile?5.5:6,0]}map={image} args={[mobile?1:.5,mobile?1:.5, 32, 32]} shift={75} size={size} aspect={aspect} scale={[w * size, (w * size) / aspect, 1]} frustumCulled={false} />
        <Html
        className="para"
          style={{ width: pixelWidth / (mobile ? 1 : 2), }}
          position={[mobile ? (-w * size) / 2 : 3.2, mobile?1:1, 1]}>
          <div className="para" tabIndex={index}>{text}</div>
        </Html>
        <Text left={left} right={!left} size={w * 0.05} color={color} top position={[((-w) * size) / 1.8, (w * size) / aspect / 2 + 0.5, -1]}>
          {header}
        </Text>
        <Block factor={0.2}>
          <Text opacity={0.5} size={w * 0.5} color="#1A1E2A" position={[mobile?-100:(( -w) / 2) * size, (w * size) / aspect / 4, -10]}>
            {"0" + (index + 1)}
          </Text>
        </Block>
    
          <Html className={index===1?'dis':'nodis'}position={[mobile?-w/1.8:1,mobile?-.5:0,0]}>
            <ul className={mobile?'shops-list-m':'shops-list'} >
              <li><a href="https://www.denalicannabis.com" target="_blank" className={mobile?'shop-item-m':'shop-item'}>Denali Cannabis</a></li>
              <li><a href="https://www.tenderlovingcarecannabis.com/product-menu" target="_blank" className={mobile?'shop-item-m':'shop-item'}>TLC Cannabis</a></li>
              <li><a href="https://www.facebook.com/kottonmouth405/" target="_blank" className={mobile?'shop-item-m':'shop-item'}>Cotton Mouth</a> </li>
              <li><a href="https://www.leafly.com/dispensary-info/yur-place-dispensary" target="_blank" className={mobile?'shop-item-m':'shop-item'}>Yur Place Dispensary</a></li>
              <li><a href="https://gazmonkeydispensary.com/" target="_blank" className={mobile?'shop-item-m':'shop-item'}>Gaz Monkey Dispensary</a></li>
           
             

            </ul>
          </Html>
          <Html className={index===2?'dis':'nodis'}position={[mobile?-1:3.1,mobile?-4.2:-2,0]}>
            <div className='nftMoreButton'>
             <span>Learn More</span>
            </div>

          </Html>
        
      </group>
    </Block>
  )
}

function Content({...props}) {
  const images = useLoader(
    TextureLoader,
    state.paragraphs.map(({ image }) => image)
  )
  const press = useLoader(TextureLoader,pressImg)
   useMemo(() => images.forEach((texture) => (texture.minFilter = LinearFilter)), [images])
  const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock()

  return (
    <>
    
      <Block factor={1} offset={0}>

        <Block factor={1.4}>
          {/* <Text left size={w * 0.15} position={[ mobile?-w/1.7:-w / 2.2,3.6, -1]} color="#e3ca4c">
            Trichome
          </Text>
          <Text left size={w * 0.15} position={[-w / 5.2, mobile?2.7: -1.5,-1]} color="#e3ca4c">
            Drips
          </Text> */}
          <Html center className="logo" position={[0,2,0]}>
            <img className="logoImg" src={'./images/logo.png'}  />
          </Html>
        {/* <Plane position={[mobile?.2:-7,mobile?-3:-1.5,0]}map={press} args={[mobile?1:.5,mobile?1:.5, 32, 32]} shift={75} size={1} aspect={1.2} scale={[w * 1, (w * 1) / 1.2, 1]} frustumCulled={false} /> */}
          <PressModel />

        </Block>
        <Block factor={1.0}>
           <Html position={[mobile?-w/2-0.25:-w/2 + 3.5,mobile?3.5:-2,0]}className="bottom-left" style={{ fontSize:mobile?'15px':'30px', position: 'absolute', whiteSpace:'nowrap' }} >
           OKLAHOMA'S PREMIUM SOLVENTLESS EXTRACT COMPANY
          
          </Html> 
        </Block>
      </Block>
      <Block factor={1.2} offset={5.5}>
        <MultilineText top left size={w * 0.15} lineHeight={w / 4} position={[-w / 2, 1, -5]} color="#803A6C" text={"Rosin\nHash\nDry Sift"} />
      </Block>
      {state.paragraphs.map((props, index) => (
        <Paragraph key={index} index={index} {...props} image={images[index]} />
      ))}
      {/* {state.stripes.map(({ offset, color, height }, index) => (
        <Block key={index} factor={-1.5} offset={offset}>
          <Plane args={[50, height, 32, 32]} shift={-4} color={color} rotation={[0, 0, Math.PI / 8]} position={[0, 0, -10]} />
        </Block>
      ))} */}
      <Block factor={1.25} offset={0}>
        <Html  className="bottom-left" position={[canvasWidth /4 + 2, canvasHeight/4, 0]}>
          <div style={{textDecoration:'none',border:'1px solid #492E43', borderRadius:'50px', padding:'20px' }}>
          <a style={{textDecoration:'none' }} href="https://www.leaflink.com/c/chron-city-distribution/" target="_blank" >
            Place orders through LeafLink
          </a>
          </div>
        </Html>
        <Html  className="bottom-left" position={[canvasWidth /4 + 2, canvasHeight/4 +-2, 0]}>
          <div style={{textDecoration:'none',border:'1px solid #492E43', borderRadius:'50px', padding:'20px' }}>
          <a style={{textDecoration:'none' }} href="https://www.chroncity.com/" target="_blank" >
            Visit Chron City Website
          </a>
          </div>
        </Html>
        <Map />
      </Block>
    </>
  )
}

function App() {

  const scrollArea = useRef()
  const onScroll = (e) => {
   
    state.top.current = e.target.scrollTop
  
  }
  useEffect(() => void onScroll({ target: scrollArea.current
  
  }), [])
  
 let shouldMobile = true
  const pull_data = (data) => {
    shouldMobile = data; // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  
  };


  console.log(shouldMobile)



  return (
    <>
      <Canvas linear dpr={[1, 2]} orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
      <ambientLight color={0xbf92d1} intensity={2.} />
        <Suspense fallback={null}>
          <Content />
         
          <Startup func={pull_data}/>
        </Suspense>
     
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll} >
        {new Array(state.sections).fill().map((_, index) => (
          <div   key={index} id={"0" + index} style={{ height: `${(state.pages / state.sections) * (shouldMobile?73.5:84)}vh` }} />
        ))}
      <Footer />

      </div>


    </>
  )
}


export default App


function PressModel({ ...props }) {
  const { contentMaxWidth: w, canvasWidth, margin, mobile } = useBlock()

  const { viewport } = useThree()
  const group = useRef()
  const { nodes, materials } = useGLTF('/MachineGlb-transformed.glb')
 
  useFrame(({ mouse, clock }) => {
    const a = clock.getElapsedTime()
    // group.current.rotation.y = Math.cos(a) + 1
    group.current.rotation.y = lerp(group.current.rotation.y,Math.sin(a),0.1)
  
  })
  let mat = new THREE.MeshBasicMaterial({color: 'white'})
  const texture = useLoader(
    TextureLoader, logoText
    
  )
// You do not need to set `.wrapT` in this case
  // texture.offset.x = ( 2 * Math.PI );kc
  // let mat1 = new THREE.MeshBasicMaterial({map: texture, rotation: -10 })

  return (
    <group castShadow receiveShadow ref={group} scale={[mobile?0.5:1,mobile?0.5:1,mobile?0.5:1]} rotation={[0.3,0,0]} position={[mobile?-0.5:-9,mobile?-3:-5,0]} {...props} dispose={null}>
      <pointLight position={[3, 2, 0]} />
      <pointLight position={[1, 5, 4]} />
      

      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
      <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
      <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
      <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
      <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
      <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
      <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} />
      <mesh geometry={nodes.mesh_7.geometry} material={nodes.mesh_7.material} />
      <mesh geometry={nodes.mesh_8.geometry} material={nodes.mesh_8.material} />
      <mesh geometry={nodes.mesh_9.geometry} material={nodes.mesh_9.material} />
      <mesh geometry={nodes.mesh_10.geometry} material={nodes.mesh_10.material} />
      <mesh geometry={nodes.mesh_11.geometry} material={nodes.mesh_11.material} />
      <mesh geometry={nodes.mesh_12.geometry} material={nodes.mesh_12.material} />
      <mesh geometry={nodes.mesh_13.geometry} material={nodes.mesh_13.material} />
      <mesh geometry={nodes.mesh_14.geometry} material={nodes.mesh_14.material} />
      <mesh geometry={nodes.mesh_15.geometry} material={nodes.mesh_15.material} />
      <mesh geometry={nodes.mesh_58.geometry} material={nodes.mesh_58.material} />
      <mesh geometry={nodes.mesh_16.geometry} material={nodes.mesh_16.material} />
      <mesh geometry={nodes.mesh_17.geometry} material={nodes.mesh_17.material} />
      <mesh geometry={nodes.mesh_18.geometry} material={nodes.mesh_18.material} />
      <mesh geometry={nodes.mesh_19.geometry} material={nodes.mesh_19.material} />
      <mesh geometry={nodes.mesh_20.geometry} material={nodes.mesh_20.material} />
      <mesh geometry={nodes.mesh_21.geometry} material={nodes.mesh_21.material} />
      <mesh geometry={nodes.mesh_22.geometry} material={nodes.mesh_22.material} />
      <mesh geometry={nodes.mesh_23.geometry} material={nodes.mesh_23.material} />
      <mesh geometry={nodes.mesh_24.geometry} material={nodes.mesh_24.material} />
      <mesh geometry={nodes.mesh_25.geometry} material={nodes.mesh_25.material} />
      <mesh geometry={nodes.mesh_26.geometry} material={nodes.mesh_26.material} />
      <mesh geometry={nodes.mesh_27.geometry} material={nodes.mesh_27.material} />
      <mesh geometry={nodes.mesh_28.geometry} material={nodes.mesh_28.material} />
      <mesh geometry={nodes.mesh_29.geometry} material={nodes.mesh_29.material} />
      <mesh geometry={nodes.mesh_30.geometry} material={nodes.mesh_30.material} />
      <mesh geometry={nodes.mesh_31.geometry} material={nodes.mesh_31.material} />
      <mesh geometry={nodes.mesh_32.geometry} material={nodes.mesh_32.material} />
      <mesh geometry={nodes.mesh_33.geometry} material={nodes.mesh_33.material} />
      <mesh geometry={nodes.mesh_34.geometry} material={nodes.mesh_34.material} />
      <mesh geometry={nodes.mesh_35.geometry} material={nodes.mesh_35.material} />
      <mesh geometry={nodes.mesh_36.geometry} material={nodes.mesh_36.material} />
      <mesh geometry={nodes.mesh_37.geometry} material={nodes.mesh_37.material} />
      <mesh geometry={nodes.mesh_38.geometry} material={nodes.mesh_38.material} />
      <mesh geometry={nodes.mesh_39.geometry} material={nodes.mesh_39.material} />
      <mesh geometry={nodes.mesh_40.geometry} material={nodes.mesh_40.material} />
      <mesh geometry={nodes.mesh_41.geometry} material={nodes.mesh_41.material} />
      <mesh geometry={nodes.mesh_42.geometry} material={nodes.mesh_42.material} />
      <mesh geometry={nodes.mesh_43.geometry} material={nodes.mesh_43.material} />
      <mesh geometry={nodes.mesh_44.geometry} material={nodes.mesh_44.material} />
      <mesh geometry={nodes.mesh_45.geometry} material={nodes.mesh_45.material} />
      <mesh geometry={nodes.mesh_46.geometry} material={nodes.mesh_46.material} />
      <mesh geometry={nodes.mesh_47.geometry} material={nodes.mesh_47.material} />
      <mesh geometry={nodes.mesh_48.geometry} material={nodes.mesh_48.material} />
      <mesh geometry={nodes.mesh_49.geometry} material={nodes.mesh_49.material} />
      <mesh geometry={nodes.mesh_50.geometry} material={nodes.mesh_50.material} />
      <mesh geometry={nodes.mesh_51.geometry} material={nodes.mesh_51.material} />
      <mesh geometry={nodes.mesh_52_instance_0.geometry} material={nodes.mesh_52_instance_0.material} />
      <mesh geometry={nodes.mesh_52_instance_1.geometry} material={nodes.mesh_52_instance_1.material} />
      <mesh geometry={nodes.mesh_53.geometry} material={nodes.mesh_53.material} />
      <mesh geometry={nodes.mesh_54.geometry} material={nodes.mesh_54.material} />
      <mesh geometry={nodes.mesh_55.geometry} material={nodes.mesh_55.material} />
      <mesh geometry={nodes.mesh_56.geometry} material={nodes.mesh_56.material} />
      <mesh geometry={nodes.mesh_57.geometry} material={nodes.mesh_57.material} />
      <mesh geometry={nodes.mesh_59.geometry} material={nodes.mesh_59.material} />
      <mesh geometry={nodes.mesh_60.geometry} material={nodes.mesh_60.material} />
      <mesh geometry={nodes.mesh_61.geometry} material={mat} />
      <mesh geometry={nodes.mesh_62.geometry} material={nodes.mesh_62.material} />
      <mesh geometry={nodes.mesh_63.geometry} material={mat} />
      <mesh geometry={nodes.mesh_64.geometry} material={nodes.mesh_64.material} />
    </group>
  )
}

function Map({ ...props }) {
  const group = useRef()
  const {mobile } = useBlock()


  const { nodes, materials } = useGLTF('/trickhomeMap-transformed.glb')
  const texture = useLoader(
    TextureLoader, logoText
    
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
    <group ref={group} scale={[mobile?0.55:2,mobile?0.55:2,mobile?0.55:2]} position={[0,mobile?-65:-100,-200]} {...props} dispose={null}>
      <ambientLight />
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

