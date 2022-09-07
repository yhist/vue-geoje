<template>
  <section class="visual">
      <!-- Swiper -->

      <Swiper
      :modules="modules"
      :autoplay="{
        delay: 1500,
        disableOnInteraction: false,
      }"
      :loop = "true"
      :pagination = "{
        el: '.sw-visual-pg',
        clickable: 'true'
      }"
      :effect="'fade'"
      v-on:swiper="visualSlide" 
      class="sw-visual"
      >
      <SwiperSlide class="swiper-slide">
        <a href="#" class="vs-1"></a>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <a href="#" class="vs-2"></a>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <a href="#" class="vs-3"></a>
      </SwiperSlide>
      
      <!-- 슬라이더 페이지네이션 -->
      <div class="sw-visual-control">
        <div class="sw-visual-pg"></div>
        <button class="sw-visual-bt">
          <!-- 슬라이더를 클릭했을 때 play/start를 하고 싶다. -->
          <span class="material-icons-outlined" @click="controlSlide">
            <!-- 클릭했을때 아이콘 모양을 바꾸기 위해서 작성 -->
            <!-- 구글 아이콘인 경우만 해당(글자만 변경, 폰트 어썸은 클래스 변경) -->
            {{slideState}}
          </span>
        </button>
      </div>

      </Swiper>

    </section>
</template>

<script>
  import {ref} from 'vue'
  import {Swiper, SwiperSlide} from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import "swiper/css/effect-fade";
  import {Autoplay, EffectFade, Pagination} from 'swiper'

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },

    setup(){
      const slide = ref(null);
      const visualSlide = (swiper) => {
        // ref라서 value로 저장함.
        slide.value = swiper
      }
      // 아이콘을 변경하기 위한 문자열 저장
      const slideState = ref('pause');
      const controlSlide = () => {
        if(slide.value.autoplay.running){
          slide.value.autoplay.stop();
          slideState.value = ('play_arrow')
        }else{
          slide.value.autoplay.start();
          slideState.value = ('pause');
        }
      }
      return{
        modules: [Autoplay, EffectFade, Pagination],
        visualSlide,
        controlSlide,
        slideState,
      }
    }

}

</script>


<style>
  /* 비주얼 영역 */
.visual {
  position: relative;
  display: block;
  height: 477px;
}

.sw-visual {
  width: 100%;
  height: 100%;
}

.sw-visual a {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.vs-1 {
  background: url('@/assets/images/banner_1_20200915_0.jpg') no-repeat center;
  background-size: cover;
}

.vs-2 {
  background: url('@/assets/images/banner_2_20200915_0.jpg') no-repeat center;
  background-size: cover;
}

.vs-3 {
  background: url('@/assets/images/banner_4_20200915_0.jpg') no-repeat center;
  background-size: cover;
}

.sw-visual-control {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 50px;
  display: block;
  z-index: 9;
}

.sw-visual-pg .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #fff;
  opacity: 0.5;
  margin-right: 10px;
}

.sw-visual-pg {
  display: inline-block;
  width: auto !important;
}

.sw-visual-pg .swiper-pagination-bullet-active {
  opacity: 1.0;
}

.sw-visual-bt {
  position: relative;
  display: inline-block;
  width: 23px;
  height: 22px;
  vertical-align: bottom;
  background: transparent;
  /* background: url('@/assets/images/pause.png') no-repeat center; */
  cursor: pointer;
  border: 0;
  color: #fff;
  font-size: 10px;
}

.sw-visual-bt-play {
  background: url('@/assets/images/play.png') no-repeat center;
}
/* //visual PC 버전 */

/* visual 반응형 버전 */
@media all and (max-width: 1400px) {
  .visual {
    height: 50vw;
  }
}
</style>