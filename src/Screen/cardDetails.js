import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    ImageBackground,
    Image 
} from 'react-native';
import Image1 from '../assets/images/ic/art-creative-blue-design.jpg';
import Image2 from '../assets/images/ic/pink-and-purple-wallpaper.jpg';
import Image3 from '../assets/images/ic/teal_white.jpg';
import MasterCard from '../assets/images/ic/mastercard.png';
import VisaCard from '../assets/images/ic/visa.png';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/Entypo'
import Netflix from '../assets/images/ic/Netflix.png';
import Spotify from '../assets/images/ic/Spotify.png';
import Jack from '../assets/images/ic/JackDorsey3.png';
import Lena from '../assets/images/ic/MaskGroup3.png';
import RecentTransaction from '../Container/recentTransaction';


const cardDetails = ({route,navigation},props) =>  {
    const card = route.params
    console.log(card)
    const cardTransaction = card.transactions;
    let transactions = null;
    if(card.transactions.length === 0){
        transactions = 'Empty'
        console.log(transactions)
    }
    let transactionsDetails = <View>
        {cardTransaction.map((transactions,index) => {
                return <RecentTransaction
                    key={index}
                    image={transactions.profile}
                    name={transactions.name}
                    time={transactions.time}
                    transactionType={transactions.transactionType}
                    amount={transactions.amount}/>
                }
        )}
    </View>
    
    return (
        <View style={styles.box}>
            <TouchableWithoutFeedback 
                onPress={() => navigation.goBack()}>
                <View>
                    <Ionicons size={25} name='ios-arrow-back'/>
                </View>
            </TouchableWithoutFeedback>
            <View>
                <TouchableWithoutFeedback>
                    <ImageBackground source={card.cardWallpaper} style={styles.cardContainer}>
                        <View style={styles.cardDetails}>
                            <View style={styles.upperDetail}>
                                <Text style={styles.amount}>{card.amount}</Text>
                                <Image source={card.cardType} style={styles.imageHolder} resizeMode="contain"/>
                            </View>
                            <View style={styles.lowerDetail}>
                                <Text style={styles.cardText}>{card.cardNumber}</Text>
                                <Text style={styles.expText}>{card.expDate}</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.optionBox}>
                <TouchableWithoutFeedback>
                    <View style={styles.button}>
                        <Ionicons size={25} name="ios-add" style={styles.buttonIcon}/>
                        <Text style={styles.buttonText}>Fund card</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={styles.button}>
                        <Ionicons size={25} name="ios-information-circle-outline" style={styles.buttonIcon}/>
                        <Text style={styles.buttonText}>Card information</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={styles.button}>
                        <Entypo size={25} name='dots-three-horizontal' style={styles.buttonIcon}/>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.header}>
                <Text style={styles.recentText}>Recent Transaction</Text>
                <TouchableWithoutFeedback>
                    <View>
                        <Text style={styles.seeText}>See all</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.list}>
                <Text>{transactions}</Text>
                {transactionsDetails}
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
    },
    cardContainer:{
        marginTop:10,
        flexDirection: 'column',
        width: 370,
        height: 150,
        padding: 10,
        marginBottom:20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    cardDetails:{
        flex:1,
    },
    upperDetail:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:73,
    },
    lowerDetail:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    amount:{
        color:'white',
        fontSize:25,
        fontWeight:'bold'
    },
    imageHolder: {
        height: 30,
        width: 55,
    },
    cardText:{
        color:'white',
        fontSize:18,
        marginRight:130,
    },
    expText:{
        color:'white',
        fontSize:18,
    },
    optionBox:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10,
    },
    button: {
        padding: 10,
        flexDirection: 'row',
        borderRadius:3,
        alignItems: 'center',
        backgroundColor: '#73c2fb',
        justifyContent:'flex-start',
    },
    buttonIcon:{
        paddingLeft: 7,
        paddingRight: 7,
    },
    buttonText: {
        textAlign: 'center',
        fontSize:15,
        color: '#000080',
        paddingRight: 7,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    seeText:{
        fontWeight:'bold',
        fontSize:14,
        color: '#000080'
    },
    recentText:{
        fontWeight:'bold',
        fontSize:14,
        color:'black'
    },
    list:{
        flexDirection:'column'
    },
    block:{
        marginTop:10,
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
export default cardDetails
