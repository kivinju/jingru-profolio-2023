
<template>
    <nav class="navbar sticky-top navbar-expand-lg bg-white">
        <div class="container-fluid">
            <a class="navbar-brand ms-3" href="/">
                <img src="../assets/favicon.png" alt="Logo" width="24" height="24" class="d-inline-block align-text-top">
                Jingru Zhao
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item me-3">
                        <a class="nav-link" href="/#projects">Work</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link" href="#">Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
.navbar {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px 0px
}
</style>