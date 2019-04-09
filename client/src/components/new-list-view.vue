<template>
    <div class="new-list-view-container">
        <h2 v-if="!nameEditMode" @click="editName" >{{ checklistTemplate.name }}</h2>
        <div v-if="nameEditMode" class="input-container">
            <input class="name-input" type="text" v-model="checklistTemplate.name" />
            <i class="fal fa-check-circle" @click="editName" />
        </div>
        <div class="item-list" v-if="checklistTemplate.checklistItems.length > 0">
            <ul>
                <li v-for="item in checklistTemplate.checklistItems" :key="item.key">
                    <div class="checklist-item">
                        <i class="fal fa-square item-icon-one" />
                        <h3 class="item-name">{{ item.name }}</h3>
                        <i class="fal fa-layer-minus item-icon-two" @click="deleteTask(checklistTemplate.checklistItems.indexOf(item))" />
                    </div>
                </li>
            </ul>
        </div>
        <div class="item-addition">
            <i class="fal fa-layer-plus" />
            <input v-on:keyup.enter="addTask" v-model="newTaskName" type="text" class="new-task-name" placeholder="Task name" />
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import _ from 'lodash';

    export default {
        name: "NewListView",
        mounted() {

        },
        methods: {
            editName: function() {
                this.nameEditMode = !this.nameEditMode;
                this.saveChecklist();
            },
            addTask: function() {
                let newTaskObject = {
                    completed: false,
                    name: this.newTaskName,
                    key: _.uniqueId("key_")
                }

                this.checklistTemplate.checklistItems.push(newTaskObject);

                this.newTaskName = "";

                this.saveChecklist();
            },
            deleteTask: function(index) {
                this.checklistTemplate.checklistItems.splice(index, 1);

                this.saveChecklist();
            },
            saveChecklist: function() {
                if(this.firstTimeSave) { 
                    axios.post('http://localhost:3000/createNewChecklist', this.checklistTemplate)
                        .then((response) => {
                            console.log(response.data.completed);
                            this.checklistTemplate._id = response.data.id;
                        }).catch(e => {
                            console.log(e);
                        });

                    this.firstTimeSave = false;
                } else {
                    axios.post('http://localhost:3000/saveChecklist', {checklist: this.checklistTemplate})
                        .catch(e => {
                            console.log(e);
                        })
                }
            }
        },
        data() {
            return {
                firstTimeSave: true,
                nameEditMode: false,
                newTaskName: "",
                checklistTemplate: {
                    id: 1221,
                    name: "Checklist Name",
                    checklistItems: []
                }
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
        margin: 0;
    }

    .new-list-view-container {
        padding: 35px;
        
        h2 {
            margin: 0;
            font-family: 'Roboto';
            font-weight: 500;
            font-size: 35px;
            color: #1a1a1d;
            margin-bottom: 40px;
        }
    }

    .input-container {
        display: flex;
        align-items: center;
        flex-direction: row;
        margin-bottom: 40px;
         
        i {
            margin-left: 10px;
            zoom: 1.5;

            &:hover {
                cursor: pointer;
            }
        }
    }

    .name-input {
        width: 250px;
        height: 45px;
        border: none;
        font-family: 'Roboto';
        font-weight: 500;
        font-size: 35px;
        color: #1a1a1d;
        border-bottom: 3px solid #1a1a1d;

        &:focus {
            outline: none;
        }
    }

    .item-addition {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        position: relative;

        i {
            position: absolute;
            left: 10px;    
            zoom: 1.5;
        }

        input {
            position: absolute;
            left: 60px;
            height: 30px;
            width: 350px;
            border: 0;
            font-family: 'Roboto';
            font-weight: 300;
            color: 000;
            font-size: 16px;

            &:focus {
                outline: none;
            }
        }
    }

    .checklist-item {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        border-top: 1px solid #eee;
        position: relative;

        .item-icon-one {
            position: absolute;
            left: 10px;
            zoom: 1.6;
        }

        h3 {
            position: absolute;
            left: 60px;
            margin: 0;
            font-family: 'Roboto';
            font-weight: 300;
            font-size: 16px;
        }

        .item-icon-two {
            position: absolute;
            right: 10px;
            zoom: 1.5;
            
            &:hover {
                cursor: pointer;
                color: red;
            }
        }
    }

</style>

