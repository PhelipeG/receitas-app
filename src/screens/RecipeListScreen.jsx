import { SafeAreaView, Text, View } from "react-native";
import { Header } from "../components/Header";
import { SearchFilter } from "../components/SearchFilter";
import { RecipeCard } from "../components/RecipeCard";
import { CategoriesFilter } from "../components/CategoriesFilter";


export default function RecipeListScreen() {
    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 29 }}>

            <Header headerText={'Hi,Luis Felipe'}   />

            <SearchFilter icon="search" placeholder={'Busque sua receita favorita'} />


            <View style={{ marginTop: 22 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Categorias</Text>
                <CategoriesFilter />
            </View>

            <View style={{ marginTop: 22, flex: 1 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Receitas Famosas</Text>
                <RecipeCard />
            </View>


        </SafeAreaView>
    )
}