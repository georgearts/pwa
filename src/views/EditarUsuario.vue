<template>
    <div>
        <h2>Editar Usuário {{ $route.params.id }}</h2>
      <form @submit.prevent="atualizarUsuario">
        <label for="usuario">Usuário:</label>
        <input type="text" v-model="usuario" required>
        
        <label for="senha">Senha:</label>
        <input type="password" v-model="senha" required>
        
        <label for="nome">Nome:</label>
        <input type="text" v-model="nome" required>
        
        <label for="email">E-mail:</label>
        <input type="email" v-model="email" required>
        
        <button type="submit">Atualizar</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { request } from '@/plugins/axios';
  
  

  const usuarioId = ref(null);
  const usuario = ref('');
  const senha = ref('');
  const nome = ref('');
  const email = ref('');
  
  const carregarUsuario = async () => {
    try {
      const response = await request.get(`/api/cadastro/localizar?usuario_id=${usuarioId.value}`);
      const usuarioData = response.data[0];
        nome.value = usuarioData.nome;
        email.value = usuarioData.email;
        usuario.value = usuarioData.usuario;
        senha.value = usuarioData.senha;
      
    } catch (error) {
      console.error('Erro ao carregar usuário:', error);
      alert('Erro ao carregar usuário');
    }
  };
  
  const atualizarUsuario = async () => {
    try {
      const response = await request.put(`/api/cadastro/${usuarioId.value}`, {
        nome: nome.value,
        email: email.value,
        usuario: usuario.value,
        senha: senha.value,
      });
  
      alert(response.data.message);
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      alert('Erro ao atualizar usuário');
    }
  };
  
  onMounted(() => {
     // Extrair o ID do usuário da rota usando o Vue Router
    usuarioId.value = $route.params.id;  
  
    // Carregar as informações do usuário ao inicializar o componente
    carregarUsuario();
  });
  </script>
  