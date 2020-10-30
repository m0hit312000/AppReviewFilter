import React from 'react';
import { IoIosSearch } from 'react-icons/io';

const SideFilter = () => {
   return(
      <div className="side_filter">
          <div className="input_field">
             <IoIosSearch style={{marginLeft: "1rem", position: "absolute"}} className="search_icon" />
             <input className="search_filter" type="text" placeholder="Search" />
          </div>
          <div className="time_filer">
             <select className="time_select">
                <option>

                </option> 
             </select>  
          </div>
      </div>
   );
}

export default SideFilter;