import React from 'react';

function Filter({sorts, sorting}) {
        return(
          <div className="filters">
            <div className="app_selection">
               <span className="products_head">select products</span>  
               <select value={sorts} onChange={sorting} className="select_products">
                   <option value="all">All</option>
                   <option value="com.amazon">Amazon</option>
                   <option value="com.flipkart">Flipkart</option>
                   <option value="com.google">Google</option>
                   <option value="com.myntra">Myntra</option>
               </select>     
            </div>
            <div className="sorting">
               <span className="sorting_head">sorting</span>  
               <select className="select_sort">
                   <option value="newestfirst">Newest First</option>
                   <option value="oldestfirst">Oldest First</option>
               </select>     
            </div>
            <div className="translation">
               <span className="translation_head">translation</span>   
               <select className="select_language">
                   <option value="English">English</option>
                   <option value="Hindi">Hindi</option>
               </select>     
            </div>  
          </div>  
        );
}

export default Filter;