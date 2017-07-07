import * as ActionTypes from './actionTypes';
export default (state,action)=> {
    if (!state) {
        state = {};
    }
    switch (action.type){

        case ActionTypes.NEW_ROOM_INPUT_TITLE:{
            let newState=Object.assign({},state);
            newState.newRoomTitle=action.inputTitle;
            return newState;
        }
        case ActionTypes.SEND_GROUP_CHAT_MESSAGE:{
            console.log('SEND_GROUP_CHAT_MESSAGE in reducer')
            const socket=state.socket;
            socket.emit(action.roomId, state.chatInput.chatInputMessage)
            let newState=Object.assign({},state);
            newState.chatInput.chatInputMessage=null;
            newState.chatInput.sendDisable=true;
            return newState;
        }
        case ActionTypes.SERVER_BROADCAST_MESSAGE:{

            let newState=Object.assign({},state);
            let groupChatRooms=newState['groupChatRooms'];
            console.log(JSON.stringify(groupChatRooms));
            if(groupChatRooms){
                for(let _room of groupChatRooms){
                    if(action.roomId===_room.roomId){
                        _room.chatMessages.push(action.chatMessage);
                        _room.listened=true;
                    }
                }
            }
            return newState;
        }
        case ActionTypes.CHAT_INPUT_MESSAGE:{
            let newState=Object.assign({},state);
            // console.log('to reduce state when chat input')
            newState.chatInput.chatInputMessage=action.inputMessage;
            newState.chatInput.sendDisable=false;
            return newState;
        }
        default:
        {
            return state;
        }
    }
}