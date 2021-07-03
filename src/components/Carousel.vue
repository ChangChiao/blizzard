<template>
    <div class="carousel">
        <div
            class="carousel__list"
            :style="[
                { transform: 'translateX(' + moveX + '%)' },
                { transition: this.sec + 's' },
            ]"
        >
            <div class="carousel__list__item">
                <img
                    class="carousel__animate__0"
                    src="@/assets/images/banner/1.webp"
                    alt=""
                />
                <p class="carousel__animate__1">別錯過熱賣商品</p>
                <a class="carousel__animate__2 btn">立即購買</a>
            </div>
            <div class="carousel__list__item">
                <img
                    class="carousel__animate__0"
                    src="@/assets/images/banner/1.webp"
                    alt=""
                />
                <p class="carousel__animate__1">即將完售</p>
                <a class="carousel__animate__2 btn">立即購買</a>
            </div>
            <div class="carousel__list__item">
                <img
                    class="carousel__animate__0"
                    src="@/assets/images/banner/1.webp"
                    alt=""
                />
                <p class="carousel__animate__1">一年一度特賣會</p>
                <a class="carousel__animate__2 btn">立即購買</a>
            </div>
            <div class="carousel__list__item">
                <img
                    class="carousel__animate__0"
                    src="@/assets/images/banner/1.webp"
                    alt=""
                />
                <p class="carousel__animate__1">別錯過熱賣商品</p>
                <a class="carousel__animate__2 btn">立即購買</a>
            </div>
        </div>
        <div class="carousel__btn carousel__btn__prev" @click="prevPage">
            <i class="fas fa-chevron-left"></i>
        </div>
        <div class="carousel__btn carousel__btn__next" @click="nextPage">
            <i class="fas fa-chevron-right"></i>
        </div>
        <ul class="carousel__bar">
            <li
                v-for="(vo, k) in 3"
                :key="'carousel' + k"
                @click="selectItem(k)"
                :class="[
                    'carousel__bar__btn',
                    { 'carousel__bar__btn--active': k === nowIndex },
                ]"
            ></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            moveX: 0,
            sec: 0.5,
            distance: 25,
            nowIndex: 0,
            moveFlag: false,
            autoSec: 5000,
            timer: null,
        };
    },
    methods: {
        wait(sec) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, sec);
            });
        },
        async nextPage() {
            clearTimeout(this.timer);
            if (this.moveFlag) return;
            this.moveFlag = true;
            this.sec = 0.5;
            this.moveX -= this.distance;
            this.nowIndex += 1;
            await this.wait(500);
            if (this.nowIndex === 3) {
                this.sec = 0;
                this.moveX = 0;
                this.nowIndex = 0;
            }
            this.moveFlag = false;
            this.autoPlay();
        },
        async prevPage() {
            clearTimeout(this.timer);
            if (this.moveFlag) return;
            this.moveFlag = true;
            if (this.nowIndex === 0) {
                this.sec = 0;
                this.moveX = -3 * this.distance;
                this.nowIndex = 3;
            }
            await this.wait(0);
            this.sec = 0.5;
            this.moveX += this.distance;
            this.nowIndex -= 1;
            console.log("this.nowIndex", this.nowIndex);
            this.moveFlag = false;
            this.autoPlay();
        },
        selectItem(index) {
            clearTimeout(this.timer);
            this.nowIndex = index;
            this.moveX = -1 * index * this.distance;
            this.autoPlay();
        },
        autoPlay() {
            this.timer = setTimeout(() => {
                this.nextPage();
            }, this.autoSec);
        },
    },
    mounted() {
        this.autoPlay();
    },
};
</script>

<style lang="scss" scoped>
.carousel {
    height: 450px;
    overflow-x: hidden;
    text-align: left;
    // position: relative;
    @include pad-width {
        height: 514px;
    }
    &:hover {
        .carousel__btn {
            display: flex;
        }
    }
    &__list {
        width: 400%;
        display: flex;
        height: calc(100% - 16px);
        @include pad-width {
            height: calc(100% - 24px);
        }
        &__item {
            box-sizing: border-box;
            width: 100%;
            opacity: 0;
            background: rgb(45, 18, 106) url("~@/assets/images/banner/0.webp")
                no-repeat;
            background-position: center top;
            padding-top: 9%;
            text-align: center;
            animation: slide 3s forwards ease-out;
            @include phone-width {
                padding: 7% 30px 0;
            }
            @include pad-width {
                padding: 2% 30px 0;
            }
            @include padl-width {
                text-align: left;
                padding: 2.5% 50px 0;
            }
            @include pcs-width {
                padding: 2.5% 70px 0;
            }
            img {
                width: 180px;
                padding: 20px 0;
                opacity: 0;
                @include pad-width {
                    width: 230px;
                }
            }
            p {
                color: #eee;
                opacity: 0;
                text-shadow: 4px 7px 17px rgba(0, 0, 0, 0.8);
                font-size: 4rem;
                font-weight: 700;
                padding-bottom: 10px;
                font-size: 1.75rem;
                @include pad-width {
                    font-size: 4rem;
                }
            }
            .btn {
                opacity: 0;
            }
        }
    }
    &__bar {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 1px;
        width: 100%;
        background-color: #0b0d12;
        height: 16px;
        @include pad-width {
            height: 24px;
        }
        &__btn {
            background: #00aeff;
            width: 50px;
            margin: 0 5px;
            cursor: pointer;
            opacity: 0.7;
            height: 6px;
            @include pad-width {
                height: 10px;
            }
            &--active {
                opacity: 1;
            }
        }
    }
    &__btn {
        position: absolute;
        z-index: 10;
        top: 28%;
        display: none;
        align-items: center;
        justify-content: center;
        min-height: 1px;
        border: 1px solid #263945;
        background-color: rgba(0, 0, 0, 0.5);
        cursor: pointer;
        color: #00aeff;
        font-size: 16px;
        transition: 0.5s;
        height: 60px;
        width: 20px;
        &:hover {
            color: #fff;
        }
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
@for $i from 0 to 3 {
    .carousel__animate__#{$i} {
        animation: fadeIn 0.6s $i * 0.3s forwards ease-out;
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateX(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slide {
    0% {
        transform: translateX(120px) rotate(0.01deg);
        opacity: 0;
    }

    10% {
        transform: translateX(20px) rotate(0.01deg);
        opacity: 1;
    }

    100% {
        transform: translateX(0) rotate(0.01deg);
        opacity: 1;
    }
}
</style>
