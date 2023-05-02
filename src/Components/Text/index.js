import React from 'react';
import Item from '../Common/Item';

function Text(props) {
    const { elemData } = props;

    return (
        <>
          <Item
                elemData={elemData}
                key={elemData.id + '-item' }
            >
                <EditableDiv
                    value={elemData.text}
                    contentEditable={props.selected}
                    key={elemData.id + '-text' }
                
                    style={{
                        ...elemData.style,
                    }}
                />
            </Item>
        </>
    );
}

export default Text;
function EditableDiv(props) {
    const { value, style } = props;
    return (<>
        {<div
            style={{...style }}
        >
            {value}
        </div>}
        </>
    );
}