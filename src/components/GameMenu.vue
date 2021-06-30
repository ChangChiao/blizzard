<template>
  <header class="gamemenu">
    <ul class="sub__list">
      <li v-for="(sub, k) in subMenu" :key="'subItem' + k">
        <img :src="`@/assets/images/gameMenu/${k + 1}.webp`" alt="" />
        {{ sub.name }}
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      subMenu: [
        { name: "暗黑破壞神II®：獄火重生", link: "" },
        { name: "鬥陣特攻®2", link: "" },
        { name: "《鬥陣特攻®》", link: "" },
        { name: "《魔獸世界®》", link: "" },
        { name: "《爐石戰記®》", link: "" },
        { name: "《暴雪英霸®》", link: "" },
        { name: "《魔獸爭霸®III：淬鍊重生™》", link: "" },
        { name: "《暗黑破壞神®IV》", link: "" },
        { name: "《暗黑破壞神®永生不朽™》", link: "" },
        { name: "《暗黑破壞神®III》", link: "" },
        { name: "《星海爭霸®II》", link: "" },
        { name: "《星海爭霸®》高畫質重製版", link: "" },
        { name: "《暴雪®遊樂場典藏系列》", link: "" },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.nav {
  padding: 0 40px;
  height: 60px;
  background: #000;
  color: rgba($color: #fff, $alpha: 0.7);
  &__logo {
    width: 100px;
    cursor: pointer;
  }
  &__list {
    height: 100%;
    display: flex;
    //   justify-content: space-between;
    align-items: center;
    &__item {
      margin-left: 30px;
    }
  }
}
</style>
