import store from 'store';


export function getData(type, page){
	return $.ajax({
        type: 'GET',
        url: 'http://gank.io/api/data/'+type+'/20/'+page,
        dataType: 'json',
        success: function(respone) {
            if (!respone.error) {
            	store.dispatch({
	            	type: type,
	            	results: respone.results
	        	})
            }
			
        },
        error: function(xhr, type) {
            
        }
    });
}