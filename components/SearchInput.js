import React, { Component } from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export default class SearchInput extends Component {
  state = {
    text: ""
  };

  onChange = text => {
    this.setState({ text });
  };

  onSubmit = () => {
    const { onSearch } = this.props;

    if (onSearch) {
      onSearch(this.state.text);
    }
  };

  render() {
    const { placeholder } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.inputIcon}>
          <EvilIcons name="search" size={32} color="#999" />
        </View>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#999"
          clearButtonMode="always"
          autoCorrect={false}
          returnKeyType="search"
          onChangeText={this.onChange}
          onSubmitEditing={this.onSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: 50,
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 5
  },
  input: {
    flex: 1,
    paddingHorizontal: 5,
    fontSize: 18
  },
  inputIcon: {
    justifyContent: "center",
    alignItems: "center"
  }
});
