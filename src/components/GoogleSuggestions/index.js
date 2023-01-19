import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {inputVal: ''}

  filterResult = e => this.setState({inputVal: e.target.value})

  updateValue = suggestion => this.setState({inputVal: suggestion})

  render() {
    const {inputVal} = this.state
    const {suggestionsList} = this.props
    const filteredSuggestions = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(inputVal.toLowerCase()),
    )

    return (
      <div className="main-body">
        <div className="content-wrapper">
          <img
            className="google-logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search-container">
            <div className="search-input-wrapper">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                type="search"
                value={inputVal}
                onChange={this.filterResult}
                placeholder="Search Google"
              />
            </div>

            <ul className="suggestions-item-container">
              {filteredSuggestions.map(each => (
                <SuggestionItem
                  key={each.id}
                  suggestionItem={each}
                  fetchResult={this.updateValue}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
