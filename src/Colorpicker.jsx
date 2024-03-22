import React, {useState} from 'react';
import './Colorpicker.css';

const Colorpicker = () => {

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value);
    }

  return (
    <div className="container">
        <div className='color-picker'>
            <div className="content">
                <h1>Color Picker</h1>
                <div className="display">
                    <div className="color-display">
                        <p>Selected Color: {color}</p>
                    </div>
                    <label>Select a color: </label>
                    <input type="color" value={color} onChange={handleColorChange} />
                    <div className='choosenColor' style={{backgroundColor: color}}></div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Colorpicker