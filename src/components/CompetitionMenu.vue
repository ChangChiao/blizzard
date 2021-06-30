<template>
  <div class="competition">
    <ul>
      <li v-for="(vo, i) in menu" :key="'comp' + i">
        <img :src="`@/assets/images/competition/${k + 1}.webp`" alt="" />
        <p>{{ vo.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { name: "《鬥陣特攻》職業電競聯賽", link: "" },
        { name: "《鬥陣特攻》世界盃", link: "" },
        { name: "爐石大師", link: "" },
        { name: "《星海爭霸II》世界盃聯賽", link: "" },
        { name: "《魔獸世界》競技場世界盃聯賽", link: "" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  height: 514px;
}
</style>
