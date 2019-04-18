<template>
    <div v-bind:class="{ extraHeight: checklistView }" class="side-menu-container">
        <div v-if="!checklistView" @click="newChecklist()" class="menu-action-container">
            <div class="icon-container onlyIconContainer">
                <i class="fa fa-plus-square" />
            </div>
            <h3>Create new checklist</h3>
        </div>
        <div v-if="checklistView" class="menu-action-container">
            <div class="icon-container topIconContainer">
                <i class="far fa-clock" />
            </div>
            <h3>Schedule checklist</h3>
        </div>
        <div @click="resetChecklist()" v-if="checklistView" class="menu-action-container">
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
            <div class="icon-container bottomIconContainer">
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
            this.$emit('createNewChecklist');
        },
        resetChecklist: function() {
            console.log('emmitted resetChecklist')
            this.$emit('resetChecklist');
        }
    }
}
</script>

<style lang="scss" scoped>
    .side-menu-container {
        height: 70px;
        width: 350px;
        background-color: #fff;
        border-radius: 10px;
        transition: height 0.1s ease-out;
    }

    .menu-action-container {
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        border-radius: 10px;
        transition: background-color 0.2s ease-out;
        
        h3 {
            font-family: 'Roboto';
            font-size: 20px;
            font-weight: 400;
            margin-left: 20px;
            color: #1A1A1D;
        }

        i {
            color: #1A1A1D;
            zoom: 1.4;
        }

        &:hover {
            cursor: pointer;
            color: #fff;
            background-color: rgba(195,7,63,1);
            border-radius: 10px;

            h3 {
                color: #fff;
            }
        }
    }

    .icon-container {
        width: 80px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #eee;
    }

    .topIconContainer {
        border-top-left-radius: 10px;
    }

    .bottomIconContainer {
        border-bottom-left-radius: 10px;
    }

    .onlyIconContainer {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    .extraHeight {
        height: 280px;
    }
</style>
