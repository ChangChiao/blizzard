<template>
    <div class="landing">
        <Header />
        <mobile-header @openMenu="controlMenu" />
        <mobile-menu v-if="isShowMenu" @closeMenu="controlMenu" />
        <Carousel />
        <Game />
        <Download />
        <Explore />
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import Game from "@/components/Game";
import Download from "@/components/Download";
import Explore from "@/components/Explore";
import Footer from "@/components/Footer";
import MobileHeader from "@/components/MobileHeader.vue";
import MobileMenu from "@/components/MobileMenu.vue";
export default {
    components: {
        Header,
        Carousel,
        Game,
        Download,
        Explore,
        Footer,
        MobileHeader,
        MobileMenu,
    },
    data() {
        return {
            isShowMenu: false,
        };
    },
    methods: {
        controlMenu(boolean) {
            this.isShowMenu = boolean;
            if (boolean) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
        },
    },
};
</script>

<style lang="scss">
.landing {
    .mobile__header {
        display: flex;
        @include pad-width {
            display: none;
        }
    }
    .nav {
        display: none;
        @include pad-width {
            display: flex;
        }
    }
}
</style>
