import { LinePath } from '@visx/shape';

const MinPrice = ({ data, curve, yText, stroke, label, x, y }) => {
    return (
        <g>
            <LinePath
                data={data}
                y={y}
                x={x}
                curve={curve}
                stroke={stroke}
                strokeWidth={1}
                strokeDasharray="4,4"
                strokeOpacity=".3"
            />
            <text fill="#6086d6" y={yText} dy="-.5em" dx="10px" fontSize="12">
                {label}
            </text>
        </g>
    );
};

export default MinPrice