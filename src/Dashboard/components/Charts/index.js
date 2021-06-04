import { Mercator, Graticule } from '@visx/geo';
import * as topojson from 'topojson-client';
import { scaleQuantize } from '@visx/scale';
import topology from './world.json';

const background = '#e2ecf3';

const world = topojson.feature(topology, topology.objects.units)

const color = scaleQuantize({
    domain: [
        Math.min(...world.features.map(f => f.geometry.coordinates.length)),
        Math.max(...world.features.map(f => f.geometry.coordinates.length)),
    ],
    range: ['#ffb01d', '#ffa020', '#ff9221', '#ff8424', '#ff7425', '#fc5e2f', '#f94b3a', '#f63a48'],
});

export function World({ width, height, events = false }) {
    const centerX = width / 2;
    const centerY = height / 2;
    const scale = (width / 630) * 100;
    return width < 10 ? null : (
        <svg width={width} height={height}>
        <rect x={0} y={0} width={width} height={height} fill={background} rx={14} />
        <Mercator
        data={world.features}
        scale={scale}
        translate={[centerX, centerY]}
        >
        {mercator => (
            <g transform={"translate(0,0)"}>
            {mercator.features.map(({ feature, path }, i) => (
                <path
                key={`map-feature-${i}`}
                d={path || ''}
                fill={color(feature.geometry.coordinates.length)}
                stroke={background}
                strokeWidth={0.5}
                onClick={() => {
                    if (events) alert(`Clicked: ${feature.properties.name} (${feature.id})`);
                }}
                />
            ))}
            </g>
        )}
        </Mercator>
    </svg>
    );
};