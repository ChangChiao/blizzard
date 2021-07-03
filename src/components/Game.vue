<template>
    <section class="game">
        <div class="container">
            <div class="game__title">
                <h2 class="title">遊戲</h2>
                <a class="link" href="">瀏覽並購買遊戲</a>
            </div>
            <ul class="game__list">
                <li
                    v-for="(vo, i) in gameList"
                    :key="'game' + i"
                    class="game__list__item"
                    @click="goPage(vo.link)"
                    :style="{
                        backgroundImage: `url(${require('@/assets/images/gamePoster/' +
                            Number(i + 1) +
                            '.webp')})`,
                    }"
                ></li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            gameList: [
                {
                    name: "暗黑破壞神II®：獄火重生",
                    link: "https://diablo2.blizzard.com/zh-tw/",
                },
                {
                    name: "鬥陣特攻®2",
                    link: "https://overwatch2.playoverwatch.com/zh-tw/trailer",
                },
                {
                    name: "《鬥陣特攻®》",
                    link: "https://playoverwatch.com/zh-tw/",
                },
                {
                    name: "《魔獸世界®》",
                    link: "https://worldofwarcraft.com/zh-tw/",
                },
                {
                    name: "《爐石戰記®》",
                    link: "https://playhearthstone.com/zh-tw",
                },
                {
                    name: "《暴雪英霸®》",
                    link: "https://heroesofthestorm.com/zh-tw/",
                },
                {
                    name: "《魔獸爭霸®III：淬鍊重生™》",
                    link: "https://playwarcraft3.com/zh-tw/",
                },
                {
                    name: "《暗黑破壞神®IV》",
                    link: "https://diablo4.blizzard.com/zh-tw/",
                },
                {
                    name: "《暗黑破壞神®永生不朽™》",
                    link: "https://diabloimmortal.com/zh-tw/",
                },
                {
                    name: "《暗黑破壞神®III》",
                    link: "https://tw.diablo3.com/zh-tw/",
                },
                {
                    name: "《星海爭霸®II》",
                    link: "https://starcraft2.com/zh-tw/",
                },
                {
                    name: "《星海爭霸®》高畫質重製版",
                    link: "https://starcraft.com/zh-tw/",
                },
                {
                    name: "《暴雪®遊樂場典藏系列》",
                    link: "https://news.blizzard.com/zh-tw/blizzard/23617535/%E9%87%8D%E6%BA%AB%E5%82%B3%E5%A5%87%E7%B6%93%E5%85%B8%E9%9A%86%E9%87%8D%E5%AE%A3%E5%B8%83%E3%80%8A%E6%9A%B4%E9%9B%AA%C2%AE%E9%81%8A%E6%A8%82%E5%A0%B4%E5%85%B8%E8%97%8F%E7%B3%BB%E5%88%97%E3%80%8B",
                },
            ],
        };
    },
    methods: {
        goPage(link) {
            location.href = link;
        },
    },
};
</script>

<style lang="scss" scoped>
.game {
    padding: 16px;
    background-image: url("~@/assets/images/gameBg.jpg");
    background-position: top center;
    background-repeat: no-repeat;
    color: rgba($color: #fff, $alpha: 0.7);
    // box-sizing: border-box;
    @include phone-width {
        padding: 0 16px;
    }
    &__title {
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        padding: 10px;
        align-items: baseline;
    }
    &__list {
        height: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        max-width: 1600px;
        margin: 0 auto;
        &__item {
            width: 150px;
            height: 200px;
            cursor: pointer;
            margin: 4px;
            transition: cubic-bezier(0.16, 1, 0.3, 1);
            transition-duration: 0.5s;
            background-position: bottom center;
            background-size: cover;
            @include phone-width {
                width: 180px;
                height: 240px;
                margin: 12px;
            }
            @include pcs-width {
                width: 210px;
                height: 280px;
            }
            @include pc-width {
                width: 240px;
                height: 320px;
            }
            &:hover {
                transform: scale(1.05);
                filter: brightness(115%) contrast(90%);
                outline: 1px solid #00aeff;
            }
        }
    }
}
</style>
