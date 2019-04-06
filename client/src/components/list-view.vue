<template>
    <div class="checklist-view-container">
        <div v-if="!found" class="not-found-container" >
            <i class="fas fa-search" />
            <h2>You don't seem to have any checklists</h2>
        </div>
        <div class="lists-container" v-if="found">
            <h2>My Checklists</h2>
            <ul>
                <li>
                    <div class="checklist topList">
                        <i class="fal fa-list iconOne" />
                        <h3 class="checklist-name">My first list</h3>
                        <i class="fal fa-chevron-circle-right iconTwo" />
                    </div>
                </li>
                <li>
                    <div class="checklist">
                        <i class="fal fa-list iconOne" />
                        <h3 class="checklist-name">My first list</h3>
                        <i class="fal fa-chevron-circle-right iconTwo" />
                    </div>
                </li>
                <li>
                    <div class="checklist">
                        <i class="fal fa-list iconOne" />
                        <h3 class="checklist-name">My first list</h3>
                        <i class="fal fa-chevron-circle-right iconTwo" />
                    </div>
                </li>
                <li>
                    <div class="checklist">
                        <i class="fal fa-list iconOne" />
                        <h3 class="checklist-name">My first list</h3>
                        <i class="fal fa-chevron-circle-right iconTwo" />
                    </div>
                </li>
                <li>
                    <div class="checklist">
                        <i class="fal fa-list iconOne" />
                        <h3 class="checklist-name">My first list</h3>
                        <i class="fal fa-chevron-circle-right iconTwo" />
                    </div>
                </li>
                <li>
                    <div class="checklist">
                        <i class="fal fa-list iconOne" />
                        <h3 class="checklist-name">My first list</h3>
                        <i class="fal fa-chevron-circle-right iconTwo" />
                    </div>
                </li>
                <li>
                    <div class="checklist">
                        <i class="fal fa-list iconOne" />
                        <h3 class="checklist-name">My first list</h3>
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
    name: "CheckListView",
    data() {
        return {
            found: false,
            checklists: {}
        }
    },
    mounted() {
        const self = this;

        setTimeout(() => {
            console.log('triggered')
            if(self.$store.getters.getChecklists.length == 0) {
                self.found = false;
            } else {
                self.found = true;
                self.checklists = self.$store.getters.getChecklists;
            }
        }, 250);
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
        margin-left: 5em;
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

    .topList {
        border-top: 1px solid #ccc;
    }
</style>

