import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';

export default About = () => {

    
  return (
    <View style={{flex: 1, padding: 50}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 50,
            color: 'green',
            textAlign: 'center',
            paddingBottom: 10,
          }}>This is About Page

        </Text>
        
      </View>
    </View>
  );
};
 