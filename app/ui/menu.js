import React from 'react';
import { Menu, Icon} from 'antd';
import { browserHistory } from 'react-router';
import {TYPE_ANDROID, TYPE_IOS, TYPE_FRONTEND, TYPE_APPS, TYPE_EXPAND, TYPE_RECOMMEND, TYPE_VIDEO, TYPE_NICE, TYPE_ALL} from 'constants/constants';
import {getData} from 'api/data-business';

export default React.createClass({
	render: function() {
		return (
			<Menu mode="inline" mode="vertical" onSelect={this.onSelect}
			defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
	              	<Menu.Item key="1">
	              		<Icon type="android" />Android
	              	</Menu.Item>
	                <Menu.Item key="2">
	                	<Icon type="apple" />iOS
	                </Menu.Item>
	                <Menu.Item key="3">
	                	<Icon type="chrome" />前端
	                </Menu.Item>
	                <Menu.Item key="4">
	                	<Icon type="appstore" />App
	                </Menu.Item>
	                <Menu.Item key="5">
	                	<Icon type="hdd" />拓展资源
	                </Menu.Item>
	                <Menu.Item key="6">
	                	<Icon type="smile" />瞎推荐
	                </Menu.Item>
	                <Menu.Item key="7">
	                	<Icon type="video-camera" />休息视频
	                </Menu.Item>
	                <Menu.Item key="8">
	                	<Icon type="heart" />福利
	                </Menu.Item>
					<Menu.Item key="9">
						<Icon type="ellipsis" />all
					</Menu.Item>
	            </Menu>
		)
	},
	onSelect : function(info){
		console.log("key="+info.key);
		var path = '/';
		var type = TYPE_ANDROID;
		switch(info.key){
			case "1":
				path = '/android';
				type = TYPE_ANDROID;
				break;

			case "2":
				path = '/ios';
				type = TYPE_IOS;
				break;

			case "3":
				path = '/frontend';
				type = TYPE_FRONTEND;
				break;

			case "4":
				path = '/apps';
				type = TYPE_APPS;
				break;

			case "5":
				path = '/expand';
				type = TYPE_EXPAND;
				break;

			case "6":
				path = '/recommend';
				type = TYPE_RECOMMEND;
				break;

			case "7":
				path = '/video';
				type = TYPE_VIDEO;
				break;

			case "8":
				path = '/nice';
				type = TYPE_NICE;
				break;

			case "9":
				path = '/all';
				type = TYPE_ALL;
				break;

			default:
				break;

		}
		console.log("path = "+path);
		browserHistory.push(path);
		getData(type, 1);
	}
});