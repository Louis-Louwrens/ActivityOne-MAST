import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, StyleSheet,TextInput,Button,Image,View} from 'react-native';
import {useState} from 'react';

export default function App() {
  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');
  console.log("App starting up now.")
  return (
    <View>
      <View style={styles.mainPicture}>
        <Image style={styles.ImageSize}
        source={require('./assets/reactNativeImage.png')}/>
      </View>
          
        <Text style={styles.welcomeText}> Welcome your react app!</Text>

      <View style={styles.InputFlex}>
        <Text style={styles.HeadingText} >Enter Name:</Text>
        <TextInput style={styles.InputBoxs}
                   placeholder="First Name :"
                   onChangeText={newText => setName(newText)}
                   />
      </View>
      <View style={styles.InputFlex}>
        <Text style={styles.HeadingText}>Enter Surname: </Text>
        <TextInput style={styles.InputBoxs} 
                    placeholder="Surname :"
                    onChangeText={newText => setSurname(newText)}/>
      </View>
        <Button title = "Add User" onPress={()=>{console.log("The users name is: " + Name + " Surname: " + Surname)}}/>
    </View>
       
    
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    paddingTop: 40,
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center'
  },

  ImageSize: {
    width: 350,
    height: 350
  },

  mainPicture: {
    paddingTop: 40,
    justifyContent: 'center',
    alignItems:'center'
  },

  InputFlex:{
    flexDirection:'row',
    marginTop: 30,
    justifyContent: 'space-evenly',
  }
});
