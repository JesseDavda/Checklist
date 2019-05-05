<template>
    <div class="slide-out-menu">
        <i class="fal fa-times" v-bind:class="animationClass" @click="slideIn"/>
    </div>
</template>

<script>
    export default {
        name: "MobileSlideOut",
        beforeDestroy() {
            this.close = true;
            this.setTimeout(() => {}, 500);
        },
        computed: {
            animationClass: function() {
                if(this.close) {
                    return "slide-in"
                } 
            }
        },
        methods: {
            slideIn: function() {
                this.$emit('slideIn');
            }
        },
        data() {
            return {
                close: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .slide-out-menu {
        width: 60%;
        height: 100%;
        background-color: rgba(195,7,63,1);
        position: absolute;
        left: -40%;
        top: 0;
        z-index: 1000;
        animation-name: slideOut;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
    }

    .fa-times {
        zoom: 2;
        color: #fff;
        position: absolute;
        right: 10px;
        top: 10px;
        
        &:hover {
            cursor: pointer;
        }
    }

    .slide-in {
        animation-name: slideIn;
        animation-duration: 0.5s;
        animation-fill-mode: forward;
    }

    @keyframes slideOut {
        0% {
            left: -40%;
        }
        100% {
            left: 0;
        }
    }

    @keyframes slideIn {
        0% {
            left: 0;
        }
        100% {
            left: -40%;
        }
    }
</style>
