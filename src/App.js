import React, { Component } from "react"
import Cta from "./components/Ctasection";
import Features from "./components/Features";
import Service from "./components/Service";
import styled from "styled-components"
import "./index.css"
import "normalize.css";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Programming from "./components/Learnprogramming";
import Moon from "./Moon";
import Scroll from "./components/onScroll";
import About from "./components/About";

const AppContainer = styled.div`
  background: #000;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > div:first-of-type {
    flex: 1 0 70vh;
    height: 120vh !important;
    position: absolute !important;

    @media screen and (max-width: 844px) {
      top: 43%;
    }

    @media screen and (min-width: 766px) {
      top: 50%;
    }

    @media screen and (min-width: 844px) {
      top: 0%;
    }
  }
`

export default class App extends Component {
  state = { duration: 300 }

  onChange = data => {
    this.setState(data)
  }

  render() {
    return (
      <AppContainer>
        <Moon />
        <Header />
        <About />
        <Cta />
      </AppContainer>
    )
  }
}