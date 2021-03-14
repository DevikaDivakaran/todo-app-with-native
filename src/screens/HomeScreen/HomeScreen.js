import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import TodoItem from '../../components/todoItem';
import TodoInput from '../../components/todoInput';

export default function HomeScreen({navigation}) {
  const [coursetodos, setCoursetodos] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  
//function
  const onAboutPress = () => {
    navigation.navigate('About');
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
    <View style={styles.screen}>
    <View>
     <Text  onPress={() => onAboutPress()}>About</Text>
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
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
    
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
  buttonTitle: {
    width: '40%'
  }
});