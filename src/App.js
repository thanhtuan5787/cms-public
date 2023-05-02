import './App.css';
import apiConfig from  './api.json';
import React, {useEffect}  from 'react';
import axios from "axios";

import Text from './Components/Text';
import Image from './Components/Image';
import Button from './Components/Button';
function App() {
  const [page, setPage] = React.useState("{}");

  const pathname = window.location.pathname //returns the current url minus the domain name
  useEffect(() => {
    axios.get(apiConfig.url + pathname??'/').then((response) => {
      setPage(response.data.content);
    });  }, [page,pathname])
  // const json = JSON.parse('{"bdf2671e-bed1-e5d9-68cb-8051fc54bab8":{"id":"bdf2671e-bed1-e5d9-68cb-8051fc54bab8","pos":{"x":-212.1999969482422,"y":254},"rot":{"deg":0},"zIndex":10000,"kind":"text","text":"Hello!","fontSize":"48px","color":"black","size":{"width":586,"height":230},"style":{"fontWeight":"bold","fontFamily":"Courier New","fontSize":"20px"},"message":"change me!dsdsadsadsadsad"},"d4e021d6-b3ea-457f-97c0-edcad7a4a1da":{"id":"d4e021d6-b3ea-457f-97c0-edcad7a4a1da","pos":{"x":-174.29998779296875,"y":280},"rot":{"deg":0},"zIndex":10001,"kind":"image","size":{"width":100,"height":100},"imageUri":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"},"148a9004-21eb-143f-fb10-4ca231014d33":{"id":"148a9004-21eb-143f-fb10-4ca231014d33","pos":{"x":-159.29998779296875,"y":376},"rot":{"deg":0},"zIndex":10002,"kind":"button","size":{"width":200,"height":50},"message":"Please do not click on me!","label":"Click me!","style":{"backgroundColor":"rgba(15, 6, 10, 0.02)"}}}');
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
