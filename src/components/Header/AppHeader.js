import React, { Component } from 'react'
import { Header, Title, Body } from 'native-base'

export class AppHeader extends Component {
  render() {
    return (
      <Header noLeft noRight style={{ backgroundColor: '#111111' }} androidStatusBarColor="#111111">
        <Body>
          <Title>Counter</Title>
        </Body>
      </Header>
    )
  }
}

export default AppHeader
