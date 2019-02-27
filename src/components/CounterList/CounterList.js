import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'

import { Text } from 'native-base'

export class CounterList extends Component {
  renderList() {
    const { items } = this.props
    return items.map(item => {
      return (
        <View style={styles.item} key={item._id}>
          <View style={styles.itemNameContainer}>
            <View style={styles.itemName}>
              <Text style={styles.itemNameText}>{item.name}</Text>
            </View>
          </View>
          <View style={styles.countContainer}>
            <TouchableOpacity style={[styles.countButton, styles.countDec]} onPress={() => this.props.changeCount(item._id, "dec")}>
              <Text style={styles.countButtonText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.count} onLongPress={() => this.props.deleteItem(item)}>
              <Text style={styles.countText}>{item.count}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.countButton, styles.countInc]} onPress={() => this.props.changeCount(item._id, "inc")}>
              <Text style={styles.countButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    })
  }

  render() {
    return (
      <View>
        {this.renderList()}
      </View>
    )
  }
}

export default CounterList


const styles = {
  item: {
    height: 100,
    paddingTop: 15,
  },
  itemNameContainer: {
    height: "35%",
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "flex-start",
  },
  itemName: {
    width: "auto",
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "center",
    backgroundColor: "#666",
    paddingTop: 4,
    paddingHorizontal: 20,
    borderTopRightRadius: 10,
  },
  itemNameText: {
    fontSize: 17,
    textAlign: "center",
    color: "#fff",
  },
  countContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#222",
    flexDirection: "row",
    height: "65%",
  },
  countButton: {
    flex: 1,
    alignItem: "center",
    justifyContent: "center"
  },
  countButtonText: {
    textAlign: "center",
    fontSize: 30,
    color: "#fff"
  },
  countDec: {
    backgroundColor: "#454545"
  },
  countInc: {
    backgroundColor: "#555"
  },
  count: {
    flex: 4,
    alignItem: "center",
    justifyContent: "center",
    backgroundColor: "#343434"
  },
  countText: {
    textAlign: "center",
    fontSize: 24,
    color: "#fff"
  },
}
