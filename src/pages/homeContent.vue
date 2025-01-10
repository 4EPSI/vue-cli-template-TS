<template>
  <div style="text-align: center; margin: 2rem 0;">
    <h1 class="title">Star Wars</h1>
    <p>
      Type Script, Services, Composition API, Rest API
      <router-link to="/about">and more</router-link>
    </p>
  </div>

  <div v-if="loading">
    <ContentSpinner />
  </div>
  <div v-else>
    <table>
      <thead>
        <tr>
          <td>name</td>
          <td>gender</td>
          <td>mass</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(people, index) in peoples.results" :key="index">
          <td>{{ people.name }}</td>
          <td>{{ people.gender }}</td>
          <td>{{ people.mass }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import ContentSpinner from '@/components/UI/ContentSpinner.vue';
import DataService from '@/services/DataService';
import ResponseData from '@/types/ResponseData';
import Peoples from '@/types/Peoples'
export default defineComponent({
  components: { ContentSpinner },
  setup() {
    const loading = ref(true as boolean)
    const peoples = ref({} as Peoples)
    onMounted(() => getPeople())

    const getPeople = () => {
      DataService.getAll()
        .then((response: ResponseData) => {
          peoples.value = response.data
          loading.value = false
        })
        .catch((error:Error) => console.error(error)) 
    }
    console.log(peoples)
    return {
      loading,
      peoples
    }
  }
})
</script>