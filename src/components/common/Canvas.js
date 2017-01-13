import React from "react";

const canvasStyles = {
	margin: "auto",
	position: "absolute",
};

const Canvas = ({}) => {
	return (
		<div className="col-md-9" ref="canvasWrapper" id="canvas-wrapper">
			<div id="canvas-inner">
				<canvas ref="canvas" id="canvas" style={canvasStyles}></canvas>
			</div>
		</div>
	);
}
