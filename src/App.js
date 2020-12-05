import React, { useState } from 'react';
import AddInputList from './AddInputList/AddInputList';

export default function App() {
	let [circleInput, setCircleInput] = useState([]);
	let [rectangleInput, setRectangleInput] = useState([]);
	
	function handleAddCircle() {
		let circle = 
		{
			'position':
				{
					'x' : 0,
					'y': 0
				},
			'size':
			 {
				'radius': 0
			 }
		}

		setCircleInput([circle, ...circleInput])
	}

	function handleAddRectangles() {
		let rectangle = 
		{
			'position':
				{
					'x' : 0,
					'y': 0
				},
			'size':
			 {
				'width': 0,
				'height': 0
			 }
		}

		setRectangleInput([rectangle, ...rectangleInput])
	}

	return(
		<>
			<button onClick={handleAddCircle}>Add Circle</button>
			<button onClick={handleAddRectangles}>Add Rectangle</button>
			<AddInputList circleList={circleInput} rectangleList={rectangleInput}/>
		</>
	)
}
