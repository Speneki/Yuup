import React from 'react';
import {connect} from "react-redux";
import {fetchReviews} from "../../../actions/review_actions" 
import Review from "./review"

const msp = (state, ownProps) => ({

    reviews: Object.values(state.entities.reviews)
})

const mdp = dispatch => {
    return ({
        fetchReviews: () => dispatch(fetchReviews()),
        fetchReview: (id) => dispatch(fetchReview(id))
    })
}

class ReviewsShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchReviews();
    }

    render() {
        if (this.props.reviews=== "undefined") return  (null)
        const reviews = this.props.reviews.map(review => {
            return (
                <Review
                    key={review.id}
                    review={review}
                    />
            )
        })

        return(
        <div className="reviews-container-container">
            <div>
                <p className="ask-the-community">Ask the Community</p>
                <ul>
                    {reviews}
                </ul>
            </div>
            <div className="hours">
                <h3>Hours</h3>
                    <p>Mon</p><h2>6:00 pm - 12:00 am</h2>
                    <p>Tue</p><h2>6:00 pm - 12:00 am</h2>
                    <p>Wed</p><h2>6:00 pm - 12:00 am</h2>
                    <p>Thu</p><h2>6:00 pm - 12:00 am</h2>
                    <p>Fri</p><h2>6:00 pm - 4:00 am</h2>
                    <p>Sat</p><h2>6:00 pm - 4:00 am</h2>
                    <p>Sun</p><h2>6:00 pm - 12:00 am</h2>
            </div>
        </div>
        )
    }
}

export default connect(msp, mdp)(ReviewsShow)