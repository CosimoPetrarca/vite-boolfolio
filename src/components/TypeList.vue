<script>
import axios from 'axios';
import store from '../store';
export default {
    name: 'TypeList',
    data() {
        return {
            store,
            currentType: '',
            types: []
        }
    },
    methods: {
        getTypes() {
            axios.get(`${this.store.apiBaseUrl}/types`)
                .then((response) => {
                    console.log(response);
                    this.types = response.data.result;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        changePage(){
            this.$router.push({name: 'type', params:{slug: this.currentType}});
        }
    },
    created(){
        this.getTypes();
    }
}
</script>

<template>
    <select class="form-select" v-if="types.length > 0" @change="changePage" v-model="currentType">
        <option value="" disabled>Select Category</option>
        <option :value="type.slug" v-for="type in types">{{ type.name }}</option>
    </select>
</template>
