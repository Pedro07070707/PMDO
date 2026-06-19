import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  Alert,
} from "react-native";

export default function PalpiteCopaScreen() {
  const [nome, setNome] = useState<string>("");
  const [palpite, setPalpite] = useState<string>("");

  const enviarPalpite = (): void => {
  if (nome.trim() === "") {
    Alert.alert("Atenção", "Digite seu nome.");
    return;
  }

  if (palpite.trim() === "") {
    Alert.alert("Atenção", "Digite seu palpite antes de enviar.");
    return;
  }

  Alert.alert(
    "✅ Palpite Enviado!",
    `Nome: ${nome}\nPalpite: ${palpite}`,
    [
      {
        text: "OK",
        onPress: () => {
          setNome("");
          setPalpite("");
        },
      },
    ]
  );

  window.alert(`Nome: ${nome}\nPalpite: ${palpite}`);
  
};

  return (
    <View style={styles.container}>
      {/* Imagem acima do título */}
      <Image
        source={require("../../assets/images/copa26.png")}
        resizeMode="contain"
        style={styles.imagem}
      />

      {/* Título */}
      <Text style={styles.titulo}>🏆 Palpite da Copa do Mundo</Text>

      {/* Subtítulo */}
      <Text style={styles.subtitulo}>
        Quem você acha que será o campeão?
      </Text>

      {/* Caixa de texto */}
      {/* Campo Nome */}
      <TextInput
        style={styles.caixaTexto}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      {/* Campo Palpite */}
      <TextInput
        style={styles.caixaTexto}
        placeholder="Digite o nome da seleção"
        value={palpite}
        onChangeText={setPalpite}
      />

      {/* Botão */}
      <View style={styles.botaoContainer}>
        <Button
          title="Enviar Palpite"
          color="rgba(0, 67, 100, 1)"
          onPress={enviarPalpite}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  imagem: {
    width: 300,
    height: 300,
    alignSelf: "center",
    marginBottom: 15,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "rgba(0, 67, 100, 1)",
    marginBottom: 10,
    textAlign: "center",
  },

  subtitulo: {
    fontSize: 18,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
    fontStyle: "italic",
  },

  caixaTexto: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 10,
    backgroundColor: "#FFF",
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },

  botaoContainer: {
    width: "100%",
  },
});