



import React from 'react'
import { quiz } from './quizitems';
import Quiz from '../../components/Quiz/Quiz'
import Widget from '../../components/Widget/Widget';
import { Colcomponent } from '../../../styles/calendar';
import './styles.css'

function Quizcomponent() {
    return (
        <Colcomponent>
        <Widget>
            <Quiz quiz={quiz} shuffle={true}/>
        </Widget>
        </Colcomponent>
    )
}

export default Quizcomponent
