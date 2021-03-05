import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  TouchableHighlight,
} from 'react-native';
const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#36B1F0',
    marginBottom: 1,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});
export default class Screenone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocussed: false,
      isTabItemClickable: true,
      arrayTabs: [
        {
          tabTitle: 'Go to Home',
          color: '#49475B',
          isSelected: false,
          isFocussed: false,
          gotoscreen: 'Screenhome',

          data: {
            title: 'Go to Screen One',

            color: '#36b1f0',
          },
        },
      ],
    };
  }

  _renderItem = (item) => {
    const {tabTitle, data, isSelected} = item;
    const color = isSelected ? 'red' : 'blue';

    return (
      <>
        <TouchableHighlight
          activeOpacity={0.8}
          onPress={() => {
            this.props.navigation.replace(item.gotoscreen);
          }}
          onFocus={() => {
            item.isFocussed = true;
            this.setState({});
          }}
          onBlur={() => {
            item.isFocussed = false;
            this.setState({});
          }}>
          <View
            style={[
              styles.row,
              {
                backgroundColor: item.isFocussed ? 'red' : 'grey',
              },
            ]}>
            <Text style={styles.text}>{tabTitle}</Text>
          </View>
        </TouchableHighlight>
      </>
    );
  };

  render() {
    return (
      <View styles={{padding: '30px'}}>
        <View>
          <Text>Hey! This is Screen one</Text>
        </View>

        <FlatList
          data={this.state.arrayTabs}
          renderItem={({item}) => this._renderItem(item)}
          keyExtractor={(item) => item.tabTitle}
        />
      </View>
    );
  }
}
