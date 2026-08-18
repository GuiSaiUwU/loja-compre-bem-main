import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import TelaListaProdutos from "./TelaListaProdutos";
import TelaDetalheProduto from "./TelaDetalheProduto";

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function TelaPrincipal() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ListaProdutos">
                <Stack.Screen name="ListaProdutos" component={TelaListaProdutos} />
                <Stack.Screen name="DetalheProduto" component={TelaDetalheProduto} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}