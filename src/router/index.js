import {createRouter, createWebHistory} from 'vue-router';

// Router는 화면의 일부에 즉, RouterView라는
// 컴포넌트에 다른 컴포넌트를 보여주는 역할을 합니다.
// html로 생각을 하면, <a href = "#아이디"></a>와 같습니다.
// 클릭을 해서 웹브라우저에 주소 창에 #을 표현하지 않는다.
// createWebHistory를 사용하여 관리 한다.
// createWebHistory는 Browser 객체에 location이 관리 된다.
const router = createRouter ({
  history: createWebHistory(),
  // routes: [{psth: '/페이지명', name: '별칭', component:'(RouterView에 보여줄)컴포넌트명'}]
  routes: [
    {
      path: '/',
      name: 'Home',
      component: '',
    },
  ]
})

export default router;