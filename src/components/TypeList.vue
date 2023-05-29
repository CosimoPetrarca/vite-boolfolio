<script>
import axios from 'axios';
import store from '../store';
export default {
    name: 'CategoryList',
    data() {
        return {
            store,
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
        }
    },
    created(){
        this.getTypes();
    }
}
</script>

<template>

    <select class="form-select" >
        <option :value="type.slug" v-for="type in types"> {{ type.name }} </option>
    </select>

</template>
