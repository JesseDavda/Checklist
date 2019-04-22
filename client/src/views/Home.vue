<template>
    <div class="checklist-page-container" >
        <div class="checklist-header">
            <div class="checklist-header-container">
                <i class="fas fa-dice-d20" />
                <h1>checklist</h1>
            </div>
        </div>
        <div class="checklist-container">
            <SideMenu class="sideMenu" :checklistView="expandSideMenu" @createNewChecklist="newChecklist" @resetChecklist="resetChecklist"></SideMenu>
            <div class="checklist-views-container" >
                <ListView class="mainView" v-if="viewType === 'list'" @checklistSelected="showChecklist" @editList="editList" @newChecklist="newChecklist"/>
                <CheckListView class="mainView" v-if="viewType === 'checklist'" :checklistId="selectedChecklistId" @backFromChecklist="viewType = 'list', expandSideMenu = false" :resetChecklist="resetChecklistSignal"/>
                <NewListView class="mainView" v-if="viewType === 'newList'" :fullChecklist="this.editChecklist" @backFromNewList="viewType = 'list', expandSideMenu = false"/>
            </div>
        </div>
    </div>
</template>

<script>
    import SideMenu from '../components/side-menu.vue';
    import ListView from '../components/list-view.vue';
    import CheckListView from '../components/checklist-view.vue';
    import NewListView from '../components/new-list-view.vue';
    import moment from 'moment';

    export default {
        name: 'Home',
        components: {
            SideMenu,
            ListView,
            CheckListView,
            NewListView
        },
        beforeCreate: function() {
            if(this.$session.exists()) {
                let time = moment.duration(moment().diff(this.$session.get('startTime')))
                
                if(time.asDays() >= 20) {
                    this.$session.destroy();
                    this.$router.push('login');
                } else {
                    let userId = this.$session.get("ID");

                    this.$store.commit('setCurrentUser', userId);
                    this.$router.push('checklists');
                }
            } else {
                this.$router.push('/');
            }
        },
        methods: {
            showChecklist: function(checklist) {
                this.selectedChecklistId = checklist._id;
                this.viewType = 'checklist';
                this.expandSideMenu = true;
            },
            newChecklist: function() {
                this.viewType = 'newList';
                this.expandSideMenu = true;
            },
            editList: function(checklist) {
                this.editChecklist = checklist;
                this.viewType = 'newList';
                this.expandSideMenu = true;
            },
            resetChecklist: function() {
                this.resetChecklistSignal = !this.resetChecklistSignal;
            }
        },
        data() {
            return {
                expandSideMenu: false,
                viewType: 'list',
                editChecklist: {},
                selectedChecklistId: '',
                resetChecklistSignal: false
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

    @media screen and (max-width: 420px) {

        .checklist-header {
            display: none;
        }

        .checklist-container {
            padding: 0 30px;
        }

        .sideMenu {
            display: none;
        }

        .mainView, .checklist-container, .checklist-views-container {
            width: 100%;
            height: 100%;
            padding: 0px;
        }

        .checklist-page-container {
            padding: 5px;
        }

        .checklist-views-container {
            margin-left: 0;
            border-radius: 5px;
        }
    }
</style>

