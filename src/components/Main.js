import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Container, Content, Icon } from 'native-base'

// Components
import CustomModal from './common/CustomModel'
import AppHeader from './Header/AppHeader'
import CounterList from './CounterList/CounterList'
import AddItem from './CounterList/AddItem'
import DeleteItem from './CounterList/DeleteItem'

// Models
import ItemModel from "../model/Item"

export class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
      items: [],
      selectedItem: {},
      addModalVisible: false,
      deleteModalVisible: false,
    }

    this.handleChangeCount = this.handleChangeCount.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
    this.openDeletePopup = this.openDeletePopup.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
  }

  // Life cycle functions

  componentDidMount(){
    const self = this
    ItemModel.getAllItems((items) => {
      self.setState({ items: items })
    })
  }


  // Handler functions

  handleChangeCount(id, type) {
    const { items } = this.state
    const targetItemIndex = items.findIndex(item => item._id === id)
    if (type === "inc") {
      items[targetItemIndex].count++
    } else {
      items[targetItemIndex].count--
    }
    this.setState({
      items
    })
    ItemModel.updateItemCount(id, items[targetItemIndex].count)
  }

  handleAddItem(newItemName){
    const self = this
    const { items } = this.state
    const newItem = {
      name: newItemName,
      count: 0
    }

    ItemModel.insertItem(newItem, (item) => {
      items.push(item)
      this.setState({
        items,
        addModalVisible: false
      })
    })
  }

  openDeletePopup(item){
    this.setState({
      deleteModalVisible: true,
      selectedItem: item
    })
  }

  handleDeleteItem(){
    const { selectedItem, items } = this.state
    const index = items.indexOf(x => selectedItem._id === x._id)
    items.splice(index, 1)
    ItemModel.deleteItem(selectedItem._id)
    this.setState({
      deleteModalVisible: false,
      items,
      selectedItem: {}
    })
  }

  // Render functions

  render() {
    return (
      <Container>
        <AppHeader />
        <Content style={styles.content}>
          <CounterList items={this.state.items} changeCount={this.handleChangeCount} deleteItem={this.openDeletePopup} />
        </Content>
        <TouchableOpacity style={styles.fab} onPress={() => {this.setState({ addModalVisible: true })} }>
          <Icon name="add" style={{color: "#ddd"}} />
        </TouchableOpacity>
        <CustomModal visible={this.state.addModalVisible} close={() => { this.setState({ addModalVisible: false }) }}>
          <AddItem addItem={(item) => { this.handleAddItem(item) }} />
        </CustomModal>
        <CustomModal visible={this.state.deleteModalVisible} close={() => { this.setState({ deleteModalVisible: false }) }}>
          <DeleteItem item={this.state.selectedItem} deleteItem={this.handleDeleteItem} close={() => { this.setState({ deleteModalVisible: false }) }} />
        </CustomModal>
      </Container>
    )
  }
}

export default Main

const styles = {
  content: {
    backgroundColor: "#242424"
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 70,
    height: 70,
    borderRadius: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#555",
  },
}
