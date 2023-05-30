<script>
import axios from 'axios';
import store from '../store';

export default {
    name: "ContactPage",
    data() {
        return {
            store,
            formData: {
                name: '',
                email: '',
                message: ''
            }
        }
    },
    methods: {
        sendContact() {
            const data = {
                name: this.formData.name,
                email: this.formData.email,
                message: this.formData.message
            };

            axios.post(`${this.store.apiBaseUrl}/contacts`, data)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
}
</script>


<template>
    <div  class="container">
        <h1 class="mt-5 mb-3">Contact Page</h1>
        <form @submit.prevent="sendContact">
        <div class="mb-3">
            <label for="name" class="form-label">Nome e Cognome</label>
            <input type="text" class="form-control" id="name" placeholder="inserisci nome e cognome" v-model="formData.name">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">E-mail</label>
            <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="formData.email">
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Messaggio</label>
            <textarea class="form-control" id="message" rows="3" v-model="formData.message"></textarea>
        </div>
        <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">Invia</button>
        </div>
    </form>
    </div>
    
</template>


<style scoped></style>