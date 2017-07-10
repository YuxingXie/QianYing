
import {connect} from 'react-redux';
import ForHelpHome from './component';
import * as actions from '../../actions';

function mapStateToProps(state,ownProps){
    return{
        roomTitle: state.forHelp.newRoomTitle,
        host:state.app.user,
    }
}
function mapDispatchToProps(dispatch,ownProps) {
    return{
        onChangeText:(text) => {
            dispatch(actions.newRoomInputTitle(text))
        },
        createNewRoom:(roomTitle,host,type)=>{
            dispatch(actions.createNewRoom(roomTitle,host,type))
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(ForHelpHome);