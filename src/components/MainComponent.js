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
          sorts: 'com.amazon',
          factor: 'newestfirst',
          time: 'alltime'
      }

      this.sorting = this.sorting.bind(this);
      this.timeSorting = this.timeSorting.bind(this);
      this.onPageChange = this.onPageChange.bind(this);
      this.onIndexChange = this.onIndexChange.bind(this);
      this.searchSorting = this.searchSorting.bind(this);
      this.ratingSorting = this.ratingSorting.bind(this);
      this.versionSorting = this.versionSorting.bind(this);
      this.countrySorting = this.countrySorting.bind(this);
      this.ratingCount = this.ratingCount.bind(this);
      this.versionCount = this.versionCount.bind(this);
      this.countryCount = this.countryCount.bind(this);
      this.TimeConverter = this.TimeConverter.bind(this);
      this.timeRangeSorting = this.timeRangeSorting.bind(this);
  }  

  componentDidMount() {
    let rev = [];
    if(this.state.factor === 'newestfirst') {
      rev = Reviews.sort((a, b) => this.TimeConverter(b.reviewDate) - this.TimeConverter(a.reviewDate));        
    }
    else if(this.state.factor === 'oldestfirst') {
      rev = Reviews.sort((a, b) => this.TimeConverter(a.reviewDate) - this.TimeConverter(b.reviewDate));        
    }
    const sortRes = rev.filter(rev => this.state.sorts === rev.appID);
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
      time: 'alltime'
    })
  }

  sorting(e){
    let rev = [];
    if(this.state.factor === 'newestfirst') {
      rev = Reviews.sort((a, b) => this.TimeConverter(b.reviewDate) - this.TimeConverter(a.reviewDate));        
    }
    else if(this.state.factor === 'oldestfirst') {
      rev = Reviews.sort((a, b) => this.TimeConverter(a.reviewDate) - this.TimeConverter(b.reviewDate));        
    }
    const sorting = e.target.value;
    const sortRes = rev.filter(rev => sorting === rev.appID);
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
      time: 'alltime'
    })
  };

  TimeConverter(time) {
    let date = new Date(Date.parse(time));
    return date.getTime();
  }

  timeSorting(e) {
    const rev = this.state.review;
    const factor = e.target.value;
    let sortRes = [];
    if(factor === 'newestfirst') {
      sortRes = rev.sort((a, b) => this.TimeConverter(b.reviewDate) - this.TimeConverter(a.reviewDate));        
    }
    else if(factor === 'oldestfirst') {
      sortRes = rev.sort((a, b) => this.TimeConverter(a.reviewDate) - this.TimeConverter(b.reviewDate));        
    }

    this.setState({
      factor: factor,
      review: sortRes,
      pagination: {
        start: 0,
        end: 10
      },
      index: {
        start: 0,
        end: 10
      },
    });    
  }

  searchSorting(e) {
    var code = e.keyCode || e.which;
    if(code === 13) { 
      const Res = Reviews.filter(rev => this.state.sorts === rev.appID);
      let rev = [];
      if(this.state.factor === 'newestfirst') {
        rev = Res.sort((a, b) => this.TimeConverter(b.reviewDate) - this.TimeConverter(a.reviewDate));        
      }
      else if(this.state.factor === 'oldestfirst') {
        rev = Res.sort((a, b) => this.TimeConverter(a.reviewDate) - this.TimeConverter(b.reviewDate));        
      }
      const sorting = e.target.value.toLowerCase();
      const sortRes = rev.filter(rev => rev.reviewHeading.toLowerCase().split(' ').includes(sorting))
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
      });
    }
  };

  timeRangeSorting(e) {
    const Res = Reviews.filter(rev => this.state.sorts === rev.appID);
    let rev = [];
    if(this.state.factor === 'newestfirst') {
      rev = Res.sort((a, b) => this.TimeConverter(b.reviewDate) - this.TimeConverter(a.reviewDate));        
    }
    else if(this.state.factor === 'oldestfirst') {
      rev = Res.sort((a, b) => this.TimeConverter(a.reviewDate) - this.TimeConverter(b.reviewDate));        
    }
    // console.log(rev);
    let Res2 = [];
    if(e.target.value === 'alltime' || e.detail === 0) {
      Res2 = rev;
    }
    else if(e.target.value === 'today') {
      Res2 = rev.filter(rev => this.TimeConverter(rev.reviewDate > Date.now()-(1000*60*60*24)))
    }
    else if(e.target.value === 'thisweek') {
      Res2 = rev.filter(rev => this.TimeConverter(rev.reviewDate) > Date.now()-(1000*60*60*24*7))
    }
    else if(e.target.value === 'thismonth') {
      Res2 = rev.filter(rev => this.TimeConverter(rev.reviewDate) > Date.now()-(1000*60*60*24*30))
    }
    else if(e.target.value === 'thisyear') {
      Res2 = rev.filter(rev => this.TimeConverter(rev.reviewDate) > Date.now()-(1000*60*60*24*365))      
    }
    this.setState({
      total: Res2.length,
      review: Res2,
      pagination: {
        start: 0,
        end: 10
      },
      index: {
        start: 0,
        end: 10
      },
      time: e.target.value
    });
  }

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
    this.state.review.forEach((rev) => {
      if(rev.rating === star){
        count = count + 1;
      }
    });
    return count; 
  }

  versionCount(ver) {
    var count = 0;
    this.state.review.forEach((rev) => {
      if(rev.version === ver){
        count = count + 1;
      }
    });
    return count; 
  }

  countryCount(cou) {
    var count = 0;
    this.state.review.forEach((rev) => {
      if(rev.countryName === cou){
        count = count + 1;
      }
    });
    return count; 
  }

  ratingSorting(val, sort){
    const app = sort;
    const sorting = app;
    const Res = Reviews.filter(rev => sorting === rev.appID && rev.rating === val);
    let sortRes = [];
    if(this.state.factor === 'newestfirst') {
      sortRes = Res.sort((a, b) => this.TimeConverter(b.reviewDate) - this.TimeConverter(a.reviewDate));        
    }
    else if(this.state.factor === 'oldestfirst') {
      sortRes = Res.sort((a, b) => this.TimeConverter(a.reviewDate) - this.TimeConverter(b.reviewDate));        
    }
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
    const Res = Reviews.filter(rev => sorting === rev.appID && rev.version === val);
    let sortRes = [];
    if(this.state.factor === 'newestfirst') {
      sortRes = Res.sort((a, b) => this.TimeConverter(b.reviewDate) - this.TimeConverter(a.reviewDate));        
    }
    else if(this.state.factor === 'oldestfirst') {
      sortRes = Res.sort((a, b) => this.TimeConverter(a.reviewDate) - this.TimeConverter(b.reviewDate));        
    }
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
    const Res = Reviews.filter(rev => sorting === rev.appID && rev.countryName === val);
    let sortRes = [];
    if(this.state.factor === 'newestfirst') {
      sortRes = Res.sort((a, b) => this.TimeConverter(b.reviewDate) - this.TimeConverter(a.reviewDate));        
    }
    else if(this.state.factor === 'oldestfirst') {
      sortRes = Res.sort((a, b) => this.TimeConverter(a.reviewDate) - this.TimeConverter(b.reviewDate));        
    }
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
          factor={this.state.factor}
          timeSorting={this.timeSorting}
        />
        <SideFilter 
          sorts = {this.state.sorts}
          sortingD = {this.sorting}
          sorting={this.searchSorting}
          time={this.state.time}
          timeRangeSorting={this.timeRangeSorting}
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
          TimeConverter = {this.TimeConverter}
        /> 
      </div>  
    );
  }
}
 
export default Main ;
