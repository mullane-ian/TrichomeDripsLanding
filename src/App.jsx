import ReactDOM from "react-dom"
import React, { Suspense, useEffect, useRef, useMemo } from "react"
import { Canvas, useLoader, useFrame } from "@react-three/fiber"
import { Html } from "@react-three/drei"
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
  return <Plane ref={ref} color="#0e0e0f" position={[0, 0, 200]} scale={[100, 100, 1]} />
}

function Paragraph({ image, index, offset, factor, header, aspect, text }) {
  const { contentMaxWidth: w, canvasWidth, margin, mobile } = useBlock()
  const size = aspect < 1 && !mobile ? 0.65 : 1
  const alignRight = (canvasWidth - w * size - margin) / 2
  const pixelWidth = w * state.zoom * size
  const left = true
  const color = index % 2 ? "#D40749" : "#2FE8C3"

  return (
    <Block factor={factor} offset={offset}>
      <group position={[left ? -alignRight : alignRight, mobile?2:0, 0]}>
        <Plane position={[mobile?2:7,mobile?2.5:6,0]}map={image} args={[mobile?1:.5,mobile?1:.5, 32, 32]} shift={75} size={size} aspect={aspect} scale={[w * size, (w * size) / aspect, 1]} frustumCulled={false} />
        <Html
        className="para"
          style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: left ? "left" : "right" }}
          position={[mobile ? (-w * size) / 2 : 3.2, mobile?(-w * size) / 2 / aspect:1, 1]}>
          <div className="para" tabIndex={index}>{text}</div>
        </Html>
        <Text left={left} right={!left} size={w * 0.05} color={color} top position={[((-w) * size) / 1.8, (w * size) / aspect / 2 + 0.5, -1]}>
          {header}
        </Text>
        <Block factor={0.2}>
          <Text opacity={0.5} size={w * 0.5} color="#1A1E2A" position={[(( -w) / 2) * size, (w * size) / aspect / 4, -10]}>
            {"0" + (index + 1)}
          </Text>
        </Block>
    
          <Html className={index===1?'dis':'nodis'}position={[mobile?-2:3,mobile?-3:0,0]}>
            <ul className={mobile?'shops-list-m':'shops-list'} >
              <li><a href="https://www.denalicannabis.com" target="_blank" className={mobile?'shop-item-m':'shop-item'}>DenaliCannabis</a></li>
              <li><a href="https://www.tenderlovingcarecannabis.com/product-menu" target="_blank" className={mobile?'shop-item-m':'shop-item'}>TLC Cannabis</a></li>
              <li><a href="https://www.facebook.com/kottonmouth405/" target="_blank" className={mobile?'shop-item-m':'shop-item'}>Cotton Mouth</a> </li>
              <li><a href="https://www.leafly.com/dispensary-info/yur-place-dispensary" target="_blank" className={mobile?'shop-item-m':'shop-item'}>Yur Place Dispensary</a></li>
              <li><a href="https://gazmonkeydispensary.com/" target="_blank" className={mobile?'shop-item-m':'shop-item'}>GazMonkeyDispensary</a></li>
           
             

            </ul>
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
  // useMemo(() => images.forEach((texture) => (texture.minFilter = LinearFilter)), [images])
  const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock()
  return (
    <>
    
      <Block factor={1} offset={0}>

        <Block factor={1.2}>
          <Text left size={w * 0.15} position={[ mobile?-w/1.7:-w / 2.2,3.6, -1]} color="#e3ca4c">
            Trichome
          </Text>
          <Text left size={w * 0.15} position={[-w / 5.2, mobile?2.7: -1.5,-1]} color="#e3ca4c">
            Drips
          </Text>
        <Plane position={[mobile?.2:-7,mobile?-3:-1.5,0]}map={press} args={[mobile?1:.5,mobile?1:.5, 32, 32]} shift={75} size={1} aspect={1.2} scale={[w * 1, (w * 1) / 1.2, 1]} frustumCulled={false} />


        </Block>
        <Block factor={1.0}>
           <Html position={[mobile?-.5:8,mobile?-1.4:-5,0]}className="bottom-left" style={{ position: 'absolute' }} >
           OKLAHOMA's<br /><br />PREMIER<br /><br />SOLVENTLESS<br /><br />EXTRACTS<br /><br />COMPANY
           <img href="/images/logo.png" />
          </Html> 
        </Block>
      </Block>
      <Block factor={.2} offset={5.7}>
        <MultilineText top left size={w * 0.15} lineHeight={w / 4} position={[-w / 1.5, -3.5, -1]} color="#803A6C" text={"Rosin\nHash\nDry Sift"} />
      </Block>
      {state.paragraphs.map((props, index) => (
        <Paragraph key={index} index={index} {...props} image={images[index]} />
      ))}
      {/* {state.stripes.map(({ offset, color, height }, index) => (
        <Block key={index} factor={-1.5} offset={offset}>
          <Plane args={[50/10, height/10, 32, 32]} shift={-4} color={color} rotation={[0, 0, Math.PI / 8]} position={[0, 0, -10]} />
        </Block>
      ))} */}
      <Block factor={1.25} offset={8}>
        <Html style={{ color: "white" }} className="bottom-left" position={[-canvasWidth / 2, -canvasHeight / 2, 0]}>
        <a href="https://www.leaflink.com/c/chron-city-distribution/" target="_blank" >
            Order TrichomeDrips products for your shop through LeafLink
          </a>
          
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
        <Suspense fallback={<Html center className="loading" children="Loading..." />}>
          <Content />
          {/* <Diamonds /> */}
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
