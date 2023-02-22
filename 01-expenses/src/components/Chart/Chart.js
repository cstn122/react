import ChartBar from "./ChartBar"
import "./Chart.css"

const Chart = (props) => {  // child of Expenseschart, props is to receive dataPoints aka chartDataPoints from Chart
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);  // spread the array elements so Math.max receives the numbers but an array of numbers
    return <div className="chart">
        {props.dataPoints.map(dataPoint =>
            <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}
            />)}
    </div>;
};

export default Chart;