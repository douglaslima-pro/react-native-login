import { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={styles.container}>

        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/2956/2956744.png" }}
          style={styles.icone}
          alt="Logo"
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Telefone, nome de usuário ou email"
            keyboardType="email-address"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}>
          </TextInput>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}>
          </TextInput>
        </View>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.link}>Esqueceu a senha?</Text>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
    padding: 20,
  },
  icone: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 32,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: '100%',
  },
  botao: {
    width: '100%',
    height: 50,
    backgroundColor: '#1E90FF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
  },
  link: {
    color: '#1E90FF',
    fontSize: 14,
    textAlign: 'right'
  }
});
