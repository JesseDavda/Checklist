<template>
    <div class="new-list-view-container">
        <h2 v-if="!nameEditMode" @click="editName" >{{ checklistTemplate.name }}</h2>
        <div v-if="nameEditMode" class="input-container">
            <input class="name-input" type="text" v-model="checklistTemplate.name" />
            <i class="fal fa-check-circle" @click="editName" />
        </div>
        <div class="item-list" v-if="checklistTemplate.checklistItems.length > 0">
            <ul>
            </ul>
        </div>
        <div class="item-addition">
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
            }
        },
        data() {
            return {
                nameEditMode: false,
                checklistTemplate: {
                    id: 0,
                    name: "Checklist Name",
                    checklistItems: []
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .new-list-view-container {
        padding: 35px;
        
        h2 {
            margin: 0;
            font-family: 'Roboto';
            font-weight: 500;
            font-size: 35px;
            color: #1a1a1d;
        }
    }

    .input-container {
        display: flex;
        align-items: center;
        flex-direction: row;
         
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


</style>

