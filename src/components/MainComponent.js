import React, { Component } from 'react';
import Review from './ReviewComponent';
import Filter from './FilterComponent';
import { Reviews } from '../shared/review';

class Main extends Component {

  constructor(props) {
      super(props);
      this.state = {
          review: Reviews,
          sorts: ''
      }

      this.sorting = this.sorting.bind(this);
  }  

  sorting(e){
    const rev = Reviews;
    const sorting = e.target.value;
    const sortRes = rev.filter((rev) => {
      if(sorting === rev.appID) {
        return rev;
      }
      if(sorting === 'all') {
        return rev
      }
    });
    this.setState({
      sorts: sorting,
      review: sortRes
    })
  };

  render() {
    return(
      <div>
        <Filter 
          sorting={this.sorting}
          sorts={this.state.sorts}
        />
        <Review reviews = {this.state.review}/> 
      </div>  
    );
  }
}
 
export default Main ;
