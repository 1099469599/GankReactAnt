import React from 'react';
import { Table, Icon } from 'antd';
import { connect } from 'react-redux';
import Item from 'ui/list-item';


const columns = 
  [{
    title: '姓名',
    dataIndex: 'desc',
    key: 'desc',
  }];

 const List = React.createClass({

    getInitialState: function() {
         return {
             results: []
         }
     },

    render: function() {
      console.log(this.props);

      if (this.props.results != undefined) {
        console.log(this.props.results);
        var resultsArr = this.props.results;
        return (
          <Table columns={columns} dataSource={resultsArr} showHeader={false}/>
        );
      } else {
        return (<div>no data</div>);
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