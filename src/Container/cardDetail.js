import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather'


const cardDetail = (props) => {
    return (
        <View style={styles.cardModalContainer}>
            <Text style={{fontSize:18,color:'black'}}>Card Information</Text>
            <View style={styles.innerContainer}>
                <View style={styles.holder}>
                    <View style={styles.innerHolder1}>
                        <Text style={{fontSize:16}}>Card name</Text>
                    </View>
                    <View style={styles.innerHolder2}>
                        <Text style={styles.holderDetail}>{props.name}</Text>
                    </View>
                    <View style={styles.innerHolder3}>
                        <MaterialIcon size={25} name="content-copy"/>
                    </View>
                </View>
            </View>
            <View style={styles.innerContainer}>
                <View style={styles.holder}>
                    <View style={styles.innerHolder1}>
                        <Text style={{fontSize:16}}>Card Number</Text>
                    </View>
                    <View style={styles.innerHolder2}>
                        <Text style={styles.holderDetail}>{props.cardNumber}</Text>
                    </View>
                    <View style={styles.innerHolder3}>
                        <MaterialIcon size={25} name="content-copy"/>
                    </View>
                </View>
            </View>
            <View style={styles.innerContainer}>
                <View style={styles.holder}>
                    <View style={styles.innerHolder1}>
                        <Text style={{fontSize:16}}>CVV</Text>
                    </View>
                    <View style={styles.innerHolder2}>
                        <Text style={styles.holderDetail}>{props.cvv}</Text>
                    </View>
                    <View style={styles.innerHolder3}>
                        <MaterialIcon size={25} name="content-copy"/>
                    </View>
                </View>
            </View>
            <View style={styles.innerContainer}>
                <View style={styles.holder}>
                    <View style={styles.innerHolder1}>
                        <Text style={{fontSize:16}}>Billing Address</Text>
                    </View>
                    <View style={styles.innerHolder2}>
                        <Text style={styles.holderDetail}>{props.address}</Text>
                    </View>
                    <View style={styles.innerHolder3}>
                        <MaterialIcon size={25} name="content-copy"/>
                    </View>
                </View>
            </View>
            <View style={styles.innerContainer}>
                <View style={styles.holder}>
                    <View style={styles.innerHolder1}>
                        <Text style={{fontSize:16}}>Billing City</Text>
                    </View>
                    <View style={styles.innerHolder2}>
                        <Text style={styles.holderDetail}>{props.city}</Text>
                    </View>
                    <View style={styles.innerHolder3}>
                        <MaterialIcon size={25} name="content-copy"/>
                    </View>
                </View>
            </View>
            <View style={styles.innerContainer}>
                <View style={styles.holder}>
                    <View style={styles.innerHolder1}>
                        <Text style={{fontSize:16}}>Billing State</Text>
                    </View>
                    <View style={styles.innerHolder2}>
                        <Text style={styles.holderDetail}>{props.state}</Text>
                    </View>
                    <View style={styles.innerHolder3}>
                        <MaterialIcon size={25} name="content-copy"/>
                    </View>
                </View>
            </View><View style={styles.innerContainer}>
                <View style={styles.holder}>
                    <View style={styles.innerHolder1}>
                        <Text style={{fontSize:16}}>PIN</Text>
                    </View>
                    <View style={styles.innerHolder2}>
                        <Text style={styles.holderDetail}>{props.cardPin}</Text>
                    </View>
                    <View style={styles.innerHolder3}>
                        <Feather size={25} name="eye-off"/>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardModalContainer: {
        backgroundColor: 'white',
        padding: 20,
        height: 580,
        width:415,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        flexDirection:'column'
    },
    innerContainer:{
        marginTop:10,
        borderBottomWidth:0.2,
        borderBottomColor:'grey'
    },
    innerHolder1:{
        flex:3,
        flexDirection:'row',
    },
    innerHolder2:{
        flex:6,
        flexDirection:'row',
    },
    innerHolder3:{
        flexDirection:'row',
    },
    holder:{
        marginBottom:15,
        flexDirection:'row',
        justifyContent:'space-between'
    }, 
    holderDetail:{
        fontSize:17,
        color:'black',
    },
})
export default cardDetail
