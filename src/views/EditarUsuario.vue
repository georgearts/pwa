<template>
    <div class="user-registration">
        <h2>Editar Usuário {{ $route.params.id }}</h2>
      <form @submit.prevent="atualizarUsuario">
        <div class="form-group">
             <label for="usuario">Usuário:</label>
             <input type="text" id="usuario" name="usuario" v-model="usuario" required>
        </div>

        <div class="form-group">
             <label for="senha">Senha:</label>
             <input type="password" id="senha" name="senha" v-model="senha" required>
        </div>

        <div class="form-group">
             <label for="nome">Nome:</label>
             <input type="text" id="nome" name="nome" v-model="nome" required>
        </div>

        <div class="form-group">
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" v-model="email" required>
        </div>
        
        <button type="submit">Atualizar</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { request } from '@/plugins/axios';
  import { useRoute, useRouter } from 'vue-router';

  const route = useRoute();
  const router = useRouter();

  const usuarioId = ref(route.params.id);
  const usuario = ref('');
  const senha = ref('');
  const nome = ref('');
  const email = ref('');
  
  const carregarUsuario = async () => {
    try {
      const response = await request.get(`/api/cadastro/localizar?usuario_id=${usuarioId.value}`);
      const usuarioData = response.data;
          if (usuarioData) {
              nome.value = usuarioData.nome;
              email.value = usuarioData.email;
              usuario.value = usuarioData.usuario;
              senha.value = usuarioData.senha;
}
      
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
      router.push({ name: 'ListaUsuarios' });
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      alert('Erro ao atualizar usuário');
    }
  };
  
  onMounted(() => {
     // Extrair o ID do usuário da rota usando o Vue Router
    
  
    // Carregar as informações do usuário ao inicializar o componente
    carregarUsuario();
  });
  </script>
  
  <style>
.user-registration {
  max-width: 400px;
  margin: auto;
}

.registration-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #ff8800;
  color: #fff;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #fbc01c;
}
</style>