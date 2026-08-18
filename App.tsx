import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaListaProdutos from './src/telas/TelaListaProdutos';
import TelaDetalheProduto from './src/telas/TelaDetalheProduto';
import { RootStackParamList } from './src/types'
import TelaPrincipal from './src/telas/TelaPrincipal';


export default function App() {
  return (
    <TelaPrincipal/>
  );
}
