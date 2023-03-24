import"./style.css"
import React from 'react'
import Header from './Header'
import ComposantForm from "./ComposantForm"
import Header2 from './Header2'
import Composant2 from './Composant2'



function App(){
  return (
    <div>
      <Header />    
      <ComposantForm />   
      <Header2 /> 
      <Composant2 />
      
      Nouvelle application React JS
    </div> 
  ) 
}

export default App