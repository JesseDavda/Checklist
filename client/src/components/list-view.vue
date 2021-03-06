<template>
    <div class="checklist-view-container">
        <div v-if="!found && !loading" class="not-found-container" >
            <i class="fas fa-search not-found-icon" />
            <h2 class="not-found-text">You don't seem to have any checklists</h2>
            <div class="mobile-content new-list-button" @click="createChecklist">
                <p>Create New Checklist</p>
            </div>
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
        </div>
        <div class="lists-container" v-if="found && !loading">
            <div class="list-view-header">
                <i class="fal fa-bars menu-icon" @click="slideMenu" />
                <h2 class="my_lists">My Checklists</h2>
                <!-- <i class="fal fa-sign-out logout" @click="logout"/> -->
            </div>
            <div class="search-bar">
                <input type="text" placeholder="Search for a checklist" v-model="searchTerm" />
            </div>
            <ul v-if="searchTerm === ''" class="checklists-container desktop-block">
                <li v-for="checklist in checklists" :key="checklist._id"> 
                    <div class="checklist mobile" :style="{backgroundColor: checklist.colour}" @click="selectChecklist(checklist)">
                        <i class="fal fa-list iconOne" />
                        <h3 class="checklist-name">{{ checklist.name }}</h3>
                        <div @click="editChecklist(checklist)" class="editIcon"><i class="fal fa-pen-square" /></div>
                        <div @click="deleteChecklist(checklist._id, checklist)" class="deleteIcon"><i class="fal fa-minus-octagon"/></div>
                        <div @click="selectChecklist(checklist)"  class="iconTwo"><i class="fal fa-chevron-circle-right" /></div>
                        <div @click="deleteChecklist(checklist)" class="delete"><i class="fal fa-window-minimize" /></div>
                    </div>
                    <div class="checklist desktop" @click="selectChecklist(checklist)">
                        <i class="fal fa-list iconOne" />
                        <h3 class="checklist-name">{{ checklist.name }}</h3>
                        <div @click="editChecklist(checklist)" class="editIcon"><i class="fal fa-pen-square" /></div>
                        <div @click="deleteChecklist(checklist._id, checklist)" class="deleteIcon"><i class="fal fa-minus-octagon"/></div>
                        <div @click="selectChecklist(checklist)"  class="iconTwo"><i class="fal fa-chevron-circle-right" /></div>
                        <div @click="deleteChecklist(checklist)" class="delete"><i class="fal fa-window-minimize" /></div>
                    </div>
                </li>
            </ul>
            <ul v-if="searchTerm.length" class="checklists-container mobile">
                <li v-for="checklist in searchChecklists" :key="checklist._id"> 
                    <div class="checklist mobile" :style="{backgroundColor: checklist.colour}" @click="selectChecklist(checklist)">
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
import MobileSlideOut from './mobile-slide-out.vue';
import axios from 'axios';

export default {
    name: "ListView",
    components: {
        MobileSlideOut
    },
    mounted() {
        this.getChecklists();
    },
    data() {
        return {
            found: false,
            checklists: {},
            searchChecklists: {},
            loading: true,
            searchTerm: "",
            slide: false
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
                    this.searchChecklists = response.data.checklist;
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
        },
        logout: function() {
            this.$session.destroy();
            this.$router.push('/');
        },
        searchFunction: function() {
            this.searchChecklists = this.checklists;
            this.searchChecklists = this.searchChecklists.filter(list => {
               return list.name.substring(0, this.searchTerm.length).toLowerCase() == this.searchTerm.toLowerCase(); 
            });
        },
        slideMenu: function() {
            this.$emit('slideOutMenu');
        }
    },
    watch: {
        searchTerm: function() {
            this.searchFunction();
        }
    }
}
</script>

<style lang="scss" scoped>
    .menu-icon {
        display: none;
    }

    .list-view-header {
        width: 100%;
        display: flex;
        position: relative;
        align-items: center;
        
        h2 {
            color: #fff;
            margin-left: 10px;
        }
        
        padding-left: 10px;
    }

    .logout {
        position: absolute;
        zoom: 1.5;
        -moz-transform: scale(1.5);
        right: 10px;
        color: #fff;
        display: none;
    }

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
            -moz-transform: scale(12);
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
            color: #1A1A1D;
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
            -moz-transform: scale(1.4);
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
            -moz-transform: scale(1.5);
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

    .mobile {
        display: none;
    }

    .desktop {
        display: flex;
    }

    .desktop-block {
        display: block;
    }

    @media screen and (max-width: 420px) { 
        .menu-icon {
            display: block;
            color: #fff;
            zoom: 2;

            &:hover {
                cursor: pointer;
            }
        }

        .mobile {
            display: flex;
        }

        .desktop {
            display: none;
        }

        .desktop-block {
            display: none;
        }

        .logout {
            display: block;
        }

        .delete {
            display: block;
            position: absolute;
            z-index: 1000;
            top: 0;
            zoom: 0.7;
            -moz-transform: scale(0.7);
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
            border-radius: 0px;
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
            z-index: 1;

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

        .not-found-text, .not-found-icon {
            color: #fff;
            text-align: center;
        }

        .list-view-header {
            h2 {
                color: #fff !important;
                margin-left: 10px;
            }
        }
    }
</style>

