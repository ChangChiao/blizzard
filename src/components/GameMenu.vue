<template>
    <div class="submenu">
        <ul class="submenu__list">
            <li
                v-for="(sub, k) in subMenu"
                :key="'subItem' + k"
                class="submenu__list__item"
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
                { name: "暗黑破壞神II®：獄火重生", link: "" },
                { name: "鬥陣特攻®2", link: "" },
                { name: "《鬥陣特攻®》", link: "" },
                { name: "《魔獸世界®》", link: "" },
                { name: "《爐石戰記®》", link: "" },
                { name: "《暴雪英霸®》", link: "" },
                { name: "《魔獸爭霸®III：淬鍊重生™》", link: "" },
                { name: "《暗黑破壞神®IV》", link: "" },
                { name: "《暗黑破壞神®永生不朽™》", link: "" },
                { name: "《暗黑破壞神®III》", link: "" },
                { name: "《星海爭霸®II》", link: "" },
                { name: "《星海爭霸®》高畫質重製版", link: "" },
                { name: "《暴雪®遊樂場典藏系列》", link: "" },
            ],
            linkmenu: [
                { name: "更多遊戲", icon: "fas fa-th", link: "" },
                { name: "Battle.net 應用程式", icon: "fas fa-bahai", link: "" },
                { name: "下載", icon: "fas fa-download", link: "" },
                { name: "遊戲討論區", icon: "fas fa-comment", link: "" },
            ],
        };
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
.submenu {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    padding: 20px 40px;
    position: absolute;
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
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 75%;
        margin: 0 auto;
        &__item {
            opacity: 0;
            width: calc(100% / 9);
            display: inline-block;
            margin: 10px 0;
            img {
                width: 40%;
            }
            p {
                font-size: 14px;
            }
        }
    }
    .linkmenu{
        &__list{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px 0;
            &__item{
                svg{
                    color: $line;
                    margin-right: 8px;
                }
            }
        }
    }
}

@for $i from 0 to 13 {
    .submenu__list__item:nth-child(#{$i}) {
        animation: fadeIn 0.1s $i * 0.05s forwards linear;
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
