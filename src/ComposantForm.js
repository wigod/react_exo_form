import React from "react";

function ComposantForm(){
    return(
        <div className="formulaire">
            <h3>Formulaire Cours React JS</h3>
            <form>
                <p>
                    <label>Nom :</label><input type="text" placeholder="Votre Nom" />
                </p>
                <p>
                    <label>Prenom :</label><input type="text" placeholder="Votre Prenom" />
                </p>
                <p>
                    <button className="btnInscrire">s'inscrire</button>
                </p>
                
            </form>
        </div>
    )
}
export default ComposantForm