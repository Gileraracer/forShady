import React, {useRef, useState} from 'react';
import AddCircleForm from './AddCircleForm'

export default function AddInputList(circle) {
	const [radius, setRadius] = useState('');
    const [x, setPositionX] = useState('');
    const [y, setPositionY] = useState('');

    function handleCircleRadius (event) {
        setRadius(event.target.value)    
    };
    function handleCircleXposition (event) {
        setPositionX(event.target.value)
    }
    function handleCircleYposition (event) {
        setPositionY(event.target.value)
    }

	return(
		<>
		<div id="circle">
            <label>Radius</label>
			<input onChange={handleCircleRadius} name="radius" type="number" value={radius}></input>
			
			<label>X Position</label>
			<input onChange={handleCircleXposition} name="x" type="number" value={x}></input>
			
			<label>Y Position</label>
			<input onChange={handleCircleYposition} name="y" type="number" value={y}></input>
		</div>
		<AddCircleForm 
		radius = {radius} 
		y = {y} 
		x = {x}
		/>
		</>
	)
}