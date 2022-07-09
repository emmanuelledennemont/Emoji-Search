import { useState } from "react";
import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";
import data from './assets/emojiList.json'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFaceGrinWink, } from '@fortawesome/free-solid-svg-icons';
library.add(faFaceGrinWink);


function App() {

  const [search, setSearch] = useState("");
  const regex = new RegExp(search);
  
  return (
    <>
    <div className="app">

    
    <Search title = "Emojis" title2 ='Search' search={search} setSearch={setSearch}/>
  
    </div>
    <div className="line">

    {data.map((element) => {
          if (regex.test(element.keywords) === true) {
            return <Line name={element.title} symbol={element.symbol} copy="Click to copy!" />;
          }
        })}

      </div>

      <Footer title="Made with" title2="React" title3="Le Reacteur" title4="at" title6 ="by" title5="Manue"/>
    </>
  );
}

export default App;
