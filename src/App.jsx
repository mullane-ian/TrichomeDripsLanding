import ReactDOM from "react-dom"
import React, { Suspense, useEffect, useRef, useMemo } from "react"
import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber"
import { Html, useGLTF } from "@react-three/drei"
import { TextureLoader, LinearFilter } from "three"
import lerp from "lerp"
import { Text, MultilineText } from "./components/Text"

import pressImg from '/images/10.png'
import Plane from "./components/Plane"
import { Block, useBlock } from "./blocks"
import state from "./store"
import "./index.css"

function Startup() {
  const ref = useRef()
   useFrame(() => (ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.025)))
  return <Plane ref={ref} color="#E3CA4C" position={[0, 0, 200]} scale={[100, 100, 1]} />
}

function Paragraph({ image, index, offset, factor, header, aspect, text }) {
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
        {/* <Block factor={0.2}>
          <Text opacity={0.5} size={w * 0.5} color="#1A1E2A" position={[(( -w) / 2) * size, (w * size) / aspect / 4, -10]}>
            {"0" + (index + 1)}
          </Text>
        </Block> */}
    
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

function Content() {
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
        <MultilineText top left size={w * 0.15} lineHeight={w / 4} position={[-w / 1.5, 0, -5]} color="#803A6C" text={"Rosin\nHash\nDry Sift"} />
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
      </Block>
    </>
  )
}

function App() {

  const scrollArea = useRef()
  const onScroll = (e) => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])
  return (
    <>
      <Canvas linear dpr={[1, 2]} orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
      <ambientLight intensity={1.7} />
        <Suspense fallback={<Html center className="loading" children="Loading..." />}>
          <Content />
         
          <Startup />
        </Suspense>
     
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        {new Array(state.sections).fill().map((_, index) => (
          <div key={index} id={"0" + index} style={{ height: `${(state.pages / state.sections) * 100}vh` }} />
        ))}
      </div>

    </>
  )
}


export default App


function PressModel({ ...props }) {
  const { contentMaxWidth: w, canvasWidth, margin, mobile } = useBlock()

  const { viewport } = useThree()
  const group = useRef()
  const { nodes, materials } = useGLTF('/pressModel-transformed.glb')
 
  useFrame(({ mouse, clock }) => {
    const a = clock.getElapsedTime()
    // group.current.rotation.y = Math.cos(a) + 1
    group.current.rotation.y = lerp(group.current.rotation.y,Math.sin(a),0.1)
  
  })

  return (
    <group ref={group} scale={[mobile?0.5:1,mobile?0.5:1.5,mobile?0.5:1]} rotation={[0.3,0,0]} position={[mobile?-0.5:-9,mobile?-3:-5,0]} {...props} dispose={null}>
      <pointLight position={[3, 2, 0]} />
      <pointLight position={[1, 5, 4]} />

      <mesh geometry={nodes.Mesh_0001.geometry} material={nodes.Mesh_0001.material} />
      <mesh geometry={nodes.Mesh_1001.geometry} material={nodes.Mesh_1001.material} />
      <mesh geometry={nodes.Mesh_10.geometry} material={nodes.Mesh_10.material} />
      <mesh geometry={nodes.Mesh_11.geometry} material={nodes.Mesh_11.material} />
      <mesh geometry={nodes.Mesh_12.geometry} material={nodes.Mesh_12.material} />
      <mesh geometry={nodes.Mesh_13.geometry} material={nodes.Mesh_13.material} />
      <mesh geometry={nodes.Mesh_14.geometry} material={nodes.Mesh_14.material} />
      <mesh geometry={nodes.Mesh_15.geometry} material={nodes.Mesh_15.material} />
      <mesh geometry={nodes.Mesh_2001.geometry} material={nodes.Mesh_2001.material} />
      <mesh geometry={nodes.Mesh_3001.geometry} material={materials['Material_3.001']} />
      <mesh geometry={nodes.Mesh_4.geometry} material={materials.Material_4} />
      <mesh geometry={nodes.Mesh_5.geometry} material={nodes.Mesh_5.material} />
      <mesh geometry={nodes.Mesh_6.geometry} material={nodes.Mesh_6.material} />
      <mesh geometry={nodes.Mesh_7.geometry} material={nodes.Mesh_7.material} />
      <mesh geometry={nodes.Mesh_8.geometry} material={nodes.Mesh_8.material} />
      <mesh geometry={nodes.Mesh_9.geometry} material={nodes.Mesh_9.material} />
      <mesh geometry={nodes.Mesh_59.geometry} material={materials.Material_14} />
      <mesh geometry={nodes.Mesh_16.geometry} material={nodes.Mesh_16.material} />
      <mesh geometry={nodes.Mesh_17.geometry} material={nodes.Mesh_17.material} />
      <mesh geometry={nodes.Mesh_18.geometry} material={nodes.Mesh_18.material} />
      <mesh geometry={nodes.Mesh_19.geometry} material={nodes.Mesh_19.material} />
      <mesh geometry={nodes.Mesh_20.geometry} material={nodes.Mesh_20.material} />
      <mesh geometry={nodes.Mesh_21.geometry} material={nodes.Mesh_21.material} />
      <mesh geometry={nodes.Mesh_22.geometry} material={nodes.Mesh_22.material} />
      <mesh geometry={nodes.Mesh_23.geometry} material={nodes.Mesh_23.material} />
      <mesh geometry={nodes.Mesh_24.geometry} material={nodes.Mesh_24.material} />
      <mesh geometry={nodes.Mesh_25.geometry} material={nodes.Mesh_25.material} />
      <mesh geometry={nodes.Mesh_26.geometry} material={nodes.Mesh_26.material} />
      <mesh geometry={nodes.Mesh_27.geometry} material={nodes.Mesh_27.material} />
      <mesh geometry={nodes.Mesh_28.geometry} material={nodes.Mesh_28.material} />
      <mesh geometry={nodes.Mesh_29.geometry} material={nodes.Mesh_29.material} />
      <mesh geometry={nodes.Mesh_30.geometry} material={nodes.Mesh_30.material} />
      <mesh geometry={nodes.Mesh_31.geometry} material={nodes.Mesh_31.material} />
      <mesh geometry={nodes.Mesh_32.geometry} material={nodes.Mesh_32.material} />
      <mesh geometry={nodes.Mesh_33.geometry} material={nodes.Mesh_33.material} />
      <mesh geometry={nodes.Mesh_34.geometry} material={nodes.Mesh_34.material} />
      <mesh geometry={nodes.Mesh_35.geometry} material={nodes.Mesh_35.material} />
      <mesh geometry={nodes.Mesh_36.geometry} material={nodes.Mesh_36.material} />
      <mesh geometry={nodes.Mesh_37.geometry} material={nodes.Mesh_37.material} />
      <mesh geometry={nodes.Mesh_38.geometry} material={nodes.Mesh_38.material} />
      <mesh geometry={nodes.Mesh_39.geometry} material={nodes.Mesh_39.material} />
      <mesh geometry={nodes.Mesh_40.geometry} material={nodes.Mesh_40.material} />
      <mesh geometry={nodes.Mesh_41.geometry} material={nodes.Mesh_41.material} />
      <mesh geometry={nodes.Mesh_42.geometry} material={materials.Material_13} />
      <mesh geometry={nodes.Mesh_43.geometry} material={nodes.Mesh_43.material} />
      <mesh geometry={nodes.Mesh_44.geometry} material={nodes.Mesh_44.material} />
      <mesh geometry={nodes.Mesh_45.geometry} material={nodes.Mesh_45.material} />
      <mesh geometry={nodes.Mesh_46.geometry} material={nodes.Mesh_46.material} />
      <mesh geometry={nodes.Mesh_47.geometry} material={nodes.Mesh_47.material} />
      <mesh geometry={nodes.Mesh_48.geometry} material={nodes.Mesh_48.material} />
      <mesh geometry={nodes.Mesh_49.geometry} material={nodes.Mesh_49.material} />
      <mesh geometry={nodes.Mesh_50.geometry} material={nodes.Mesh_50.material} />
      <mesh geometry={nodes.Mesh_51.geometry} material={nodes.Mesh_51.material} />
      <mesh geometry={nodes.Mesh_52.geometry} material={nodes.Mesh_52.material} />
      <mesh geometry={nodes.Mesh_53.geometry} material={nodes.Mesh_53.material} />
      <mesh geometry={nodes.Mesh_54.geometry} material={nodes.Mesh_54.material} />
      <mesh geometry={nodes.Mesh_55.geometry} material={nodes.Mesh_55.material} />
      <mesh geometry={nodes.Mesh_56.geometry} material={nodes.Mesh_56.material} />
      <mesh geometry={nodes.Mesh_57.geometry} material={nodes.Mesh_57.material} />
      <mesh geometry={nodes.Mesh_58.geometry} material={nodes.Mesh_58.material} />
      <mesh geometry={nodes.Mesh_60.geometry} material={nodes.Mesh_60.material} />
      <mesh geometry={nodes.Mesh_61.geometry} material={nodes.Mesh_61.material} />
    </group>
  )
}