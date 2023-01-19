import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, fetchResult} = props
  const {suggestion} = suggestionItem
  const onFetch = () => fetchResult(suggestion)

  return (
    <li className="list-item">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onFetch}
      />
    </li>
  )
}

export default SuggestionItem
