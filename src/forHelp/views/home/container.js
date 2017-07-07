
import {connect} from 'react-redux';
import ForHelpHome from './component';
import * as actions from '../../actions';

function mapStateToProps(state,ownProps){
    return{
        roomTitle: state.forHelp.newRoomTitle,
    }
}
function mapDispatchToProps(dispatch,ownProps) {
    return{
        onChangeText:(text) => {
            dispatch(actions.newRoomInputTitle(text))
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(ForHelpHome);