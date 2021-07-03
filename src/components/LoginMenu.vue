<template>
    <ul class="login">
        <li class="login__item">
            <a class="btn" href="https://kr.battle.net/login/zh/"> 登入 </a>
        </li>
        <li class="login__item">
            <i class="fas fa-cog"></i>
            帳號設定
        </li>
        <li class="login__item">
            <i class="far fa-user"></i>
            建立免費帳號
        </li>
    </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.login {
    width: 318px;
    position: absolute;
    z-index: 100;
    top: 60px;
    right: 0;
    background: linear-gradient(
        to bottom,
        #283244 0%,
        rgba(21, 26, 35, 0.95) 100%
    );
    &__item {
        border-top: solid 1px rgba(255, 255, 255, 0.08);
        padding: 14px 20px;
        text-align: left;
        &:first-child {
            border-top: none;
        }
        .btn {
            display: flex;
            justify-content: center;
        }
        i {
            color: $line;
        }
    }
}
</style>
