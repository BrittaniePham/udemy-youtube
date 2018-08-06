import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/searchBar'
import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyAf4zSrCvUMWHQHT0Q7e0u3uvUOvBxCiMk'

class App extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = { videos: [] }

    YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
      this.setState({ videos: data })
    })
  }

  render() {
    return(
      <div>
        <SearchBar />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'))
