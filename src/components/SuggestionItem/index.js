// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {onClickArrow, eachSuggestion} = props
  const {suggestion} = eachSuggestion

  const click = () => {
    onClickArrow(suggestion)
  }

  return (
    <li className="suggestion-container">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={click}
        className="arrow"
      />
    </li>
  )
}

export default SuggestionItem
