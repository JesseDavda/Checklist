<template>
    <div v-bind:class="{ extraHeight: checklistView }" class="side-menu-container">
        <div v-if="!checklistView" @click="newChecklist()" class="menu-action-container">
            <div class="icon-container">
                <i class="fa fa-plus-square" />
            </div>
            <h3>Create new checklist</h3>
        </div>
        <div v-if="checklistView" class="menu-action-container">
            <div class="icon-container">
                <i class="fa fa-plus" />
            </div>
            <h3>Add item</h3>
        </div>
        <div v-if="checklistView" class="menu-action-container">
            <div class="icon-container">
                <i class="far fa-clock" />
            </div>
            <h3>Schedule checklist</h3>
        </div>
        <div v-if="checklistView" class="menu-action-container">
            <div class="icon-container">
                <i class="fa fa-sync" />
            </div>
            <h3>Reset checklist</h3>
        </div>
        <div v-if="checklistView" class="menu-action-container">
            <div class="icon-container">
                <i class="fa fa-share" />
            </div>
            <h3>Share checklist</h3>
        </div>
        <div v-if="checklistView" class="menu-action-container">
            <div class="icon-container">
                <i class="fa fa-ban" />
            </div>
            <h3>Delete checklist</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideMenu',
    props: {
        checklistView: Boolean
    },
    methods: {
        newChecklist: function() {
            this.$emit('expand');
        }
    }
}
</script>

<style lang="scss" scoped>
    .side-menu-container {
        height: 80px;
        width: 400px;
        background-color: #fff;
        border-radius: 10px;
        transition: height 0.1s ease-out;
    }

    .menu-action-container {
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        border-radius: 10px;
        transition: background-color 0.2s ease-out;
        
        h3 {
            font-family: 'Roboto';
            line-height: 30px;
            font-size: 26px;
            font-weight: 400;
            margin-left: 20px;
        }

        i {
            color: #1A1A1D;
            zoom: 2.3;
        }

        &:hover {
            cursor: pointer;
            color: #fff;
            background-color: rgba(195,7,63,1);
            border-radius: 10px;
        }
    }

    .icon-container {
        width: 80px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #eee;
        border-radius: 10px;
    }

    .extraHeight {
        height: 400px;
    }

    .addMenuAction {
        opacity: 1.0;
    }
</style>
