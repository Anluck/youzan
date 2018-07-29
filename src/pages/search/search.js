import 'css/common.css'
import './search.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import qs from 'qs'
import Velocity from 'velocity-animate'

import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)

import mixin from 'js/mixin.js'

let {keyword, id} = qs.parse(location.search.substr(1))

new Vue({
  el: '.container',
  data: {
    searchList: null,
    keyword,
    isLoading: false,
    isShow: false
  },
  created(){
    this.getSearchList()
  },
  methods: {
    getSearchList(){
      this.isLoading = true
      axios.post(url.searchList, {keyword, id}).then(res => {
        let curLists = res.data.lists
        if(this.searchList){
          this.searchList = this.searchList.concat(curLists)
        }else{
          // 第一次请求数据
          this.searchList = curLists
        }
        this.loading = false
      })
    },
    move(){
      if(document.body.scrollTop > 0){
        this.isShow = true
      }else{
        this.isShow = false
      }
    },
    toTop(){
      Velocity(document.body, 'scroll', {duration: 1000})
    }
  },
  mixins: [mixin]
})