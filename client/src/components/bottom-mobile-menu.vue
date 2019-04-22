<template>
    <div class="nav-menu-container">
        <div class="nav-menu-item left" >
            <i class="fal fa-calendar-alt" />
        </div>
        <div class="nav-menu-item" @click="resetChecklist">
            <i class="fal fa-redo-alt reset" />
        </div>
        <div class="nav-menu-item">
            <i class="fal fa-share-alt" />
        </div>
        <div class="nav-menu-item right">
            <i class="fal fa-trash" />
        </div>
    </div>
</template>

<script>
export default {
    name: "MobileNav",
    methods: {
        resetChecklist: function() {
            console.log('no Problems here');
            this.$emit('resetChecklist');
        }
    }
}
</script>

<style lang="scss" scoped>
    .nav-menu-container {
        display: flex;
        align-items: center;
        width: 100%;
        height: 60px;
        position: absolute;
        bottom: 0;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border-top: 2px solid #ecf0f1;
    }

    .left {
        border-bottom-left-radius: 5px;
        border-left: none;
    }

    .right {
        border-bottom-right-radius: 5px;
        border-left: none;
    }

    .nav-menu-item {
        width: 25%;
        height: 100%;
        border-left: 2px solid #ecf0f1;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            cursor: pointer;
        }

        i {
            zoom: 2;
        }
    }

    .reset {
        zoom: 1.8 !important;
    }
</style>
