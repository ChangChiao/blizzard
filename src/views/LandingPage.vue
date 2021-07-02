<template>
    <div class="landing">
        <Header />
        <mobile-header />
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
export default {
    components: {
        Header,
        Carousel,
        Game,
        Download,
        Explore,
        Footer,
        MobileHeader,
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
