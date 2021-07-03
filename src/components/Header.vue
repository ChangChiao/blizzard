<template>
    <header class="nav">
        <ul class="nav__list">
            <li>
                <a href="/">
                    <img
                        class="nav__logo"
                        src="@/assets/svg/logo3.svg"
                        alt=""
                    />
                </a>
            </li>
            <li
                v-for="(vo, i) in navList"
                :key="'navItem' + i"
                @click="selectItem(vo)"
                :class="[
                    'nav__list__item',
                    { 'nav__list__item--active': nowActive === vo.id },
                ]"
            >
                {{ vo.name }}
                <i v-if="vo.subMenu" class="fas fa-chevron-down"></i>
            </li>
        </ul>
        <ul class="nav__list service">
            <li
                v-for="(vo, i) in serviceList"
                :key="'navServiceItem' + i"
                @click="selectItem(vo)"
                :class="[
                    'nav__list__item',
                    { 'nav__list__item--active': nowActive === vo.id },
                ]"
            >
                {{ vo.name }}
                <i v-if="vo.subMenu" class="fas fa-chevron-down"></i>
            </li>
        </ul>
        <game-menu v-if="nowActive === 'game'" />
        <competition-menu v-if="nowActive === 'competition'" />
        <login-menu v-if="nowActive === 'account'" />
    </header>
</template>

<script>
import GameMenu from "@/components/GameMenu";
import CompetitionMenu from "@/components/CompetitionMenu";
import LoginMenu from "@/components/LoginMenu";
export default {
    components: {
        GameMenu,
        CompetitionMenu,
        LoginMenu,
    },
    data() {
        return {
            nowActive: "",
            navList: [
                { id: "game", name: "遊戲", link: "", subMenu: true },
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
                    subMenu: true,
                },
            ],
            serviceList: [
                {
                    id: "service",
                    name: "客服支援",
                    link: "https://tw.battle.net/support/zh/",
                    subMenu: false,
                },
                { id: "account", name: "我的帳號", link: "", subMenu: true },
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
            if (link) {
                location.href = link;
            }
        },
    },
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
        width: 76px;
        cursor: pointer;
    }
    &__list {
        display: flex;
        align-items: center;
        &__item {
            height: 100%;
            margin-left: 30px;
            display: flex;
            align-items: center;
            cursor: pointer;
            i {
                color: #999;
                margin-left: 5px;
            }
            &:hover {
                color: #fff;
            }
            &--active {
                color: #fff;
                i {
                    transform: rotate(180deg);
                }
            }
        }
    }
}
</style>
