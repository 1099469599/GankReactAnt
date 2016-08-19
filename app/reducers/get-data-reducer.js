import {TYPE_ANDROID, TYPE_IOS, TYPE_FRONTEND, TYPE_APPS, TYPE_EXPAND, TYPE_RECOMMEND, TYPE_VIDEO, TYPE_NICE, TYPE_ALL} from 'constants/constants';

var initialState = {
	type: TYPE_ANDROID,
    results: []
};

export default function(state = initialState, action) {
	console.log('action type = '+action.type);

	var newState = Object.assign({}, state)
	newState.type = action.type;
    newState.results = action.results;
	//console.log('newState results = '+newState.results[0].title);
    return newState;

    /*switch(action.type) {
        
        case ANDROID:
            var newState = Object.assign({}, state)
            newState.text = action.text;
			console.log('newState text = '+newState.text);

            return newState;

        case IOS:

            var newState = Object.assign({}, state)
            newState.users = action.text;
            return newState;

        default:
            return state;
            
    }*/
}