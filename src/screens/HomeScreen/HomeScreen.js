import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import TodoItem from '../../components/todoItem';
import TodoInput from '../../components/todoInput';
import styles from './styles';
import Button from '../components/Button'

export default function HomeScreen({navigation}) {
  const [coursetodos, setCoursetodos] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  
//function
  const onAboutPress = () => {
    navigation.navigate('About');
  };
  const onGLPressed = () => {
    navigation.navigate('GeoLoc');
  };
  const onGLPressed = () => {
    navigation.navigate('imgPck');
  };
  
  const addtodoHandler = todoTitle => {
    setCoursetodos(currenttodos => [
      ...currenttodos,
      { id: Math.random().toString(), value: todoTitle }
    ]);
    setIsAddMode(false);
  };

  const removetodoHandler = todoId => {
    setCoursetodos(currenttodos => {
      return currenttodos.filter(todo => todo.id !== todoId);
    });
  };

  const canceltodoAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View>
      <View>
          <Text  style={styles.about} onPress={() => onAboutPress()}>About</Text>
    </View>
    <View style={styles.screen}>
      <View>
      <Button mode="contained" onPress={onGLPressed}>
        GeoLocation
      </Button>
       <Button mode="contained" onPress={onIMPPressed}>
        Image Picker
      </Button>
      </View>
   
      <Button title="Add to your todo List" onPress={() => setIsAddMode(true)} />
      <TodoInput
        visible={isAddMode}
        onAddtodo={addtodoHandler}
        onCancel={canceltodoAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={coursetodos}
        renderItem={itemData => (
          <TodoItem
            id={itemData.item.id}
            onDelete={removetodoHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
    </View>
  );
}
