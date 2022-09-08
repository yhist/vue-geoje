import { createStore } from 'vuex';
import axios from 'axios';

// vuex는 데이터를 보관하고 
// 업데이트한 이후에 
// 컴포넌트에서 필요로한 데이터를 참조한다.
// 공통 데이터 저장소!(state)
export default createStore({
  // 데이터
  state: {
    menuDataArr: [],
    visualDataArr: [],
    galleryDataArr:[],
    movieData:{},
    infoDataArr: [],
    newDataArr:[],
    bannerDataArr:[]
  },


  // 외부 json 및 서버연동
  // axios 호출 시점
  // mutation을 commit 으로 호출하면서 데이터를 전달한다.
  actions: {
    // 메뉴데이터 가져오기
    fetchGetMenu({commit}) {
      axios.get('./data/menu.json')
      .then(res => {
        // console.log(res.data);
        commit('UPDATE_MENU_DATA', res.data)
      })
      .catch(err => console.log(err))
    },

    fetchGetVisual({commit}) {
      axios.get('./data/visual.json')
      .then(res => {
        // console.log(res.data);
        commit('UPDATE_VISUAL_DATA', res.data)
      })
      .catch(err => console.log(err))
    },

    fetchGetGallery({commit}) {
      axios.get('./data/gallery.json')
      .then(res => {
        // console.log(res.data);
        commit('UPDATE_GALLERY_DATA', res.data)
      })
      .catch(err => console.log(err))
    },

    fetchGetMovie({commit}) {
      axios.get('./data/movie.json')
      .then(res => {
        // console.log(res.data);
        commit('UPDATE_MOVIE_DATA', res.data)
      })
      .catch(err => console.log(err))
    },

    fetchGetInfo({commit}) {
      axios.get('./data/info.json')
      .then(res => {
        // console.log(res.data);
        commit('UPDATE_INFO_DATA', res.data)
      })
      .catch(err => console.log(err))
    },

    fetchGetNews({commit}) {
      axios.get('./data/news.json')
      .then(res => {
        // console.log(res.data);
        commit('UPDATE_NEWS_DATA', res.data)
      })
      .catch(err => console.log(err))
    },

    fetchGetBanner({commit}) {
      axios.get('./data/banner.json')
      .then(res => {
        // console.log(res.data);
        commit('UPDATE_BANNER_DATA', res.data)
      })
      .catch(err => console.log(err))
    }
  },
  

  // actions으로 부터 데이터를 전송받고 state를 업데이트한다.
  // action에서 commit으로 받아온다. 
  mutations: {
    UPDATE_MENU_DATA(state, payload){
      state.menuDataArr = payload
    },

    UPDATE_VISUAL_DATA(state, payload){
      state.visualDataArr = payload
    },

    UPDATE_GALLERY_DATA(state, payload){
      state.galleryDataArr = payload
    },

    UPDATE_MOVIE_DATA(state, payload){
      state.movieData = payload
    },

    UPDATE_INFO_DATA(state, payload){
      state.infoData = payload
    },

    UPDATE_NEWS_DATA(state, payload){
      state.newsData = payload
    },

    UPDATE_BANNER_DATA(state, payload){
      state.bannerData = payload
    }
},

  // 외부 컴포넌트에서 state를 참조할때 활용
  // state가 바뀌면 즉시 반영을 위해서 외부 컴포넌트는
  // computed로 처리하는 것이 일반적이다.
  getters: {
    menuData(state){
      return state.menuDataArr
    },

    visualData(state){
      return state.visualDataArr
    },

    galleryData(state){
      return state.galleryDataArr
    },

    movieData(state){
      return state.movieData
    },

    infoData(state){
      return state.infoData
    },

    newsData(state){
      return state.infoData
    },

    bannerData(state){
      return state.bannerData
    }
  }

})
