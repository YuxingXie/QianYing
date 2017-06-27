import * as ActionTypes from './ActionTypes';
export default (state,action)=>{
    console.log('action.type:'+action.type);
    if (!state){
        state={};
    }

    switch (action.type){
        case ActionTypes.SEND_GROUP_CHAT_MESSAGE:{
            console.log('SEND_GROUP_CHAT_MESSAGE:'+action.chatMessage);
            let newState=Object.assign({},state);
            let groupChatRooms=newState['groupChatRooms'];

            console.log(JSON.stringify(groupChatRooms));
            if(groupChatRooms){
                for(let _room of groupChatRooms){
                    console.log(JSON.stringify(_room.roomId));
                    if(action.roomId===_room.roomId){
                        _room.chatMessages.push(action.chatMessage);
                    }
                }
            }
           // console.log(JSON.stringify(newState));
            return newState;
        }
        default:
        {
            console.log('return default state');
            return state;
        }

    }
}