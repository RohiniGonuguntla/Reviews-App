// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    currentReviewIndex: 0,
  }

  handlePreviousReview = () => {
    this.setState(prevState => ({
      currentReviewIndex:
        prevState.currentReviewIndex === 0
          ? 0
          : prevState.currentReviewIndex - 1,
    }))
  }

  handleNextReview = () => {
    const {reviewsList} = this.props
    this.setState(prevState => ({
      currentReviewIndex:
        prevState.currentReviewIndex === reviewsList.length - 1
          ? prevState.currentReviewIndex
          : prevState.currentReviewIndex + 1,
    }))
  }

  render() {
    const {reviewsList} = this.props
    const {currentReviewIndex} = this.state
    const currentReview = reviewsList[currentReviewIndex]

    return (
      <div className="reviews-bg">
        <h1 className="heading">Reviews</h1>
        <div className="reviews-container">
          <button
            type="button"
            onClick={this.handlePreviousReview}
            className="arrow-button"
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-icon"
            />
          </button>
          <div className="review-card">
            <img
              src={currentReview.imgUrl}
              alt={currentReview.username}
              className="user-img"
            />
            <p className="username">{currentReview.username}</p>
            <p className="company-name">{currentReview.companyName}</p>
            <p className="description">{currentReview.description}</p>
          </div>

          <button
            type="button"
            onClick={this.handleNextReview}
            className="arrow-button"
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-icon"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
