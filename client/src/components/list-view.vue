<template>
    <div class="checklist-view-container">
        <div v-if="!found && !loading" class="not-found-container" >
            <i class="fas fa-search" />
            <h2>You don't seem to have any checklists</h2>
        </div>
        <div class="loading-container" v-if="loading">
            <div class="sk-cube-grid">
                <div class="sk-cube sk-cube1"></div>
                <div class="sk-cube sk-cube2"></div>
                <div class="sk-cube sk-cube3"></div>
                <div class="sk-cube sk-cube4"></div>
                <div class="sk-cube sk-cube5"></div>
                <div class="sk-cube sk-cube6"></div>
                <div class="sk-cube sk-cube7"></div>
                <div class="sk-cube sk-cube8"></div>
                <div class="sk-cube sk-cube9"></div>
            </div>
            <p>Fetching your checklists...</p>
            <div class="mobile-content new-list-button" @click="createChecklist">
                <p>Create New Checklist</p>
            </div>
        </div>
        <div class="lists-container" v-if="found && !loading">
            <h2>My Checklists</h2>
            <div class="search-bar">
                <input type="text" placeholder="Search for a checklist" />
            </div>
            <ul class="checklists-container">
                <li v-for="checklist in checklists" :key="checklist._id"> 
                    <div class="checklist" :style="{backgroundColor: checklist.colour}" @click="selectChecklist(checklist)">
                        <i class="fal fa-list iconOne" />
                        <h3 class="checklist-name">{{ checklist.name }}</h3>
                        <div @click="editChecklist(checklist)" class="editIcon"><i class="fal fa-pen-square" /></div>
                        <div @click="deleteChecklist(checklist._id, checklist)" class="deleteIcon"><i class="fal fa-minus-octagon"/></div>
                        <div @click="selectChecklist(checklist)"  class="iconTwo"><i class="fal fa-chevron-circle-right" /></div>
                        <div @click="deleteChecklist(checklist)" class="delete"><i class="fal fa-window-minimize" /></div>
                    </div>
                </li>
            </ul>
            <div class="mobile-content new-list-button" @click="createChecklist">
                <p>Create New Checklist</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "ListView",
    mounted() {
        this.getChecklists();
    },
    data() {
        return {
            found: false,
            checklists: {},
            loading: true
        }
    },
    methods: {
        selectChecklist: function(checklist) {
            this.$emit('checklistSelected', checklist);
        },
        deleteChecklist: function(id, checklist) {
            let postObj = {id: id};

            axios.post('/deleteChecklist', postObj)
                .then(() => {
                    let position = this.checklist.indexOf(checklist);
                    this.checklist.splice(position, 1);
                    this.getChecklists();
                }).catch(e => {
                    console.log(e);
                })
        },
        getChecklists: function() {
            let userId = this.$store.getters.getCurrentLoggedInUserId;

            axios.post('/getChecklists', {id: userId})
                .then(response => {
                    this.$store.commit('insertChecklists', response.data.checklist);
                    this.checklists = response.data.checklist;
                }).then(() => {
                    if(this.checklists.length === 0) {
                        this.found = false;
                        this.loading = false;
                    } else {
                        this.found = true;
                        this.loading = false;
                    }
                }).catch(e => {
                    console.log(e);
                });
        },
        editChecklist: function(checklist) {
            this.$emit('editList', checklist)
        },
        createChecklist: function() {
            this.$emit('newChecklist');
        }
    }
}
</script>

<style lang="scss" scoped>
    .delete {
        display: none;  
    }

    li {
        list-style-type: none;
    }

    ul {
        padding: 0;
        max-height: 76%;
        overflow-y: scroll;
    }

    .search-bar {
        display: none;
    }

    .checklist-view-container {
        width: 960px;
        height: fit-content;
        background-color: #fff;
        border-radius: 10px;
    }

    .not-found-container {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 40px;

        i {
            zoom: 12;
            color: rgba(0, 0, 0, 0.2);
        }

        h2 {
            font-family: 'Roboto';
            font-size: 40px;
            color: rgba(0, 0, 0, 0.2);
        }
    }

    .lists-container {
        height: 100%;
        width: 100%;
        padding: 30px;
        position: relative;

        h2 {
            margin: 0;
            font-family: 'Roboto';
            font-weight: 500;
            font-size: 35px;
            color: #1a1a1d;
        }
    }

    .checklist {
        display: flex;
        align-items: center;
        width: 100%;
        margin: 0 auto;
        height: 50px;
        position: relative;
        border-bottom: 1px solid #ccc;

        .iconOne {
            position: absolute;
            left: 5px;
        }

        h3 {
            font-family: 'Roboto';
            font-size: 20px;
            font-weight: 400;
            margin-left: 50px;
        }

        i {
            zoom: 1.4;
        }

        .iconTwo {
            position: absolute;
            right: 10px;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &:hover {
            cursor: pointer;
            background-color: #ddd;

            i {
                color: rgba(195,7,63,1);
            }
        }
    }

    .loading-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 300px;
        width: 100%;

        p {
            font-family: 'Roboto';
            font-size: 18px;
            font-weight: 700;
        }
    }

    .topList {
        border-top: 1px solid #ccc;
    }

    .deleteIcon {
        position: absolute;
        right: 50px;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .editIcon {
        position: absolute;
        right: 90px;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

        i {
            zoom: 1.5;
        }
    }

    .new-list-button {
        width: 80%;
        height: 50px;
        margin: 0 auto;
        background-color: rgba(195,7,63,1);
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 10px;
        left: 10%;
        border-radius: 5px;
        display: none;

        p {
            color: #fff;
            font-family: 'Roboto';
            font-weight: 600;
            font-size: 18px;
        }
    }

    /* loading animation styles */

    .sk-cube-grid {
        width: 60px;
        height: 60px;
    }

    .sk-cube-grid .sk-cube {
        width: 33%;
        height: 33%;
        background-color: #333;
        float: left;
        -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
        animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out; 
    }
    .sk-cube-grid .sk-cube1 {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s; }
    .sk-cube-grid .sk-cube2 {
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s; }
    .sk-cube-grid .sk-cube3 {
        -webkit-animation-delay: 0.4s;
        animation-delay: 0.4s; }
    .sk-cube-grid .sk-cube4 {
        -webkit-animation-delay: 0.1s;
        animation-delay: 0.1s; }
    .sk-cube-grid .sk-cube5 {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s; }
    .sk-cube-grid .sk-cube6 {
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s; }
    .sk-cube-grid .sk-cube7 {
        -webkit-animation-delay: 0s;
        animation-delay: 0s; }
    .sk-cube-grid .sk-cube8 {
        -webkit-animation-delay: 0.1s;
        animation-delay: 0.1s; }
    .sk-cube-grid .sk-cube9 {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s; }

    @-webkit-keyframes sk-cubeGridScaleDelay {
        0%, 70%, 100% {
            -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
        } 35% {
            -webkit-transform: scale3D(0, 0, 1);
            transform: scale3D(0, 0, 1); 
        }
    }

    @keyframes sk-cubeGridScaleDelay {
        0%, 70%, 100% {
            -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
        } 35% {
            -webkit-transform: scale3D(0, 0, 1);
            transform: scale3D(0, 0, 1);
        } 
    }

    /* Media Queries */

    @media screen and (max-width: 420px) { 
        .delete {
            display: block;
            position: absolute;
            z-index: 1000;
            top: 0;
            zoom: 0.7;
            right: 15px;
            color: #ecf0f1;
        }

        .search-bar {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 80px;

            input {
                width: 95%;
                height: 40px;
                border: none;
                border-radius: 3px;
                padding-left: 10px;
                font-family: 'Roboto';
                font-weight: 300;
                font-size: 16px;

                &:hover {
                    outline: none;
                }
            }
        }

        .checklist-view-container, .lists-container {
            background-color: #1A1A1D;
        }

        .lists-container {
            padding: 10px;
            padding-top: 20px;
        }

        .mobile-content {
            display: flex;
        }

        .editIcon, .deleteIcon {
            display: none;
        }

        .checklists-container {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            margin-top: 0;

            li {
                width: 45%;
            }
        }

        .checklist {
            height: 100px;
            width: 100%;
            margin: 0;
            border-radius: 10px;
            border-bottom: 0;
            position: relative;
            margin-top: 10px;

            .checklist-name {
                position: absolute;
                bottom: 10px;
                left: 10px;
                margin: 0;
                font-weight: 300;
            }

            .iconOne, .iconTwo {
                display: none;
            }
            color: #fff;

        }

        .lists-container > h2 {
            margin-left: 10px;
            color: #fff;
        }
    }
</style>

