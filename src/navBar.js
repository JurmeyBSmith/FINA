import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import { Menu } from 'semantic-ui-react';

class NavBar extends Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (

      <Menu>
        <Menu.Menu position='right'>
          <Menu.Item
            name='home'
            position='left'
            active={activeItem === 'id'}
            onClick={this.handleItemClick}
            href="/">
            <Header as="h1" position='left' textAlign='left'>FINA DATABASE</Header>
      </Menu.Item>
          <Menu.Item
            name='CreateProfile'
            position='right'
            active={activeItem === 'id'}
            onClick={this.handleItemClick}
            href="/newProfile">CreateProfile
            </Menu.Item>
          
        </Menu.Menu>
      </Menu>

    );
  }
}

export default NavBar;