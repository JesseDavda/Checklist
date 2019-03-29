<template>
    <div class="checklist-page-container" >
        <div class="checklist-header-container">
            <h1>Checklist</h1>
        </div>
        <div class="checklist-container">
            <div class="checklist-sidebar-container">
            
            </div>
            <div class="checklist-list-container">
            
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
    }
</script>

<style lang="scss" scoped>
    .checklist-page-container {
        width: 100%;
        height: 100%;
        position: relative;
        background-color: #eee;
        padding-top: 100px;
    }

    .checklist-header-container {
        background-color: #fff;
        width: 100%;
        height: 100px;
        position: absolute;
        top: 0px;
        box-shadow: 0 3px 12px rgba(0,0,0,0.12), 0 3px 12px rgba(0,0,0,0.19);
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: center;
        padding-left: 70em;

        h1 {
            font-family: 'Roboto';
            font-weight: 700;
            color: #000;
        }
    }

    .checklist-container {
        width: 100em;
        height: 100%;
        margin: 0 auto;
        padding: 4em 5em;
        display: flex;
    }

    .checklist-sidebar-container {
        width: 400px;
        height: 900px;
        background-color: #fff;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        border-radius: 7px;
    }

    .checklist-list-container {
        width: 960px;
        height: 1500px;
        margin-left: 5em;
        background-color: #fff;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        border-radius: 7px;
    }
</style>

