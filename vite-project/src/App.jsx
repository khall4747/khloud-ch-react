import * as React from 'react'
import './App.css'
import { ChakraProvider,Box } from '@chakra-ui/react'
import WithSubnavigation from './compont/nav'
import Image from '../public/pexels-element-digital-973405.jpg'
import Image1 from '../public/pexels-rdne-stock-project-7755238.jpg'
import Image2 from '../public/pexels-rdne-stock-project-7755241.jpg'
import Image3 from '../public/pexels-rdne-stock-project-7755240.jpg'
import Footer from './compont/footer'


function App() {
//base >> responsef for nutral size  md>> next lg >>next larger for bg={{base: md: lg: }} or any tag

  return (
    <>
    <ChakraProvider> <WithSubnavigation/> <div id="slider">
   <input type="radio" name="slider" id="slide1" checked />
   <input type="radio" name="slider" id="slide2"/>
   <input type="radio" name="slider" id="slide3"/>
   <input type="radio" name="slider" id="slide4"/>
   <div id="slides">
      <div id="overflow">
         <div class="inner">
            <div className="slide slide_1">
               <div className="slide-content">
               <div class="centered">"Beauty makes your heart calm down when you see it"</div>
               <img src={Image1} />
             
               </div>
            </div>
            <div className="slide slide_2">
               <div className="slide-content">
               
               <img src={Image2}/>
               </div>
            </div>
            <div className="slide slide_3">
               <div className="slide-content">
               <img src={Image} />
               
               </div>
            </div>
            <div className="slide slide_4">
               <div className="slide-content">
                <img src={Image3}/>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div id="controls">
      <label for="slide1"></label>
      <label for="slide2"></label>
      <label for="slide3"></label>
      <label for="slide4"></label>
   </div>
   <div id="bullets">
      <label for="slide1"></label>
      <label for="slide2"></label>
      <label for="slide3"></label>
      <label for="slide4"></label>
   </div>
 
</div> 


<Footer/>
</ChakraProvider>
   
     
    </>
  )
  
}


export default App
