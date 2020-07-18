import React from 'react'
import { 
    View,
    Text, 
    StyleSheet,
    TouchableHighlight,
    ScrollView,
    TouchableOpacity,
    Image
 } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Jack from '../assets/images/ic/JackDorsey2.png';
import Lena from '../assets/images/ic/Mask_Group.png';

const headerContainer = () => {
    return (
        <View style={styles.box}>
            <View style={styles.upperBox}>
                <View>
                    <Text style={styles.balanceText}>$12,000</Text>
                    <Text style={styles.amountSub}>Available Balance</Text>
                </View>
                <View>
                    <TouchableHighlight>
                        <View style={styles.button}>
                            <IconAntDesign name="swap" size={20} color='#0036d4' style={{paddingRight:2}}/>
                            <Text style={styles.buttonText}>Send/Request</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={styles.lowerBox}>
                <View>
                    <Text style={styles.frequentText}>Frequents</Text>
                </View>
                <ScrollView horizontal={true}>
                    <View style={{flexDirection:"row",marginBottom:0}}>
                        <View style={styles.frequentBox}>
                            <TouchableOpacity>
                                <View>
                                    <View style={styles.frequentUpper}>
                                        <Image source={Jack} style={styles.imageHolder}/> 
                                        <Text style={styles.amountHolder}>$100.00</Text>   
                                    </View>
                                    <View style={styles.frequentLower}>
                                        <Text>Adegoke Damola</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.frequentBox}>
                            <TouchableOpacity>
                                <View>
                                    <View style={styles.frequentUpper}>
                                        <Image source={Lena} style={styles.imageHolder}/>  
                                        <Text style={styles.amountHolder}>$29.00</Text>   
                                    </View>
                                    <View style={styles.frequentLower}>
                                        <Text>Lena Applebee</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.frequentBox}>
                            <TouchableOpacity>
                                <View>
                                    <View style={styles.frequentUpper}>
                                        <Image source={Jack} style={styles.imageHolder}/>  
                                        <Text style={styles.amountHolder}>$29.00</Text>   
                                    </View>
                                    <View style={styles.frequentLower}>
                                        <Text>Jack Dorsey</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.frequentBox}>
                            <TouchableOpacity>
                                <View>
                                    <View style={styles.frequentUpper}>
                                        <Image source={Lena} style={styles.imageHolder}/>  
                                        <Text style={styles.amountHolder}>$29.00</Text>   
                                    </View>
                                    <View style={styles.frequentLower}>
                                        <Text>Lena Applebee</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        marginTop:25,
        flex:2,
        flexDirection: 'column',
        padding: 10,
    },
    upperBox:{
        flex:1,
        flexDirection:'row',
        padding:4,
        justifyContent:'space-between',
    },
    balanceText:{
        fontWeight:'bold',
        fontSize:35,
        color:'black'
    },
    amountSub: {
        fontSize: 16,
        marginTop:5,
        color: 'grey',
    },
    button: {
        marginTop:17,
        padding: 10,
        flexDirection: 'row',
        width: 130,
        borderRadius:3,
        alignItems: 'center',
        backgroundColor: '#e1eaff',
        justifyContent:'flex-start',
    },
    buttonText: {
        textAlign: 'center',
        color: '#0036d4',
    },
    lowerBox:{
        flex:1,
        flexDirection:'column',
        padding:4,
        marginTop:15,
    },
    frequentText: {
        fontSize: 15,
        color: 'black',
        fontWeight:'bold',
        paddingBottom:5,
    },
    frequentBox: {
        padding: 10,
        marginRight: 20,
        flexDirection: 'column',
        width: 150,
        alignItems: 'flex-start',
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 3,
        justifyContent: 'flex-start',
    },
    frequentUpper:{
        flex:1,
        flexDirection:'row'
    },
    imageHolder:{
        height: 20,
        width: 20,
        marginRight:5
    },
    amountHolder:{
        fontWeight:'bold',
        fontSize:14,
        color:'black'
    },
    frequentLower:{
        flex:1,
        marginTop:2,
    }
})
export default headerContainer;
