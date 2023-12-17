<template>
     <div>
    <h2>Lista de Usuários</h2>
    <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Usuário</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.usuario_id">
          
          <td>{{ usuario.usuario_id }}</td>
          <td>{{ usuario.usuario }}</td>
          <td>
            <button @click="editarUsuario(usuario.usuario_id)">Editar</button>
            <button @click="excluirUsuario(usuario.usuario_id)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
</div>
  </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { request } from '@/plugins/axios';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  

  const usuarios = ref([]);
  
  const carregarUsuarios = async () => {
    try {
      const response = await request.get('/api/cadastro');
      usuarios.value = response.data;
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
      alert('Erro ao carregar usuários');
    }
  };
  
  const editarUsuario = (usuarioId) => {
    // Implemente a lógica para navegar para a página de edição com o ID do usuário
    console.log('Editar usuário com ID:', usuarioId);
    router.push({ name: 'EditarUsuario', params: { id: usuarioId } });
  };
  
  const excluirUsuario = async (usuarioId) => {
    try {
      const response = await request.delete(`/api/cadastro/${usuarioId}`);
      alert(response.data.message);
      carregarUsuarios();
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
      alert('Erro ao excluir usuário');
    }
  };
  
  onMounted(carregarUsuarios);
  </script>

  <style>
  .table-container {
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #f5f5f5;
  }

  @media (max-width: 600px) {
    /* Estilos para telas menores que 600 pixels de largura */
    th, td {
      padding: 0px;
      font-size: 14px;
      white-space: nowrap; /* Evita que o texto quebre para a próxima linha */
      overflow: hidden;
      text-overflow: ellipsis; 
      text-align: center;
    }

    th {
      text-align: center;
    }
  }
</style>