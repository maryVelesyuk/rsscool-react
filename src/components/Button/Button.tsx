import { Component, MouseEvent } from 'react'
import './Button.css'

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  text: string
}

export default class Button extends Component<ButtonProps> {
  render() {
    const { onClick, text } = this.props

    return (
      <button className="button" onClick={onClick}>
        {text}
      </button>
    )
  }
}
