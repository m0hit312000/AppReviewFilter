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

    const [counter, setCounter] = useState(1);
    const [noOfButtons, setnoOfButtons] = useState(Math.ceil(props.total/props.perPage));
    const [start, setStart] = useState(0)
    const review = props.reviews.slice(props.page.start, props.page.end).map((rev) => {
        return(
            <RenderReviewItem rev={rev} key={rev.id}/>
        );
    })

    useEffect(() => {
       const value = props.perPage * counter;
       props.change(value - props.perPage, value); 
    }, [counter]);

    const onButtonClick = (type) => {
        if(type === 'prev') {
           if(counter === 1 || props.page.start === 0) {
               setCounter(1);
           }
           else {
               if(counter > 10)
                setCounter(counter - 10);
               setStart(start+10)
           }
        }
        else if(type === 'next') {
           if(noOfButtons === counter) {
               setCounter(counter);
           }
           else {
               if(counter < noOfButtons-10)
                setCounter(counter + 10);
               setStart(start-10)
           }
        }
    }

    return (
        <div className="reviews">
            <div className="review_head">
                <span>Viewing {props.page.start+1}-{props.page.end} of {props.total} Reviews</span>
                <button className="alert"><BsBellFill className="bell" size={17} /> Create Alert <AiFillCaretDown className="down" size={17} /></button> 
                <div className="others">
                    <IoIosWifi className="wifi" size={17} /> <BiCodeCurly className="curly" size={17} /> <FaDownload className="download" size={17} />
                </div>
            </div>
            {review} 
            <div className="pagination">
                <button className="prev page-item" onClick={() => onButtonClick('prev')}>Prev</button>
                {new Array(noOfButtons).slice(start, start+10).fill("").map((el, index) => ( 
                    <button key={index} className={`page-item ${start + index + 1 === start + counter?"active":null}`}
                       onClick={() => setCounter(start+index+1)}>{start + index + 1}</button>
                ))}
                <button className="next page-item" onClick={() => onButtonClick('next')}>Next</button>
            </div>
        </div>
    );
}

export default Review;




















                {/* <button onClick={() => onButtonClick(counter + 0)}>{counter + 0}</button>
                <button onClick={() => onButtonClick(counter + 1)}>{counter + 1}</button>
                <button onClick={() => onButtonClick(counter + 2)}>{counter + 2}</button>
                <button onClick={() => onButtonClick(counter + 3)}>{counter + 3}</button>
                <button onClick={() => onButtonClick(counter + 4)}>{counter + 4}</button> */}