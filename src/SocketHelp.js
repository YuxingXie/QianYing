import io from 'socket.io-client';
     class SocketHelp{
        constructor(){
            console.log('socket is initialized');
            this.socket = io('http://localhost:3000',{transports: ['xhr-polling', 'websocket']});

            this.socket.on('1', function(msg){
                console.log('message: ' + msg);
            });

            this.socket.on('disconnect', () => {
                console.log("Disconnected Socket!")
            })
            this.socket.on('connect_error', (err) => {
                console.log(err)
            })
        }
        close(){
            this.socket.close();
        }
        emitMessage(message){
            emit(this.socket,message);
        }


    }
function* emit (socket,message){
    socket.emit('1', message);
}
export default new SocketHelp();