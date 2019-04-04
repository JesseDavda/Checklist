<template>
    <div class="checklist-page-container" >
        <div class="checklist-header">
            <div class="checklist-header-container">
                <i class="fa fa-th-list" />
                <h1>checklist</h1>
            </div>
        </div>
        <div class="checklist-container">
            <SideMenu :checklistView="checklist" @expand="checklist = true"></SideMenu>
            <CheckListView />
        </div>
    </div>
</template>

<script>
    import SideMenu from '../components/side-menu.vue';
    import CheckListView from '../components/list-view.vue';

    export default {
        name: 'Home',
        components: {
            SideMenu,
            CheckListView
        },
        data() {
            return {
                checklist: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .checklist-page-container {
        width: 100%;
        height: 100%;
        position: relative;
        background-color: #1A1A1D;
        padding-top: 100px;
    }

    .checklist-header {
        background-color: #1A1A1D;
        width: 100%;
        height: 100px;
        position: absolute;
        top: 0px;
        display: flex;
        align-items: center;
        justify-content: center;

        h1 {
            font-family: 'Roboto';
            font-weight: 300;
            color: rgba(195,7,63,1);
            margin: 0;
        }

        i {
            zoom: 2.3;
            margin-right: 5px;
            color: rgba(195,7,63,1);
        }
    }

    .checklist-header-container {
        width: 100em;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .checklist-container {
        width: 100em;
        height: 100%;
        margin: 0 auto;
        padding: 4em 5em;
        display: flex;
    }
</style>

