import "./ChartBar.css"

const ChartBar = (props) => {  // child of Chart, props is to receive maxValue aka totalMaximum from Chart
    let barFillHeight = "0%";
    if (props.maxValue > 0) {
        barFillHeight = (Math.round((props.value / props.maxValue) * 100)).toString() + "%"  // return percentage
    }

    return <div className="chart-bar" >
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{ height: barFillHeight }}>

            </div>
        </div>
        <div className="chat-bar__label">{props.label}</div>
    </div>;
};

export default ChartBar;