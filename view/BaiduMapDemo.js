
import React, {Component} from "react";
import { MapView} from "react-native-baidu-map";
import {StyleSheet, Text, View,ListView,ScrollView} from "react-native";
import store from '../src/Store.js';
import Dimensions from "Dimensions";

export default class BaiduMapDemo extends Component {

  constructor(props) {
    super(props);
      // this.getOwnState = this.getOwnState.bind(this);
      this.getRoomById=this.getRoomById.bind(this);
      this.getCHats=this.getCHats.bind(this);
      this.onChange = this.onChange.bind(this);
      // this.getDataSource=this.getDataSource.bind(this)
      this.dataSource=this.getDataSource();
      // this.state = this.getOwnState();
  }
    getDataSource(){
        // console.log("exec getDataSource")
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return ds.cloneWithRows(this.getCHats());
    }
    onChange() {
        this.setState(this.getOwnState());
    }
    getOwnState() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            bdMap:store.getState().app.bdMap,
            // chats: this.getCHats(),
            dataSource:ds.cloneWithRows(this.getCHats())
        };
    }
  componentDidMount() {
      // store.subscribe(this.onChange);
  }
    componentWillUnmount() {
        //store.subscribe(this.onChange);
    }
  getRoomById(id){

      let rooms=store.getState().app.groupChatRooms;
      for(let room of rooms){
          if (room.roomId===id){
              return room;
          }
      }
  }
    getCHats(){
      let roomId='1';
      let room=this.getRoomById(roomId);
      // console.log('room:');
      // console.log(JSON.stringify(room));
      // return room.chatMessages.concat(['']);
      return room.chatMessages;
    }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          trafficEnabled={store.getState().app.bdMap.trafficEnabled}
          baiduHeatMapEnabled={store.getState().app.bdMap.baiduHeatMapEnabled}
          zoom={store.getState().app.bdMap.zoom}
          mapType={store.getState().app.bdMap.mapType}
          center={store.getState().app.bdMap.center}
          marker={store.getState().app.bdMap.marker}
          markers={store.getState().app.bdMap.markers}
          style={styles.map}
          onMarkerClick={(e) => {
            console.warn(JSON.stringify(e));
          }}
          onMapClick={(e) => {
          }}
        >
          <View style={{width:150,height:120,opacity:0.7,alignSelf:'flex-start',marginBottom:0}}>

              <ScrollView>
                  <ListView
                      removeClippedSubviews={false}
                      dataSource={this.dataSource}

                      renderRow={(rowData) =>
                          <View>
                              <Text >{rowData}</Text></View>}
                  />
              </ScrollView>

          </View>

        </MapView>

        {/*<View style={styles.row}>*/}
          {/*<Button title="Normal" onPress={() => {*/}
            {/*this.setState({*/}
              {/*mapType: MapTypes.NORMAL*/}
            {/*});*/}
          {/*}} />*/}
          {/*<Button style={styles.btn} title="Satellite" onPress={() => {*/}
            {/*this.setState({*/}
              {/*mapType: MapTypes.SATELLITE*/}
            {/*});*/}
          {/*}} />*/}

          {/*<Button style={styles.btn} title="Locate" onPress={() => {*/}
            {/*console.warn('center', this.state.center);*/}
            {/*Geolocation.getCurrentPosition()*/}
              {/*.then(data => {*/}
                {/*console.warn(JSON.stringify(data));*/}
                {/*this.setState({*/}
                  {/*zoom: 15,*/}
                  {/*marker: {*/}
                    {/*latitude: data.latitude,*/}
                    {/*longitude: data.longitude,*/}
                    {/*title: 'Your location'*/}
                  {/*},*/}
                  {/*center: {*/}
                    {/*latitude: data.latitude,*/}
                    {/*longitude: data.longitude,*/}
                    {/*rand: Math.random()*/}
                  {/*}*/}
                {/*});*/}
              {/*})*/}
              {/*.catch(e =>{*/}
                {/*console.warn(e, 'error');*/}
              {/*})*/}
          {/*}} />*/}
        {/*</View>*/}

        {/*<View style={styles.row}>*/}
          {/*<Button title="Zoom+" onPress={() => {*/}
            {/*this.setState({*/}
              {/*zoom: this.state.zoom + 1*/}
            {/*});*/}
          {/*}} />*/}
          {/*<Button title="Zoom-" onPress={() => {*/}
            {/*if(this.state.zoom > 0) {*/}
              {/*this.setState({*/}
                {/*zoom: this.state.zoom - 1*/}
              {/*});*/}
            {/*}*/}

          {/*}} />*/}
        {/*</View>*/}

        {/*<View style={styles.row}>*/}
          {/*<Button title="Traffic" onPress={() => {*/}
            {/*this.setState({*/}
              {/*trafficEnabled: !this.state.trafficEnabled*/}
            {/*});*/}
          {/*}} />*/}

          {/*<Button title="Baidu HeatMap" onPress={() => {*/}
            {/*this.setState({*/}
              {/*baiduHeatMapEnabled: !this.state.baiduHeatMapEnabled*/}
            {/*});*/}
          {/*}} />*/}
        {/*</View>*/}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    height: 40
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 120,
    marginBottom: 16,

      justifyContent:'flex-end'
  }
});