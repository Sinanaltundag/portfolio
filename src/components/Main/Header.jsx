import { Typography } from '@mui/material'
import Typewriter from 'typewriter-effect'
const Header = () => {


  return (
    <div>
    <Typography variant="h3" gutterBottom component="div">
       <span>Hello Everybody!</span> 
       <Typewriter
       options={{
        strings: ['sinan', 'altundağ'],
    loop: true,
  }}
  onInit={(typewriter) => {
      
    typewriter.pasteString("👋 My name is Sinan")
    .pauseFor(1500)
    .pasteString("<br/>")
    .typeString("I'm a ⚛️Frontend Developer")
    .pauseFor(2500)
    .deleteChars(25)
    .typeString(" will be a Full Stack Developer soon 🔎")
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .start();
  }}
/>
      </Typography>
        
    
    
    
    </div>
  )
}

export default Header