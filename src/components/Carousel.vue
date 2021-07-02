<template>
    <div class="carousel">
        <div
            class="carousel__list"
            :style="[
                { transform: 'translateX(' + moveX + 'vw)' },
                { transition: this.sec + 's' },
            ]"
        >
            <div class="carousel__list__item">
                <img src="@/assets/images/banner/1.webp" alt="" />
                <p>別錯過熱賣商品</p>
                <a class="btn">立即購買</a>
            </div>
            <div class="carousel__list__item">
                <img src="@/assets/images/banner/1.webp" alt="" />
                <p>即將完售</p>
                <a class="btn">立即購買</a>
            </div>
            <div class="carousel__list__item">
                <img src="@/assets/images/banner/1.webp" alt="" />
                <p>一年一度特賣會</p>
                <a class="btn">立即購買</a>
            </div>
            <div class="carousel__list__item">
                <img src="@/assets/images/banner/1.webp" alt="" />
                <p>別錯過熱賣商品</p>
                <a class="btn">立即購買</a>
            </div>
        </div>
        <div class="carousel__btn carousel__btn__prev" @click="prevPage">
            <i class="fas fa-chevron-left"></i>
        </div>
        <div class="carousel__btn carousel__btn__next" @click="nextPage">
            <i class="fas fa-chevron-right"></i>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            moveX: 0,
            sec: 0.5,
            moveFlag: false,
        };
    },
    methods: {
        wait() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 500);
            });
        },
        async nextPage() {
            if (this.moveFlag) return;
            this.moveFlag = true;
            this.sec = 0.5;
            this.moveX -= 100;
            await this.wait();
            if (this.moveX === -300) {
                this.sec = 0;
                this.moveX = 0;
            }
            this.moveFlag = false;
        },
        async prevPage() {
            if (this.moveFlag) return;
            this.moveFlag = true;
            this.sec = 0.5;
            this.moveX += 100;
            await this.wait();
            if (this.moveX === 0) {
                this.sec = 0;
                this.moveX = -300;
            }
            this.moveFlag = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.carousel {
    height: 514px;
    overflow-x: hidden;
    text-align: left;
    // position: relative;
    &__list {
        width: 400vw;
        display: flex;
        height: 100%;
        &__item {
            box-sizing: border-box;
            width: 100vw;
            background: rgb(45, 18, 106) url("~@/assets/images/banner/0.webp")
                no-repeat;
            background-position: center top;
            // padding: 10px;
            img {
                width: 180px;
                padding: 20px 0;
                @include pad-width {
                    width: 230px;
                }
            }
            p {
                color: #eee;
                text-shadow: 4px 7px 17px rgba(0, 0, 0, 0.8);
                font-size: 4rem;
                font-weight: 700;
                padding-bottom: 10px;
            }
        }
    }
    &__btn {
        position: absolute;
        top: 28%;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 1px;
        border: 1px solid #263945;
        background-color: rgba(0, 0, 0, 0.5);
        cursor: pointer;
        color: #00aeff;
        font-size: 16px;
        height: 60px;
        width: 20px;
        @include phone-width {
            font-size: 20px;
            height: 70px;
            width: 30px;
            right: 20px;
        }
        @include pad-width {
            font-size: 24px;
            height: 80px;
            width: 40px;
        }
        &__prev {
            left: 20px;
        }
        &__next {
            right: 20px;
        }
    }
}
</style>
