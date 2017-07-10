import * as ActionTypes from './actionTypes';
let roomId=0;
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
        case ActionTypes.CREATE_NEW_ROOM:{
            let newState=Object.assign({},state);
            let newRoom={};
            //{roomId:'1',roomName:'测试聊天室',chatMessages:['系统:欢迎使用千应救助系统','点击此处 显示/隐藏 聊天文字'],listened:false,host:user}
            newRoom.roomId=++roomId;
            newRoom.roomName=action.roomTitle;
            newRoom.newRoomTitle=action.inputTitle;
            newRoom.chatMessages=['系统:欢迎使用千应救助系统','点击此处 显示/隐藏 聊天文字'];
            newRoom.host=action.host;
            newRoom.type=action.roomType;
            newState.groupChatRooms.push(newRoom);
            console.log('push a new room')
            console.log(JSON.stringify(newState.groupChatRooms));
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