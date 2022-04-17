import React, { useState } from 'react'
import {ReactComponent as SvgRe} from "../../assets/svg/react-2.svg"
import SvgRes from "../../assets/svg/react-2.svg"
import { cssSvg, GoSvg, HtmlSvg, ReactIcon, ReactSvg } from '../../assets/svg/SvgIcons'

const ClassNotes = () => {

  const a=1
  if (1==a) {
    console.log(a)
  }

  const [coor, setCoor] = useState([])

const handleMove =(e)=>{
console.log(e)
setCoor([e.pageX/10, e.pageY/10])
}

  return (
    <div onMouseMove={handleMove}>

<img src={SvgRes} alt="" style={{filter: `drop-shadow( -${coor[0]}px -${coor[1]}px 2px rgba(0, 0, 0, .7))`}}/>
<img src={cssSvg} alt="" />
<HtmlSvg width="100" style={{filter: `drop-shadow( -${coor[0]}px -${coor[1]}px 2px rgba(0, 0, 0, .7))`}}/>

<ReactSvg width="500" style={{filter: `drop-shadow( -${coor[0]}px -${coor[1]}px 2px rgba(0, 0, 0, .7))`}}/>
<GoSvg width="150"/>


<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
    </div>
  )
}

export default ClassNotes