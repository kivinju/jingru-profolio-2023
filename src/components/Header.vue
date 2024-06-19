
<template>
    <nav class="navbar sticky-top navbar-expand-lg bg-white">
        <div class="container-fluid">
            <RouterLink to="/" class="navbar-brand ms-3">
                <img src="../assets/favicon.png" alt="Logo" width="24" height="24" class="d-inline-block align-text-top">
                Jingru Zhao
            </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item me-3">
                        <a class="nav-link" href="#projects">Work</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link" href="https://drive.google.com/file/d/1dlCv2E5nYcNXzDmXzwl3qEq0I5_YMPvY/view?usp=sharing" target="_blank">Resume</a>
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

.nav-link {
    color: #000000;
}

.nav-link:hover {
    color: rgba(0, 0, 0, 0.65);
}

</style>