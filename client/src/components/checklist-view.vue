<template>
    <div class="checklist-view-container">
        <SharingModal v-if="shared" :listId="shareListId" @closeShareModal="shared = false" />
        <div class="checklist-title-container">
            <i @click="back" class="fal fa-angle-left" />
            <h2 >{{checklist.name}}</h2>
        </div>
        <div class="header">
            <p>Need To Do</p>
            <div class="line-break" />
        </div>
        <ul class="uncompleted">
             <li v-for="item in uncompleted" :key="checklist.checklistItems.indexOf(item)">
                <div class="checklist-list-item" @click="moveItem(item, uncompleted.indexOf(item), true)">
                    <i @click="moveItem(item, uncompleted.indexOf(item), true)" class="fal fa-square" />
                    <h3 class="item-name">{{item.name}}</h3>
                </div>
            </li>
        </ul>
        <div class="header">
            <p>Completed</p>
            <div class="line-break" />
        </div>
        <ul class="completed">
            <li v-for="item in completed" :key="checklist.checklistItems.indexOf(item)">
                <div class="checklist-list-item green" @click="moveItem(item, completed.indexOf(item), false)">
                    <i @click="moveItem(item, completed.indexOf(item), false)" class="fal fa-check-square" />
                    <h3 class="item-name">{{item.name}}</h3>
                </div>
            </li>
        </ul>
        <MobileNav class="mobile-nav" @mobileNavResetChecklist="resetChecklistFunction" @mobileNavHome="back" @editChecklist="sendEditSignal" @shareChecklist="openSharingModal"/>
    </div>
</template>

<script>
    import axios from 'axios';
    import MobileNav from '../components/bottom-mobile-menu.vue';
    import SharingModal from '../components/sharing-modal.vue';

    export default {
        name: "CheckListView",
        components: {
            MobileNav,
            SharingModal
        },
        props: [
            "checklistId",
            "resetChecklist",
            "shareList"
        ],
        mounted() {
            this.checklist = this.$store.getters.getSingleChecklist(this.checklistId);
            this.splitList();
            this.$emit('currentChecklist', this.checklist);
            this.$store.commit('setCurrentChecklist', this.checklist)
        },
        methods: {
            openSharingModal: function() {
                this.shared = true;
                this.shareListId = this.checklist._id;
            },
            moveItem: function(item, position, section) {
                const positionInChecklist = this.checklist.checklistItems.indexOf(item);
                this.checklist.checklistItems[positionInChecklist].completed = section;

                if(section) {
                    let item = this.uncompleted[position];
                    this.uncompleted.splice(position, 1);
                    this.completed.push(item);
                } else {
                    let item = this.completed[position];
                    this.completed.splice(position, 1);
                    this.uncompleted.push(item);
                }

                this.saveChecklist();
            },
            saveChecklist: function() {
                axios.post('/saveChecklist', {checklist: this.checklist})
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
            },
            sendEditSignal: function() {
                this.$emit('editSignal');
            },
            splitList: function() {
                this.checklist.checklistItems.forEach(item => {
                    if(item.completed) {
                        this.completed.push(item);
                    } else if(!item.completed) {
                        this.uncompleted.push(item);
                    }
                });

                console.log("Completed array: ", this.completed);
                console.log("To do array: ", this.uncompleted);
            }
        },
        watch: {
            resetChecklist: function() {
                this.resetChecklistFunction();
            },
            shareList: function(value) {
                if(value === true) {
                    this.openSharingModal();
                }
            }
        },
        data() {
            return {
                completed: [],
                uncompleted: [],
                checklist: {},
                shared: false,
                shareListId: ""
            }
        }
    }
</script>

<style lang="scss" scoped>

    .uncompleted, .completed {
        max-height: 70%;
    }

    li {
        list-style-type: none;
    }

    ul {
        padding: 0;
    }

    .fa-angle-left {
        zoom: 3;
        -moz-transform: scale(3);
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
        height: fit-content;
        margin: 0 auto;
        display: flex;
        align-items: center;
        position: relative;
        border-bottom: 1px solid #eee;
        background-color: #fff;
        background-position: left bottom;
        transition: all 0.5s ease-out;
        padding: 5px 0;

        h3 {
            margin: 0;
            font-family: 'Roboto';
            font-size: 20px;
            font-weight: 300;
            margin-left: 50px;
            width: 90%;
        }

        i {
            zoom: 1.8;
            -moz-tranform: scale(1.8);
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

    .header {
        display: none;
    }

    @media screen and (max-width: 420px) {
        .header {
            display: block;
            width: 95%;
            margin: 20px auto;

            p {
                margin: 0;
                font-family: 'Roboto';
                font-size: 14px;
                font-weight: 300;
            }

            .line-break {
                width: 100%;
                height: 1px;
                margin-top: 5px;
                background-color: #eee;
            }
        }

        ul {
            width: 95%;
            margin: 0 auto;
        }
    }

    @media screen and (min-width: 420px) {
        .mobile-nav {
            display: none;
        }
    }
</style>
