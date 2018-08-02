import 'css/common.css'
import './category.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

// import Foot from 'components/Foot.vue'
import mixin from 'js/mixin.js'

new Vue({
  el: '#app',
  data: {
    topLists: null,
    topIndex: 0,
    subData: null,
    rankData: null
  },
  created(){
    this.getTopLists()
    this.getSubList(0)
  },
  methods: {
    getTopLists(){
      axios.get(url.topList).then(res => {
        this.topLists = res.data.lists
      })
    },
    getSubList(index, id){
      this.topIndex = index
      if(index === 0){
        this.getRank()
      }else{
        axios.post(url.subList, {id}).then(res => {
          this.subData = res.data.data
        })
      }
    },
    getRank(){
      axios.get(url.rank).then(res => {
        console.log(res.data.data)
        this.rankData = res.data.data
      })
    },
    toSearch(list){
      location.href = `search.html?keyword=${list.name}&id=${list.id}`
    }
  },
  // components: {
  //   Foot
  // },
  // filters: {
  //   number(price){
  //     let priceStr = '' + price
  //     if(priceStr.indexOf('.') > -1){
  //       let arr = priceStr.split('.')
  //       return arr[0] + '.' + (arr[1] + '0').substr(0, 2)
  //     }else{
  //       return priceStr + '.00'
  //     }
  //   }
  // }
  mixins: [mixin]
})