import React from 'react';
import { Svg } from '../../../../styles/icons'

class MessageIcon extends React.Component {

    render() {
        return (
            <Svg className={this.props.className} width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.83346 9.16604C5.83346 8.70604 6.20679 8.33271 6.66679 8.33271C7.12679 8.33271 7.50013 8.70604 7.50013 9.16604C7.50013 9.62604 7.12679 9.99937 6.66679 9.99937C6.20679 9.99937 5.83346 9.62604 5.83346 9.16604ZM10.0001 8.33271C9.54013 8.33271 9.16679 8.70604 9.16679 9.16604C9.16679 9.62604 9.54013 9.99937 10.0001 9.99937C10.4601 9.99937 10.8335 9.62604 10.8335 9.16604C10.8335 8.70604 10.4601 8.33271 10.0001 8.33271ZM13.3335 8.33271C12.8735 8.33271 12.5001 8.70604 12.5001 9.16604C12.5001 9.62604 12.8735 9.99937 13.3335 9.99937C13.7935 9.99937 14.1668 9.62604 14.1668 9.16604C14.1668 8.70604 13.7935 8.33271 13.3335 8.33271ZM16.5821 10.2451C16.1596 12.9568 13.9738 15.206 11.2663 15.7135C9.95879 15.9601 8.62713 15.8193 7.41879 15.3076C7.07629 15.1626 6.72213 15.0893 6.37463 15.0893C6.21629 15.0893 6.05963 15.1043 5.90546 15.1351L3.56213 15.6035L4.03129 13.256C4.12963 12.7685 4.06963 12.2468 3.85879 11.7476C3.34713 10.5393 3.20713 9.20845 3.45296 7.90012C3.96046 5.19262 6.20879 3.00679 8.92129 2.58429C11.0796 2.24845 13.1905 2.92845 14.7138 4.45179C16.238 5.97595 16.9188 8.08762 16.5821 10.2451ZM15.893 3.27346C13.9888 1.37012 11.3555 0.520956 8.66463 0.936789C5.26713 1.46679 2.45046 4.20346 1.81463 7.59262C1.50796 9.22429 1.68463 10.886 2.32379 12.3968C2.40463 12.5893 2.42963 12.7685 2.39796 12.9293L1.68296 16.5026C1.62796 16.776 1.71379 17.0585 1.91129 17.2551C2.06879 17.4135 2.28129 17.4993 2.50046 17.4993C2.55463 17.4993 2.60879 17.4943 2.66379 17.4835L6.23296 16.7693C6.43796 16.7301 6.63629 16.7876 6.76879 16.8426C8.28129 17.4818 9.94296 17.6576 11.573 17.3518C14.963 16.716 17.6996 13.8993 18.2296 10.5018C18.648 7.81262 17.7971 5.17762 15.893 3.27346Z" />
            <mask id="message" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="0" width="18" height="18">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.83346 9.16604C5.83346 8.70604 6.20679 8.33271 6.66679 8.33271C7.12679 8.33271 7.50013 8.70604 7.50013 9.16604C7.50013 9.62604 7.12679 9.99937 6.66679 9.99937C6.20679 9.99937 5.83346 9.62604 5.83346 9.16604ZM10.0001 8.33271C9.54013 8.33271 9.16679 8.70604 9.16679 9.16604C9.16679 9.62604 9.54013 9.99937 10.0001 9.99937C10.4601 9.99937 10.8335 9.62604 10.8335 9.16604C10.8335 8.70604 10.4601 8.33271 10.0001 8.33271ZM13.3335 8.33271C12.8735 8.33271 12.5001 8.70604 12.5001 9.16604C12.5001 9.62604 12.8735 9.99937 13.3335 9.99937C13.7935 9.99937 14.1668 9.62604 14.1668 9.16604C14.1668 8.70604 13.7935 8.33271 13.3335 8.33271ZM16.5821 10.2451C16.1596 12.9568 13.9738 15.206 11.2663 15.7135C9.95879 15.9601 8.62713 15.8193 7.41879 15.3076C7.07629 15.1626 6.72213 15.0893 6.37463 15.0893C6.21629 15.0893 6.05963 15.1043 5.90546 15.1351L3.56213 15.6035L4.03129 13.256C4.12963 12.7685 4.06963 12.2468 3.85879 11.7476C3.34713 10.5393 3.20713 9.20845 3.45296 7.90012C3.96046 5.19262 6.20879 3.00679 8.92129 2.58429C11.0796 2.24845 13.1905 2.92845 14.7138 4.45179C16.238 5.97595 16.9188 8.08762 16.5821 10.2451ZM15.893 3.27346C13.9888 1.37012 11.3555 0.520956 8.66463 0.936789C5.26713 1.46679 2.45046 4.20346 1.81463 7.59262C1.50796 9.22429 1.68463 10.886 2.32379 12.3968C2.40463 12.5893 2.42963 12.7685 2.39796 12.9293L1.68296 16.5026C1.62796 16.776 1.71379 17.0585 1.91129 17.2551C2.06879 17.4135 2.28129 17.4993 2.50046 17.4993C2.55463 17.4993 2.60879 17.4943 2.66379 17.4835L6.23296 16.7693C6.43796 16.7301 6.63629 16.7876 6.76879 16.8426C8.28129 17.4818 9.94296 17.6576 11.573 17.3518C14.963 16.716 17.6996 13.8993 18.2296 10.5018C18.648 7.81262 17.7971 5.17762 15.893 3.27346Z" />
            </mask>
            <g mask="url(#message)">
            <rect width="20" height="20" />
            </g>
            </Svg>
        );
    }
}

export default MessageIcon;