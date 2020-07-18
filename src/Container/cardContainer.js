import React from 'react'
import { 
    View,
    Text, 
    StyleSheet,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ScrollView,
    Image,
    ImageBackground } 
from 'react-native';
import Image1 from '../assets/images/ic/art-creative-blue-design.jpg';
import Image2 from '../assets/images/ic/pink-and-purple-wallpaper.jpg';
import Image3 from '../assets/images/ic/teal_white.jpg';
import MasterCard from '../assets/images/ic/mastercard.png';
import VisaCard from '../assets/images/ic/visa.png';

const cardContainer = (props) => {
    return (
        <View style={styles.box}>
            <View style={styles.upperPart}>
                <Text style={styles.Cardtext}>Cards</Text>
                <TouchableWithoutFeedback
                    onPress={() => props.navigation.navigate('Card')}>
                    <View>
                        <Text style={styles.seeText}>See all</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View> 
            <ScrollView horizontal={true} style={{marginBottom:15}}>
                <View style={styles.lowerPart}>
                    <TouchableWithoutFeedback>
                        <ImageBackground source={Image1} style={styles.Cardbox}>
                            <View style={{padding: 10,}}>
                                <View style={styles.cardDetail1}>
                                    <Text style={styles.amount}>$1,000</Text>
                                    <Image source={MasterCard} style={styles.imageHolder} resizeMode="contain"/>
                                </View>
                                <View style={styles.cardDetail2}>
                                    <Text style={styles.cardText}>4132 1245 **** 1213</Text>
                                    <Text style={styles.expText}>12/20</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <ImageBackground source={Image2} style={styles.Cardbox}>
                        <View style={{padding: 10,}}>
                                <View style={styles.cardDetail1}>
                                    <Text style={styles.amount}>$3,000</Text>
                                    <Image source={MasterCard} style={styles.imageHolder} resizeMode="contain"/>
                                </View>
                                <View style={styles.cardDetail2}>
                                    <Text style={styles.cardText}>4132 1245 **** 1213</Text>
                                    <Text style={styles.expText}>12/20</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <ImageBackground source={Image3} style={styles.Cardbox}>
                            <View style={{padding: 10,}}>
                                <View style={styles.cardDetail1}>
                                    <Text style={styles.amount}>$8,000</Text>
                                    <Image source={VisaCard} style={styles.imageHolder} resizeMode="contain"/>
                                </View>
                                <View style={styles.cardDetail2}>
                                    <Text style={styles.cardText}>4132 1245 **** 1213</Text>
                                    <Text style={styles.expText}>12/20</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
            <View style={styles.header}>
                <Text style={styles.recentText}>Recent Transaction</Text>
                <TouchableWithoutFeedback>
                    <View>
                        <Text style={styles.seeText}>See all</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    box:{
        flex:3,
        flexDirection: 'column',
        paddingRight:10,
        paddingLeft:10
    },
    Cardtext:{
        fontWeight:'bold',
        fontSize:14,
        color:'black'
    },
    upperPart:{
        flex:1,
        padding: 5,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    lowerPart:{
        flex:2,
        flexDirection:'row'
    },
    Cardbox:{
        flexDirection: 'column',
        width: 320,
        height:135,
        borderRadius:9,
        alignItems: 'flex-start',
        borderColor: 'gray',
        justifyContent: 'flex-start',
        marginRight:15,
    },
    cardDetail1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardDetail2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 65,
    },
    amount:{
        color:'white',
        fontSize:25,
        fontWeight:'bold'
    },
    cardText:{
        color:'white',
        fontSize:18,
        marginRight:80,
    },
    expText:{
        color:'white',
        fontSize:18,
    },
    imageHolder: {
        height: 30,
        width: 55,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    seeText:{
        fontWeight:'bold',
        fontSize:14,
        color: '#0036d4'
    },
    recentText:{
        fontWeight:'bold',
        fontSize:14,
        color:'black'
    },
})

export default cardContainer;
