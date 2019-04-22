<template>
    <div class="checklist-view-container">
        <div class="checklist-title-container">
            <i @click="back" class="fal fa-angle-left" />
            <h2>{{checklist.name}}</h2>
        </div>
        <ul>
            <li v-for="item in checklistItems" :key="checklistItems.indexOf(item)">
                <div class="checklist-list-item" :class="{ green: item.completed }" @click="saveAndUpdateChecklist(!item.completed, checklistItems.indexOf(item))">
                    <i v-if="!item.completed" @click="saveAndUpdateChecklist(!item.completed, checklistItems.indexOf(item))" class="fal fa-square" />
                    <i v-if="item.completed" @click="saveAndUpdateChecklist(!item.completed, checklistItems.indexOf(item))" class="fal fa-check-square" />
                    <h3 class="item-name">{{item.name}}</h3>
                </div>
            </li>
        </ul>
        <MobileNav class="mobile-nav" @mobileNavResetChecklist="resetChecklistFunction" @mobileNavHome="back"/>
    </div>
</template>

<script>
    import axios from 'axios';
    import MobileNav from '../components/bottom-mobile-menu.vue';

    export default {
        name: "CheckListView",
        components: {
            MobileNav
        },
        props: [
            "checklistId",
            "resetChecklist"
        ],
        mounted() {
            this.checklist = this.$store.getters.getSingleChecklist(this.checklistId);
            this.checklistItems = this.checklist.checklistItems;
            this.$emit('currentChecklist', this.checklist);
        },
        methods: {
            saveAndUpdateChecklist: function(value, position) {
                this.checklist.checklistItems[position].completed = value;

                this.saveChecklist();
            },
            saveChecklist: function() {
                axios.post('https://routine-server.herokuapp.com/saveChecklist', {checklist: this.checklist})
                    .catch(e => {
                        console.log(e);
                    })
            },
            back: function() {
                this.$emit('backFromChecklist');
            },
            resetChecklistFunction: function() {
                 this.checklist.checklistItems.forEach(item => {
                    item.completed = false;
                });

                this.saveChecklist();
            }
        },
        watch: {
            resetChecklist: function() {
                console.log('recieved propchange')
                this.resetChecklistFunction();
            }
        },
        data() {
            return {
                checklist: {},
                checklistItems: []
            }
        }
    }
</script>

<style lang="scss" scoped>
    li {
        list-style-type: none;
    }

    ul {
        padding: 0;
    }

    .fa-angle-left {
        zoom: 3;
        top: 10px;

        &:hover {
            cursor: pointer;
        }
    }

    .checklist-view-container {
        display: flex;
        flex-direction: column;
        position: relative;
        padding: 0 10px;

        h2 {
            margin: 0;
            font-family: 'Roboto';
            font-weight: 500;
            font-size: 35px;
            color: #1a1a1d;
            margin-left: 30px;
        }
    }

    .checklist-title-container {
        display: flex;
        padding-top: 10px;
        align-items: center;
        padding-left: 10px;

        h2 {
            margin: 0;
            margin-left: 10px;
        }
    }

    .checklist-list-item {
        width: 100%;
        height: 40px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        position: relative;
        border-bottom: 1px solid #eee;
        background-color: #fff;
        background-position: left bottom;
        transition: all 0.5s ease-out;

        h3 {
            margin: 0;
            font-family: 'Roboto';
            font-size: 20px;
            margin-left: 50px;
        }

        i {
            zoom: 1.8;
            position: absolute;
            left: 5px; 

            &:hover {
                cursor: pointer;
            }
        }

        &:hover {
            cursor: pointer;
        }
    }

    .green {
        border-radius: 5px;
        background-position: right bottom;
        background-color: #2ecc71;
        color: #fff;
        border-color: #fff;
    }

    @media screen and (max-width: 420px) {
        ul {
            width: 95%;
            margin: 0 auto;
            margin-top: 10px;
        }
    }

    @media screen and (min-width: 420px) {
        .mobile-nav {
            display: none;
        }
    }
</style>
