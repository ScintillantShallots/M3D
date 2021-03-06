import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'react';
import { storage } from '../../../cache/ComponentCache';
import Drawer from 'material-ui/Drawer';

import BodyContextContainer from './BodyContext/BodyContextContainer';

import TextboxContextContainer from '../UserComponents/Textbox/TextboxContextContainer'
import NavbarContextContainer from '../UserComponents/Navbar/NavbarContextContainer';
import ImageContextContainer from '../UserComponents/Image/ImgContextContainer';
import UserContainerContextContainer from '../UserComponents/UserContainer/UserContainerContextContainer'
import GalleryPostContextContainer from '../UserComponents/GalleryPost/GalleryPostContextContainer'
import CarouselContextContainer from '../UserComponents/Carousel/CarouselContextContainer'
require("../../../Basic.less");

class ContextMenuSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currComponent: '',
      currComponentId: '',

    }
  }
  componentDidMount () {
    this.setState({
      currComponent: this.props.currComponent,
      currComponentId: this.props.currComponentId
    })
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      currComponent: newProps.currComponent,
      currComponentId: newProps.currComponentId
    })
  }

  render() {
    // let contextToRender;
    // console.log(this.props, 'THESE ARE THE PROPS');
    // console.log(this.props.currComponentId, 'THIS IS CURRCOMPONENT ID');

    // Object hash for rendering a react component based on component added
    let contextContainerToRender = {
      Textbox: () => <TextboxContextContainer />,
      Navbar: () => <NavbarContextContainer />,
      Image: () => <ImageContextContainer />,
      UserContainer: () => <UserContainerContextContainer />,
      GalleryPost: () => <GalleryPostContextContainer />,
      Carousel: () => <CarouselContextContainer />,
    }

    if (this.props.currComponent === null) {
      return null;
    } else if (this.props.currComponentId === 'body' + this.props.currProjectId) {
      return (
        <Drawer open={true} openSecondary={true} width={240}>
          <BodyContextContainer />
        </Drawer>
      )
    } else {
      let component = this.props.currComponent;
      let { type } = component;

      // Only render a context menu if there is a current component selected
      let renderContainer = type === undefined ?
        null : contextContainerToRender[type]();
      return (
        <Drawer open={true} openSecondary={true} width={240}>
          {
            renderContainer
          }
        </Drawer>
      )
    }
  }
}


export default ContextMenuSidebar;
