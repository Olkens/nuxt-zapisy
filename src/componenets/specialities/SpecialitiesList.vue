<template>
  <div>
    <div v-for="speciality in specialities.speciality">
      {{ speciality.name }}
    </div>
    <v-expansion-panels>
      <v-expansion-panel
          title="Title"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
      >
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script setup>
const {data: specialities} = await useFetch('/api/specialities')
</script>