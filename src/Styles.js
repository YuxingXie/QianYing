import React from 'react';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
    row:{
        flex: 1,
        flexDirection: 'row',
        paddingTop:6,
        paddingBottom:6,
        paddingLeft:20,
        borderBottomColor:'#b1b1b1',
        borderBottomWidth:1
    },imageContainer: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        flex: 1
    },textInput:{
        flex:95,height: 24,backgroundColor:'#fff',fontSize:12, borderBottomColor:'green'
    },
    sendButton: {
        flex:20,justifyContent:'center'
    },
    sendButtonTextDisable:{
        backgroundColor:'grey',
    },
    sendButtonTextEnable:{
        backgroundColor:'blue',
    },
    sendButtonText:{
        padding:5,color:'white',alignSelf:'flex-end',textAlign:'center'
    }
});
export default styles;