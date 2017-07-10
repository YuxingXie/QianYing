import {MapTypes} from "react-native-baidu-map";
import io from 'socket.io-client';
function getSocket() {
    let socket;
    if(!socket)
     socket= io('http://localhost:3000',{transports: ['xhr-polling', 'websocket']});

    socket.on('disconnect', () => {
        console.log("Disconnected Socket!")
    });
    socket.on('connect_error', (err) => {
        console.log(err)
    });
    return socket;
}
const user={name:'游客',sex:'f',age:21,photo:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656881601,2258550211&fm=117&gp=0.jpg"};
export default {
    forHelp:{
        socket:getSocket(),
        newRoomTitle:'',
        groupChatRooms:[
            {roomId:'0',roomName:'测试聊天室',chatMessages:['系统:欢迎使用千应救助系统','点击此处 显示/隐藏 聊天文字'],listened:false,host:user}
            ],
        chatInput:{chatInputMessage:null,sendDisable:true},
        bdMap:{
            mayType: MapTypes.NORMAL,
            zoom: 15,
            center: {
                longitude: 112.5706315564,
                latitude: 28.2612067198
            },
            trafficEnabled: false,
            baiduHeatMapEnabled: false,
            markers: [{
                longitude: 112.5606335464,
                latitude: 28.2613067498,
                title: "Window of the world"
            },{
                longitude: 112.5606315564,
                latitude: 28.2614067199,
                title: "AAA"
            }]
        }
    },
    app:{
        user:user,
        // forHelpTopics:[
        //     {"roomId":"1","topic":"人民医院门口丢失钱包","lastMessage":{"name":"考生妹妹","message":"怎么办，所有证件都在里面了！"},"photo":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656881601,2258550211&fm=117&gp=0.jpg"},
        //     {"roomId":"2","topic":"118路公交遇色狼求救","lastMessage":{"name":"真汉子","message":"下个公交站在哪，我马上打110"},"photo":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=695501802,258418055&fm=117&gp=0.jpg"},
        //     {"roomId":"3","topic":"考生妹妹","lastMessage":{"name":"","message":"真的有朋友捡到了吗？他电话多少？"},"photo":"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=407576570,4111165499&fm=58"},
        //     {"roomId":"4","topic":"家里水龙头漏水了求助！","lastMessage":{"name":"老公出差了","message":"谢谢王大哥"},"photo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497269392247&di=1711dd5a0bbf2f135823580013c83cc1&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F26%2F61%2F19k58PICmdI_1024.jpg"},
        // ],
        contracts:[
            {"name":"女大学生","photo":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656881601,2258550211&fm=117&gp=0.jpg"},
            {"name":"Joel","photo":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=695501802,258418055&fm=117&gp=0.jpg"},
            {"name":"James","photo":"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=407576570,4111165499&fm=58"},
            {"name":"Jimmy","photo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497269392247&di=1711dd5a0bbf2f135823580013c83cc1&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F26%2F61%2F19k58PICmdI_1024.jpg"},
            {"name":"Jackson","photo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497269392246&di=09e6c767d11635a065981a1e697be08b&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F78%2F46%2F49J58PIC6kT_1024.jpg"},
            {"name":"Jillian","photo":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656881601,2258550211&fm=117&gp=0.jpg"},
            {"name":"Julie","photo":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656881601,2258550211&fm=117&gp=0.jpg"},
            {"name":"Devin","photo":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656881601,2258550211&fm=117&gp=0.jpg"}
        ],
    }
}