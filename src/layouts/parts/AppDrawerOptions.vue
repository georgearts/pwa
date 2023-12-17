<script setup>

</script>

<template>
  <v-list nav color="orange-darken-1">
    <v-list-item exact prepend-icon="mdi-home" title="Início" :to="{ name: 'Home' }"></v-list-item>
    <v-divider></v-divider>
    <v-list-item prepend-icon="mdi-account-group-outline" title="Cadastro" :to="{ name: 'Cadastro' }"></v-list-item>
    <v-divider></v-divider>
    <v-list-item prepend-icon="mdi-account-group-outline" title="Lista de Usuários" :to="{ name: 'ListaUsuarios' }"></v-list-item>
    <v-divider></v-divider>
    <v-list-item exact prepend-icon="mdi-account-group-outline" title="Users"></v-list-item>
  </v-list>
</template>

<style lang="scss" scoped>

</style>
