import * as ActionTypes from './actionTypes';

export const newRoomInputTitle=(input)=>{
    return {
        type:ActionTypes.NEW_ROOM_INPUT_TITLE,
        inputTitle:input,
    }
}
export const sendGroupChatMessage=(roomId,userId)=>{
    return{
        type:ActionTypes.SEND_GROUP_CHAT_MESSAGE,
        roomId:roomId,
        userId:userId
    }

}
export const serverBroadcastMessage=(roomId,userId,message)=>{
    console.log('serverBroadcastMessage')
    console.log(message)
    return {
        type:ActionTypes.SERVER_BROADCAST_MESSAGE,
        chatMessage:message,
        roomId:roomId,
        userId:userId
    }
}
export const serverBroadcastMessageA=(message)=>{
    return (dispatch) => {
            dispatch(serverBroadcastMessage(message))
    }
}
export const chatInputMessage=(message)=>{
    return {
        type:ActionTypes.CHAT_INPUT_MESSAGE,
        inputMessage:message,
    }
}
