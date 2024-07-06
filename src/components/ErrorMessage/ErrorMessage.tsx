import { Component } from 'react'
import img from '../../assets/error.gif'
import './ErrorMessage.css'

export default class ErrorMessage extends Component {
  render() {
    return <img src={img} alt="error" className="error" />
  }
}
