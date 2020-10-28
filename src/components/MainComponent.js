import React, { Component } from 'react';
import Review from './ReviewComponent';
import Filter from './FilterComponent';
import { Reviews } from '../shared/review';

class Main extends Component {

  constructor(props) {
      super(props);
      this.state = {
          review: Reviews,
          sort: '',
          cat: ''
      }
  }  

  sorting = (e) => {

    const sorting = e.target.value;
    const sortRes = this.state.review.map((rev) => {
      if(sorting === rev.appID) {
        return rev;
      }
    })

    this.setState({
      sort: sorting,
      review: sortRes
    })

  }

  render() {
    return(
      <div>
        <Filter 
          sorting={this.state.review}
          sorts={this.state.sort}
        />
        <Review reviews = {this.state.review}/> 
      </div>  
    );
  }
}
 
export default Main ;
