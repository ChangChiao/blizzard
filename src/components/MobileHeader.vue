<template>
    <header class="mobile__header">
        <i class="fas fa-bars"></i>
        <img class="mobile__header__logo" src="@/assets/svg/logo3.svg" alt="" />
        <i class="far fa-user"></i>
    </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.mobile {
    &__header {
        position: relative;
        background: #000;
        height: 48px;
        padding: 0 20px;
        justify-content: space-between;
        align-items: center;
        &__logo {
            position: absolute;
            right: 0;
            left: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            width: 60px;
        }
        svg {
            color: $line;
            font-size: 24px;
        }
    }
}
</style>
