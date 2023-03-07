import { Dimensions, StyleSheet, TextInput, View} from 'react-native'
import  { useState } from 'react'



let secure = false;

const CustomTextInput = ({ holder }) => {
    const [state,setState] = useState({
        email:'',
        password:'',
    })
   
    return(
    <View>
        <TextInput placeholder={holder}
            {...holder === 'password' ? secure = true : secure = false}
            secureTextEntry={secure}      
            onChangeText={ {secure} ? text => setState({password:text}) 
                                    :text => setState({email:text})}
            style={styles.textinput} />
            
            
    </View>
)

}
const screenwidth = Dimensions.get("screen").width;
const styles = StyleSheet.create({
    textinput: {
        
        padding: 5,
        backgroundColor: '#a9a9a9',
        width: screenwidth * 0.75,
        //borderRadius: 15,
        color: 'aliceblue',
        fontWeight: "600",
        margin: 5,
    }
})
export default CustomTextInput