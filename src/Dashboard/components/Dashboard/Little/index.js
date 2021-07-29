import React from 'react'
import { Colcomponent, H6item, H6title, Pnormal, Progresscomponents, Statitem, Statsrow } from '../../../../styles/dashboard'
import Widget from '../../Widget/Widget'
import numeral from 'numeral';

function Littlecomponent({name,statenames, statevalues, hasIncreased, procent, hasIncreasedtext, noprocent, nomoney}) {
    return (
        <Colcomponent lg={6} xl={4} xs={12}>
            <Widget title={<H6title> {name} </H6title>} close>
                <Statsrow className="stats-row">
                    <Statitem className="stat-item">
                        <H6item className="name">{statenames[0]}</H6item>
                        <Pnormal className="value">{numeral(statevalues[0]).format(`${!nomoney && '$'} 0.0a`)}</Pnormal>
                    </Statitem>
                    <Statitem className="stat-item">
                        <H6item className="name">{statenames[1]}</H6item>
                        <Pnormal className="value">{numeral(statevalues[1]).format(`${!nomoney && '$'} 0.0a`)}</Pnormal>
                    </Statitem>
                    <Statitem className="stat-item">
                        <H6item className="name">{statenames[2]}</H6item>
                        <Pnormal className="value">{numeral(statevalues[2]).format(`${!nomoney && '$'} 0.0a`)}</Pnormal>
                    </Statitem>
                </Statsrow>
                {!noprocent && (
                    <React.Fragment>
                        <Progresscomponents
                            variant="success"
                            animated
                            now={procent}
                            className="bg-subtle-blue progress-xs"
                        />
                        <p>
                            <small>
                                <span className="circle bg-default text-white mr-2">
                                    <i className="fa fa-chevron-up" />
                                </span>
                            </small>
                            <span className="fw-semi-bold">&nbsp;{procent}% {hasIncreased ? 'higher' : 'lower'}</span>
                            &nbsp;{hasIncreasedtext}
                        </p>
                    </React.Fragment>
                )}
            </Widget>
        </Colcomponent>
    )
}

export default Littlecomponent
