import { connect } from 'react-redux'
import { editComponent } from '../../../../actions/EditingActions'
import { storage } from '../../../../cache/ComponentCache'
import UserContainer from './UserContainer'


const mapStateToProps = (state) => {
  return {
    components: state.xyclone.components,
    currComponent: state.xyclone.currComponent,
    currComponentId: state.xyclone.currComponentId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEditorChildClick: (id) => {
      console.log('ON EDITOR CHILD CLICK ', id);
      let component = storage[id];
      dispatch(editComponent(component, id))
    }
  }
}



const UserContainerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer)

// const EditorContainer = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Editor)

export default UserContainerContainer;