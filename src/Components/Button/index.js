import React  from 'react';
import Item from '../Common/Item';

function Button(props) {
    const { elemData } = props;
    return (
        <>
            <Item
                key={elemData.id + "-item"}
                elemData={elemData}        >
                {
                    <button
                        key={elemData.id + "-button"}
                        className={'button'}
                        style={{
                            width: '100%',
                            height: '100%',
                            color: isDarkColor(elemData.style &&elemData.style.backgroundColor) ? 'black' : 'black',
                            ...elemData.style,
                        }}
                        onClick={() => {
                            alert(elemData.message);
                        }}
                    >
                        {elemData.label}
                    </button>
                }
            </Item>
        </>
    );
}

export default Button;
function isDarkColor(bgColor) {
    if(typeof bgColor === 'undefined') return false;
    var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    var r = parseInt(color.substring(0, 2), 16); // hexToR
    var g = parseInt(color.substring(2, 4), 16); // hexToG
    var b = parseInt(color.substring(4, 6), 16); // hexToB
    return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
      false : true;
  }