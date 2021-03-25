import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { v4 as uuid } from 'uuid';
import { Breadcrumbcomponent, Breadcrumbitem, Strong } from '../../styles/breadcrumbhistory';

class BreadcrumbHistory extends Component {

  renderBreadCrumbs = () => {
    
    let route = this.props.url.split('/')
    .slice(1)
    .map(route => route
      .split('-')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ')
    )
    const length = route.length;
    return route.map((item,index) => (
      length === index + 1 ? 
      <Breadcrumbitem key={uuid()} className="active"><Strong>{item}</Strong></Breadcrumbitem> : 
      <Breadcrumbitem key={uuid()} className="withbefore">{item}</Breadcrumbitem>
    ))
  }
  
  render() {
    return (
      <>
        { this.props.url !== '/app/chat' ?
          <div>
            <Breadcrumbcomponent tag="nav" listTag="div">
              <Breadcrumbitem>YOU ARE HERE</Breadcrumbitem>
              {this.renderBreadCrumbs()}
            </Breadcrumbcomponent>
          </div>
        :null}
      </>
    )
  };
};

export default BreadcrumbHistory;