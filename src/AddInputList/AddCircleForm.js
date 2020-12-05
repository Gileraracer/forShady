import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
	background-color: grey;
	width: ${({ radius }) => 2*radius}px;
	height: ${({ radius }) => 2*radius}px;
	border-radius: 50%;
	left: ${({ x }) => x}px;
	top: ${({ y }) => y}px;
	position: relative;
`;

export default (props) => {
	return <StyledDiv radius={props.radius} y={props.y} x={props.x} />;
};
