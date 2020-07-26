import React,{ Component } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
} from 'react-native';
import { LineChart } from "react-native-chart-kit";
import RecentTransaction from '../Container/recentTransaction';
import Imansyah from '../assets/images/ic/imansyah.png';
import Omid from '../assets/images/ic/Omid.png';
import Jack from '../assets/images/ic/JackDorsey3.png';
import Lena from '../assets/images/ic/MaskGroup3.png';

class activity extends Component {

    state={
        transactions:[
            {
                name:'Adegoke Damola',time:'Today,12:15am',
                amount:'2000.00',profile:Lena,
                transactionType:'Credit'
            },
            {
                name:'Jack Dorsey',time:'Today,06:15pm',
                amount:'150.00',profile:Jack,
                transactionType:'debit'
            },
            {
                name:'Liza Kodhy',time:'Yesterday,06:15pm',
                amount:'20.99',profile:Lena,
                transactionType:'Credit'
            },
            {
                name:'Chen Lee',time:'Yesterday,06:15pm',
                amount:'700.99',profile:Jack,
                transactionType:'Credit'
            }
        ]
    }
    render(){
        let amount = new Array()
        this.state.transactions.map((transaction,index) => {
           amount.push(transaction.amount) 
        })
        console.log(amount)
        const line = {
            labels: [],
            datasets: [
             {
                data: [200,150,20.99,700.99,500,400,700],
                strokeWidth: 2, // optional
              },
            ],
        };
        let recentTransaction = <View>
            {this.state.transactions.map((transactions,index) => {
                    return <RecentTransaction
                        key={index}
                        image={transactions.profile}
                        click={() => this.props.navigation.navigate('TransactionSummary',transactions)}
                        name={transactions.name}
                        time={transactions.time}
                        transactionType={transactions.transactionType}
                        amount={transactions.amount}
                    />
                }
            )}
        </View>
        return (
            <View style={styles.box}>
                <Text style={styles.headerText}>Activity</Text>
                <View>
                    <LineChart
                        data={line}
                        width={Dimensions.get('window').width-40} // from react-native
                        height={250}
                        yAxisLabel={'$'}
                        chartConfig={{
                        backgroundColor: 'white',
                        backgroundGradientFrom: 'white',
                        backgroundGradientTo: 'white',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(70, 114, 240, ${opacity})`,
                        style: {
                            borderRadius: 19,
                         }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 10,
                        }}
    
                    />
                </View>
                <View style={styles.boxHolder}>
                    <View style={styles.biggerBox}>
                        <View style={styles.smallBox}>
                            <Text style={styles.boxText}>7D</Text>
                        </View>
                        <View style={styles.smallBoxOpt}>
                            <Text style={styles.boxTextOpt}>1M</Text>
                        </View>
                        <View style={styles.smallBoxOpt}>
                            <Text style={styles.boxTextOpt}>3M</Text>
                        </View>
                        <View style={styles.smallBoxOpt}>
                            <Text style={styles.boxTextOpt}>6M</Text>
                        </View>
                        <View style={styles.smallBoxOpt}>
                            <Text style={styles.boxTextOpt}>1Y</Text>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    {recentTransaction}
                </ScrollView>
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
    headerText:{
        fontSize:26,
        color:'black',
        fontWeight:'bold',
        marginBottom:10
    },
    boxHolder:{
        marginTop:10,
        marginBottom:10,
        marginLeft:2,
        marginRight:2
    },
    biggerBox:{
        flexDirection:'row',
        width:370,
        borderWidth:1,
        borderColor:'#0036d4',
        backgroundColor: '#e1eaff',
        borderRadius:5,
    },
    smallBox:{
        flexDirection:'row',
        width:70,
        padding:5,
        backgroundColor:'#0036d4',
        justifyContent:'center',
    },
    boxText:{
        fontSize:16,
        color:'white'
    },
    smallBoxOpt:{
        flexDirection:'row',
        width:70,
        padding:5,
        justifyContent:'center',
    },
    boxTextOpt:{
        fontSize:16,
        color:'#0036d4'
    }
})

export default activity;
