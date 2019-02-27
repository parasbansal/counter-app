import React, { Component } from 'react'
import { View, Modal, TouchableOpacity } from 'react-native'

import { Icon } from 'native-base'

export class CustomModal extends Component {
  render() {
    return (
      <Modal
        style={styles.modal}
        animationType="slide"
        transparent={true}
        visible={this.props.visible}
        onRequestClose={() => {}}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.closeBox} onPress={this.props.close}>
            <Icon name="close" style={{color: "#ddd"}} />
          </TouchableOpacity>
          {this.props.children}
        </View>
      </Modal>
    )
  }
}

export default CustomModal

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#00000088",
  },
  closeBox: {
    position: "absolute",
    top: 20,
    right: 20,
    width: 50,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    borderColor: "#fff",
    borderWidth: 1,
  }
}
