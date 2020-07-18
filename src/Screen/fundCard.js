import React, { Component } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Button
} from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

export class fundCard extends Component {
    state = {
        i:0,
        result : '12,000',
        decimal: '00'
    }

    buttonPressed(text){
        if(this.state.i === 0){
            let amount = this.state.result.split('');
            amount.splice(0,6)
            this.setState({
                i:1,
                result:amount+text
            })
            console.log(amount)
        }else{
            this.setState({
                result:this.state.result+text
            })
        }

    }
    deleteText(){
        let text = this.state.result.split('')
        text.pop()
        this.setState({
            result:text.join('')
        })
    }

    render() {
        let rows = [];
        let nums = [[1,2,3],[4,5,6],[7,8,9]];
        for(let i=0;i<3;i++){
            let row = []
            for(let j=0;j<3;j++){
                row.push(
                    <TouchableOpacity
                     onPress={() => this.buttonPressed(nums[i][j])}>
                        <View>
                            <Text style={styles.text}>{nums[i][j]}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }
            rows.push(<View style={styles.row}>
                {row}
            </View>)
        }
        return (
            <View style={styles.box}>
                <View style={styles.header}>
                    <TouchableWithoutFeedback 
                       onPress={() => this.props.navigation.goBack()}>
                        <View>
                            <Ionicons size={25} name='keyboard-backspace'/>
                        </View>
                    </TouchableWithoutFeedback>
                    <Text style={styles.headerText}>Fund card</Text>
                </View>
                <View style={styles.inputView}>
                    <View style={styles.amountView}>
                        <Text style={styles.amountText}>${this.state.result}</Text>
                        <Text style={styles.amountTextSub}>.{this.state.decimal}</Text>
                    </View>
                    <Button title="Fund Card">Fund Card</Button>
                </View>
                <View style={styles.buttonView}>
                    {rows}
                    <View style={styles.row}>
                        <TouchableOpacity>
                            <View style={{marginRight:15}}>
                                <Text style={styles.text}>.</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.buttonPressed(0)}>
                            <View>
                                <Text style={styles.text}>0</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.deleteText()}>
                            <View>
                                <Feather size={25} name='delete'/>
                            </View>
                        </TouchableOpacity>
                    </View>
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
        flexDirection:'row'
    },
    headerText:{
        marginTop:3,
        marginLeft:120,
        fontSize:20,
        fontWeight:'bold',
        color:'black'  
    },
    inputView:{
        flex:3,
        marginBottom: 10,
        flexDirection:'column',
    },
    amountView:{
        flex:2,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    amountText:{
        fontSize:45,
        fontWeight:'bold',
        color:'black',
    },  
    amountTextSub:{
        marginTop:19,
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    },  
    buttonView:{
        flex:3,
    },
    row:{
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    text:{
        fontSize:25,
        fontWeight:'bold',
        color:'black'
    },
})
export default fundCard
