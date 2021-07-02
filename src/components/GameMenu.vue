<template>
    <div class="submenu">
        <ul class="submenu__list">
            <li
                v-for="(sub, k) in subMenu"
                :key="'subItem' + k"
                class="submenu__list__item"
                @click="goPage(sub.link)"
            >
                <img
                    :src="`${require('@/assets/images/gameMenu/' +
                        k +
                        '.png')}`"
                    alt=""
                />
                <p>{{ sub.name }}</p>
            </li>
        </ul>
        <ul class="linkmenu__list">
            <li
                v-for="(vo, i) in linkmenu"
                :key="'linkmenu' + i"
                class="linkmenu__list__item"
                @click="goPage(vo.link)"
            >
                <i :class="vo.icon"></i>
                {{ vo.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            subMenu: [
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
            linkmenu: [
                {
                    name: "更多遊戲",
                    icon: "fas fa-th",
                    link: "https://tw.shop.battle.net/zh-tw",
                },
                {
                    name: "Battle.net 應用程式",
                    icon: "fas fa-bahai",
                    link: "https://www.blizzard.com/zh-tw/apps/battle.net/desktop",
                },
                {
                    name: "下載",
                    icon: "fas fa-download",
                    link: "https://www.blizzard.com/zh-tw/download/",
                },
                {
                    name: "遊戲討論區",
                    icon: "fas fa-comment",
                    link: "https://tw.forums.blizzard.com/zh/blizzard/",
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
.submenu {
    width: 100%;
    margin: 0 auto;
    padding: 20px 40px;
    position: absolute;
    box-sizing: border-box;
    left: 0;
    right: 0;
    top: 60px;
    background-color: rgba(21, 26, 35, 0.95);
    background: radial-gradient(
        ellipse farthest-side at center top,
        #283244 0%,
        rgba(21, 26, 35, 0.95) 100%
    );
    border: solid 1px rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2);
    &__list {
        max-width: 1600px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 75%;
        margin: 0 auto;
        padding-bottom: 20px;
        &__item {
            opacity: 0;
            width: calc(100% / 9);
            display: inline-block;
            margin: 10px 0;
            cursor: pointer;
            img {
                width: 40%;
            }
            p {
                font-size: 14px;
            }
        }
    }
    .linkmenu {
        &__list {
            opacity: 0;
            animation: fadeIn 0.1s 0.8s forwards ease-out;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 20px;
            border-top: solid 1px rgba(255, 255, 255, 0.08);
            &__item {
                margin: 0 20px;
                cursor: pointer;
                svg {
                    color: $line;
                    margin-right: 5px;
                }
            }
        }
    }
}

@for $i from 0 to 13 {
    .submenu__list__item:nth-child(#{$i}) {
        animation: fadeIn 0.1s $i * 0.05s forwards ease-out;
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(-50%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
