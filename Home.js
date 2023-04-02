import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Button } from 'react-native-paper';


// create a component
class Home extends Component {

    constructor(props) {
        super(props)

        state = {
            id: 1,
            name: "",
            Phone: 0,
            age: 0

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Crud App</Text>
                </View>
                <View style={{ flex: 5 }}>
                    <ScrollView >

                        <TextInput style={styles.textInput} placeholder='Name' />
                        <TextInput style={styles.textInput} keyboardType='number-pad' maxLength={10}
                            placeholder='Phone' />
                        <TextInput style={styles.textInput} keyboardType='number-pad' placeholder='Age' />
                    </ScrollView>
                    <Button style={{ backgroundColor: 'green', paddingVertical: 5, marginBottom: 10 }} mode="contained" onPress={() => console.log('Pressed')}>
                        Insert
                    </Button>


                    <Button style={{ backgroundColor: 'orange', paddingVertical: 5, marginBottom: 10 }} mode="contained" onPress={() => console.log('Pressed')}>
                        Update
                    </Button>

                    <TextInput style={styles.textInput} keyboardType='number-pad' maxLength={10}
                        placeholder='Phone' />
                    <Button style={{ backgroundColor: 'red', paddingVertical: 5, marginBottom: 10 }} mode="contained" onPress={() => console.log('Pressed')}>
                        Delete
                    </Button>


                    <Button style={{ backgroundColor: 'blue', paddingVertical: 5 }} mode="contained" onPress={() => console.log('Pressed')}>
                        View
                    </Button>
                </View>
            </View>
        );
    }
}

// define your styles

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    textInput: {
        borderColor: '#000',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 10
    },
});

//make this component available to the app
export default Home;
