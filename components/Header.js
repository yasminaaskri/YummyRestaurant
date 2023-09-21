import { View, Text,StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.Headertext}>
        Yummy
      </Text>
    </View>

   
  );
}
const styles = StyleSheet.create ({
     container:{
      backgroundColor:'#fb8500',
     }, 
     Headertext:{
     padding: 20,
     fontSize: 30,
     color: 'black',
     textAlign: 'center',}
      
})