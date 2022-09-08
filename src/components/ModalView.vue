<template>
  <!-- 안내창 -->
  <div class="modal-wrap">
    <div class="modal-main">
      <div class="modal-icon"><span class="material-icons-outlined">announcement</span></div>
      <h1>거제청년센터 클론코딩</h1>
      <p>
        이 사이트는 <b>스터디용</b>으로 제작되었으며 리소스는 <strong>원저작자</strong>에게 있습니다. <br>
        해당 사이트 관련 문제 사항이 있으시면 연락해주시면 삭제하겠습니다.<br>
        본 사이트는 <strong><a>C</a><a>h</a><a>r</a><a>o</a><a>m</a><a>e</a></strong> 에 최적화되어 있습니다.
      </p>
      <!-- <h3>Rreview</h3> -->
      <p></p>

      <button class="modal-close">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  import { onMounted } from 'vue';
  
  export default {
    setup() {
      onMounted( () => {
        $('html').css('overflow', 'hidden');
        let modalWrap = $('.modal-wrap');
        let modalClose = $('.modal-close');
        modalClose.click(function () {
          modalWrap.stop().fadeOut(200);
          // 추가기능(스크롤바 살리기)
          $('html').css('overflow', 'auto')
        });
        // 배경눌렀을때 닫기
        let modalMain = $('.modal-main');
        // 내용배경 클릭
        modalMain.click(function (event) {
          // 클릭 정보 전달 막기
          event.stopPropagation();
        });
        // 전체 배경 클릭
        modalWrap.click(function () {
          $(this).stop().fadeOut(200);
          $('html').css('overflow', 'auto')
        });
      })
      
      return {}
    }
  }
</script>

<style scoped>
  /* 안내창 */
  .modal-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.7);
    z-index: 99999;
  }

  .modal-main {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 550px;
    height: 400px;
    background-color: #fff;
    border-radius: 20px;
    padding: 25px;
    box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 20%);
    border: 5px solid rgba(0, 0, 0, 0.1);

  }

  .modal-main span {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: #000;
    padding: 20px 0;
  }

  .modal-main .modal-icon {
    position: relative;
    display: block;
    margin: 0 auto;
    text-align: center;
  }

  .modal-main .modal-icon span {
    font-size: 25px;
    color: #2578de;
    text-shadow: 2px 2px 2px rgb(212, 210, 210);
  }

  .modal-main h1 {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: #000;
    text-shadow: 2px 2px 2px rgb(192, 192, 192);
    padding-bottom: 20px;
  }

  .modal-main p {
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    color: #111;
    line-height: 1.8;
  }

  .modal-main b {
    font-weight: 600;
    text-decoration: underline;
    color: #ed1c24;
  }

  .modal-main strong {
    font-weight: 600;
    text-decoration: underline;
    color: #ed1c24;
  }

  .modal-close {
    position: absolute;
    right: 30px;
    top: 20px;
    border: 0;
    cursor: pointer;
    font-size: 20px;
    background-color: transparent;
    color: #999;
  }

  .modal-close:hover {
    transform: rotate(90deg);
    transition: transform 0.5s;
  }
</style>