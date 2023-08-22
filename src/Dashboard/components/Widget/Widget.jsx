import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-bootstrap';
import classNames from 'classnames';
import Loader from '../Loader/Loader';
import { FaTimes } from 'react-icons/fa'
import { CgSync } from 'react-icons/cg'
import { IoSettingsOutline } from 'react-icons/io5'

import { v4 as uuidv4 } from 'uuid';
import {
    Dropdown,
    Button,
    Modal,
} from 'react-bootstrap';
import { Body, Header, Section, Widgetcontrols } from '../../../styles/widget';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

class Widget extends React.Component {
    static propTypes = {
        title: PropTypes.node,
        className: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]),
        close: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
        fullscreen: PropTypes.bool,
        collapse: PropTypes.bool,
        refresh: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
        settings: PropTypes.bool,
        settingsInverse: PropTypes.bool,
        tooltipPlacement: PropTypes.string,
        showTooltip: PropTypes.bool,
        bodyClass: PropTypes.string,
        customControls: PropTypes.bool,
        options: PropTypes.object, //eslint-disable-line,
        fetchingData: PropTypes.bool,
    };

    static defaultProps = {
        title: null,
        className: '',
        children: [],
        close: false,
        fullscreen: false,
        collapse: false,
        refresh: false,
        settings: false,
        settingsInverse: false,
        tooltipPlacement: 'bottom',
        showTooltip: false,
        bodyClass: '',
        customControls: false,
        customClose: null,
        customExpand: null,
        customCollapse: null,
        customFullscreen: null,
        customReload: null,
        customDropDown: null,
        prompt: false,
        collapsed: false,
        options: {},
        fetchingData: false,
        widgetType: "",
    };

    constructor(props) {
        super(props);

        this.state = {
            randomId: uuidv4(),
            hideWidget: false,
            collapseWidget: !!props.collapsed,
            height: props.collapsed ? 0 : 'auto',
            fullscreened: false,
            reloading: false,
            modal: false,
            apiData: ''
        }

    }



    toggleModal = () => {
        this.setState({ modal: !this.state.modal });
    }

    handleClose = () => {
        this.setState({ hideWidget: !this.state.hideWidget })
    }

    handleCollapse = () => {
        let heightValue = this.state.collapseWidget ? 'auto' : 0
        this.setState({
            height: heightValue,
            collapseWidget: !this.state.collapseWidget,
            reloading: false
        });

    };

    closeWithModal = () => {
        this.toggleModal();
        this.handleClose();
    }

    handleExpand = () => {

        this.setState({
            height: 'auto',
            collapseWidget: false
        });

    };

    handleReload = () => {
        const { widgetType, updateWidgetData } = this.props;
        const type = widgetType;
        if (type) {
            updateWidgetData(type)
        }
        this.setState({ reloading: true });
        let endpoint = false;
        if (!endpoint) {
            setTimeout(() => this.setState({ reloading: false }), 2000);
        } else {
            this.setState({ reloading: true });
            fetch('https://yourapi.com')
                .then(response => response.json())
                .then(json => this.setState({ apiData: json.title }))
                .then(setTimeout(() => this.setState({ reloading: false }), 1000))
        }
    }

    handleFullscreen = () => {
        this.setState({ fullscreened: !this.state.fullscreened });
    }

    render() {

        const {
            title,
            className,
            children,
            close,
            fullscreen,
            collapse,
            refresh,
            settings,
            settingsInverse,
            tooltipPlacement,
            showTooltip,
            bodyClass,
            customControls,
            customClose,
            customExpand,
            customCollapse,
            customFullscreen,
            customReload,
            fetchingData,
            customDropDown,
            customBody,
            prompt,
            collapsed,
            widgetType,
            updateWidgetData,
            options, //eslint-disable-line
            ...attributes
        } = this.props;
        const mainControls = !!(close || fullscreen || collapse || refresh || settings || settingsInverse);

        const {
            reloading,
            fullscreened,
            randomId,
            height,
            hideWidget,
            collapseWidget,
            modal,
        } = this.state;



        return (
            <React.Fragment>
                <Section
                    style={{ display: hideWidget ? 'none' : '' }}
                    className={
                        classNames('widget', { 'fullscreened': !!fullscreened, 'collapsed': !!collapseWidget }, className, (reloading || fetchingData) ? '' : '')
                    } {...attributes}
                >
                    {
                        title && (
                            typeof title === 'string'
                                ? <h5 >{title}</h5>
                                : <Header>{title}</Header>
                        )
                    }

                    {
                        !customControls && mainControls && (
                            <Widgetcontrols className={`widget-controls`}>
                                {settings && (
                                    <button><IoSettingsOutline /></button>
                                )}
                                {settingsInverse && (
                                    <button className={`bg-gray-transparent`}><i
                                        className="la fa-cog text-white"
                                    /></button>
                                )}
                                {refresh && (
                                    <button onClick={this.handleReload} id={`reloadId-${randomId}`}>
                                        {typeof refresh === 'string' ?
                                            <strong className="text-gray-light">{refresh}</strong> :
                                            <CgSync />}
                                        {showTooltip && (
                                            <Tooltip
                                                placement={tooltipPlacement}
                                                target={`reloadId-${randomId}`}
                                            >Reload</Tooltip >
                                        )}
                                    </button>
                                )}
                                {fullscreen && (
                                    <button onClick={this.handleFullscreen} id={`fullscreenId-${randomId}`}>
                                        <i className={`glyphicon glyphicon-resize-${fullscreened ? 'small' : 'full'}`} />
                                        {showTooltip && (
                                            <Tooltip
                                                placement={tooltipPlacement}
                                                target={`fullscreenId-${randomId}`}
                                            >Fullscreen</Tooltip >
                                        )}
                                    </button>
                                )}
                                {!fullscreened &&
                                    collapse && (
                                        <span>
                                            <button onClick={this.handleCollapse} id={`collapseId-${randomId}`}>
                                                <i className={`fas la-angle-${!collapseWidget ? 'down' : 'up'}`} />
                                                {showTooltip && (
                                                    <Tooltip
                                                        placement={tooltipPlacement}
                                                        target={`collapseId-${randomId}`}
                                                    >Collapse</Tooltip >
                                                )}
                                            </button>
                                        </span>
                                    )
                                }
                                {!fullscreened && (
                                    (close && !prompt) ? (
                                        <button onClick={this.handleClose} id={`closeId-${randomId}`}>
                                            {typeof close === 'string' ?
                                                <strong className="text-gray-light">{close}</strong> :
                                                <FaTimes />}
                                            {showTooltip && (
                                                <Tooltip
                                                    placement={tooltipPlacement}
                                                    target={`closeId-${randomId}`}
                                                >Close</Tooltip >
                                            )}
                                        </button>
                                    ) : (
                                        <button onClick={this.toggleModal} id={`closeId-${randomId}`}>
                                            {typeof close === 'string' ?
                                                <strong className="text-gray-light">{close}</strong> :
                                                <FaTimes />}
                                            {showTooltip && (
                                                <Tooltip
                                                    placement={tooltipPlacement}
                                                    target={`closeId-${randomId}`}
                                                >Modal</Tooltip >
                                            )}
                                        </button>
                                    ))}
                            </Widgetcontrols>
                        )}
                    {customDropDown && (
                        <Widgetcontrols className={`widget-controls`}>
                            <Dropdown>
                                <Dropdown.Toggle
                                    tag="span"
                                    data-toggle="dropdown"

                                >
                                    <i className="glyphicon glyphicon-cog" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="bg-widget-transparent" right>
                                    <Dropdown.Item onClick={this.handleReload} title="Reload">
                                        Reload &nbsp;&nbsp;
                                        <span className="badge badge-pill badge-success animate__animated animate__bounceIn">
                                            <strong>9</strong>
                                        </span>
                                    </Dropdown.Item>

                                    <Dropdown.Item onClick={this.handleFullscreen} title={!fullscreened ? "Full Screen" : "Restore"}>{!fullscreened ? "Fullscreen" : "Restore"} </Dropdown.Item>
                                    <DropdownItem divider />
                                    {!fullscreened && (!prompt ? <Dropdown.Item onClick={this.handleClose} title="Close">Close</Dropdown.Item>
                                        : <Dropdown.Item onClick={this.toggleModal} title="Close">Close</Dropdown.Item>)}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Widgetcontrols>
                    )}
                    {
                        customControls && (
                            <div className={`widget-controls`}>
                                {!fullscreened && ((customClose && !prompt) ? (
                                    <button onClick={this.handleClose} id={`closeId-${randomId}`}><i title="Close" className="glyphicon glyphicon-remove" /></button>
                                ) : (
                                    <button onClick={this.toggleModal} id={`closeId-${randomId}`}><i title="Close" className="glyphicon glyphicon-remove" /></button>
                                ))}
                                {!fullscreened && (customCollapse && (
                                    <button onClick={this.handleCollapse} id={`closeId-${randomId}`}><i title="Collapse" className={`glyphicon glyphicon-chevron-${!collapseWidget ? 'down' : 'up'}`} /></button>
                                ))}
                                {customFullscreen && (
                                    <button onClick={this.handleFullscreen} id={`closeId-${randomId}`}><i title="Fullscreen" className={`glyphicon glyphicon-resize-${fullscreened ? 'small' : 'full'}`} /></button>
                                )}
                                {customReload && (
                                    <button onClick={this.handleReload} id={`closeId-${randomId}`}><i title="I am spinning!" className="fa fa-refresh" /></button>
                                )}
                            </div>
                        )
                    }

                    <Body className={` widget-body ${bodyClass}`}>
                        {reloading || fetchingData ? <Loader size={40} /> : customBody ? (
                            <div className="jumbotron handle bg-default text-white mb-0">
                                <div className="container">
                                    <h1>Draggable story!</h1>
                                    <p className="lead">
                                        <em>Build</em> your own
                                        interfaces! Sit back and relax.
                                    </p>
                                    <p className="text-center">
                                        <button onClick={this.handleFullscreen} className="btn btn-danger btn-lg">
                                            {!fullscreened ?
                                                <React.Fragment>Fullscreen me! &nbsp;
                                                    <i className="fa fa-check" />
                                                </React.Fragment>
                                                : 'Go Back'
                                            }
                                        </button>
                                    </p>
                                </div>
                            </div>
                        ) : children}
                    </Body>



                </Section>
                {prompt && (
                    <Modal.Dialog show={modal} onHide={this.toggleModal} id="news-close-modal">
                        <Modal.Header closeButton onHide={this.toggleModal} id="news-close-modal-label">Sure?</Modal.Header>
                        <Modal.Body className="bg-white">
                            Do you really want to unrevertably remove this super news widget?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button color="default" onClick={this.toggleModal} data-dismiss="modal">No</Button>{' '}
                            <Button color="danger" onClick={this.closeWithModal} id="news-widget-remove">Yes,
                                remove widget</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                )}
                <div style={{ display: fullscreened ? 'block' : 'none' }}></div>
            </React.Fragment>
        );
    }
}

export default Widget;
