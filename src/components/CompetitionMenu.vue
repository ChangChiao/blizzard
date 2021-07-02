<template>
    <div class="competition">
        <ul class="competition__list">
            <li
                v-for="(vo, i) in menu"
                class="competition__list__item"
                :key="'comp' + i"
                @click="goPage(vo.link)"
            >
                <img
                    :src="`${require('@/assets/images/competition/' +
                        i +
                        '.png')}`"
                    alt=""
                />
                <p>{{ vo.name }}</p>
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
            menu: [
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
            linkmenu: [
                {
                    name: "社群競賽",
                    icon: "fas fa-th",
                    link: "https://communitytournaments.blizzardesports.com/zh-tw/",
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
.competition {
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
        width: 90%;
        margin: 0 auto;
        padding-bottom: 20px;
        &__item {
            max-width: 192px;
            opacity: 0;
            display: inline-block;
            margin: 10px 0;
            width: 16vw;
            cursor: pointer;
            img {
                max-height: 192px;
                max-width: 192px;
                width: 14vw;
                height: 14vw;
            }
            p {
                text-align: center;
                font-size: 14px;
            }
        }
    }
    .linkmenu {
        &__list {
            opacity: 0;
            animation: fadeIn 0.1s 0.5s forwards ease-out;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 20px;
            border-top: solid 1px rgba(255, 255, 255, 0.08);
            &__item {
                cursor: pointer;
                margin: 0 20px;
                svg {
                    color: $line;
                    margin-right: 5px;
                }
            }
        }
    }
}

@for $i from 0 to 6 {
    .competition__list__item:nth-child(#{$i}) {
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
