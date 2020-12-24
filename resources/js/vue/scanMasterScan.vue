<template>
    <div class="container">
        <div class="topbar">
            <div class="topbar-left">
                <button>History</button>
            </div>
            <div class="topbar-right">
                <button>Logout</button>
            </div>
        </div>

        <main class="main">
            <img src="" />
            <h1>Station 1</h1>
            <span>Sia Yan Peng</span>
            <qr-code-scanner />
        </main>
    </div>

</template>

<script>

export default {
    prop: ['stationMaster']
    
}
</script>