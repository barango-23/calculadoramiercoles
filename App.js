import { useState, useEffect } from 'react';
import { StyleSheet, Text, View,  TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { styles, myimage } from './assets/styles/styles1'

export default function App() {
  // States
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState('');
  //
  let mymess = "Este es el pie de la GUI";
  let mimage = "cactual.jpg"
  return (
    <View style={styles.container}>
      <Banner imagename={mimage}></Banner>
      <View style={{ flex: 8, backgroundColor: 'powderblue', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:40,fontFamily:'cursive'}}>Calculadora</Text> 
        <Text style={{fontSize:20, fontFamily:'cursive'}}>Valor 1</Text>
        <TextInput
          label='Ingrese Valor 1'
          onChangeText={value1 => setValue1(value1)}
          value={value1}
          style={{backgroundColor: 'pink'}}
          left={<TextInput.Icon icon="calculator"/>}
        />
        <Text style={{fontFamily:'cursive', fontSize:20}}>Valor 2</Text>
        <TextInput
          label='Ingrese Valor 2'
          onChangeText={value2 => setValue2(value2)}
          value={value2}
          style={{backgroundColor: 'pink'}}
          left={<TextInput.Icon icon="numeric"/>}
        />
        <text style={{fontFamily:'cursive'}}>Resultado</text>
        <text>{result}</text>

        
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Button style={{backgroundColor:'pink'}} icon="numeric-positive-1" mode="contained" onPress={() => {
          setResult(parseInt(value1)+ parseInt(value2))
        }}>
          Sumar
   
  </Button>
  <Button style={{backgroundColor:'pink'}}  icon="numeric-negative-1" mode="contained" onPress={() =>{
 setResult(parseInt(value1)- parseInt(value2))
  }}>
          Restar
   
  </Button>

        </View>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>

        <Button style={{backgroundColor:'pink'}} icon="multiplication" mode="contained" onPress={() => {
          setResult(parseInt(value1)* parseInt(value2))
        }}>
    Multiplicar
   
  </Button>
  <Button  style={{backgroundColor:'pink'}} icon="division" mode="contained" onPress={() => {
    setResult(parseFloat(value1)/ parseFloat(value2))
  }}>
          Dividir
   
  </Button>

        </View> 
        <View style={{ flexDirection: 'row', marginTop: 20 }}>

<Button style={{backgroundColor:'black'}}  icon="cancel" mode="contained" onPress={() =>{
  setValue1(""); //metodo borrar
  setValue2(""); //tarea traer exponente y radical y borrar el N/A
  setResult("");
}}>
Limpiar

</Button>

</View>

      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Footer message="CALCULADORA"></Footer>
      </View>
    </View>
  );
}





