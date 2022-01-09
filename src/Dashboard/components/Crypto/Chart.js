import React, { createRef, useState } from 'react';
import { withParentSize } from '@visx/responsive';
import { scaleTime, scaleLinear } from '@visx/scale';
import { LinePath, AreaClosed, Bar, Line } from '@visx/shape';
import { LinearGradient } from '@visx/gradient';
import { PatternLines } from '@visx/pattern';
import { withTooltip, Tooltip } from '@visx/tooltip';
import { localPoint } from '@visx/event';
import { AxisBottom } from '@visx/axis';
import { bisector } from 'd3-array';
import { timeFormat } from 'd3-time-format';
import { valueFormatDisplay } from './utils';
import { curveStepAfter, curveLinear } from '@visx/curve';
import { Group } from '@visx/group';
import formatPrice from './utils/formatPrice';
import formatDate from './utils/formatDate';
import Maxprice from './components/maxprice';
import MinPrice from './components/minprice';
import Tooltips from './components/tooltips';
import Hoverline from './components/hoverline';
import numeral from 'numeral';

const bisectDate = bisector((d) => xData(d)).left;
const xData = (dataObject) => new Date(dataObject.time);
const all = (dataObject) => dataObject;
const open = (dataObject) => dataObject.open;
const high = (dataObject) => dataObject.high;
const low = (dataObject) => dataObject.low;
const volume = (dataObject) => dataObject.volume;
const y = (dataObject) => dataObject.close;
const yAxis = (dataObject) => dataObject.yAxisValue;
const xAxis = (dataObject) => dataObject.xAxisValue;
function Charts({
	data,
	parentWidth,
	parentHeight,
	margin = { top: 15, bottom: 40, left: 0, right: 0 },
	tooltipLeft,
	tooltipTop,
	tooltipData,
	hideTooltip,
	isConsideredMobile,
	enableCurveStepAfter,
	showTooltip,
}) {
	const [shiftTooltipLeft, setShiftTooltipLeft] = useState(false);
	const [shiftTooltipRight, setShiftTooltipRight] = useState(false);
	const handleTooltip = ({ event, data, xData, xScale, yScale }) => {
		const { x } = localPoint(event.target.ownerSVGElement, event);
		const x0 = xScale.invert(x);
		const index = bisectDate(data, x0, 1);
		const d0 = data[index - 1];
		const d1 = data[index];
		if (d0 && d1) {
			const d =
				xScale(x0) - xScale(all(d0)) > xScale(all(d1)) - xScale(x0) ? d1 : d0;
			const totalGraphWidth = xScale(xData(data[data.length - 1]));
			let tooltipLeft = xScale(xData(d));
			if (totalGraphWidth - tooltipLeft < 150) {
				setShiftTooltipLeft(true);
			} else {
				setShiftTooltipLeft(false);
			}
			if (tooltipLeft < 100) {
				setShiftTooltipRight(true);
			} else {
				setShiftTooltipRight(false);
			}
			showTooltip({
				tooltipLeft: tooltipLeft,
				tooltipTop: yScale(y(d)),
				tooltipData: d,
			});
		}
	};

	const width = parentWidth - margin.left - margin.right;
	const height = parentHeight - margin.top - margin.bottom;
	const tooltipAnimation = 'all .25s ease-out';

	let tooltipValueTranslate = 'translateX(0%)';
	let tooltipDateTranslate = 'translateX(-50%)';

	if (shiftTooltipLeft) {
		tooltipValueTranslate = 'translateX(calc(-100% - 25px))';
		tooltipDateTranslate = 'translateX(-100%)';
	} else if (shiftTooltipRight) {
		tooltipDateTranslate = 'translateX(0%)';
	}

	if (data.length > 0) {
		const xAxisTickFunction = (val, i) => ({ fontSize: 14, fill: 'white' });

		//const xAxisTickFormat = (val, i) => formatDateTimeTicker(val);
		const xAxisTickFormat = (val, i) => formatDateTimeTicker(val);

		const firstPointX = data[0];
		const currentPointX = data[data.length - 1];

		const maxValue = Math.max(...data.map(y));
		const minValue = Math.min(...data.map(y));

		const maxTime = Math.max(...data.map(xData));
		const minTime = Math.min(...data.map(xData));

		let formatDateTimeTooltip = timeFormat('%d %b %Y');

		let formatDateTimeTicker = isConsideredMobile
			? timeFormat('%d/%m/%y')
			: timeFormat('%d %b %Y');

		const numTicks = isConsideredMobile ? 3 : 10;

		const maxValuesData = [
			{
				xAxisValue: xData(firstPointX),
				yAxisValue: maxValue,
			},
			{
				xAxisValue: xData(currentPointX),
				yAxisValue: maxValue,
			},
		];

		const minValuesData = [
			{
				xAxisValue: xData(firstPointX),
				yAxisValue: minValue,
			},
			{
				xAxisValue: xData(currentPointX),
				yAxisValue: minValue,
			},
		];

		const xScale = scaleTime({
			range: [0, width],
			domain: [minTime, maxTime],
		});

		const yScale = scaleLinear({
			range: [height, 0],
			domain: [minValue, maxValue],
		});

		const maxTooltipTop = yScale(minValue);
		const setTooltipLabelTop =
			maxTooltipTop - tooltipTop > 20 ? tooltipTop - 50 : maxTooltipTop - 75;

		return (
			<div>
				<svg
					className={'monospace'}
					style={{ overflow: 'visible' }}
					width={width}
					height={height + 30}>
					<LinearGradient
						id='fill'
						from='#6086d6'
						to='#6086d6'
						fromOpacity={0.2}
						toOpacity={0}
					/>

					<PatternLines
						id='dLines'
						height={6}
						width={6}
						stroke='#27273f'
						strokeWidth={1}
						orientation={['diagonal']}
					/>
					<Group>
						<AxisBottom
							tickLabelProps={xAxisTickFunction}
							tickFormat={xAxisTickFormat}
							top={yScale(minValue)}
							data={data}
							scale={xScale}
							x={xData}
							hideAxisLine
							hideTicks
							numTicks={numTicks}
							className={'monospace'}
							ticksComponent={({ formattedValue, ...tickProps }) => {
								return { ...tickProps }.ticks.map((data, index) => (
									<text
										key={index}
										{...tickProps.tickLabelProps[index]}
										x={data.to.x}
										y={data.to.y + 5}
										fill='#ffffff'
										dy='.33em'
										fillOpacity={0.3}
										fontSize={11}
										textAnchor='middle'>
										<tspan dy='.33em'>{data.formattedValue}</tspan>
									</text>
								));
							}}
						/>
						<Maxprice
							data={maxValuesData}
							yText={yScale(maxValue) + 20}
							label={formatPrice(maxValue)}
							stroke={'#424242'}
							x={(d) => xScale(xAxis(d))}
							y={(d) => yScale(yAxis(d))}
						/>
						<AreaClosed
							data={data}
							yScale={yScale}
							x={(d) => xScale(xData(d))}
							curve={enableCurveStepAfter ? curveStepAfter : curveLinear}
							y={(d) => yScale(y(d))}
							fill='url(#fill)'
							stroke='transparent'
						/>
						<AreaClosed
							stroke='transparent'
							data={data}
							yScale={yScale}
							curve={enableCurveStepAfter ? curveStepAfter : curveLinear}
							y={(d) => yScale(y(d))}
							x={(d) => xScale(xData(d))}
							fill='url(#dLines)'
						/>
						<LinePath
							curve={enableCurveStepAfter ? curveStepAfter : curveLinear}
							stroke={'#6086d6'}
							data={data}
							y={(d) => yScale(y(d))}
							x={(d) => xScale(xData(d))}
						/>
						<MinPrice
							data={minValuesData}
							yText={yScale(minValue)}
							label={formatPrice(minValue)}
							stroke={'#424242'}
							x={(d) => xScale(xAxis(d))}
							y={(d) => yScale(yAxis(d))}
						/>
						<Bar
							data={data}
							width={width}
							height={height - margin.bottom}
							fill='transparent'
							onMouseMove={(event) =>
								handleTooltip({
									event,
									xData,
									xScale,
									yScale,
									data: data,
								})
							}
							onTouchStart={(event) =>
								handleTooltip({
									event,
									xData,
									xScale,
									yScale,
									data: data,
								})
							}
							onTouchMove={(event) =>
								handleTooltip({
									event,
									xData,
									xScale,
									yScale,
									data: data,
								})
							}
							onMouseLeave={(data) => (event) => hideTooltip()}
							onTouchEnd={(data) => (event) => hideTooltip()}
						/>
					</Group>
					{tooltipData && (
						<Hoverline
							from={{
								x: tooltipLeft,
								y: yScale(yAxis(maxValuesData[0])),
							}}
							to={{
								x: tooltipLeft,
								y: yScale(yAxis(minValuesData[0])),
							}}
							tooltipLeft={tooltipLeft}
							tooltipTop={tooltipTop}
						/>
					)}
				</svg>
				{tooltipData && (
					<Tooltips
						ystyle={{
							transform: tooltipValueTranslate,
							transition: tooltipAnimation,
						}}
						yclassName={'y-tooltip'}
						yTop={setTooltipLabelTop}
						yLeft={tooltipLeft + 12}
						yLabel={`Closed ${numeral(formatPrice(y(tooltipData))).format(
							'0.0a',
						)} \nOpen ${numeral(formatPrice(open(tooltipData))).format(
							'0.0a',
						)} \nHigh ${numeral(formatPrice(high(tooltipData))).format(
							'0.0a',
						)} \nLow ${numeral(formatPrice(low(tooltipData))).format(
							'0.0a',
						)} \nVolume ${numeral(formatPrice(volume(tooltipData))).format(
							'0.0a',
						)}`}
						xstyle={{
							transform: tooltipDateTranslate,
							transition: tooltipAnimation,
						}}
						xclassName={'x-tooltip'}
						xTop={yScale(yAxis(minValuesData[0])) - 7}
						xLeft={tooltipLeft}
						xLabel={formatDate(xData(tooltipData))}
					/>
				)}
			</div>
		);
	} else {
		return <div width={width} height={parentHeight}></div>;
	}
}

export default withParentSize(withTooltip(Charts));
