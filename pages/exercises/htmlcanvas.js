import React, { useEffect } from 'react';
import Layout from '../../components/Layout';

function htmlcanvas() {
	let isDrawing = false;
	let lastX = 0;
	let lastY = 0;
	let canvas;
	let ctx;
	let hue = 0;
	let direction = true;
	useEffect(() => {
		canvas = document.querySelector('#draw');

		ctx = canvas.getContext('2d');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		ctx.strokeStyle = hue;
		ctx.lineJoin = 'round';
		ctx.lineCap = 'round';
		ctx.lineWidth = 100;

		canvas.addEventListener('mousedown', (e) => {
			isDrawing = true;
			[lastX, lastY] = [e.offsetX, e.offsetY];
		});

		canvas.addEventListener('mousemove', draw);
		canvas.addEventListener('mouseup', () => (isDrawing = false));
		canvas.addEventListener('mouseout', () => (isDrawing = false));
	});

	const draw = (e) => {
		if (!isDrawing) return;
		ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
		ctx.beginPath();
		ctx.moveTo(lastX, lastY);
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.stroke();
		[lastX, lastY] = [e.offsetX, e.offsetY];
		hue++;
		if (hue >= 360) {
			hue = 0;
		}
		if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
			direction = !direction;
		}
		direction ? ctx.lineWidth++ : ctx.lineWidth--;
	};

	return (
		<Layout title='HTML Canvas'>
			<div className='w-screen h-screen'>
				<canvas id='draw' width='800' height='800'></canvas>
			</div>
		</Layout>
	);
}

export default htmlcanvas;
