import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { BsStarFill, BsBellFill } from 'react-icons/bs';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { AiFillCaretDown } from 'react-icons/ai';
import { IoIosWifi } from 'react-icons/io';
import { BiCodeCurly } from 'react-icons/bi';
import { FaDownload } from 'react-icons/fa';
 
TimeAgo.addDefaultLocale(en);

function TimeConverter(time) {
    let date = new Date(Date.parse(time));
    return date.getTime();
}

function RenderReviewItem({rev}) {
    return(
        <div className="rev_card">
            <div className="head">
                <div className="logo"></div>
                <div className="app_store">{rev.appStoreName}</div>
                <div className="review_head">{rev.reviewHeading}</div>
                <div className="rating">
                    {[...Array(parseInt(rev.rating))].map((star) => {
                        return  <label className="stars"> <BsStarFill size={17} color="rgb(255, 196, 0)"/> </label>
                    })}
                </div>
            </div>
            <div className="review_text">
                {rev.reviewText}
            </div>
            <div className="foot">
                <div className="user">by {rev.reviewUserName} </div>
                <div className="time"><ReactTimeAgo date = {TimeConverter(rev.reviewDate)}  locale="en-US" timeStyle="round"/></div>
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
        <RenderReviewItem rev={rev} key={rev.id}/>
    );
})

    return (
        <div className="reviews">
            <div className="review_head">
                <span>Viewing 1-10 0f 157 Reviews</span>
                <button><BsBellFill className="bell" size={17} style={{marginLeft: "5px", marginRight: "5px"}}/> Create Alert <AiFillCaretDown className="down" size={17} style={{marginLeft: "15px", marginRight: "5px"}}/></button> 
                <div className="others">
                    <IoIosWifi className="wifi" size={17} style={{marginLeft: "10px", marginRight: "5px"}}/> <BiCodeCurly className="curly" size={17} style={{marginLeft: "5px", marginRight: "10px"}}/> <FaDownload className="download" size={17} style={{marginLeft: "5px", marginRight: "5px"}}/>
                </div>
            </div>
            {review} 
        </div>
    );
}

export default Review;