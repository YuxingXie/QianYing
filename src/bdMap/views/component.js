import React  from "react";
import { MapView} from "react-native-baidu-map";
import Dimensions from "Dimensions";
import {StyleSheet, Text, View,ListView,ScrollView} from "react-native";
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

export default function bdMapComponent({bdMap,dataSource}) {

    return (
        <View style={styles.container}>
            <MapView
                trafficEnabled={bdMap.trafficEnabled}
                baiduHeatMapEnabled={bdMap.baiduHeatMapEnabled}
                zoom={bdMap.zoom}
                mapType={bdMap.mapType}
                center={bdMap.center}
                marker={bdMap.marker}
                markers={bdMap.markers}
                style={styles.map}
                onMarkerClick={(e) => {
                    console.warn(JSON.stringify(e));
                }}
                onMapClick={(e) => {
                }}
            >
                <View style={{width:250,height:190,opacity:0.7,alignSelf:'flex-start',marginBottom:130}}>

                    <ScrollView
                        ref={ref=>{this.scrollView=ref}}
                        onContentSizeChange={(contentWidth, contentHeight)=>{this.scrollView.scrollToEnd()
                        }}>
                        <ListView
                            removeClippedSubviews={false}
                            dataSource={dataSource}
                            renderRow={(rowData) =>
                                <View><Text >{rowData}</Text></View>}
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
