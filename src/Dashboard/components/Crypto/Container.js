import React from 'react'
import formatPrice from './utils/formatPrice'

function Container({titleTop, titleBottom, currentPrice, hasIncreased, diffPrice, chartStyle, children}) {
    return (
        <div className="center">
            <div className="title">
                <div>
                    {titleTop}<br />
                    <small>{titleBottom}</small>
                </div>
                <div className="spacer" />
                <div className="stats">
                    <div className="current">
                    {formatPrice(currentPrice)}
                    </div>
                    <div className={hasIncreased ? 'diffIncrease' : 'diffDecrease'}>
                    {formatPrice(diffPrice)}
                    </div>
                </div>
            </div>
            <div className="chart" style={chartStyle}>
                {children}
            </div>
        </div>
    )
}

export default Container
