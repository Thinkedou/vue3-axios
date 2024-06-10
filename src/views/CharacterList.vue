<script setup>
import { onBeforeMount,ref, watch } from 'vue';
import {useRouter,useRoute} from 'vue-router'

const router = useRouter() // router pour changer la route
const route  = useRoute() // route pour lire la route et ses params

const localCharacters = ref([])
const isLoading       = ref(true)
const nbCharacters    = ref(0)
const page            = ref(1)

const fetchCharacters = async ()=> {
  
  const reponse = await fetch("https://api.disneyapi.dev/character/?page="+page.value)
  const datas   = await reponse.json()
  const {data,info} = datas
  nbCharacters.value= info.totalPages*info.count
  localCharacters.value = data
  isLoading.value = false

}

watch(route, async (newValue, oldValue) => {
    console.warn(newValue.query.page)
    initPage()
    await fetchCharacters()
})

const goToDetail = (charId)=>{
    router.push({
        name:'chara-details',
        params:{
            charId
        }
    })
}

const nextPage = async()=>{
    page.value++
    router.push({
        query:{
         page:page.value
        }
    })
    // await fetchCharacters()
}
const prevPage = async()=>{
    page.value--
    // await fetchCharacters()
}

const initPage = ()=>{
    const {query} = route
    const {page:currentPage=false} = query 
    if(currentPage){
        page.value = +currentPage
    }
}

onBeforeMount(async()=>{
    console.log('ON BEFORE MOUNT',)
    initPage()
    await fetchCharacters()
})

</script>

<template>
    <h2>[{{nbCharacters}}] page: {{ page }}</h2>
    <button type="button">
        Prev Page
    </button>
    
    <button type="button" @click="nextPage">
        Next Page
    </button>

    <div v-if="isLoading">
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
                <tr 
                    v-for="char in localCharacters"
                    :key="char._id"
                >
                    <td>{{char._id}}</td>
                    <td>{{char.name}}</td>
                    <td @click="goToDetail(char._id)">👀</td>
                </tr>
            </tbody>
        </table>      
    </div>
</template>

<style scoped>
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