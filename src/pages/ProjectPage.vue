<script>
import axios from 'axios';
export default {
    name: "ProjectPage",
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
                projects: '/projects'
            },
            project: null,
            isError: false,
            errorMessage: null
        }
    },
    methods: {
        getProject() {
            axios.get(this.apiBaseUrl + this.apiUrls.projects + "/" + this.$route.params.slug)
                .then((response) => {
                    console.log(response);
                    this.project = response.data.result;
                })
                .catch((error) => {
                    console.log(error);
                    this.isError = true;
                    this.errorMessage = error.message;
                })
        }
    },
    created() {
        this.getProject();
    }
}
</script>


<template>
    <section v-if="project">
        <div class="container text-center">
            <h1 class="mt-5 mb-3">{{ project.title }}</h1>
            <img v-if="project.image" :src="project.image" class="card-img-top">
            <p>{{ project.description }}</p>
        </div>
    </section>
    <section v-if="isError">
        <div class="container">
            <p>{{ errorMessage }}</p>
        </div>
    </section>
</template>


<style scoped></style>