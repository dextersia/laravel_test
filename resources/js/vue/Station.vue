<template>
    <v-app>
        <v-app-bar app flat color="white" class="pt-5 pb-0 px-5">
            <v-btn rounded text small class="black--text">
                History
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn elevation="0" rounded small class="black--text">
                Logout
            </v-btn>
        </v-app-bar>
        <v-main>
            <v-container fluid class="mt-n15">
                <v-row justify="center">
                    <v-col cols="8">
                        <img src="../../assets/img/starbucks_at_home.png" />
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="8" class="station-title text-center">
                        <h1>Station 1</h1>
                        <h5>(Sia Yan Peng)</h5>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="8">
                        <qrcodeScanner />
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
    

</template>

<script>
import qrcodeScanner from "./components/qrcodeScanner"

export default {
    components: {
        qrcodeScanner
    }
    
}
</script>
<style lang="scss" scoped>

main {
    align-items: center;
}

header {
    ::v-deep .v-toolbar__content {
        height: auto !important;
        padding: 0px !important;
    }
}

button {
    text-transform: none !important;
}

.station-title {
    //border: 1px solid green;
}

img {
    width: 100%;
}

</style>