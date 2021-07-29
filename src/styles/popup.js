import styled, {keyframes} from 'styled-components'
import * as variables from './variables'
import { Modal, Button } from 'react-bootstrap';


export const Popup = styled(Modal)`
    background-color: rgb(24, 26, 27);
    border-color: rgba(140, 130, 115, 0.2);
    outline-color: initial;
`

export const wrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`