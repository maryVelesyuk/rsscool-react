import { ChangeEvent, Component } from 'react'
import './Input.css'

interface InputProps {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default class Input extends Component<InputProps> {
  render() {
    const { value, onChange } = this.props

    return (
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
    )
  }
}
