import {connect} from 'react-redux';
import {ListView} from "react-native";
import Component from './component';

function getRoomById(id,state){
    let rooms=state.forHelp.groupChatRooms;
    for(let room of rooms){
        if (room.roomId===id){
            return room;
        }
    }
}
function getCHats(state){
    let roomId='1';
    let room=getRoomById(roomId,state);

    return room.chatMessages;
}
function mapStateToProps(state,ownProps){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource= ds.cloneWithRows(getCHats(state));
    return{
        bdMap: state.forHelp.bdMap,
        dataSource:dataSource
    }
}
export default connect(mapStateToProps)(Component);