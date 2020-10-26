import React, { Component } from 'react';
import Review from './ReviewComponent';
import Filter from './FilterComponent';
import { Reviews } from '../shared/review';

class Main extends Component {

  constructor(props) {
      super(props);
      this.state = {
          review: Reviews
      }
  }  

  render() {
    return(
      <div>
        <Filter />
        {/* <Review reviews = {this.state.review}/> */}
      </div>  
    );
  }
}
 
export default Main ;
