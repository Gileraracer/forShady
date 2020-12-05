import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	background-color: red;
	width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
	left: ${({ x }) => x}px;
	top: ${({ y }) => y}px;
	position: relative;
`;

export default (props) => {
	return <StyledDiv width={props.width} height={props.height} y={props.y} x={props.x} />;
};