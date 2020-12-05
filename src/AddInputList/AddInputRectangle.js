import React, { useState } from 'react';
import AddRectangleForm from './AddRectangleForm'

export default function AddInputList(rectangle) {

	const [width, setWidth] = useState('');
	const [height, setHeight] = useState('');
	const [x, setX] = useState('');
	const [y, setY] = useState('');

	function handleRectangleWidth(event) {
		setWidth(event.target.value)
	};
	function handleRectangleHeigth(event) {
		setHeight(event.target.value)
	};
	function handleXposition(event) {
		setX(event.target.value)
	}
	function handleYposition(event) {
		setY(event.target.value)
	}

	return (
		<>
			<div id="rectangle">
				<label>Width</label>
				<input onChange={handleRectangleWidth} type="text" name="width" type="number" value={width}></input>

				<label>Height</label>
				<input onChange={handleRectangleHeigth} name="height" type="number" value={height}></input>

				<label>X Position</label>
				<input onChange={handleXposition} name="x" type="number" value={x}></input>

				<label>Y Position</label>
				<input onChange={handleYposition} name="y" type="number" value={y}></input>
			</div>
			<AddRectangleForm
				width={width}
				height={height}
				y={y}
				x={x}
			/>
		</>

	)
}
