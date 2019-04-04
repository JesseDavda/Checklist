<template>
    <div class="checklist-view-container">
        <i class="fas fa-search" />
        <h2>You don't seem to have any checklists</h2>
    </div>
</template>

<script>
export default {
    name: "CheckListView",
    mounted() {
        
    }
}
</script>

<style lang="scss" scoped>
    .checklist-view-container {
        width: 960px;
        height: 1500px;
        margin-left: 5em;
        background-color: #fff;
        border-radius: 10px;
    }

    .checklist-view-container {
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

    @keyframes searchAnimation {
        0% {
            transform: rotate(90deg);
        }
    }
</style>

