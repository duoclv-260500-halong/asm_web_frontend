import React, { useState } from 'react';

function ColorBox({}) {
    
    const [color, setColor] = useState('black');
    
    return (
        <div>
            <p id="color" style={{color: color}}>{color}</p>
            <br />
            <br />
            <button onClick={() => setColor('white')}>Đổi thành màu trắng</button>
            <button onClick={() => setColor('black')}>Đổi thành màu đen</button>
            <button onClick={() => setColor('yellow')}>Đổi thành màu vàng</button>
            <button onClick={() => setColor('red')}>Đổi thành màu đỏ</button>
        </div>
    )
}

export default ColorBox;