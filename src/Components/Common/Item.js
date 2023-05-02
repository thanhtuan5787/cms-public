import React, { useRef } from 'react';
function Item(props) {
    const { elemData } = props;

    const divRef = useRef();

    return (
        <>
            <Rect
                ref={divRef}
                elemdata={elemData}
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        zIndex: elemData.zIndex,
                    }}
                >
                    {props.children}
                </div>
            </Rect>
        
        </>
    );
}

const Rect = React.forwardRef((props, ref) => {
    const {
        elemdata: elemData
    } = props;
    const { pos, size, rot, zIndex } = elemData;
    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
            }}
            ref={ref}
            key={elemData.id + '-rect'}
            style={{
                zIndex: zIndex,
                position: 'absolute',
                transform: `translate(-50%, -50%) ${
                    rot && rot.deg ? `rotate(${rot.deg}deg)` : ``
                }`,
                left: pos.x + 'px',
                top: pos.y + 'px',
                width: (size.width || 50) + 'px',
                height: (size.height || 50) + 'px',
                textAlign: 'center',
            }}
            {...props}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    border: '1px solid transparent',
                }}
            >
                {props.children}
            </div>

            
        </div>
    );
});


export default Item;
