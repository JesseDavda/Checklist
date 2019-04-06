<template>
    <div class="checklist-container">
        <h2>{{checklist.name}}</h2>
        <p v-for="item in checklist.checklistItems" :key="item._id">{{ item.name }}</p>
    </div>
</template>

<script>
export default {
    name: "CheckListView",
    props: [
        "checklistId"
    ],
    mounted() {
        this.checklist = this.$store.getters.getSingleChecklist(this.checklistId);
    },
    data() {
        return {
            checklist: {}
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
