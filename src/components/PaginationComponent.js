import React from 'react';

const Pagination = ({ noOfButtons, onButtonClick, start, end, counter, setCounter}) =>  {
    
    const buttons = noOfButtons.fill("").slice(start, end).map((but, index) => {
        return (
            <button key={start + index} className={`page-item ${start + index + 1 === counter?"active":null}`}
                               onClick={() => setCounter(start + index+1)}>{ start + index + 1}</button>
        );
    });

    return(
        <div className="pagination">
           <button className="prev page-item" onClick={() => onButtonClick('prev')}>Prev</button>
           {buttons}  
           <button className="next page-item" onClick={() => onButtonClick('next')}>Next</button>
        </div>
    );
}

export default Pagination;