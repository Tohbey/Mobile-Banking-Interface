import React, { Component } from 'react'
import { View,ScrollView} from 'react-native';
import HeaderContainer from '../Container/headerContainer';
import CardContainer from '../Container/cardContainer';
import RecentTransaction from '../Container/recentTransaction';
import Netflix from '../assets/images/ic/Netflix.png';
import Spotify from '../assets/images/ic/Spotify.png';
import Jack from '../assets/images/ic/JackDorsey3.png';
import Lena from '../assets/images/ic/MaskGroup3.png';

class Home extends Component {

    state = {
        transactions:[
            {
                name:'Jack Dorsey',time:'Today,12:15am',
                amount:'200.00',profile:Jack,
                transactionType:'Debit'
            },
            {
                name:'Lena Applebee',time:'Today,06:15pm',
                amount:'20.99',profile:Lena,
                transactionType:'Credit'
            },
            {
                name:'Spotify',time:'Yesterday,06:15pm',
                amount:'14.99',profile:Spotify,
                transactionType:'Debit'
            },
            {
                name:'Netflix',time:'Yesterday,06:15pm',
                amount:'10.99',profile:Netflix,
                transactionType:'Debit'
            },
            {
                name:'Jack Dorsey',time:'Today,12:15am',
                amount:'200.00',profile:Jack,
                transactionType:'Credit'
            },
        ]
    }

    render(){
        const navigation = this.props.navigation;
        let recentTransaction = <View>
            {this.state.transactions.map((transactions,index) => {
                    return <RecentTransaction
                        key={index}
                        image={transactions.profile}
                        name={transactions.name}
                        time={transactions.time}
                        transactionType={transactions.transactionType}
                        amount={transactions.amount}
                    />
                }
            )}
        </View>
        return (
            <ScrollView>
                <View style={{flex: 1,backgroundColor: 'white'}}>
                    <HeaderContainer />
                    <CardContainer navigation={navigation}/>
                    {recentTransaction}
                </View>
            </ScrollView>
        )
    }
}
export default Home;
