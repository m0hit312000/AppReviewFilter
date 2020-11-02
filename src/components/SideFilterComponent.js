import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { MdDateRange } from 'react-icons/md';
import { BsStarFill } from 'react-icons/bs';
import { AiFillCaretRight } from 'react-icons/ai'
// AiFillCaretDown
const SideFilter = () => {
   return(
      <div className="side_filter">
          <div className="input_field">
             <IoIosSearch style={{marginLeft: "1rem", position: "absolute"}} className="search_icon" />
             <input className="search_filter" type="text" placeholder="Search" />
          </div>
          <div className="time_filter">
             <MdDateRange className="date_icon" style={{marginLeft: "1rem", position: "absolute"}} />
             <select className="time_select">
                <option value="date1">all time</option>
             </select>  
          </div>
          <div className="rating_filter">
             <span className="rating_heading"><AiFillCaretRight className="right" size={17}/><label className="rating_head">Filter by Rating</label></span>
             <ul className="rating_list">
                <li><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/></li>
                <li><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(211, 211, 211)"/></li>
                <li><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(211, 211, 211)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(211, 211, 211)"/></li>
                <li><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(211, 211, 211)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(211, 211, 211)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(211, 211, 211)"/></li>
                <li><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(211, 211, 211)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(211, 211, 211)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(211, 211, 211)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(211, 211, 211)"/></li>
             </ul>   
          </div>
          <div className="version_filter">
            <span className="version_heading"><AiFillCaretRight className="right" size={17}/> <label className="version_head">Filter by Version</label></span>
            <ul className="version_list">
               <li>v1.2.1</li>
               <li>v0.1</li>
               <li>v1.0</li>
               <li>V1</li>
               <li>V1.1</li>
               <li>1.2</li>
               <li>1.3</li>
            </ul>
          </div>
          <div className="country_filter">
            <span className="country_heading"><AiFillCaretRight className="right" size={17}/> <label className="country_head">Filter by Country</label></span>
            <ul className="country_list">
               <li><img className="flag" src={"/flags/png/Australia.png"} alt="Australia"></img><span className="flag_name">Australia</span></li>
               <li><img className="flag" src={"/flags/png/France.png"} alt="France"></img><span className="flag_name">France</span></li>
               <li><img className="flag" src={"/flags/png/Germany.png"} alt="Germany"></img><span className="flag_name">Germany</span></li>
               <li><img className="flag" src={"/flags/png/India.png"} alt="India"></img><span className="flag_name">India</span></li>
               <li><img className="flag" src={"/flags/png/Japan.png"} alt="Japan"></img><span className="flag_name">Japan</span></li>
               <li><img className="flag" src={"/flags/png/Russia.png"} alt="Russia"></img><span className="flag_name">Russia</span></li>
               <li><img className="flag" src={"/flags/png/UK.png"} alt="UK"></img><span className="flag_name">United Kingdom</span></li>
               <li><img className="flag" src={"/flags/png/US.png"} alt="US"></img><span className="flag_name">United States</span></li>
            </ul>
          </div>
      </div>
   );
}

export default SideFilter;