import React, { Component } from "react"
import Cta from "./components/Ctasection";
import Features from "./components/Features";
import Service from "./components/Service";
import styled from "styled-components"
import "./index.css"
import "normalize.css";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

const AppContainer = styled.div`
  background: #000;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > div:first-of-type {
    flex: 1 0 70vh;
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
        <Header />
        
        <Service />
        <Features />
        <Cta />
        <Footer />
      </AppContainer>
    )
  }
}