<template>
    <section
        class="explore"
        :style="{
            backgroundImage: `url(${require('@/assets/images/explore/' +
                index +
                '.webp')})`,
        }"
    >
        <div class="wrapper">
            <h2 class="title">創造奇幻世界</h2>
            <p class="content">瞭解暴雪的工作機會</p>
            <a
                class="btn"
                href="https://careers.blizzard.com/?blzcmp=hp_explorecta_careers"
                >探索職涯</a
            >
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            index: 1,
            timer: null,
        };
    },
    methods: {
        nextBg() {
            this.timer = setInterval(() => {
                if (this.index === 4) {
                    this.index = 0;
                    return;
                }
                this.index++;
            }, 3000);
        },
    },
    mounted() {
        this.nextBg();
    },
    beforeDestroy() {
        clearInterval(this.timer);
    },
};
</script>

<style lang="scss" scoped>
.explore {
    transition: background-image 1s ease-in-out;
    background-position: center top;
    background-repeat: no-repeat;
    .wrapper {
        text-align: left;
        min-height: 60vw;
        justify-content: flex-end;
        @include phone-width {
            align-items: center;
            flex-direction: column;
        }
        @include pad-width {
            min-height: 200px;
            text-align: left;
            justify-content: center;
            align-items: flex-start;
        }
        @include padl-width {
            min-height: 250px;
        }
        @include pcs-width {
            min-height: 300px;
        }
    }
    .content {
        padding: 20px 0;
    }
}

body {
    ::after {
        position: absolute;
        width: 0;
        height: 0;
        overflow: hidden;
        z-index: -1;
        content: url("~@/assets/images/explore/1.webp")
            url("~@/assets/images/explore/2.webp")
            url("~@/assets/images/explore/3.webp")
            url("~@/assets/images/explore/4.webp")
            url("~@/assets/images/explore/0.webp");
    }
}
</style>
