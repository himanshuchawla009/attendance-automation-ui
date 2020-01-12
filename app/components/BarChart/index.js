/**
 *
 * BarChart
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Bar } from "react-chartjs-2";

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const data = {
  labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
  datasets: [
    {
      label: "Data",
      fill: true,
      borderColor: "#ff5991",
      borderWidth: 2,
      borderDash: [],
      borderDashOffset: 0.0,
      data: [80, 100, 70, 80, 120, 80]
    }
  ]
};
const options= {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        gridLines: {
          drawBorder: false,
          color: "rgba(253,93,147,0.1)",
          zeroLineColor: "transparent"
        },
        ticks: {
          suggestedMin: 60,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9e9e9e"
        }
      }
    ],
    xAxes: [
      {
        gridLines: {
          drawBorder: false,
          color: "rgba(253,93,147,0.1)",
          zeroLineColor: "transparent"
        },
        ticks: {
          padding: 20,
          fontColor: "#9e9e9e"
        }
      }
    ]
  }
}

function BarChart() {
  return (
    <div>
      <Bar
        data={data}
        options={options}
      />
    </div>
  );
}

BarChart.propTypes = {};

export default memo(BarChart);
