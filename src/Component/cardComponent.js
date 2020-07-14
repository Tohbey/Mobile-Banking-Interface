import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    ImageBackground,
    Image 
} from 'react-native';


const cardComponent = (props) => {
    return (
        <View>
            <TouchableWithoutFeedback onPress={props.click}>
                <ImageBackground source={props.cardWallpaper} style={styles.cardContainer}>
                    <View style={styles.cardDetails}>
                        <View style={styles.upperDetail}>
                            <Text style={styles.amount}>{props.amount}</Text>
                            <Image source={props.cardType} style={styles.imageHolder} resizeMode="contain"/>
                        </View>
                        <View style={styles.lowerDetail}>
                            <Text style={styles.cardText}>{props.cardNumber}</Text>
                            <Text style={styles.expText}>{props.expDate}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        flexDirection: 'column',
        width: 370,
        height:115,
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
        marginBottom:45,
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
})
export default cardComponent;
