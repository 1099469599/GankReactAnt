import store from 'store';

export function getData(type, page){
	return $.ajax({
        type: 'GET',
        url: 'http://gank.io/api/data/'+type+'/20/'+page,
        dataType: 'json',
        success: function(respone) {
            if (!respone.error) {
            	
                getImages(type, page, respone.results);
            }
			
        },
        error: function(xhr, type) {
            
        }
    });
}

export function getImages(type, page, dataResults){
    return $.ajax({
        type: 'GET',
        url: 'http://gank.io/api/data/福利/20/'+page,
        dataType: 'json',
        success: function(respone) {
            if (!respone.error) {
                var images = respone.results;
                dataResults.map((dataItem, i)=>
                    dataResults[i].imageUrl = images[i].url
                )
                store.dispatch({
                    type: type,
                    results: dataResults
                })
            }
            
        },
        error: function(xhr, type) {
            
        }
    });
}