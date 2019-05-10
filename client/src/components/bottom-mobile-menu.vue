<template>
    <div class="nav-menu-container">
        <div class="nav-menu-item left" @click="editChecklist">
            <i class="fal fa-pen-square" />
        </div>
        <div class="nav-menu-item " >
            <i class="fal fa-calendar-alt" />
        </div>
        <div class="nav-menu-item" @click="goHome">
            <i class="fas fa-dice-d20" />
        </div> 
        <div class="nav-menu-item" @click="resetChecklist">
            <i class="fal fa-redo-alt reset" />
        </div>
        <div class="nav-menu-item right" @click="shareList">
            <i class="fal fa-share-alt" />
        </div>
    </div>
</template>

<script>
export default {
    name: "MobileNav",
    methods: {
        resetChecklist: function() {
            this.$emit('mobileNavResetChecklist');
        },
        goHome: function() {
            this.$emit('mobileNavHome');
        },
        editChecklist: function() {
            this.$emit('editChecklist');
        },
        shareList: function() {
            this.$emit('shareChecklist');
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
        border-left: none !important;
    }

    .right {
        border-bottom-right-radius: 5px;
    }

    .nav-menu-item {
        width: 25%;
        height: 100%;
        // border-left: 2px solid #ecf0f1;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            cursor: pointer;
        }

        i {
            zoom: 2;
            -moz-transform: scale(2);
        }
    }

    .reset {
        zoom: 1.8 !important;
        -moz-transform: scale(1.8) !important;
    }
</style>
