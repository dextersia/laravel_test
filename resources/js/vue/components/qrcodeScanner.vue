<template>
    <div>
        <div class="qrcode-wrapper" v-if="camera === 'off'" justify="center">
            <img src="../../../assets/img/qrcode.png" width="100%" />
            <span class="subtitle-1">Camera is Off</span>
        </div>
        <qrcode-stream :camera="camera" @init="onInit" v-if="camera === 'auto'">
            <div class="loading-indicator" v-if="loading" justify="center" align="center">
                Loading...
            </div>
        </qrcode-stream>
        <v-card outlined class=" mt-5">
            <v-card-text class="text-center px-4 py-1 caption">
                CODE
            </v-card-text>
        </v-card>
        <v-btn rounded depressed block class="mt-5 white--text scanButton" @click="scan">
            Scan
        </v-btn>
    </div>
</template>

<script>

export default {
    components: {
       
    },
    data: ()=>{
        return {
            loading: false,
            camera: 'auto',
        }
    },
    methods: {
        async onInit (promise) {
            this.loading = true

            try {
                await promise
            } catch (error) {
                console.error(error)
            } finally {
                this.loading = false
            }
        },

        scan () {
            if(this.camera == 'auto') {
                this.turnCameraOff()
            }
            else {
                this.turnCameraOn()
            }
        },

        turnCameraOn () {
            this.camera = 'auto'
        },

        turnCameraOff () {
            this.camera = 'off'
        },
    },
    created(){
        
    }
}
</script>

<style lang="scss" scoped>
.scanButton {
    background-color: #00704A !important;
    text-transform: none !important;
}

.qrcode-wrapper {
    background-color: #C4C4C4;
}
</style>