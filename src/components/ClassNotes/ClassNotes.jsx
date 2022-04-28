import React, { useEffect, useState } from 'react'

import "./aaa.css"



const ClassNotes = () => {

  //! sayfa title değiştirme bunu kullan
  useEffect(function updateTitle() { document.title = "deneme sayfası"; });

  const [coor, setCoor] = useState([])
  console.log(coor)

const handleMove =(e)=>{
setCoor([e.pageX/10, e.pageY/10])
}

  return (
    <div onMouseMove={handleMove}>

{/* <img src={SvgRes} alt="" style={{filter: `drop-shadow( -${coor[0]}px -${coor[1]}px 2px rgba(0, 0, 0, .7))`}}/>
<img src={CssSvg} alt="" />
<HtmlSvg width="100" style={{filter: `drop-shadow( -${coor[0]}px -${coor[1]}px 2px rgba(0, 0, 0, .7))`}}/>

<ReactSvg width="500" style={{filter: `drop-shadow( -${coor[0]}px -${coor[1]}px 2px rgba(0, 0, 0, .7))`}}/>
<GoSvg width="150"/>

<img src={sassSvg} alt="" style={{width: '100px'}} /> */}

<p>aaa</p>

<div className="bbb">div</div>
<div className="bbb ccc">div</div>

<section>

  <p>paragraph 1</p>

  <h2>Heading</h2>

  <p id="heading" style={{backgroundColor:"pink"}}>paragraph 2</p>

  <p>paragraph 3</p>

</section>
<div className="ddd">
<div id="div1">Some text...</div>
</div>

<p className="rem">fefaesdf</p>

  <p className="em">fedsfsedfsadf</p>
  <form action="">
    <input type="text" defaultValue={"aaa"} />
  </form>
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