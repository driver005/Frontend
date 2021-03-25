import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Loader extends React.Component {
    static propTypes = {
        size: PropTypes.number.isRequired
    };

    static defaultProps = {
        size: 21
    };

    render() {
        return (
            <div className={cx(this.props.className)}>
                <i className="la la-spinner la-spin" style={{fontSize: this.props.size}}/>
            </div>
        );
    }
}

export default Loader;
