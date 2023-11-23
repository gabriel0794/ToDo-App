import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform} from 'react-native';
import Activity1 from './component/activity1';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([task, ...taskItems]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>

      <View style={styles.taskWrapper}>
        <Text style={styles.Title}>ToDo App</Text>
        <Text style={styles.sectionTitle}>Add Activity</Text>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder={'Activity'} value={task} onChangeText={text => setTask(text)} ></TextInput>
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>

      <View>
        <Text style={styles.firstList}>Activities of the Day</Text>
      </View>

      <View style={styles.items}>
        {/*this is were the task will go*/}
        {
          taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Activity1 text={item} />
              </TouchableOpacity>
            )
          })
        }
        {/* <Activity1 text={'Activity 1'}/>
        <Activity1 text={'Activity 2'}/> */}
      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 40,
  },
  Title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0047FF'
  },
  sectionTitle: {
    marginTop: 40,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  
  writeTaskWrapper: {
    position: 'absolute',
    top: 190,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginLeft: 12,
    backgroundColor: '#E5E5E5',
    borderRadius: 15,
    width: 250,
    
  },
  addWrapper: {
    width: 60,
    height: 60,
    marginRight: 20,
    backgroundColor: '#E5E5E5',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addText: {
    fontSize: 30,
    color: '#7A7A7A'
  },

  firstList: {
    marginTop: 110,
    marginBottom: 20,
    margin: 'auto',
    paddingLeft: 55,
    fontSize: 16,
  },
  items: {},
});