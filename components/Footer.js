import * as React from 'react';
import { View, Text ,StyleSheet} from 'react-native';

export default function Footer() {
  return (
    <View  style={styles.container }>
      <Text style={styles.Footertext}>
        All rights reserved {' '}
      </Text>
    </View>
  );
} 
const styles= StyleSheet.create({
  container:{
      backgroundColor:'#fb8500',
      marginBottom:1,
    }, 
    Footertext:{ 
      fontSize: 18,
      color: 'black',
      textAlign: 'center',
    fontStyle:'italic'}


})
