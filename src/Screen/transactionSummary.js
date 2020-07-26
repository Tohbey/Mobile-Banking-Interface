import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    ImageBackground,
    Image,
    Switch
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TearLines from 'react-native-tear-lines';

const transactionSummary = ({route,navigation},props) => {
    console.log(route.params)
    const transactionDetail = route.params;
    return (
        <View style={styles.box}>
            <View style={styles.container}>
                <View style={styles.upperPart}>
                    <Text style={{paddingTop:6,fontSize:16,}}>Amount:</Text>
                    <Text style={transactionDetail.transactionType === 'Credit' ? styles.moneyReceived:styles.moneySent}>
                        {transactionDetail.transactionType === 'Credit'? '+':'-'}${transactionDetail.amount}
                    </Text>
                </View>
                <View style={{ width: '100%', borderRadius: 1,borderColor:'gray', borderWidth: 1, borderStyle: 'dashed' }} />
                <View style={styles.lowerPart}>
                    <View style={styles.innerbox}>
                        <Text style={{fontSize:17}}>Source:</Text>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>**** 1894</Text>
                    </View>
                    <View style={styles.innerbox}>
                        <Text style={{fontSize:17}}>Recipent:</Text>
                        <View>
                            <Text style={{fontSize:16}}>Citi Bank({transactionDetail.name})</Text>
                            <Text style={{fontSize:18,fontWeight:'bold',alignSelf:'flex-end'}}>0190528594</Text>
                        </View>
                    </View>
                    <View style={styles.innerbox}>
                        <Text style={{fontSize:17}}>Time {'&'} Date: </Text>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>12 Dec, 2019(09:12am)</Text>
                    </View>
                    <View style={styles.innerbox}>
                        <Text style={{fontSize:17}}>Status: </Text>
                        <TouchableWithoutFeedback>
                            <View style={styles.successBox}>
                                <Text style={styles.successText}>Successful</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
            <View>
                <TouchableWithoutFeedback>
                    <View style={styles.button}>
                        <AntDesign size={25} name='download' color='#0036d4'/>
                        <Text style={styles.buttonText}>Download Receipt</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        flex: 1,
        backgroundColor: 'white',
        flexDirection:'column',
        padding: 20,
        justifyContent:'space-between'
    },
    container:{
        flexDirection:'column',
        borderColor:'gray',
        borderWidth:0.1,
        borderRadius:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.12,
        shadowRadius: 1.41,

        elevation: 1
    },
    upperPart:{
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom:15,
    },
    moneySent: {
        paddingTop:6,
        color: '#f91c1d',
        fontSize: 30,
        fontWeight: '700',
    },
    moneyReceived: {
        paddingTop:6,
        color: '#31bb65',
        fontSize: 30,
        fontWeight: '700',
    },
    lowerPart:{
        padding:10,
        flexDirection:'column',
        justifyContent:'space-between',
        paddingBottom:9,
    },
    innerbox:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:20,
    },
    successBox:{
        padding:8,
        borderRadius:5,
        backgroundColor:'#dcf9ec',
    },
    successText:{
        fontSize:16,
        fontWeight:'bold',
        color:'#31bb65'
    },  
    button: {
        padding: 10,
        flexDirection: 'row',
        borderRadius:3,
        backgroundColor: '#e1eaff',
        justifyContent:'center',
    },
    buttonText: {
        textAlign: 'center',
        color: '#0036d4',
        marginLeft:4,
        fontSize:19,
    },
})
export default transactionSummary
