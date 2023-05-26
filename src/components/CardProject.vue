<template>
    <div class="card">
        <img v-if="project.image" :src="project.image" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <router-link :to="{ name: 'project', params: { slug: project.slug }}" class="btn btn-primary">
                Leggi progetto
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardProject',
    props: {
        project: Object
    }
}

</script>

<style ></style>