import React, { PureComponent } from "react";
import {
  View,
  TouchableHighlight,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  Platform
} from "react-native";

export default class MovieListItem extends PureComponent {
  render() {
    const { data } = this.props;
    const imageUri = data.backdrop_path
      ? `https://image.tmdb.org/t/p/w300/${data.backdrop_path}`
      : `https://image.tmdb.org/t/p/w300/${data.poster_path}`;
    return (
      <TouchableHighlight>
        <View>
          <Image
            source={{
              uri: imageUri
            }}
            style={{
              width: Dimensions.get("window").width,
              height: Dimensions.get("window").width / 2
            }}
            resizeMode="cover"
          />
          <Text style={styles.title}>{data.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    position: "absolute",
    bottom: 10,
    width: Dimensions.get("window").width,
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto",
    fontWeight: "bold",
    paddingHorizontal: 15
  }
});
