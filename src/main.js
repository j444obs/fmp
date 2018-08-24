import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
    // 这个字段走 app.json
    config: {
        // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
        pages: [
            '^pages/index/main',
            'pages/acd/main',
            "pages/me/main",
            "pages/all/main",
            "pages/active/main",
            "pages/zhaopin/main",
            "pages/zpd/main",
        ],
        window: {
            backgroundColor:'#F56C6C',
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#F56C6C',
            navigationBarTitleText: '曾林外',
            navigationBarTextStyle: 'light',
        },
        tabBar: {
            "selectedColor": "#F56C6C",
            "color": "#606266",
            list: [

                {
                    "pagePath": "pages/index/main",
                    "text": "首页",
                    "iconPath": "static/img/home.png",
                    "selectedIconPath": "static/img/homes.png",

                },
                {
                    "pagePath": "pages/all/main",
                    "text": "分类",
                    "iconPath": "static/img/all.png",
                    "selectedIconPath": "static/img/alls.png",
                },
                {
                    "pagePath": "pages/me/main",
                    "text": "我的",
                    "iconPath": "static/img/me.png",
                    "selectedIconPath": "static/img/mes.png",
                }
            ]
        },
    }
}
