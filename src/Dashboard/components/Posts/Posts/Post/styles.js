import styled from 'styled-components'
import { Button, Card, Row } from 'react-bootstrap';

export const Imgdiv = styled.div`
  vertical-align: middle;
  overflow: hidden;
  border-radius: .25rem;
  max-height: 20vh;
  justify-content: center;
  align-items: center;
  display: flex;
`

export const Img = styled(Card.Img)`
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
  transition: transform 0.15s ease-in-out;
  &:hover {
      transform: scale3d(1.15, 1.15, 1);
  }
`

export const Overlay = styled(Card.Title)`
  position: absolute;
  top: 20px;
  left: 20px;
  color: blue;
  font-size: 1.5rem;
`

export const Overlay2 = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
`

export const Details = styled(Row)`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`

export const CardActions = styled.div`
  padding: 0 16px 8px 16px;
  display: flex;
  justify-content: space-between;
`

export const Title = styled(Card)`
  display: flex;
  justify-content: space-between;
`

export const Linkbutton = styled(Button)`
  text-decoration: none !important;
  align-items: center;
  display: inline-flex;
`

export const Span = styled.span`
  margin-top: 2.265px;
`

export const P = styled.p`
  color: #3f51b5;

  &.tags {
    font-size: 0.875rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
  }

  &.title-post,
  &.message {
    font-size: 1.5rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.334;
    letter-spacing: 0em;
    font-size: 22px;
    margin-bottom: 0.35em;
  }
`