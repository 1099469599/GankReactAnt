import React from 'react';
import { Table, Icon } from 'antd';
import { connect } from 'react-redux';
import Item from 'ui/list-item';

const List = React.createClass({

    getInitialState: function() {
         return {
             results: []
         }
     },

    render: function() {
      if (this.props.results != undefined) {
        var resultsArr = this.props.results;
        return (
          <ul>
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