import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { BsStarFill } from 'react-icons/bs';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import ru from 'javascript-time-ago/locale/ru';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

function RenderReviewItem({rev}) {
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
                <div className="time"><ReactTimeAgo date={rev.reviewDate} locale="en-US" timeStyle="round"/></div>
                <div className="version">{rev.version}</div>
                <div className="country_flag">
                    <img className="flag" src={"/flags/png/" + rev.countryName + ".png"} alt={rev.countryName}></img> 
                </div>
                <div className="country_name">
                    <p> {rev.countryName}</p>
                </div>
                <button className="reply">reply</button>
                <button className="share" type="">share <FiChevronDown className="arrow" size={17} /></button>
            </div>
        </div>
    );
}      

    const Review = (props) => {

        const review = props.reviews.map((rev) => {
        return(
            <RenderReviewItem rev={rev}/>
        );
    })

    return (
        <div>
            {review} 
        </div>
    );
}

export default Review;