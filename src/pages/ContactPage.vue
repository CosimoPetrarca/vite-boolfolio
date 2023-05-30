<script>
export default {
    name: "ContactPage"
}
</script>


<template>
    <div  class="container">
        <section>
        <h1 class="mt-5 mb-3">Contact Page</h1>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nome e Cognome</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="inserisci nome e cognome">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">E-mail</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Messaggio</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">Invia</button>
        </div>
    </section>
    </div>
    
</template>


<style scoped></style>