<template>
    <div class="checklist-page-container" >
        <div class="checklist-header">
            <div class="checklist-header-container">
                <i class="fa fa-th-list" />
                <h1>checklist</h1>
            </div>
        </div>
        <div class="checklist-container">
            <SideMenu :checklistView="expandSideMenu" @createNewChecklist="newChecklist"></SideMenu>
            <div class="checklist-views-container" >
                <ListView v-if="viewType === 'list'" @checklistSelected="showChecklist" :finishedLoad="completedFetch" />
                <CheckListView v-if="viewType === 'checklist'" :checklistId="selectedChecklistId" />
                <NewListView v-if="viewType === 'newList'" />
            </div>
        </div>
    </div>
</template>

<script>
    import SideMenu from '../components/side-menu.vue';
    import ListView from '../components/list-view.vue';
    import CheckListView from '../components/checklist-view.vue';
    import NewListView from '../components/new-list-view.vue';
    import axios from 'axios';

    export default {
        name: 'Home',
        components: {
            SideMenu,
            ListView,
            CheckListView,
            NewListView
        },
        mounted() {
            let userId = this.$store.getters.getCurrentLoggedInUserId;

            axios.post('http://localhost:3000/getChecklists', {id: userId})
                .then(response => {
                    this.$store.commit('insertChecklists', response.data.checklist);
                    this.completedFetch = true;
                }).catch(e => {
                    console.log(e);
                })
        },
        methods: {
            showChecklist: function(checklist) {
                this.selectedChecklistId = checklist._id;
                this.viewType = 'checklist';
            },
            newChecklist: function() {
                this.viewType = 'newList';
                this.expandSideMenu = true;
            }
        },
        data() {
            return {
                expandSideMenu: false,
                completedFetch: false,
                viewType: 'list',
                selectedChecklistId: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .checklist-views-container {
        width: 960px;
        max-height: 1000px;
        margin-left: 5em;
        background-color: #fff;
        border-radius: 10px;
        transition: height 0.3s ease-out;
    }

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
        margin: 0 auto;
        padding: 4em 5em;
        display: flex;
    }
</style>

