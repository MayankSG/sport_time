import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    bezierCurve: true,
    backgroundColor: "transparent",
    plugins: {
        legend: {
            position: "bottom",

            labels: {
                usePointStyle: true
            }
        },
        title: {
            display: false,
            text: "Chart.js Line Chart"
        },
        chartArea: {
            backgroundColor: "transparent"
        }
    },
    scales: {
        y: {
            grid: {
                color: 'gray',
            },
            display: true,
        },
        x: {
            beginAtZero: true,
            display: false,
            behaviour: "smooth"
        }
    },
};

const labels = ["", "", "", "", "", "", ""];

export const data = {
    labels,
    backgroundColor: "transparent",
    datasets: [
        {
            label: "Training sessions",
            lineTension: 0.6,
            pointRadius: 0,
            data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]],
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)"
        },
        {
            label: "Team meetings",
            pointRadius: 0,
            lineTension: 1,
            data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)"
        },
        {
            label: "Medical checks",
            pointRadius: 0,
            lineTension: 1,

            data: [[0, 2], [1, 4], [2, 3], [3, 1], [4, 2]],
            borderColor: "#505dd6",
            backgroundColor: "#505dd6"
        }
    ]
};

export default function LineChart() {
    return (
        <>
            <div className="sp-sm-9 my-10 sp-resp-full">
                <div className="sp-sec-bl sp-sec-bl-hg sp-sec-gy">
                    <div className="sp-sec-ch">
                        <div className="sp-head-top pb-10">
                            <h3>Half Years Work Results</h3>
                            <a href="#">Browse More</a>
                        </div>
                        <div
                            className="sp-contacts sp-flex sp-items-center sp-justify-between pb-10 my-10"
                        >
                            <Line options={options} data={data} style={{ backgroundColor: 'transparent' }} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

