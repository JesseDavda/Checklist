<template>
    <div class="checklist-view-container">
        <h2>{{checklist.name}}</h2>
        <ul>
            <li v-for="item in checklistItems" :key="checklistItems.indexOf(item)">
                <div class="checklist-list-item" :class="{ green: item.completed }" @click="saveAndUpdateChecklist(!item.completed, checklistItems.indexOf(item))">
                    <i v-if="!item.completed" @click="saveAndUpdateChecklist(!item.completed, checklistItems.indexOf(item))" class="fal fa-square" />
                    <i v-if="item.completed" @click="saveAndUpdateChecklist(!item.completed, checklistItems.indexOf(item))" class="fal fa-check-square" />
                    <h3 class="item-name">{{item.name}}</h3>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "CheckListView",
        props: [
            "checklistId"
        ],
        mounted() {
            this.checklist = this.$store.getters.getSingleChecklist(this.checklistId);
            this.checklistItems = this.checklist.checklistItems;
        },
        methods: {
            saveAndUpdateChecklist: function(value, position) {
                console.log('making the call to save the checklist')

                this.checklist.checklistItems[position].completed = value;
                console.log(this.checklist);

                axios.post('http://localhost:3000/saveChecklist', {checklist: this.checklist})
                    .catch(e => {
                        console.log(e);
                    })
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

    .checklist-view-container {
        display: flex;
        flex-direction: column;
        padding: 35px;

        h2 {
            margin: 0;
            font-family: 'Roboto';
            font-weight: 500;
            font-size: 35px;
            color: #1a1a1d;
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
</style>
