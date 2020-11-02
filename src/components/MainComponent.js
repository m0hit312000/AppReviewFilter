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
            start: 0,
            end: 10
          },
          sorts: 'all'
      }

      this.sorting = this.sorting.bind(this);
      this.onPageChange = this.onPageChange.bind(this);
      this.onIndexChange = this.onIndexChange.bind(this);
      this.searchSorting = this.searchSorting.bind(this);
      this.ratingSorting = this.ratingSorting.bind(this);
      this.versionSorting = this.versionSorting.bind(this);
      this.countrySorting = this.countrySorting.bind(this);
      this.ratingCount = this.ratingCount.bind(this);
      this.versionCount = this.versionCount.bind(this);
      this.countryCount = this.countryCount.bind(this);
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
        start: 0,
        end: 10
      },
    })
  };

  searchSorting(e) {
    const rev = Reviews;
    const constant = 'com.';
    const sorting = constant + e.target.value;
    const sortRes = rev.filter((rev) => {
      if(sorting === rev.appID) {
        return rev;
      }
      else if(sorting === 'com.') {
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
        start: 0,
        end: 10
      },
    })
  };

  onIndexChange(start, end) {
    this.setState({
      index: {
        start: start,
        end: end
      }
    })
  };

  onPageChange(start, end) {
    this.setState({
      pagination: {
        start: start,
        end: end
      }
    })  
  };

  ratingCount(star) {
    var count = 0;
    this.state.review.map((rev) => {
      if(rev.rating === star){
        count = count + 1;
      }
    });
    return count; 
  }

  versionCount(ver) {
    var count = 0;
    this.state.review.map((rev) => {
      if(rev.version === ver){
        count = count + 1;
      }
    });
    return count; 
  }

  countryCount(cou) {
    var count = 0;
    this.state.review.map((rev) => {
      if(rev.countryName === cou){
        count = count + 1;
      }
    });
    return count; 
  }

  ratingSorting(val, sort){
    const app = sort;
    const sorting = app;
    const sortRes = Reviews.filter((rev) => {
      if(sorting === rev.appID && rev.rating === val) {
        return rev;
      }
      else if(sorting === 'all' && rev.rating === val) {
        return rev
      }
    });
    this.setState({
     total: sortRes.length,
     review: sortRes,
     pagination: {
       start: 0,
       end: 10
     },
     index: {
       start: 0,
       end: 10
     },
    })
 };

 versionSorting(val, sort) {
    const app = sort;
    const sorting = app;
    console.log(sorting);
    const sortRes = Reviews.filter((rev) => {
      if(sorting === rev.appID && rev.version === val) {
        return rev;
      }
      else if(sorting === 'all' && rev.version === val) {
        return rev
      }
    });
    this.setState({
    total: sortRes.length,
    review: sortRes,
    pagination: {
      start: 0,
      end: 10
    },
    index: {
      start: 0,
      end: 10
    },
   })
 }

 countrySorting(val, sort) {
    const app = sort;
    const sorting = app;
    console.log(sorting);
    const sortRes = Reviews.filter((rev) => {
      if(sorting === rev.appID && rev.countryName === val) {
        return rev;
      }
      else if(sorting === 'all' && rev.countryName === val) {
        return rev
      }
    });
    this.setState({
    total: sortRes.length,
    review: sortRes,
    pagination: {
      start: 0,
      end: 10
    },
    index: {
      start: 0,
      end: 10
    },
  })
 }

  render() {
    return(
      <div className="filter_app">
        <Filter 
          sorting={this.sorting}
          sorts={this.state.sorts}
        />
        <SideFilter 
          sorts = {this.state.sorts}
          sortingD = {this.sorting}
          sorting={this.searchSorting}
          ratingSorting={this.ratingSorting}
          versionSorting={this.versionSorting}
          countrySorting={this.countrySorting}
          ratingCount={this.ratingCount}
          versionCount={this.versionCount}
          countryCount={this.countryCount}
          total = {this.state.total}
        />
        <Review 
          reviews = {this.state.review} 
          total = {this.state.total} 
          perPage= {this.state.perPage} 
          page = {this.state.pagination} 
          change = {this.onPageChange}
          index = {this.state.index}
          onIndexChange = {this.onIndexChange}
        /> 
      </div>  
    );
  }
}
 
export default Main ;
