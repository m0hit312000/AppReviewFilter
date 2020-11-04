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
          time: 'alltime', 
          rating: '',
          version: '',
          country: ''
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
      this.onLoadSort = this.onLoadSort.bind(this);
      this.cancel = this.cancel.bind(this);
  }  

  componentDidMount() {
    const Res = this.onLoadSort();
    const sortRes = Res.filter(rev => this.state.sorts === rev.appID);
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

  onLoadSort() {
      let rev = [];
      if(this.state.factor === 'newestfirst') {
        rev = Reviews.sort((a, b) => this.TimeConverter(b.reviewDate) - this.TimeConverter(a.reviewDate));        
      }
      else if(this.state.factor === 'oldestfirst') {
        rev = Reviews.sort((a, b) => this.TimeConverter(a.reviewDate) - this.TimeConverter(b.reviewDate));        
      }
      let Res2 = [];
      if(this.state.time === 'alltime') {
        Res2 = rev;
      }
      else if(this.state.time === 'today') {
        Res2 = rev.filter(rev => this.TimeConverter(rev.reviewDate > Date.now()-(1000*60*60*24)))
      }
      else if(this.state.time === 'thisweek') {
        Res2 = rev.filter(rev => this.TimeConverter(rev.reviewDate) > Date.now()-(1000*60*60*24*7))
      }
      else if(this.state.time === 'thismonth') {
        Res2 = rev.filter(rev => this.TimeConverter(rev.reviewDate) > Date.now()-(1000*60*60*24*30))
      }
      else if(this.state.time === 'thisyear') {
        Res2 = rev.filter(rev => this.TimeConverter(rev.reviewDate) > Date.now()-(1000*60*60*24*365))      
      }
      return Res2;
  };

  sorting(e){
    let rev = this.onLoadSort();
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
      rating: '',
      version: '',
      country: ''
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
      rating: '',
      version: '',
      country: ''
    });    
  }

  searchSorting(e) {
    var code = e.keyCode || e.which;
    if(code === 13) { 
      let rev = this.onLoadSort();
      const Res = rev.filter(rev => this.state.sorts === rev.appID);
      const sorting = e.target.value.toLowerCase();
      const sortRes = Res.filter(rev => rev.reviewHeading.toLowerCase().split(' ').includes(sorting))
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
        rating: '',
        version: '',
        country: ''
      });
    }
  };

  timeRangeSorting(e) {
    const rev = Reviews.filter(rev => this.state.sorts === rev.appID);
    let Res = [];
    if(this.state.factor === 'newestfirst') {
      Res = rev.sort((a, b) => this.TimeConverter(b.reviewDate) - this.TimeConverter(a.reviewDate));        
    }
    else if(this.state.factor === 'oldestfirst') {
      Res = rev.sort((a, b) => this.TimeConverter(a.reviewDate) - this.TimeConverter(b.reviewDate));        
    }
    let Res2 = [];
    if(e.target.value === 'alltime' || e.detail === 0) {
      Res2 = Res;
    }
    else if(e.target.value === 'today') {
      Res2 = Res.filter(rev => this.TimeConverter(rev.reviewDate > Date.now()-(1000*60*60*24)))
    }
    else if(e.target.value === 'thisweek') {
      Res2 = Res.filter(rev => this.TimeConverter(rev.reviewDate) > Date.now()-(1000*60*60*24*7))
    }
    else if(e.target.value === 'thismonth') {
      Res2 = Res.filter(rev => this.TimeConverter(rev.reviewDate) > Date.now()-(1000*60*60*24*30))
    }
    else if(e.target.value === 'thisyear') {
      Res2 = Res.filter(rev => this.TimeConverter(rev.reviewDate) > Date.now()-(1000*60*60*24*365))      
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
      time: e.target.value,
      rating: '',
      version: '',
      country: ''
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

  cancel(type) {
    if(type === 'version') {
      this.setState({version: ''});
      this.versionSorting('', this.state.sorts);
      this.ratingSorting(this.state.rating, this.state.sorts);
      this.countrySorting(this.state.country, this.state.sorts);
    }
    else if(type === 'rating') {
      this.setState({rating: ''});
      this.ratingSorting('', this.state.sorts);
      this.countrySorting(this.state.country, this.state.sorts);
      this.versionSorting(this.state.version, this.state.sorts);
    }
    else if(type === 'country') {
      this.setState({country: ''});
      this.countrySorting('', this.state.sorts);
      this.ratingSorting(this.state.rating, this.state.sorts);
      this.versionSorting(this.state.version, this.state.sorts);
    }
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
    const sorting = sort;
    let rev = this.onLoadSort();
    let sortRes = [];
    if(val === ''){
      sortRes = rev.filter(rev => sorting === rev.appID);
    }
    else if(val !== '') {
      sortRes = rev.filter(rev => sorting === rev.appID && rev.rating === val);
    }

    if(this.state.country !== '') {
      sortRes = sortRes.filter(rev => rev.countryName === this.state.country)
    }
    if(this.state.version !== '') {
      sortRes = sortRes.filter(rev => rev.version === this.state.version)
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
     rating: val
    })
 };

 versionSorting(val, sort) {
    const app = sort;
    const sorting = app;
    let rev = this.onLoadSort();
    let sortRes = [];
    if(val === ''){
      sortRes = rev.filter(rev => sorting === rev.appID);
    }
    else if(val !== '') {
      sortRes = rev.filter(rev => sorting === rev.appID && rev.version === val);
    }
    if(this.state.country !== '') {
      sortRes = sortRes.filter(rev => rev.countryName === this.state.country)
    }
    if(this.state.rating !== '') {
      sortRes = sortRes.filter(rev => rev.rating === this.state.rating)
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
    version: val
   })
 }

 countrySorting(val, sort) {
    const app = sort;
    const sorting = app;
    let rev = this.onLoadSort();
    let sortRes = [];
    if(val === ''){
      sortRes = rev.filter(rev => sorting === rev.appID);
    }
    else if(val !== '') {
      sortRes = rev.filter(rev => sorting === rev.appID && rev.countryName === val);
    }
    if(this.state.rating !== '') {
      sortRes = sortRes.filter(rev => rev.rating === this.state.rating)
    }
    if(this.state.version !== '') {
      sortRes = sortRes.filter(rev => rev.version === this.state.version)
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
    country: val
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
          cancel = {this.cancel}
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
