import React, { useState } from 'react';
import CharacterListPage from './pages/CharacterListPage/CharacterListPage'
import CharacterDetailsPage from './pages/CharacterDetailsPage/CharacterDetailsPage'

function App() {
  const [currentPage, setCurrentPage] = useState("list")
  const [detailsUrl, setDetailsUrl] = useState("")
 
  function goToDetailsPage(url){
    setCurrentPage("details")
    setDetailsUrl(url)
  }
  function goToListPage(){
    setCurrentPage("list")
  }

  function selectPage(){
    if (currentPage === "list"){
      return <CharacterListPage goToDetailsPage={goToDetailsPage}/>
    }else{
      return <CharacterDetailsPage goToListPage={goToListPage} url={detailsUrl}/>

    }
  }
  return (
    <div className="App">
      {selectPage()}


    </div>
  );
}

export default App;
