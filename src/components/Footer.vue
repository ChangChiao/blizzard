<template>
  <footer class="footer">
    <ul class="footer__menu">
      <li
        v-for="(vo, i) in footerMenu"
        class="footer__menu__item"
        :key="'footerMenu' + i"
      >
        {{ vo.name }}
      </li>
    </ul>
    <div>一個程式連結所有遊戲:<a href="">Battle.net 桌面應用程式</a></div>
    <p>
      ©2021 美商暴雪娛樂股份有限公司（BLIZZARD ENTERTAINMENT, INC.）版權所有。
      在此提及的所有商標是其各自所有人的財產。
    </p>
    <ul class="footer__list">
      <li
        v-for="(vo, i) in footerList"
        class="footer__list__item"
        :key="'footerList' + i"
      >
        {{ vo.name }}
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerMenu: [
        { name: "工作機會", link: "" },
        { name: "關於", link: "" },
        { name: "客服支援", link: "" },
        { name: "聯繫我們", link: "" },
        { name: "媒體報導", link: "" },
        { name: "API", link: "" },
        { name: "網站地圖", link: "" },
      ],
      footerList: [
        { name: "隱私", link: "" },
        { name: "法律聲明", link: "" },
        { name: "條款", link: "" },
        { name: "COOKIE 政策", link: "" },
        { name: "COOKIE 設定", link: "" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
