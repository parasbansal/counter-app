import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'

import { Text, Item, Input } from 'native-base'

export class AddItem extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: ""
    }

    this.handleAddButton = this.handleAddButton.bind(this)
  }

  handleAddButton() {
    if(this.state.name && this.state.name != ""){
      this.props.addItem(this.state.name)
    }
  }

  render() {
    return (
      <View style={styles.addItem}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Add New Item</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyContainer}>
            <Item regular style={styles.item}>
              <Input 
                style={styles.input} 
                placeholder='Enter item name' 
                placeholderTextColor="#aaa" 
                onChangeText={(name) => { this.setState({ name: name }) }} 
                value={this.state.name}
              />
            </Item>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {this.handleAddButton()}}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default AddItem

const styles = {
  addItem: {
    width: "80%",
    height: 300,
    backgroundColor: '#343434',
    borderRadius: 10,
  },
  header: {
    height: "20%",
    backgroundColor: "#ffffff22",
    flexDirection: "column",
    alignItem: "center",
    justifyContent: "center"
  },
  headerText: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
  },
  body: {
    height: "60%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItem: "center",
  },
  bodyContainer: {
    width: "90%",
    flexDirection: "column",
    justifyContent: "center"
  },
  item: {

  },
  input: {
    color: "#ffffff"
  },
  button: {
    height: "20%",
    backgroundColor: "#ffffff55",
    flexDirection: "column",
    alignItem: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
  }
}
