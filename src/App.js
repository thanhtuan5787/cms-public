import './App.css';
import apiConfig from  './api.json';
import React, {useEffect}  from 'react';
import axios from "axios";

import Text from './Components/Text';
import Image from './Components/Image';
import Button from './Components/Button';
function App() {
  const [page, setPage] = React.useState("{}");

  var pageName = window.location.pathname //returns the current url minus the domain name
  const searchString = window.location.search;
  const urlParams = new URLSearchParams(searchString.substring(1));
  for (let pair of urlParams.entries()) {
    if (pair[0] === 'name'){
      pageName = pair[1];
      break;
    }
  }
  useEffect(() => {
    axios.get(apiConfig.url + pageName??'/').then((response) => {
      setPage(response.data.content);
    });  
  }, [pageName])
  return (
    <>
    <div
      style={{
          width: '100vw',
          maxWidth: '100vw',
          overflow: 'hidden',
          minHeight: '100vh',
      }}
      >
      <div style={{ transform:`scale(1})` }}>
        <div
            style={{
                transform:
                `translateX(50%)`,
            }}
        >
          {Object.keys(page).map((key) => {
              var elem = page[key];
              if(elem.kind === "text"){
                return ( <Text
                  key={key}
                  elemData={elem}
                /> )
              } else  if(elem.kind === "image"){
                return ( <Image
                  key={key}
                  elemData={elem}
                /> )
              } else if(elem.kind === "button"){
                return ( <Button
                  key={key}
                  elemData={elem}
                /> )
              }
              })}
          </div>
     </div>
    </div>
    </>
    
);
}

export default App;
