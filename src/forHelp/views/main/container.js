import * as Actions from '../../actions'
import {connect} from 'react-redux';
import ForHelpMain from './component'

function mapStateToProps(state,ownProps){
    return{
        chatInputMessage: state.forHelp.chatInput.chatInputMessage,
        sendDisable:state.forHelp.chatInput.sendDisable,
        host:state.app.user,
        rooms:state.forHelp.groupChatRooms
    }
}
function mapDispatchToProps(dispatch,ownProps) {
    let rooms=ownProps.screenProps.rooms;
    let room=rooms[0];
    console.log('room:')
    console.log(JSON.stringify(room))
    console.log('room listened:'+room.listened)
    if (!room.listened){
        ownProps.screenProps.socket.on(room.roomId,(message)=>{
            dispatch(Actions.serverBroadcastMessage(room.roomId,'userId',message));
        });
    }
    return{
        onInputMessage:(text)=>{
            dispatch(Actions.chatInputMessage(text));
        },
        onSendMessage:()=> {
            dispatch(Actions.sendGroupChatMessage(room.roomId,'userId'));
        },

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ForHelpMain);
