<template>
    <footer class="footer">
        <div>
            <i class="fas fa-globe-americas"></i>
            繁體中文
            <i class="fas fa-chevron-down"></i>
        </div>
        <img class="logo" src="@/assets/svg/logo.svg" alt="" />
        <ul class="footer__menu">
            <li
                v-for="(vo, i) in footerMenu"
                class="footer__menu__item"
                :key="'footerMenu' + i"
            >
                {{ vo.name }}
            </li>
        </ul>
        <div class="footer__link">
            一個程式連結所有遊戲:<a class="link" href=""
                >Battle.net 桌面應用程式</a
            >
        </div>
        <p class="copyRight">
            ©2021 美商暴雪娛樂股份有限公司（BLIZZARD ENTERTAINMENT,
            INC.）版權所有。
        </p>
        <p class="copyRight">在此提及的所有商標是其各自所有人的財產。</p>
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
                {
                    name: "工作機會",
                    link: "https://careers.blizzard.com/global/en",
                },
                {
                    name: "關於",
                    link: "https://www.blizzard.com/zh-tw/company/about/",
                },
                {
                    name: "客服支援",
                    link: "https://www.blizzard.com/zh-tw/site-map",
                },
                {
                    name: "聯繫我們",
                    link: "https://www.blizzard.com/zh-tw/company/contact",
                },
                { name: "媒體報導", link: "https://blizzard.gamespress.com/" },
                { name: "API", link: "https://develop.battle.net/" },
                {
                    name: "網站地圖",
                    link: "https://www.blizzard.com/zh-tw/site-map",
                },
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

<style lang="scss" scoped>
.footer {
    color: rgba($color: #fff, $alpha: 0.7);
    padding: 30px 0 50px;
    .fa-globe-americas {
        color: $line;
    }
    .logo {
        margin: 30px 0;
        height: 66px;
    }
    &__menu {
        display: flex;
        justify-content: center;
        margin: 15px 0;
        flex-wrap: wrap;
        font-size: 14px;
        @include pad-width {
            font-size: 1rem;
        }
        &__item {
            padding: 3px 10px;
            position: relative;
            &::after {
                content: "";
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 1px;
                height: 10px;
                background: #666;
            }
            &:last-child {
                &::after {
                    display: none;
                }
            }
        }
    }
    &__list {
        display: flex;
        justify-content: center;
        font-size: 12px;
        &__item {
            padding: 10px 10px;
            position: relative;
            &::after {
                content: "";
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 1px;
                height: 10px;
                background: #666;
            }
            &:last-child {
                &::after {
                    display: none;
                }
            }
        }
    }
    &__link {
        margin: 40px 0;
    }
    .copyRight {
        color: rgba($color: #fff, $alpha: 0.5);
        font-size: 12px;
    }
}
</style>
