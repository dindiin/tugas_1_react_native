/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar
} from 'react-native';
import MenuBerita from "./Component/MenuBerita";
import MenuGame from "./Component/MenuGame";
import MenuHits from "./Component/MenuHits";
import MenuUtama from "./Component/MenuUtama";

const Header = () => {
  return(
    <View>
      <Text>Halaman Header</Text>
    </View>
  );
};

const Footer = () => {
  var niomic="@Niomic";
  return(
    <View>
      <Text>Footer {niomic}</Text>
    </View>
  );
};

class App extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor = "green" />
        <Header />
        <MenuUtama />
        <MenuGame />
        <MenuBerita />
        <MenuHits />
        <Footer />
      </View>
    );
  }
}

export default App;
