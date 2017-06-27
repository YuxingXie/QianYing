import * as ActionTypes from './ActionTypes';
export const sendGroupChatMessage=(roomId,userId,chatMessage)=>{
    return{
        type:ActionTypes.SEND_GROUP_CHAT_MESSAGE,
        chatMessage:chatMessage,
        roomId:roomId,
        userId:userId
    }
}