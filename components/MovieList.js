import React, { PureComponent } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";

import MovieListItem from "./MovieListItem";

export default class MovieList extends PureComponent {
  render() {
    return (
      <FlatList
        data={this.props.data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <MovieListItem data={item} />}
      />
    );
  }
}
