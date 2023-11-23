import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

const Activity1 = (props) => {
    return (
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.square}></View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    item: {
      backgroundColor: '#E5E5E5',
      padding: 22,
      marginLeft: 15,
      width: '90%',
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    itemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    itemText: {
      maxWidth: '100%', // Adjust this based on your layout
    },
    square: {
      width: 20,
      height: 20,
      backgroundColor: '#0047FF',
      borderRadius: 5,
    },
  });
  
  export default Activity1;
  