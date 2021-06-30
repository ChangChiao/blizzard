<template>
  <section class="game">
    <div>
      <h1>遊戲</h1>
      <a href="">瀏覽並購買遊戲</a>
    </div>
    <ul class="game__list">
      <li
        v-for="(vo, i) in 13"
        :key="'game' + i"
        class="game__list__item"
        :style="{
          backgroundImage: `url(${require('@/assets/images/gamePoster/' +
            vo +
            '.webp')})`,
        }"
      >
        {{ vo }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.game {
  padding: 0 40px;
  background-image: url("~@/assets/images/gameBg.jpg");
  background-position: top center;
  background-repeat: no-repeat;
  color: rgba($color: #fff, $alpha: 0.7);
  &__list {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    max-width: 1600px;
    &__item {
      width: 210px;
      height: 280px;
      margin: 12px;
      transition-duration: 0.5s;
      background-position: bottom center;
      background-size: cover;
      &:hover {
        background-size: 110%;
      }
    }
  }
}
</style>
