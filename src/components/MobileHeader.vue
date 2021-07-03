<template>
    <header class="mobile__header">
        <i class="fas fa-bars" @click="openMenu"></i>
        <img class="mobile__header__logo" src="@/assets/svg/logo3.svg" alt="" />
        <i class="far fa-user"></i>
    </header>
</template>

<script>
export default {
    methods: {
        openMenu() {
            this.$emit("openMenu", true);
        },
    },
};
</script>

<style lang="scss">
.mobile {
    &__header {
        box-sizing: border-box;
        position: fixed;
        background: #000;
        width: 100%;
        height: 48px;
        padding: 0 20px;
        justify-content: space-between;
        align-items: center;
        z-index: 200;
        &__logo {
            position: absolute;
            right: 0;
            left: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            width: 60px;
        }
        i {
            color: $line;
            font-size: 24px;
        }
    }
}
</style>
