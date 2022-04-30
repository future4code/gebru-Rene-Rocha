import React from "react";

function CharacterDetailsPage(props){
    return(<div>
        <h1>Detalhes de personagens</h1>
        <p>{props.url}  </p>
        <button onClick={props.goToListPage}>Voltar</button>
        </div>)
}
export default CharacterDetailsPage