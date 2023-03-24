import React from "react";

function Composant2(){
        let firstName="Pat";
        let lastName="Koffi";
        return(
            <div>
                <img src="/anniv.jpg"  alt='Koffi Pat'/>
               <h3 className="my-profile">CECI EST UN COMPOSANT REACT JS creer par {firstName} {lastName}</h3> 
            </div>
            
        )
}
export default Composant2