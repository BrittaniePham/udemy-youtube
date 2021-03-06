import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/searchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY
require('dotenv').config();

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = { 
      videos: [],
      selectedVideo: null,
    }

    this.videoSearch('kittens')
  }
  
  videoSearch = (term) => {
    YTSearch({key: REACT_APP_API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos,
        selectedVideo: videos[0],
       })
    })
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 900)
    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          videos={this.state.videos}
          onVideoSelect={ (selectedVideo) => this.setState({selectedVideo})}
        />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'))
