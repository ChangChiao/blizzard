<template>
  <header class="nav">
    <ul class="nav__list">
      <li>
        <img class="nav__logo" src="@/assets/svg/logo3.svg" alt="" />
      </li>
      <li
        v-for="(vo, i) in navList"
        :key="'navItem' + i"
        class="nav__list__item"
      >
        {{ vo.name }}
        <i v-if="vo.subMenu" class="fas fa-chevron-down"></i>
      </li>
    </ul>
    <ul class="nav__list service">
      <li
        v-for="(vo, i) in serviceList"
        :key="'navServiceItem' + i"
        class="nav__list__item"
      >
        {{ vo.name }}
        <i v-if="vo.subMenu" class="fas fa-chevron-down"></i>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          name: "遊戲",
          link: "",
          subMenu: true,
        },
        { name: "商店", link: "", subMenu: false },
        { name: "最新消息", link: "", subMenu: false },
        { name: "電子競技", link: "", subMenu: true },
      ],
      serviceList: [
        { name: "客服支援", link: "", subMenu: false },
        { name: "我的帳號", link: "", subMenu: true },
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
  display: flex;
  justify-content: space-between;
  &__logo {
    width: 100px;
    cursor: pointer;
  }
  &__list {
    height: 100%;
    display: flex;
    align-items: center;
    &__item {
      margin-left: 30px;
      cursor: pointer;
    }
  }
}
</style>
