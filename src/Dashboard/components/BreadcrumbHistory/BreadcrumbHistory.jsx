import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import { Breadcrumbcomponent, Breadcrumbitem, Breadcrumbspan, Strong } from '../../../styles/breadcrumbhistory';

class BreadcrumbHistory extends Component {

  renderBreadCrumbs = () => {
    
    let route = this.props.url.split('/')
    .slice(1)
    .map(route => route
      .split('-')
      .map(word => word[0] + word.slice(1))
      .join(' ')
    )
    const length = route.length;
    return route.map((item,index) => (
      length === index + 1 ? 
      <Breadcrumbitem key={uuid()} className="active" href={`/${route.slice(0, index + 1).join('/')}`}><Strong>{item.toUpperCase()}</Strong></Breadcrumbitem> : 
      <Breadcrumbitem key={uuid()} className="withbefore" href={`/${route.slice(0, index + 1).join('/')}`}>{item.toUpperCase()}</Breadcrumbitem>
    ))
  }
  
  render() {
    return (
      <>
        { this.props.url !== '/app/chat' ?
          <div>
            <Breadcrumbcomponent tag="nav" listtag="div">
              <Breadcrumbspan className={"breadcrumb-item"}>YOU ARE HERE</Breadcrumbspan>
              {this.renderBreadCrumbs()}
            </Breadcrumbcomponent>
          </div>
        :null}
      </>
    )
  };
};

export default BreadcrumbHistory;