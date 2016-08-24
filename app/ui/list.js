import React from 'react';
import { Table, Icon } from 'antd';
import { connect } from 'react-redux';
import Item from 'ui/list-item';

const List = React.createClass({

    getInitialState: function() {
         return {
            loading: false,
            results: [],
            dataList: []
         }
     },

    componentDidMount: function() {
      window.addEventListener('scroll', this.handleScroll.bind(this));
    },
    componentWillUnmount: function() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
    },
    handleScroll: function(event) {
      var listHeight = $('#list-contain').height();
      var windowHeight = $(window).height();
      var scrollTop = $(window).scrollTop();

      if(!this.state.loading && (scrollTop + windowHeight >= listHeight)){
         console.log('load more');
         this.setState({loading: true});
      } else{
        console.log('ignore');
      }
    },

    render: function() {
      if (this.props.results != undefined) {
        var resultsArr = this.props.results;
        return (
          <ul id='list-contain'>
            {resultsArr.map((item, i) => 
                <Item {...item}/>
            )}
          </ul>
          );
      } else {
        return (<div>empty</div>);
      }
    }
});

// var tempArr = state.getDataReducer.results;
//   for(var i=0, length = tempArr.length; i < length; i++) {
//     results.push(tempArr[i]);
//   }  

const stateToProps = function(state) {
  return {
      results: state.getDataReducer.results
  }
}

const dispatchToProps = function(dispatch) {
    // In a real app, you would 'dispatch' an action here based
    // on the user being clicked
    return {
        //onClick: () => {console.log('user was clicked')}
    }
}

export default connect(stateToProps, dispatchToProps)(List)