import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import { StyleSheet, View, TextInput, Alert, TouchableOpacity, Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default class LoginView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email   : '',
            password: '',
            spinner: false,
        }
    }

    onClickListener = () => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.email) !== true) {
            Alert.alert("Email Validation Failed", "Invalid format");
            return;
        } else if (this.state.password === '') {
            Alert.alert("Password Validation Failed", "Password required");
            return;
        } else {
            // Alert.alert(this.state.email, this.state.password);
            this.setState({
                spinner: true,
            });
        }

        // var store = this.set("mykey", "myValue");
        // if (store) {
        //     alert("stored successfully");
        // } else {
        //     alert("unable to store the value");
        // }



    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>HeyAPP</Text>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email..."
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({email:text})}/>
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password..."
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({password:text})}/>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.loginText}>Signup</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"white",
        marginBottom:40
    },
    inputView:{
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        color:"white"
    },
    forgot:{
        color:"white",
        fontSize:11
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    loginText:{
        color:"white"
    }
});