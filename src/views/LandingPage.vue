<template>
    <div>
        <Header />
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
export default {
    components: {
        Header,
        Carousel,
        Game,
        Download,
        Explore,
        Footer,
    },
};
</script>

<style lang="scss" scoped></style>
