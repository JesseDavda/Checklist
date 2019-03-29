<template>
    <div class="checklist-modal-container">
        <div class="checklist-modal">
            <div class="checklist-items">
                <div v-for="item in newChecklist" v-bind:key="newChecklist.indexOf(item)" class="checklist-item">
                </div>
            </div>
            <div class="add-checklist-item">
                <i class="fa fa-plus-square" />
                <input type="text" v-model="newChecklistItemName" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "checklistModal",
    methods: {

    },
    data() {
        return {
            newChecklistItemName: "",
            newChecklist: []
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
