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
        </div>
        <div class="lists-container" v-if="found && !loading">
            <h2>My Checklists</h2>
            <ul>
                <li v-for="checklist in checklists" :key="checklist._id" @click="selectChecklist(checklist)">
                    <div class="checklist">
                        <i class="fal fa-list iconOne" />
                        <h3 class="checklist-name">{{ checklist.name }}</h3>
                        <i class="fal fa-minus-octagon deleteIcon" @click="deleteChecklist(checklist._id, checklist)"/>
                        <i class="fal fa-chevron-circle-right iconTwo" />
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "ListView",
    props: [
        'finishedLoad'
    ],
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

            axios.post('http://localhost:3000/deleteChecklist', postObj)
                .then(() => {
                    let position = this.checklist.indexOf(checklist);
                    this.checklist.splice(position, 1);
                }).catch(e => {
                    console.log(e);
                })
        }
    },
    watch: {
        finishedLoad: function(value) {
            if(this.$store.getters.getChecklists.length == 0) {
                this.found = false;
                this.loading = false;
            } else {
                this.found = true;
                this.checklists = this.$store.getters.getChecklists;
                this.loading = false;
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

        i {
            zoom: 15;
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
</style>

