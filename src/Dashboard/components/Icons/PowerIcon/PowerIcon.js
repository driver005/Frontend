import React from 'react';
import { Svg } from '../../../styles/icons'

class PowerIcon extends React.Component {

    render() {
        return (
            <Svg className={this.props.className} width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.8333 9.99998C10.8333 10.4608 10.4599 10.8333 9.99992 10.8333C9.53992 10.8333 9.16658 10.4608 9.16658 9.99998V1.66665C9.16658 1.20581 9.53992 0.833313 9.99992 0.833313C10.4599 0.833313 10.8333 1.20581 10.8333 1.66665V9.99998ZM12.699 2.95106C12.9098 2.54189 13.4132 2.38273 13.8215 2.59273C16.604 4.03189 18.3332 6.86939 18.3332 10.0002C18.3332 14.5944 14.5948 18.3336 9.99984 18.3336C5.40484 18.3336 1.6665 14.5944 1.6665 10.0002C1.6665 6.86939 3.39567 4.03189 6.179 2.59273C6.5865 2.38189 7.08984 2.54106 7.3015 2.95106C7.51317 3.35939 7.35234 3.86189 6.944 4.07356C4.7165 5.22439 3.33317 7.49523 3.33317 10.0002C3.33317 13.6761 6.324 16.6669 9.99984 16.6669C13.6757 16.6669 16.6665 13.6761 16.6665 10.0002C16.6665 7.49523 15.2832 5.22439 13.0565 4.07356C12.6473 3.86189 12.4873 3.35939 12.699 2.95106Z" />
            <mask id="power" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="0" width="18" height="19">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.8333 9.99998C10.8333 10.4608 10.4599 10.8333 9.99992 10.8333C9.53992 10.8333 9.16658 10.4608 9.16658 9.99998V1.66665C9.16658 1.20581 9.53992 0.833313 9.99992 0.833313C10.4599 0.833313 10.8333 1.20581 10.8333 1.66665V9.99998ZM12.699 2.95106C12.9098 2.54189 13.4132 2.38273 13.8215 2.59273C16.604 4.03189 18.3332 6.86939 18.3332 10.0002C18.3332 14.5944 14.5948 18.3336 9.99984 18.3336C5.40484 18.3336 1.6665 14.5944 1.6665 10.0002C1.6665 6.86939 3.39567 4.03189 6.179 2.59273C6.5865 2.38189 7.08984 2.54106 7.3015 2.95106C7.51317 3.35939 7.35234 3.86189 6.944 4.07356C4.7165 5.22439 3.33317 7.49523 3.33317 10.0002C3.33317 13.6761 6.324 16.6669 9.99984 16.6669C13.6757 16.6669 16.6665 13.6761 16.6665 10.0002C16.6665 7.49523 15.2832 5.22439 13.0565 4.07356C12.6473 3.86189 12.4873 3.35939 12.699 2.95106Z" />
            </mask>
            <g mask="url(#power)">
            <rect width="20" height="20" />
            </g>
            </Svg>
        );
    }
}

export default PowerIcon;
