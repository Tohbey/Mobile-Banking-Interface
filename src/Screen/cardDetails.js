import React, { useState } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    ImageBackground,
    Image,
    ScrollView,
    Switch
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import RecentTransaction from '../Container/recentTransaction';
import Modal from 'react-native-modal'; 
import CardDetail from '../Container/cardDetail';


const cardDetails = ({route,navigation},props) =>  {
    const cards = route.params
    console.log(cards)
    let transactions
    const [cardDetails, setcardDetails] = useState(cards)
    const [modalOpen1, setmodalOpen1] = useState(false)
    const [modalOpen2, setmodalOpen2] = useState(false)
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    if(cardDetails.transactions.length === 0){
        transactions = <Text>Empty Transactions</Text>
    }
    let transactionsDetails =  <ScrollView>
        {cardDetails.transactions.map((transactions,index) => {
            return <RecentTransaction
                key={index}
                image={transactions.profile}
                name={transactions.name}
                time={transactions.time}
                transactionType={transactions.transactionType}
                amount={transactions.amount}/>
            }
        )}
    </ScrollView>

    

    return (
        <View style={styles.BiggerBox}>
            <View style={styles.box}>
                <TouchableWithoutFeedback 
                    onPress={() => navigation.goBack()}>
                    <View>
                        <MaterialIcon size={25} name='keyboard-backspace'/>
                    </View>
                </TouchableWithoutFeedback>
                <View>
                    <TouchableWithoutFeedback>
                        <ImageBackground source={cardDetails.cardWallpaper} style={styles.cardContainer}>
                            <View style={styles.cardDetails}>
                                <View style={styles.upperDetail}>
                                    <Text style={styles.amount}>{cardDetails.amount}</Text>
                                    <Image source={cardDetails.cardType} style={styles.imageHolder} resizeMode="contain"/>
                                </View>
                                <View style={styles.lowerDetail}>
                                    <Text style={styles.cardText}>{cardDetails.cardNumber}</Text>
                                    <Text style={styles.expText}>{cardDetails.expDate}</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.optionBox}>
                    <TouchableWithoutFeedback
                        onPress={() => navigation.navigate('FundCard')}>
                        <View style={styles.button}>
                            <Ionicons size={25} name="ios-add" color='#0036d4' style={styles.buttonIcon}/>
                            <Text style={styles.buttonText}>Fund card</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => setmodalOpen1(true)}>
                        <View style={styles.button}>
                            <Ionicons size={25} name="ios-information-circle-outline" color='#0036d4' style={styles.buttonIcon}/>
                            <Text style={styles.buttonText}>Card information</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => setmodalOpen2(true)}>
                        <View style={styles.button}>
                            <Entypo size={25} name='dots-three-horizontal' color='#0036d4' style={styles.buttonIcon}/>
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
                    {transactions}
                    {transactionsDetails}
                </View>
            </View>
            <Modal 
                isVisible={modalOpen1} style={styles.cardModal}
                coverScreen={true} onBackdropPress={() => setmodalOpen1(false)}
                onSwipeComplete={() => setmodalOpen1(false)} swipeDirection="left">
                <CardDetail
                    name="Fafowora Oluwatobiloba"
                    cardNumber={cardDetails.cardNumber}
                    cvv="123"
                    address="House 333,Rolands Drive"
                    city="Albany"
                    state="New york"
                    cardPin="1234"
                    />
            </Modal>
            <Modal 
                isVisible={modalOpen2} style={styles.modal}
                coverScreen={true} onBackdropPress={() => setmodalOpen2(false)}
                onSwipeComplete={() => setmodalOpen2(false)} swipeDirection="left">
                <View style={styles.modalInnerContainer}>
                    <Text style={{fontSize:20,color:'black',marginBottom:30}}>What do you want to do? </Text>
                    <View style={styles.innerHolder}>
                        <View style={styles.innerHolder1}>
                            <MaterialIcon size={25} name="water-outline" style={styles.smallBox} color='#1345f2'/>                            
                        </View>
                        <View style={styles.innerHolder2}>
                            <Text style={{fontSize:17,color:'black',fontWeight:'bold'}}>Liquidate funds</Text>
                        </View>
                        <View style={styles.innerHolder3}>
                            <SimpleLineIcon size={15} name="arrow-right" />                            
                        </View> 
                    </View>
                    <View style={styles.innerHolder}>
                        <View style={styles.innerHolder1}>
                            <Fontisto size={25} name="snowflake-2" style={styles.smallBox} color='#1345f2'/>
                        </View>
                        <View style={styles.innerHolder2}>
                            <Text style={{fontSize:17,color:'black',fontWeight:'bold'}}>Freeze Card</Text>
                        </View>
                        <View style={styles.innerHolder3}>
                            <Switch 
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View> 
                    </View>
                    <View style={styles.innerHolder}>
                        <View style={styles.innerHolder1}>
                            <MaterialIcon size={20} name="delete-outline" style={styles.deleteBox} color='#ee2b2a'/>
                        </View>
                        <View style={styles.innerHolder2}>
                            <Text style={{fontSize:17,color:'black',fontWeight:'bold'}}>Delete Card</Text>
                        </View>
                        <View style={styles.innerHolder3}>
                            <SimpleLineIcon size={15} name="arrow-right" />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>    
    )
}

const styles = StyleSheet.create({
    cardModal:{
        marginTop:375,
        marginLeft:0
    },
    modal:{
        marginTop:392,
        marginLeft:0
    },
    modalInnerContainer: {
        backgroundColor: 'white',
        padding: 30,
        height: 280,
        width:415,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    innerHolder:{
        marginBottom:30,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    innerHolder1:{
        flex:2,
        flexDirection:'row',
    },
    innerHolder2:{
        flex:6,
        marginRight:100,
        flexDirection:'row',
    },
    innerHolder3:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    },
    smallBox:{
        padding:3,
        backgroundColor:'#e1eaff',
        borderRadius:2
    },
    deleteBox:{
        padding:3,
        borderRadius:2,
        backgroundColor:'#ffdfe0',
    }, 
    box:{
        flex: 1,
        backgroundColor: 'white',
        flexDirection:'column',
        padding: 20,
    },
    BiggerBox:{
        flex:1,
        flexDirection:'column'    
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
        marginBottom:67,
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
        backgroundColor: '#e1eaff',
        justifyContent:'flex-start',
    },
    buttonIcon:{
        paddingLeft: 7,
        paddingRight: 7,
    },
    buttonText: {
        textAlign: 'center',
        fontSize:15,
        color: '#0036d4',
        paddingRight: 7,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:15
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
