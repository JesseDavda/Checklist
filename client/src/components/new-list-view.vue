<template>
    <div class="new-list-view-container">
        <i class="fal fa-angle-left" @click="back"/>
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
            console.log(this.$store.getters.getCurrentLoggedInUserId);
            this.checklistTemplate.id = this.$store.getters.getCurrentLoggedInUserId;
            this.currentUserId = this.$store.getters.getCurrentLoggedInUserId;
        },
        methods: {
            back: function() {
                this.$emit('backFromNewList');
            },
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
                console.log(this.currentUserId);
                this.checklistTemplate.userId = this.currentUserId;
                if(this.firstTimeSave) { 
                    console.log(this.checklistTemplate);
                    axios.post('http://localhost:3000/createNewChecklist', this.checklistTemplate)
                        .then((response) => {
                            console.log("Saved first time response: ", response.data);
                            this.checklistTemplate._id = response.data.id;
                        }).catch(e => {
                            console.log(e);
                        });

                    this.firstTimeSave = false;
                } else {
                    console.log(this.checklistTemplate);
                    axios.post('http://localhost:3000/saveChecklist', {checklist: this.checklistTemplate})
                        .then(response => {
                            console.log('Saved rest of time response: ', response.data);
                        })
                        .catch(e => {
                            console.log(e);
                        })
                }
            }
        },
        data() {
            return {
                currentUserId: "",
                firstTimeSave: true,
                nameEditMode: false,
                newTaskName: "",
                checklistTemplate: {
                    userId: "",
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

    .fa-angle-left {
        position: absolute;
        zoom: 3;
        top: 10px;

        &:hover {
            cursor: pointer;
        }
    }

    .input-container {
        margin-left: 40px;
    }

    .new-list-view-container {
        padding: 35px;
        position: relative;
        
        h2 {
            margin: 0;
            font-family: 'Roboto';
            font-weight: 500;
            font-size: 35px;
            color: #1a1a1d;
            margin-bottom: 40px;
            margin-left: 40px;
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

