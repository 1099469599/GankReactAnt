import store from 'store';
import { message } from 'antd';

export function getData(type, page){
	return $.ajax({
        type: 'GET',
        url: 'http://gank.io/api/data/'+type+'/20/'+page,
        dataType: 'json',
        success: function(respone) {
            if (!respone.error) {
                getImages(type, page, respone.results);
            } else {
                message.error('获取数据失败');
            }
			
        },
        error: function(xhr, type) {
            message.error('获取数据失败');
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
                dataResults.map((dataItem, i)=>{
                    var imageLength = images.length;
                    if (i < imageLength) {
                        dataResults[i].imageUrl = images[i].url
                    } else {
                        dataResults[i].imageUrl = images[0].url
                    }
                })
                store.dispatch({
                    type: type,
                    results: dataResults
                })
            } else {
                store.dispatch({
                    type: type,
                    results: dataResults
                })
            }
            
        },
        error: function(xhr, type) {
            store.dispatch({
                type: type,
                results: dataResults
            })
        }
    });
}