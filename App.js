import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import Login from './screens/login'
import Register from './screens/register'
import GetAllStudents from './screens/getAllStudents'
import AddStudent from './screens/addStudent'
import EditStudent from './screens/editStudent'


const Stack=createNativeStackNavigator();

const App = () => {
  return (
    <>
    <SafeAreaView style={styles.all}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='GetAllStudents' component={GetAllStudents}/>
      <Stack.Screen name='EditStudent' component={EditStudent}/>
        <Stack.Screen name='AddStudent' component={AddStudent}/>
        <Stack.Screen name='Register' component={Register}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
    </>
  )
}


export default App
const styles = StyleSheet.create({all:{flex:1}})