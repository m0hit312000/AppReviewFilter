import React, { Component } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { BsStarFill } from 'react-icons/bs';

class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [
                {
                    id: 1,
                    appID: "com.myntra",
                    appStoreName: "iOS",
                    reviewDate: "23 Oct 2018 13:06:02",
                    rating: "3",
                    version: "v0.1",
                    countryName: "US",
                    reviewHeading: "Wonderful",
                    reviewText: "Excellent application for works in pdf format",
                    reviewUserName: "Alice6"
                },
                {
                    id: 2,
                    appID: "com.flipkart",
                    appStoreName: "Google",
                    reviewDate: "21 Sept 2019 13:06:02",
                    rating: "5",
                    version: "1.3",
                    countryName: "Japan",
                    reviewHeading: "Not working ",
                    reviewText: "Usually can print out in A4. But now forced to print to a different size Can you adjust where?",
                    reviewUserName: "U5"
                },
                {
                    id: 3,
                    appID: "com.myntra",
                    appStoreName: "iOS",
                    reviewDate: "22 Oct 2018 13:06:02",
                    rating: "4",
                    version: "v1.2.1",
                    countryName: "Russia",
                    reviewHeading: "Perfect. 👍",
                    reviewText: "I don `t really understand",
                    reviewUserName: "Amy"
                },
            ],
        };
    }

    render() {
        const review = this.state.reviews.map((rev) => {
            return(
                <div key={rev.id} className="rev_card">
                    <div className="head">
                        <div className="logo"></div>
                        <div className="app_store">{rev.appStoreName}</div>
                        <div className="review_head">{rev.reviewHeading}</div>
                        <div className="rating">
                           {[...Array(parseInt(rev.rating))].map((star) => {
                              return  <label classname="stars"> <BsStarFill size={17} color="rgb(255, 196, 0)"/> </label>
                           })}
                        </div>
                    </div>
                    <div className="review_text">
                        {rev.reviewText}
                    </div>
                    <div className="foot">
                        <div className="user">by {rev.reviewUserName} </div>
                        <div className="version">{rev.version}</div>
                        <div className="time"></div>
                        <div className="country">
                            <img  alt={rev.countryName}></img> <p>{rev.countryName}</p>
                        </div>
                        <button className="reply">reply</button>
                        <button className="share" type="">share <FiChevronDown size={17} /></button>
                    </div>
                </div>
            );
        })

        return (
          <div>
             {review} 
          </div>
        );
    }
}

export default Review;