<template>
  <div class="user-registration">
    <h2>Cadastro de Usuário</h2>
    <form @submit.prevent="cadastrarUsuario" class="registration-form">
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
      
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { request } from '@/plugins/axios';

const router = useRouter();

const usuario = ref('');
const senha = ref('');
const nome = ref('');
const email = ref('');

const cadastrarUsuario = async () => {
  try {
    const response = await request.post('/api/cadastro', {
      
      nome: nome.value,
      email: email.value,
      usuario: usuario.value,
      senha: senha.value,
    });

    // Verifique se a resposta contém uma propriedade 'message'
    if (response.data && response.data.message) {
      alert(response.data.message);
     
    } else {
      // Se a resposta não contiver 'message', exiba uma mensagem genérica
      alert('Usuário cadastrado com sucesso'); 
      
    }
    router.push({ name: 'ListaUsuarios' });
    
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);

    // Verifique se a resposta de erro contém uma propriedade 'message'
    if (error.response && error.response.data && error.response.data.message) {
      alert(`Erro ao cadastrar usuário: ${error.response.data.message}`);
    } else {
      // Se a resposta de erro não contiver 'message', exiba uma mensagem genérica
      alert('Erro ao cadastrar usuário');
    }
  }
};
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