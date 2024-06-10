<script setup>
import {ref, onBeforeMount} from 'vue'
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { useCharacterStore } from '../stores/characters';
const route = useRoute()

const characterStore = useCharacterStore()
const {currentChar} = storeToRefs(characterStore)
const fullChar = ref({})
const charId = route.params.charId

const fetchOneChar = async () => {
  const charEndPoint = `https://api.disneyapi.dev/character/${charId}`
  const reponse = await fetch(charEndPoint);
  const datas   = await reponse.json();
  const {data,info} = datas
  fullChar.value = data
}

onBeforeMount(async()=>{
	console.warn('Character stored in pinia >>> ',currentChar)
    await fetchOneChar()
})




</script>

<template>
  <div>
        <div class="film-container">
            <div class="film">
                <div class="film-preview" >
                    <img :src='fullChar.imageUrl' alt='char' />
                </div>
                <div class="film-info">
                    <h2>{{fullChar.name}}</h2>
					<ul>
						<li v-for="film in fullChar.films" >{{film}}</li>
					</ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.film-container {
    font-family: 'Muli', sans-serif;
	display: flex;
	align-items: center;
	justify-content: center;
    color:black;
	flex-direction: column;
}

.film {
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
	display: flex;
	max-width: 100%;
	margin: 20px;
	overflow: hidden;
	width: 700px;
}

.film h6 {
	opacity: 0.6;
	margin: 0;
	letter-spacing: 1px;
	text-transform: uppercase;
}

.film h2 {
	letter-spacing: 1px;
	margin: 10px 0;
}

.film-preview {
    background-color: #009879;
	color: #fff;
	padding: 30px;
	max-width: 250px;
}
.film-preview img{
    max-height:250px;
}
.film-preview a {
	color: #fff;
	display: inline-block;
	font-size: 12px;
	opacity: 0.6;
	margin-top: 30px;
	text-decoration: none;
}

.film-info {
	padding: 30px;
	position: relative;
	width: 100%;
}
</style>