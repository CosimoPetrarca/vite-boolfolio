<template>
    <main>
        <div class="container text-center">
            <div class="row my-4 gy-4">
                <h1>My Projects</h1>
                <div class="col col-md-4" v-for="project in data">
                    <div class="card">
                        <img v-if="project.image" :src="project.image" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">{{ project.title }}</h5>
                            <p class="card-text">{{ project.description }}</p>
                            <a href="#" class="btn btn-primary">Dettaglio</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'AppMain',
    props: {
        data: Object
    }
}

</script>

<style ></style>