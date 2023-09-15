import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeCountry = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getFilteredCountry = () => {
    const {activeCapitalId} = this.state
    const filteredCountry = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeCapitalId,
    )
    return filteredCountry.country
  }

  render() {
    const filteredCountry = this.getFilteredCountry()
    const {activeCapitalId} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="card-details">
            <select
              className="card-select"
              onChange={this.onChangeCountry}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map(each => (
                <option className="card-option" key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para"> is capital of which country?</p>
          </div>
          <h2 className="answer">{filteredCountry}</h2>
        </div>
      </div>
    )
  }
}

export default Capitals
