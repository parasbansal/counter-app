import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'

import { Text } from 'native-base'

export class DeleteItem extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.deleteItem}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Delete Item</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyContainer}>
            <Text style={styles.bodyText}>Are you sure you want to delete?</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={[styles.button, styles.buttonNo]} onPress={this.props.close}>
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.props.deleteItem}>
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default DeleteItem

const styles = {
  deleteItem: {
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
  bodyText: {
    fontSize: 20,
    color: "#eeeeee",
    textAlign: "center"
  },
  buttons: {
    flexDirection: "row",
    height: "20%",
  },
  button: {
    flex: 1,
    backgroundColor: "#ffffff55",
    flexDirection: "column",
    justifyContent: "center"
  },
  buttonNo: {
    backgroundColor: "#ffffff66"
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
  }
}
