import React, { useState } from 'react';
import AddInputCircle from './AddInputCircle';
import AddInputRectangle from './AddInputRectangle';


export default function AddInputList({circleList, rectangleList}) {
    let circleRender = []
    circleList.map((element, index) => {
        circleRender.push(
            <AddInputCircle key={index} circle={element}/>
        )    
    })

    let rectangleRender = []
    rectangleList.map((element, index) => {
        rectangleRender.push(
            <AddInputRectangle key={index} rectangle={element}/>
        )    
    })

	return(
		<>
            {circleRender}
            {rectangleRender}
		</>
	)
}
