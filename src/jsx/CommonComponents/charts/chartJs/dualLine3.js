// it is being used in home page as a two line chart

import React, { Component } from "react";
import Chart, { CategoryScale, LinearScale } from 'chart.js/auto';
import { Line } from "react-chartjs-2";

const data = {
   defaultFontFamily: "Poppins",
   labels: [
      "Week 01",
      "Week 02",
      "Week 03",
      "Week 04",
      "Week 05",
      "Week 06",
      "Week 07",
      "Week 08",
      "Week 09",
      "Week 10",
   ],
   datasets: [
      {
         label: "My First dataset",
         data: [78, 80, 20, 40, 75, 75, 25, 40, 10, 30],
         borderColor: "rgba(78, 54, 226, 1)",
         borderWidth: "5",
         pointHoverRadius: 10,
         backgroundColor: "transparent",
         pointBackgroundColor: "rgba(78, 54, 226, 1)",
      },
   ],
};

const options = {
   legend: false,
   tooltips: {
      intersect: false,
   },
   hover: {
      intersect: true,
   },
   scales: {
      yAxes: [
         {
            ticks: {
               beginAtZero: true,
               max: 100,
               min: 0,
               stepSize: 20,
               padding: 10,
            },
         },
      ],
      xAxes: [
         {
            ticks: {
               padding: 5,
            },
         },
      ],
   },
   elements: {
      point: {
         radius: 0,
      },
   },
};

class DualLine3 extends Component {
   render() {
      return <Line data={data} options={options} />;
   }
}

export default DualLine3;
