import React from 'react';
import { connect } from 'react-redux';
import Item from 'ui/list-item';
import {TYPE_ANDROID} from 'constants/constants';
import {getData} from 'api/data-business';

var loading = false;
var page = 1;


const List = React.createClass({

    getInitialState: function() {
         return {
          type: TYPE_ANDROID,
          isNewType: true,
          results: []
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

      if(!loading && (scrollTop + windowHeight >= listHeight)){
         if (this.props.type != undefined) {
          ++ page;
          getData(this.props.type, page);
          loading = true;
         }
      }
    },
    render: function() {
      if (this.props.isNewType) {
        page = 1;
      }
      loading = false;
      if (this.props.results != undefined) {
        var resultsArr = this.props.results;
        return (
          <ul id='list-contain'>
            {resultsArr.map((arr, i) =>
              arr.map((item, j) => 
                <Item {...item}/>
              )
            )}
          </ul>
          );
      } else {
        return (<div>empty</div>);
      }
    }
});

const stateToProps = function(state) {
  return {
    type: state.getDataReducer.type,
    isNewType: state.getDataReducer.isNewType,
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