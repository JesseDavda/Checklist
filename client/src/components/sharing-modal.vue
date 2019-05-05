<template>
    <div class="sharing-modal-container">
        <div class="sharing-modal">
            <input type="text" v-model="shareLink" />
            <div class="copyButton" @click="copyLink"><p>Copy Link</p></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SharingModal",
        props: [
            "listId"
        ],
        mounted() {
            this.shareLink = this.listId;
        },
        methods: {
            copyLink: function() {
                navigator.clipboard.writeText(this.shareLink);
                this.$emit('closeShareModal');
            }
        },
        data() {
            return {
                shareLink: ""
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sharing-modal-container {
        position: absolute;
        z-index: 100;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        left: 0;
    }

    .sharing-modal {
        width: 800px;
        height: 90px;
        border-radius: 5px;
        background-color: #fff;
        display: flex;
        align-items: center;
        padding: 10px;
        padding-left: 20px;

        input {
            width: 600px;
            height: 40px;
            padding-left: 10px;
            border: none;
            border-radius: 5px;
            font-family: Roboto;
            font-weight: 300;
            font-size: 16px;
            background-color: #eee;     

            &:focus {
                outline: none;
            }
        }
    }

    .copyButton {
        width: 100px;
        height: 40px;
        background-color: rgba(195,7,63,1);
        margin-left: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Roboto';
        color: #fff;
        border-radius: 5px;
    }
</style>
