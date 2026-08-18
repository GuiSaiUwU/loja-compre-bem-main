export type RootStackParamList = {
  ListaProdutos: undefined;
  DetalheProduto: { produto: Produto };
};

export type Produto = {
  id: number;
  nome: string;
  preco: string;
  descricao?: string;
};