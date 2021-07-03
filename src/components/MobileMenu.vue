<template>
    <div class="mobile" @click.self="closeMenu">
        <div class="mobilemenu">
            <i class="mobilemenu__close fas fa-times" @click="closeMenu"></i>
            <img class="mobilemenu__logo" src="@/assets/svg/logo3.svg" alt="" />
            <ul class="mobilemenu__list">
                <li
                    v-for="(item, k) in navList"
                    @click="selectItem(item)"
                    :class="[
                        'mobilemenu__list__item',
                        {
                            'mobilemenu__list__item--active':
                                nowActive === item.id,
                        },
                    ]"
                    :key="'ml' + k"
                >
                    {{ item.name }}
                    <i v-if="item.subMenu" class="fas fa-chevron-down"></i>
                    <ul
                        :class="[
                            'mobilemenu__list__sub',
                            {
                                'mobilemenu__list__sub--active':
                                    nowActive === item.id,
                            },
                        ]"
                    >
                        <li v-for="(ele, j) in item.subMenu" :key="'mls' + j">
                            <img
                                :src="`${require('@/assets/images/' +
                                    item.id +
                                    '/' +
                                    j +
                                    '.png')}`"
                                alt=""
                            />
                            {{ ele.name }}
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="mobilemenu__service__list">
                <li
                    v-for="(vo, i) in serviceList"
                    class="mobilemenu__service__list__item"
                    :key="'ms' + i"
                >
                    <a :href="vo.link">
                        {{ vo.name }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nowActive: "",
            navList: [
                { id: "index", name: "首頁", link: "/", subMenu: false },
                {
                    id: "gameMenu",
                    name: "遊戲",
                    link: "",
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
                },
                {
                    id: "store",
                    name: "商店",
                    link: "https://tw.shop.battle.net/zh-tw",
                    subMenu: false,
                },
                {
                    id: "news",
                    name: "最新消息",
                    link: "https://news.blizzard.com/zh-tw",
                    subMenu: false,
                },
                {
                    id: "competition",
                    name: "電子競技",
                    link: "",
                    subMenu: [
                        {
                            name: "《鬥陣特攻》職業電競聯賽",
                            link: "https://overwatchleague.com/en-us",
                        },
                        {
                            name: "《鬥陣特攻》世界盃",
                            link: "https://overwatchleague.com/en-us/overwatch-world-cup",
                        },
                        {
                            name: "爐石大師",
                            link: "https://playhearthstone.com/zh-tw/esports/",
                        },
                        { name: "《星海爭霸II》世界盃聯賽", link: "" },
                        {
                            name: "《魔獸世界》競技場世界盃聯賽",
                            link: "https://worldofwarcraft.com/zh-tw/esports/arena",
                        },
                    ],
                },
            ],
            serviceList: [
                {
                    id: "service",
                    name: "客服支援",
                    link: "https://tw.battle.net/support/zh/",
                },
                { id: "account", name: "帳號", link: "" },
                { id: "gift", name: "我的禮物", link: "" },
                { id: "job", name: "工作機會", link: "" },
                { id: "intro", name: "公司介紹", link: "" },
            ],
        };
    },
    methods: {
        selectItem(vo) {
            const { id, link } = vo;
            if (id === this.nowActive) {
                this.nowActive = "";
                return;
            }
            this.nowActive = id;
            console.log("this.nowActive", this.nowActive);
            if (link) {
                location.href = link;
            }
        },
        closeMenu() {
            this.$emit("closeMenu", false);
        },
    },
};
</script>

<style lang="scss" scoped>
.mobilemenu {
    width: 80%;
    height: 100vh;
    background-color: #151a23;
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    overflow-y: auto;
    top: 0;
    &__logo {
        width: 100px;
        padding: 20px 0;
    }
    &__list {
        &__item {
            border-top: solid 1px rgba(255, 255, 255, 0.08);
            color: #fff;
            height: 44px;
            padding-left: 20px;
            text-align: left;
            line-height: 44px;
            color: rgba(255, 255, 255, 0.7);
            position: relative;
            &:first-child {
                border-top: none;
            }
            &::after {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                background: $line;
                width: 5px;
                height: 44px;
                display: none;
            }
            i {
                color: #555;
            }
            &--active {
                color: #fff;
                height: auto;
                &::after {
                    display: block;
                }
                i {
                    transform: rotate(180deg);
                }
            }
            img {
                width: 30px;
            }
        }
        &__sub {
            position: relative;
            max-height: 0;
            overflow: hidden;
            // animation: topToDown 1s forwards ease-out;
            &--active {
                max-height: 700px;
                transition: max-height 0.25s ease-in;
            }
            &::after {
                position: absolute;
                content: "";
                height: 100%;
                width: 5px;
                left: -20px;
                top: 0;
                background: rgba($color: $line, $alpha: 0.2);
            }
        }
    }
    &__service {
        padding-left: 20px;
        &__list {
            &__item {
                text-align: left;
                padding: 0 20px;
                height: 44px;
                line-height: 44px;
                color: rgba(255, 255, 255, 0.5);
            }
        }
    }
    &__close {
        position: absolute;
        left: 20px;
        font-size: 20px;
        top: 12px;
        color: $line;
    }
}

.mobile {
    background: rgba($color: #000000, $alpha: 0.5);
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 300;
    top: 0;
    left: -100%;
    opacity: 0;
    animation: slide 0.2s forwards ease-out;
}

@keyframes slide {
    0% {
        opacity: 0;
        left: -100%;
    }

    100% {
        opacity: 1;
        left: 0;
    }
}
</style>
