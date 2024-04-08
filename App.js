import {useState} from "react";
import {
  ImageBackground, 
  StyleSheet,
  Switch,
  Text,TextInput,
  TouchableHighlight,
  View,
  Image,
  Alert,} from "react-native";
  const styles = StyleSheet.create({
	container: {
	  flex: 1,
	},	
  image:{
    width:300,
    height:250,
    margin:57
  },
  text:{
    fontWeight:'bold',
    margin: 20,
    textAlign:'right',
  },
	TextInput:{
		fontSize:20,
		fontWeight:"bold",
		color:"blue",
		borderWidth:1,
		borderColor:"blue",
		margin:10
	},
	button:{
		backgroundColor:"aqua",
		height:50,
		borderRadius:10,
		justifyContent:"center",
		alignItems:"center",
		margin:5,
	},
	buttonText:{
		color:"Blue",
		fontSize:20,
		fontWeight:"bold"
	},
  });
const App = () =>{
	const [email,setEmail]=useState("");
  const [password,setpassword]=useState("");
  const onPress = () =>
  {
    Alert.alert('Dang nhap thanh cong voi user name ');
  }
  return(
	<View style={styles.container}>
		<ImageBackground source={require('./assets/687987.jpg')} style={{flex:1}}>
    <Image source={require('./assets/giaodien.jpg')} style= {styles.image}/>
    <Text style= {styles.text}>
      REGISTER
    </Text>
		<TextInput 
        style={styles.TextInput}
        onChangeText={setEmail}
        placeholder="Nhap user name"
        value={email}
      />
      <TextInput
        style={styles.TextInput}
        onChangeText={setpassword}
        placeholder="Nhap password"
        secureTextEntry
        value={password}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={onPress}
          >
            <Text style={styles.buttonText}>
              Login
            </Text>
        </TouchableHighlight>
		</ImageBackground>
  	</View>
)
}
export default App;