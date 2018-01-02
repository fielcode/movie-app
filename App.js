import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Constants } from "expo";

import SearchInput from "./components/SearchInput";
import MovieList from "./components/MovieList";
import { popularMovies, searchMovies } from "./utils/api";

export default class App extends React.Component {
  state = {
    movies: [],
    searchText: ""
  };

  async componentDidMount() {
    const movies = await popularMovies();
    this.setState({
      movies
    });
  }

  onSearch = async text => {
    const movies = await searchMovies(text);
    this.setState({
      movies
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchInput
          placeholder="Pesquisar Filmes..."
          onSearch={this.onSearch}
        />
        <MovieList data={this.state.movies} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  }
});
