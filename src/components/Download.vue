<template>
    <section class="download">
        <div class="wrapper">
            <div class="download__intro">
                <h2 class="title">下載 Battle.net</h2>
                <ul>
                    <li class="content">
                        <i class="fas fa-th"></i>把你的遊戲整合在一起
                    </li>
                    <li class="content">
                        <i class="fas fa-users"></i>和好友保持聯繫
                    </li>
                    <li class="content">
                        <i class="fas fa-gift"></i>購買數位遊戲和商品
                    </li>
                </ul>
                <div class="download__row">
                    <a
                        class="btn download__btn"
                        href="https://www.blizzard.com/apps/battle.net/desktop"
                        >下載Windows版本<i class="fab fa-windows"></i
                    ></a>
                    <a
                        class="btn-outline download__btn"
                        href="https://www.blizzard.com/apps/battle.net/desktop"
                        >了解詳情</a
                    >
                </div>
                <p class="download__link">
                    也有 <a class="link">行動應用程式</a>
                </p>
            </div>
            <img
                class="download__pic"
                src="@/assets/images/download/2.webp"
                alt=""
            />
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.download {
    color: #fff;
    background: url("~@/assets/images/download/1.webp") no-repeat;
    background-position: center top;
    background-size: cover;
    position: relative;
    &::after {
        content: "";
        background: url("~@/assets/images/net.png") no-repeat;
        background-size: cover;
        position: absolute;
        width: 340px;
        height: 340px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        opacity: 0.3;
        display: none;
    }
    @include pcs-width {
        &::after {
            display: block;
        }
    }
    &__pic {
        height: 186px;
        margin: 24px 0;
        position: relative;
        z-index: 1;
        order: -1;
        @include pad-width {
            height: 332px;
            order: 1;
        }
        @include pc-width {
            margin: 0;
        }
    }
    &__intro {
        text-align: center;
        position: relative;
        z-index: 1;
        @include pad-width {
            text-align: left;
        }
    }
    .content {
        margin: 8px 0;
        i {
            color: $line;
            margin-right: 8px;
        }
        text-align: center;
        @include pcs-width {
            text-align: left;
        }
    }
    &__link {
        margin-top: 24px;
        text-align: center;
        @include pcs-width {
            text-align: left;
        }
    }
    &__row {
        display: flex;
        justify-content: center;
        @include pcs-width {
            justify-content: flex-start;
        }
    }
    &__btn {
        margin-top: 16px;
        &.btn {
            margin-right: 16px;
            display: none;
            @include pcs-width {
                display: block;
            }
            i {
                margin-left: 8px;
            }
        }
        &.btn-outline {
            @include pad-width {
                margin-right: 16px;
            }
        }
    }
    .title {
        text-align: center;
        @include pcs-width {
            text-align: left;
        }
    }
}
</style>
