import React from 'react'

function Adherer(){
    let input = (<input type='text' placeholder='Nom'/>);
    let button = <button>Valider</button>;
    let form = (
        <form>
            {input}
            {button}
        </form>
    );
    return form
}
