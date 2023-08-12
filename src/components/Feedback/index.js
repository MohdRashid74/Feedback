import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  render() {
    const {resources} = this.props

    const Result = resources.emojis.map(eachItem => eachItem)
    const ResultImageUrl = Result.map(each => each.imageUrl)
    console.log(ResultImageUrl)
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            How statisfied are you with our customer support performance
          </h1>
          <div className="image-container">
            <ul>
              <img src={ResultImageUrl} />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Feedback
