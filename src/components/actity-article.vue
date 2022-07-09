<template>
  <div>
    <exchange-promotion-article></exchange-promotion-article>
  </div>
</template>

<script>
import exchangePromotionArticle from './exchange-promotion/exchangePromotion-article.vue'
export default {
  components: { exchangePromotionArticle },
}
</script>

<style scoped>
div {
  width: 98%;
  height: 96%;
  background: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
