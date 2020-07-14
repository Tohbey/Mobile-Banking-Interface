import React from 'react'
import { 
    View,
    Text, 
    StyleSheet,
    TouchableWithoutFeedback,
    Image } 
from 'react-native';
import Netflix from '../assets/images/ic/Netflix.png';
import Spotify from '../assets/images/ic/Spotify.png';
import Jack from '../assets/images/ic/JackDorsey3.png';
import Lena from '../assets/images/ic/MaskGroup3.png';

const recentTransaction = (props) => {
    return (
        <View style={styles.box}>
            <View style={styles.list}>
                <TouchableWithoutFeedback>
                    <View style={styles.block}>
                        <View style={styles.mainDetail}>
                            <View>
                                <Image source={props.image} style={styles.imageHolder}/>
                            </View>
                            <View>
                                <Text style={styles.nameText}>{props.name}</Text>
                                <Text style={styles.timeText}>{props.time}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={props.transactionType === 'Credit' ? styles.moneyReceived:styles.moneySent}>{props.transactionType === 'Credit'? '+':'-'}{props.amount}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    box:{
        flex:4,
        flexDirection: 'column',
        padding: 10,
    },
    list:{
        flex:3,
        flexDirection:'column'
    },
    block:{
        marginBottom:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    mainDetail:{
        flexDirection:'row',
        alignItems:'center'
    },    
    imageHolder: {
        marginRight: 8,
        height: 45,
        width: 45,
    },
    nameText:{
        fontSize: 15,
        color:'black',
        fontWeight:'bold',
    },
    timeText: {
        color: 'gray',
        fontSize: 11,
    },
    moneySent: {
        paddingTop:6,
        color: 'red',
        fontSize: 16,
        fontWeight: '700',
    },
    moneyReceived: {
        paddingTop:6,
        color: 'green',
        fontSize: 16,
        fontWeight: '700',
    },
})
export default recentTransaction
