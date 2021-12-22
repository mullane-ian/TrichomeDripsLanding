import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 9,
  pages: 8,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "Products",
      image: "images/5.jpg",
      aspect: 1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odio architecto veritatis, iure aliquid sint fuga earum illum sunt quasi dolor expedita, possimus commodi quisquam enim dolorem eveniet nemo delectus modi vitae alias saepe! Eius tempora sunt rem."
    },
    
    {
      offset: 2,
      factor: 2.0,
      header: "Where to buy",
      image: "images/10.jpg",
      aspect: 1,
      text:
        "Shops that are currently selling our products:"
    },
    {
      offset: 3,
      factor: 2.25,
      header: "NFT Project",
      image: "images/2.jpg",
      aspect: 1,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odio architecto veritatis, iure aliquid sint fuga earum illum sunt quasi dolor expedita, possimus commodi quisquam enim dolorem eveniet nemo delectus modi vitae alias saepe! Eius tempora sunt rem. "
    },
    {
      offset: 4,
      factor: 2.0,
      header: "OpenSea",
      image: "images/1.jpg",
      aspect: 1,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, itaque.."
    },
    {
      offset: 5,
      factor: 1.75,
      header: "Merch",
      image: "images/10.jpg",
      aspect: 1,
      text:
        "Shop coming soon!"
    },
    // { offset: 7, factor: 1.05, header: "The Factory", image: "/photo-1548191265-cc70d3d45ba1.jpeg", aspect: 1.77, text: "Education and enlightenment." }
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  diamonds: [
    { x: 0, offset: 0., pos: new Vector3(), scale: 14, factor: 4 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 1.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 1.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 2, offset: 5.5, pos: new Vector3(), scale: 2.25, factor: 0.85 },
    { x: -5, offset: 7, pos: new Vector3(), scale: 1.8, factor: 2 },
    { x: 0, offset: 8, pos: new Vector3(), scale: 2.5, factor: 6 }
  ],
  top: createRef()
}

export default state
