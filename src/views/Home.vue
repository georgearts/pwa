<script setup>
  
import { ref } from 'vue';
import { request } from '@/plugins/axios';

const ip = ref('');
const result = ref(null);
const error = ref(null);

const submitForm = async () => {
  try {
    const response = await request.post('/api/consultar', { ip: ip.value });
    result.value = response.data;
    error.value = null;
  } catch (err) {
    result.value = null;
    error.value = err.response.data.error || 'Erro ao consultar o IP';
  }
};

</script>

<template>
  <v-card color="primary" class="mb-5">
    <v-card-title class="text-h5 text-center">
      Consulta Rápida de ASN
    </v-card-title>

    <div class="d-flex justify-center align-center flex-column container_pesquisa">
      <form @submit.prevent="submitForm" class="text-center">
        <input v-model="ip" type="text" class="search-text" placeholder="Digite o IP para consultar" name="ip" style="background-color: white;">
        <button type="submit" class="consultar-btn">Consultar</button>
      </form>
    </div>
    <br>
  </v-card>
  <div class="consulta-container">
    <p v-if="result">
      <strong class="consulta-title">Consulta de IP</strong>
      <br /><br />
      <strong>Informações do Prefixo:</strong>
      <br />
      Prefixo: {{ result.prefixData.prefix }}
      <br />
      IP: {{ result.prefixData.ip }}
      <br />
      CIDR: {{ result.prefixData.cidr }}
      <br /><br />
      <strong>Informações do ASN:</strong>
      <br />
      ASN: {{ result.asnData.asn }}
      <br />
      Nome ASN: {{ result.asnData.name }}
      <br />
      Descrição ASN: {{ result.asnData.description }}
      <br />
      Código do País ASN: {{ result.asnData.country_code }}
    </p>
    <p v-else>Nenhum resultado disponível.</p>
    <!-- ... outros códigos ... -->
  </div>
  <!-- <meu-componente></meu-componente> -->

</template>


<style scoped>
/* Estilos específicos para este componente */
.search-text {
  width: 200px; /* Defina a largura desejada para o campo de texto */
  padding: 8px; /* Adicione algum preenchimento para melhorar a aparência */
  border: 1px solid #ccc; /* Adicione uma borda para destacar o campo de texto */
  border-radius: 4px; /* Adicione bordas arredondadas */
  margin-right: 8px; /* Adicione margem à direita para separar do botão */
}

.consultar-btn {
  background-color: #007BFF; /* Cor de fundo do botão */
  color: #fff; /* Cor do texto do botão */
  border: none; /* Remova a borda do botão */
  padding: 10px 20px; /* Adicione algum preenchimento para melhorar a aparência */
  border-radius: 4px; /* Adicione bordas arredondadas */
  cursor: pointer; /* Altere o cursor ao passar sobre o botão */
}

.container_pesquisa {
  max-width: 400px; /* Ajuste conforme necessário */
  margin: 0 auto; /* Centraliza horizontalmente */
}

.consulta-container {
  text-align: center; /* Centraliza horizontalmente */
}

.consulta-title {
  font-weight: bold;
  text-decoration: underline orange;
  font-size: 1.2em; /* Ajuste conforme necessário */
}
</style>
