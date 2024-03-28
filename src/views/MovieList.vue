<script setup>
import {ref} from 'vue'

const localCards = ref([])

async function callApi() {
    const url = "https://api.magicthegathering.io/v1/cards"
    const fetcher = await fetch(url)
    const json = await fetcher.json()
    localCards.value = json.cards
}
callApi()

</script>

<template>
    <h2>{{ localCards.length }}</h2>
    <div v-if="!localCards.length">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity="0.25"/><circle cx="12" cy="2.5" r="1.5" fill="currentColor"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></circle></svg>
    </div>
  <div v-else class="container">
        
        <table class="styled-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Voir</th>
                </tr>
            </thead> 
            <tbody>
                <tr v-for="card in localCards" :key="card.id">
                    <td>{{card.id}}</td>
                    <td>{{card.name}}</td>
                    <td ><router-link :to="'/cards/'+card.id">👀</router-link></td>
                </tr>
            </tbody>
        </table>      
    </div>
</template>

<style>
div.container{
    font-family: 'Muli', sans-serif;
	display: flex;
	align-items: center;
}

.styled-table {
    margin-left: auto;
    margin-right: auto;
    border-collapse: collapse;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 920px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
    background-color: #009879;
    color: #ffffff;

}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
}
.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}

.styled-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}

</style>