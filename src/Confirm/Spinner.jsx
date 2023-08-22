import React from 'react'
import { Spinner } from 'react-bootstrap'


export default props => <Spinner className={`${props.spinning}`} size={props.size} animation="border" variant="primary" />