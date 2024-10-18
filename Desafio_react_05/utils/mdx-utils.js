import { api } from '../services/api';

export const getPosts = async () => {
  const { data } = await api.get('/posts');

  if (data) {
    return data;
  }

  return [];
};

export const getPostById = async (id) => {
  //TODO: BUSCAR UM POST EM ESPECIFICO.
  const {data} = await api.get(`/posts?id=eq.${id}`)

  if (data) {
    return data;
  }

  return [];
};
