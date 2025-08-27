import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, StyleSheet, TextInput, Button, Image, View, ScrollView, Animated} from 'react-native';
import {useState, useRef, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="ViewDetails" component={ViewDetails} />
      </Stack.Navigator>
    </NavigationContainer>


  );
};

// animation component
const FadeInView = (props:any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(
      fadeAnim, {
        toValue:1,
        duration:3000,
        useNativeDriver:false
      }
    ).start();
  }, [fadeAnim]);

  return(
    <Animated.View style = {{
      ...props.style,
      opacity: fadeAnim,
    }}>
      {props.children}
    </Animated.View>
  );
};

function ViewDetails({ navigation, route}:any) {
  const NameGet = route.params.NameSend;
  const SurnameGet = route.params.SurnameSend;
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize:34,color: 'purple'}}>Name : {NameGet}, Surname : {SurnameGet}</Text>
    </View>
  );
};


export function MainScreen({navigation}:any) 
{
  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');
  console.log("App starting up now.")
  return (
  
    <View>
      <SafeAreaView>
        <ScrollView>
      <View style={styles.mainPicture}>
        <Image style={styles.ImageSize}
        source={require('./assets/reactNativeImage.png')}/>
      </View>
          
        <Text style={styles.welcomeText}> Welcome your react app!</Text>
        <FadeInView>
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
        <Button title = "Add User" 
              onPress={()=>{
                navigation.navigate('ViewDetails', 
                  { NameSend : Name,
                  SurnameSend : Surname});
                  console.log("The users name is: " + Name + " Surname: " + Surname)}}/>
            </FadeInView>
          </ScrollView>        
        </SafeAreaView>       
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
  },

  InputBoxs:{
    fontSize:32,
    backgroundColor: 'yellow',
    paddingHorizontal: 20,
    width: 200,
  },

  HeadingText:{
    fontSize:32,
  }
});
