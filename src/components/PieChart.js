import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "Depressed Tweets"
			},
			subtitles: [{
				text: "60% Positive",
				verticalAlign: "center",
				fontSize: 20,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "Not-Depressed", y: 60.3 },
					{ name: "Depressed", y: 39.7 }
				]
			}]
		}
		return (
		<div className="w-[400px] h-[300px] scale-75 ml-10 mt-[10px]">
			<CanvasJSChart options = {options} 
				 onRef={ref => this.chart = ref} 
				className="bg-transparent"
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default PieChart;  