import React, { Component } from 'react'
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
import Cards from '../Component/cardComponent';
import Netflix from '../assets/images/ic/Netflix.png';
import Spotify from '../assets/images/ic/Spotify.png';
import Jack from '../assets/images/ic/JackDorsey3.png';
import Lena from '../assets/images/ic/MaskGroup3.png';

class card extends Component{
    state = {
        cards:[
            {
                id:'1',cardWallpaper:Image1,amount:'$1000.00',
                cardType:MasterCard,cardNumber:'4132 1245 **** 1213',expDate:'12/20',
                transactions:[
                    {
                        name:'Jack Dorsey',time:'Today,12:15am',
                        amount:'200.00',profile:Jack,
                        transactionType:'Debit'
                    },
                    {
                        name:'Lena Applebee',time:'Today,06:15pm',
                        amount:'200.00',profile:Lena,
                        transactionType:'Credit'
                    },
                    {
                        name:'Spotify',time:'Yesterday,06:15pm',
                        amount:'14.99',profile:Spotify,
                        transactionType:'debit'
                    },
                    {
                        name:'Netflix',time:'Yesterday,06:15pm',
                        amount:'10.99',profile:Netflix,
                        transactionType:'debit'
                    }
                ]
            },
            {
                id:'2',cardWallpaper:Image2,amount:'$2013.99',cardType:MasterCard,
                cardNumber:'5399 1090 **** 1894',expDate:'10/20',
                transactions:[
                    {
                        name:'Jack Dorsey',time:'Today,12:15am',
                        amount:'200.00',profile:Jack,
                        transactionType:'Debit'
                    },
                    {
                        name:'Lena Applebee',time:'Today,06:15pm',
                        amount:'200.00',profile:Lena,
                        transactionType:'Credit'
                    },
                    {
                        name:'Spotify',time:'Yesterday,06:15pm',
                        amount:'14.99',profile:Spotify,
                        transactionType:'debit'
                    },
                ]
            },
            {
                id:'3',cardWallpaper:Image3,amount:'$73.91',
                cardType:VisaCard,cardNumber:'5199 7396 **** 3825`',
                expDate:'11/20',
                transactions:[]
            },
        ]
    }

    ViewCardDetails = (index) => {
        console.log(index)
        const card = {
            ...this.state.cards[index]
        }
        console.log('card detail',card)
        this.props.navigation.navigate('CardDetail',card)
    }

    render(){    
    let cards = <View>
        {this.state.cards.map((cardDetail,index) => {
            return <Cards 
                key={cardDetail.id}
                cardWallpaper={cardDetail.cardWallpaper}
                amount={cardDetail.amount}
                cardType={cardDetail.cardType}
                cardNumber={cardDetail.cardNumber}
                expDate ={cardDetail.expDate}
                click={() => this.ViewCardDetails(index)}
            />
        })}
    </View>


        return (
            <View style={styles.box}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Cards</Text>
                    <TouchableWithoutFeedback>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>New card</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.cardBox}>
                    {cards}
                </View>
                <View style={styles.smallBox}>
                    <TouchableWithoutFeedback>
                        <View style={styles.buttonBox}>
                            <Text style={{fontWeight:'bold',fontSize:16}}>Add new card</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box:{
        flex: 1,
        backgroundColor: 'white',
        flexDirection:'column',
        padding: 20,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 10,
    },
    headerText:{
        marginTop:4,
        color:'black',
        fontWeight:'bold',
        fontSize: 25,
    },
    button: {
        padding: 10,
        flexDirection: 'row',
        width: 80,
        borderRadius:3,
        alignItems: 'center',
        backgroundColor: '#e1eaff',
        justifyContent:'flex-start',
    },
    buttonText: {
        textAlign: 'center',
        color: '#0036d4',
    },
    cardBox:{
        flexDirection:'column'
    },
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
    smallBox:{
        flex:1,
    },
    buttonBox:{
        width:370,
        padding: 17,
        borderWidth: 1,
        borderStyle:'dashed',
        alignItems:'center',
        borderRadius:8,
    }
})

export default card;
