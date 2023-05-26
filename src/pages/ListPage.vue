<script>
import axios from 'axios';
import CardProject from '../components/CardProject.vue';
export default {
  name: "ListPage",
  components: {
    CardProject
  },
  data() {
    return {
      apiBaseUrl: 'http://127.0.0.1:8000/api',
      apiUrls: {
        projects: '/projects'
      },
      projects: []
    }
  },
  methods: {
    getProjects() {
      axios.get(this.apiBaseUrl + this.apiUrls.projects).then((response) => {
        console.log(response);
        this.projects = response.data.result;
      }).catch((error) => {
        console.log(error);
      })
    }
  },
  created() {
    this.getProjects();
  }
}
</script>


<template>
  <section>
    <main>
      <div class="container text-center">
        <div class="row my-4 gy-4">
          <h1>My Projects</h1>
          <div class="col col-md-4" v-for="project in projects">
            <CardProject :project = "project" />
          </div>
        </div>
      </div>
    </main>

  </section>
</template>


<style scoped></style>