import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { MdDateRange } from 'react-icons/md';
import { BsStarFill } from 'react-icons/bs';
import { AiFillCaretRight } from 'react-icons/ai';
import Progress from 'react-progressbar';


const SideFilter = ({sorting, ratingCount, ratingSorting, versionCount, countryCount, total}) => {
   return(
      <div className="side_filter">
          <div className="input_field">
             <IoIosSearch style={{marginLeft: "1rem", position: "absolute"}} className="search_icon" />
             <input className="search_filter" type="text" placeholder="Search" onChange={sorting}/>
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
                <li onClick={() => ratingSorting('5')}><div className="stars"><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/></div><Progress className="progress_bar" color="silver" completed={(ratingCount('5')/total)*100} /><div className="rat_value">{ratingCount('5')}</div></li>
                <li onClick={() => ratingSorting('4')}><div className="stars"><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(211, 211, 211)"/></div><Progress className="progress_bar" color="silver" completed={(ratingCount('4')/total)*100} /><div className="rat_value">{ratingCount('4')}</div></li>
                <li onClick={() => ratingSorting('3')}><div className="stars"><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(211, 211, 211)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(211, 211, 211)"/></div><Progress className="progress_bar" color="silver" completed={(ratingCount('3')/total)*100} /><div className="rat_value">{ratingCount('3')}</div></li>
                <li onClick={() => ratingSorting('2')}><div className="stars"><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(211, 211, 211)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(211, 211, 211)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(211, 211, 211)"/></div><Progress className="progress_bar" color="silver" completed={(ratingCount('2')/total)*100} /><div className="rat_value">{ratingCount('2')}</div></li>
                <li onClick={() => ratingSorting('1')}><div className="stars"><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(255, 196, 0)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(211, 211, 211)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(211, 211, 211)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(211, 211, 211)"/><BsStarFill size={17} style={{marginRight: "5px"}} color="rgb(211, 211, 211)"/></div><Progress className="progress_bar" color="silver" completed={(ratingCount('1')/total)*100} /><div className="rat_value">{ratingCount('1')}</div></li>
             </ul>   
          </div>
          <div className="version_filter">
            <span className="version_heading"><AiFillCaretRight className="right" size={17}/> <label className="version_head">Filter by Version</label></span>
            <ul className="version_list">
               <li><span className="ver_no">v1.2.1</span><Progress className="progress_bar" color="silver" completed={(versionCount('v1.2.1')/total)*100} /><div className="ver_value">{versionCount('v1.2.1')}</div></li>
               <li><span className="ver_no">v0.1</span> <Progress className="progress_bar" color="silver" completed={(versionCount('v0.1')/total)*100} /><div className="ver_value">{versionCount('v0.1')}</div></li>
               <li><span className="ver_no">v1.0</span> <Progress className="progress_bar" color="silver" completed={(versionCount('v1.0')/total)*100} /><div className="ver_value">{versionCount('v1.0')}</div></li>
               <li><span className="ver_no">V1</span> <Progress className="progress_bar" color="silver" completed={(versionCount('V1')/total)*100} /><div className="ver_value">{versionCount('V1')}</div></li>
               <li><span className="ver_no">V1.1</span> <Progress className="progress_bar" color="silver" completed={(versionCount('V1.1')/total)*100} /><div className="ver_value">{versionCount('V1.1')}</div></li>
               <li><span className="ver_no">1.2</span><Progress className="progress_bar" color="silver" completed={(versionCount('1.2')/total)*100} /><div className="ver_value">{versionCount('1.2')}</div></li>
               <li><span className="ver_no">1.3</span><Progress className="progress_bar" color="silver" completed={(versionCount('1.3')/total)*100} /><div className="ver_value">{versionCount('1.3')}</div></li>
            </ul>
          </div>
          <div className="country_filter">
            <span className="country_heading"><AiFillCaretRight className="right" size={17}/> <label className="country_head">Filter by Country</label></span>
            <ul className="country_list">
               <li><img className="flag" src={"/flags/png/Australia.png"} alt="Australia"></img><span className="flag_name">Australia</span><Progress className="progress_bar1" color="silver" completed={(countryCount('Australia')/total)*100} /><div className="cou_value">{countryCount('Australia')}</div></li>
               <li><img className="flag" src={"/flags/png/France.png"} alt="France"></img><span className="flag_name">France</span><Progress className="progress_bar1" color="silver" completed={(countryCount('France')/total)*100} /><div className="cou_value">{countryCount('France')}</div></li>
               <li><img className="flag" src={"/flags/png/Germany.png"} alt="Germany"></img><span className="flag_name">Germany</span><Progress className="progress_bar1" color="silver" completed={(countryCount('Germany')/total)*100} /><div className="cou_value">{countryCount('Germany')}</div></li>
               <li><img className="flag" src={"/flags/png/India.png"} alt="India"></img><span className="flag_name">India</span><Progress className="progress_bar1" color="silver" completed={(countryCount('India')/total)*100} /><div className="cou_value">{countryCount('India')}</div></li>
               <li><img className="flag" src={"/flags/png/Japan.png"} alt="Japan"></img><span className="flag_name">Japan</span><Progress className="progress_bar1" color="silver" completed={(countryCount('Japan')/total)*100} /><div className="cou_value">{countryCount('Japan')}</div></li>
               <li><img className="flag" src={"/flags/png/Russia.png"} alt="Russia"></img><span className="flag_name">Russia</span><Progress className="progress_bar1" color="silver" completed={(countryCount('Russia')/total)*100} /><div className="cou_value">{countryCount('Russia')}</div></li>
               <li><img className="flag" src={"/flags/png/UK.png"} alt="UK"></img><span className="flag_name">United Kingdom</span><Progress className="progress_bar1" color="silver" completed={(countryCount('UK')/total)*100} /><div className="cou_value">{countryCount('UK')}</div></li>
               <li><img className="flag" src={"/flags/png/US.png"} alt="US"></img><span className="flag_name">United States</span><Progress className="progress_bar1" color="silver" completed={(countryCount('US')/total)*100} /><div className="cou_value">{countryCount('US')}</div></li>
            </ul>
          </div>
      </div>
   );
}

export default SideFilter;