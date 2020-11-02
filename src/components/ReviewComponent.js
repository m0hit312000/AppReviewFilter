import React, {useState, useEffect} from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { BsStarFill, BsBellFill } from 'react-icons/bs';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { AiFillCaretDown } from 'react-icons/ai';
import { IoIosWifi } from 'react-icons/io';
import { BiCodeCurly } from 'react-icons/bi';
import { FaDownload } from 'react-icons/fa';
import Pagination from './PaginationComponent';
 
TimeAgo.addDefaultLocale(en);



function RenderReviewItem({rev, time, TimeConverter}) {
    return(
        <div className="rev_card">
            <div className="head">
                <div className="logo"></div>
                <div className="app_store">{rev.appStoreName}</div>
                <div className="review_heading">{rev.reviewHeading}</div>
                <div className="rating">
                    {[...Array(parseInt(rev.rating))].map((star, index) => {
                        return  <label key={index} className="stars"> <BsStarFill size={17} color="rgb(255, 196, 0)"/> </label>
                    })}
                </div>
            </div>
            <div className="review_text">
                {rev.reviewText}
            </div>
            <div className="foot">
                <div className="user">by {rev.reviewUserName} </div>
                <div className="time"><ReactTimeAgo date = {TimeConverter(time)}  timeStyle="round"/></div>
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


const Review = ({reviews, total, perPage, page, change, index, onIndexChange, TimeConverter}) => {

    const [counter, setCounter] = useState(1);
    const [noOfButtons, setnoOfButtons] = useState(Math.ceil(total/perPage));
    const review = reviews.slice(page.start, page.end).map((rev) => {
        return(
            <RenderReviewItem rev={rev} key={rev.id} time={rev.reviewDate} TimeConverter={TimeConverter}/>
        );
    });

    const buttons = new Array(noOfButtons).fill("").map((el, index) => ( 
            <button key={index} className={`page-item ${index + 1 === counter?"active":null}`}
            onClick={() => setCounter(index+1)}>{ index + 1 }
            </button>
    )); 

    useEffect(() => {
       const value = perPage * counter;
       change(value - perPage, value); 
    }, [counter]);

    useEffect(() => {
       setnoOfButtons(Math.ceil(total/perPage));
    }, [total])

    const onButtonClick = (type) => {
        if(type === 'prev') {
           if(counter < 10) {
               setCounter(1);
               if(index.start < 0)
                 onIndexChange(0, 10);
           }
           else {
                setCounter(counter - 10);
                onIndexChange(index.start-10, index.end-10);
           }
        }
        else if(type === 'next') {
           if(noOfButtons-10 <= counter) {
               setCounter(counter);
               if(index.end > Math.ceil(total/perPage))
                onIndexChange(index.start, index.end);
           }
           else {
                setCounter(counter + 10);
                onIndexChange(index.start+10, index.end+10);
           }
        }
    }

    return (
        <div className="reviews">
            <div className="review_head">
                <span>Viewing {page.start+1}-{page.end} of {total} Reviews</span>
                <button className="alert"><BsBellFill className="bell" size={17} /> Create Alert <AiFillCaretDown className="down" size={17} /></button> 
                <div className="others">
                    <IoIosWifi className="wifi" size={17} /> <BiCodeCurly className="curly" size={17} /> <FaDownload className="download" size={17} />
                </div>
            </div>
            {review} 
            <Pagination review = {reviews} noOfButtons = {buttons} onButtonClick = {onButtonClick} start = {index.start} end = {index.end} counter = {counter} setCounter = {setCounter} onIndexChange = {onIndexChange} />
        </div>
    );
}

export default Review;
