import {TYPE_ANDROID, TYPE_IOS, TYPE_FRONTEND, TYPE_APPS, TYPE_EXPAND, TYPE_RECOMMEND, TYPE_VIDEO, TYPE_NICE, TYPE_ALL} from 'constants/constants';

var initialState = {
	type: TYPE_ANDROID,
    isNewType: true,
    results: []
};

export default function(state = initialState, action) {
    var teamArr = [];
    if (action.results instanceof Array) {
        teamArr = action.results;
    }
    if (state.type !== action.type) {
        state.results = [];
        state.isNewType = true;
    } else {
        state.isNewType = false;
    }
	var newState = Object.assign({}, state, {
        results :[
            ...state.results,
            teamArr
        ]
        
    })
	newState.type = action.type;
    newState.isNewType = state.isNewType;
    return newState;
}