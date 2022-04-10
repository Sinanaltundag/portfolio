import React, { useState } from 'react'
import {ReactComponent as SvgRe} from "../../assets/svg/react-2.svg"
import SvgRes from "../../assets/svg/react-2.svg"

const ClassNotes = () => {

  const [coor, setCoor] = useState([])

const handleMove =(e)=>{
console.log(e)
setCoor([e.pageX/10, e.pageY/10])
}

  return (
    <div onMouseMove={handleMove}>

<img src={SvgRes} alt="" style={{filter: `drop-shadow( -${coor[0]}px -${coor[1]}px 2px rgba(0, 0, 0, .7))`}}/>

        
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