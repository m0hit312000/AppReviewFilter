import React, { Component } from 'react';
import Review from './ReviewComponent';
import Filter from './FilterComponent';
import { Reviews } from '../shared/review';
import SideFilter from './SideFilterComponent';


class Main extends Component {

  constructor(props) {
      super(props);
      this.state = {
          review: Reviews,
          total: Reviews.length,
          perPage: 10,
          pagination: {
             start: 0,
             end: 10
          },
          index: {
            start: 1,
            end: Math.ceil(Reviews.length/10)
          },
          sorts: ''
      }

      this.sorting = this.sorting.bind(this);
      this.onPageChange = this.onPageChange.bind(this);
  }  

  sorting(e){
    const rev = Reviews;
    const sorting = e.target.value;
    const sortRes = rev.filter((rev) => {
      if(sorting === rev.appID) {
        return rev;
      }
      else if(sorting === 'all') {
        return rev
      }
    });
    this.setState({
      sorts: sorting,
      total: sortRes.length,
      review: sortRes,
      pagination: {
        start: 0,
        end: 10
      },
      index: {
        start: 1,
        end: Math.ceil(Reviews.length/10)
      },
    })
  };

  onPageChange(start, end) {
     this.setState({
       pagination: {
         start: start,
         end: end
       }
     })  
  }

  render() {
    return(
      <div className="filter_app">
        <Filter 
          sorting={this.sorting}
          sorts={this.state.sorts}
        />
        <SideFilter />
        <Review 
          reviews = {this.state.review} 
          total = {this.state.total} 
          perPage= {this.state.perPage} 
          page = {this.state.pagination} 
          change = {this.onPageChange}
          index = {this.state.index}
        /> 
      </div>  
    );
  }
}
 
export default Main ;
