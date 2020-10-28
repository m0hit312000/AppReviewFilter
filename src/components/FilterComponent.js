import React, { Component } from 'react';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
           selectproducts: '',
           sorting: 'Newest First',
           translation: 'English'   
        }
    }

    render() {
        return(
          <div className="filters">
            <div className="app_selection">
               <span className="products_head">select products</span>  
               <select className="select_products">
                   <option selected value="myntra">Amazon</option>
                   <option value="flipkart">Flipkart</option>
                   <option value="amazon">Google</option>
                   <option value="google">Myntra</option>
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
}

export default Filter;