import { Tooltip } from '@visx/tooltip';

const Tooltips = ({
	yTop,
	yLeft,
	yLabel,
	ystyle,
	yclassName,
	xTop,
	xLeft,
	xLabel,
	xstyle,
	xclassName,
}) => {
	return (
		<div>
			<Tooltip top={xTop} left={xLeft} style={xstyle} className={xclassName}>
				{xLabel}
			</Tooltip>
			<Tooltip top={yTop} left={yLeft} style={ystyle} className={yclassName}>
				{yLabel}
			</Tooltip>
		</div>
	);
};

export default Tooltips;
