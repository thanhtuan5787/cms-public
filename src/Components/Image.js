import React from 'react';
import Item from './Common/Item';

function Image(props) {
    const { elemData } = props;
    return (
        <>
            <Item
                elemData={elemData}
                key={elemData.id + '-item' }
            >
                {!elemData.imageUri ? (
                    <center>Set an image URL</center>
                ) : (
                    <img
                        style={{ width: '100%', height: '100%' }}
                        src={elemData.imageUri}
                    />
                )}
            </Item>
        </>
    );
}

export default Image;
