import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { Collapse, Badge } from 'reactstrap';
import { Route } from 'react-router';
import classnames from 'classnames';
import { A, Li, Linkspan, Navlink, Linka, B, Collapsecomponent } from '../../../styles/sidebar';

class LinksGroup extends Component {
  static propTypes = {
    header: PropTypes.node.isRequired,
    link: PropTypes.string.isRequired,
    childrenLinks: PropTypes.array,
    iconName: PropTypes.object,
    className: PropTypes.string,
    badge: PropTypes.string,
    label: PropTypes.string,
    activeItem: PropTypes.string,
    isHeader: PropTypes.bool,
    index: PropTypes.string,
    deep: PropTypes.number,
    onActiveSidebarItemChange: PropTypes.func,
    labelColor: PropTypes.string,
    exact: PropTypes.bool
  };

  static defaultProps = {
    link: '',
    childrenLinks: null,
    header: '',
    className: '',
    isHeader: false,
    deep: 0,
    activeItem: '',
    label: '',
    exact: true
  };

  constructor(props) {
    super(props);
    this.togglePanelCollapse = this.togglePanelCollapse.bind(this);

    this.state = {
      headerLinkWasClicked: true,
    };
  }

  togglePanelCollapse(link, e) {
    this.props.onActiveSidebarItemChange(link);
    this.setState({
      headerLinkWasClicked: !this.state.headerLinkWasClicked ||
        (this.props.activeItem && !this.props.activeItem.includes(this.props.index)),
    });
    e.preventDefault();
  }

  render() {
    const isOpen = this.props.activeItem &&
      this.props.activeItem.includes(this.props.index) &&
      this.state.headerLinkWasClicked;

    const {exact} = this.props.exact;

    if (!this.props.childrenLinks) {
      if (this.props.isHeader) {
        return (
          <Li className={[this.props.className].join(' ')}>
            <Navlink
              to={this.props.link}
              exact={exact}
              target={this.props.target}
            >
              <Linkspan>
                {this.props.iconName}
              </Linkspan>
              {this.props.header} {this.props.label && <sup className={`text-${this.props.labelColor || 'warning'}`}>{this.props.label}</sup>}
              {this.props.badge && <Badge color="primary" pill>9</Badge>}
            </Navlink>
          </Li>
        );
      }
      return (
        <Li className={"dropdownelement"}>
          <Navlink
            to={this.props.link}
            style={{ paddingLeft: `${60 + (10 * (this.props.deep - 1))}px` }}
            onClick={(e) => {
              // able to go to link is not available(for Demo)
              if (this.props.link.includes('menu')) {
                e.preventDefault();
              }
            }}
            exact={exact}
          >
            {this.props.header} {this.props.label && <sup className={` text-${this.props.labelColor || 'warning'}`}>{this.props.label}</sup>}
          </Navlink>
        </Li>
      );
    }
    /* eslint-disable */
    return (
      <Route
        path={this.props.link}
        children={(params) => {
          const { match } = params;
          return (
            <Li className={classnames( this.props.className)}>
            
              <Linka className={classnames("d-flex", `${isOpen ? 'shown' : 'collapse'}`, `${(this.props.activeItem && isOpen) ? 'active' : ''}`)}
                style={{ paddingLeft: `${this.props.deep == 0 ? 20 : 35 + 10 * (this.props.deep - 1)}px` }}
                onClick={(e) => this.togglePanelCollapse(this.props.link, e)}
                href="#"
              >
                {this.props.isHeader ?
                  <Linkspan>
                    {this.props.iconName}
                  </Linkspan> : null
                }
                {this.props.header} {this.props.label && <sup className={`text-${this.props.labelColor || 'warning'} ml-1`}>{this.props.label}</sup>}
                <B className={["fa fa-angle-right"].join(' ')} />
              </Linka>
              {/* eslint-enable */}
              <Collapsecomponent isOpen={isOpen}>
                <ul>
                  {this.props.childrenLinks &&
                    this.props.childrenLinks.map((child, ind) =>
                      <LinksGroup
                        onActiveSidebarItemChange={this.props.onActiveSidebarItemChange}
                        activeItem={this.props.activeItem}
                        header={child.header}
                        link={child.link}
                        index={child.index}
                        childrenLinks={child.childrenLinks}
                        deep={this.props.deep + 1}
                        key={ind} // eslint-disable-line
                      />,
                    )}
                </ul>
              </Collapsecomponent>
            </Li>
          );
        }}
      />
    );
  }
}

export default withRouter(LinksGroup);
