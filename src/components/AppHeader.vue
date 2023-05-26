<template>
    <header>
        <div class="container">
            <div class="d-flex justify-content-between">
                <div class="logo">Project</div>
                <nav>
                    <ul class="d-flex list-unstyled m-0 p-0 gap-2">
                        <li>
                            <router-link :to="{ name: 'home' }" class="nav-link">
                                Home
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'about' }" class="nav-link">
                                About
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'list' }" class="nav-link">
                                Projects
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'AppHeader'
}

</script>

<style ></style>