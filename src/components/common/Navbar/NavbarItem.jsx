import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const NavbarItemTitle = styled.button`
  display: flex;
  padding: 20px 12px;
  background-color: transparent;
  text-decoration: none !important;
  outline: none;
  border: none;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  text-decoration: none;
  &:hover {
    color: var(--vdi-color);
    transition: all 200ms ease;
  }

  &::after{
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: middle;
    content: "";
    border-top-style: solid;
    border-top-width: 6px;
    border-right: 6px solid transparent;
    border-bottom: 0 solid transparent;
    border-left: 6px solid transparent;
    margin-left: 6px;
    margin-top: 2px;
  }
`

const NavbarItemEl = styled.li`
  position: relative;
`

const DropdownSlot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  perspective: 1500px;
`

export default class NavbarItem extends Component {
  static propTypes = {
    onMouseEnter: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    children: PropTypes.node
  }
  onMouseEnter = () => {
    this.props.onMouseEnter(this.props.index)
  }

  render() {
    const { title, children } = this.props
    return (
      <NavbarItemEl onMouseEnter={this.onMouseEnter} onFocus={this.onMouseEnter}>
        
        <NavbarItemTitle>{title}</NavbarItemTitle>
        <DropdownSlot>{children}</DropdownSlot>
      </NavbarItemEl>
    )
  }
}
