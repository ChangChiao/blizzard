<template>
    <section class="game">
        <div class="container">
            <div class="game__title">
                <h2 class="title">遊戲</h2>
                <a class="link" href="">瀏覽並購買遊戲</a>
            </div>
            <ul class="game__list">
                <li
                    v-for="(vo, i) in 13"
                    :key="'game' + i"
                    class="game__list__item"
                    :style="{
                        backgroundImage: `url(${require('@/assets/images/gamePoster/' +
                            vo +
                            '.webp')})`,
                    }"
                ></li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.game {
    padding: 0 40px;
    background-image: url("~@/assets/images/gameBg.jpg");
    background-position: top center;
    background-repeat: no-repeat;
    color: rgba($color: #fff, $alpha: 0.7);
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
