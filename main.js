
import * as React from 'react';
import { Text, View , Image,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import App from '../App';
import newOrder from './screen/newOrder';
import mail from './screen/mail';
import profile from './screen/Profile';
import { COLORS } from './Constansts';




const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{
      
      tabBarStyle: { 
        position: 'absolute',
        bottom:30,
        right:20,
        left:20,
        elevation:0,
        backgroundColor:COLORS.white,
        borderRadius:10,
        height:90, ...style.shadow },

      tabBarShowLabel:false, headerShown: false }} tabBarIcon={{}}>
      <Tab.Screen options={{tabBarIcon: ({focused}) =>(
        <View style={{alignItems:'center', justifyContent:'center'}}>
            <Image style={{tintColor:focused  ? '#320571':'#7375D8',width:30,height:30, marginTop:20}} source={require('../scr/assets/1.png')}></Image>
            <Text style={{color:focused ? '#320571':'#7375D8'}}>Письма</Text>
        </View>  
      )}} name="Письма" component={App} />
      <Tab.Screen options={{tabBarIcon: ({focused}) =>(
        <View style={{alignItems:'center', justifyContent:'center'}}>
            <Image style={{tintColor:focused  ? '#320571':'#7375D8',width:30,height:30, marginTop:20}} source={require('../scr/assets/2.png')}></Image>
            <Text style={{color:focused ? '#320571':'#7375D8'}}>Компас</Text>
        </View>  
      )}} name="Компас" component={newOrder} />
      <Tab.Screen options={{tabBarIcon: ({focused}) =>(
        <View style={{alignItems:'center', justifyContent:'center'}}>
            <Image style={{tintColor:focused  ? '#320571':'#7375D8',width:30,height:30, marginTop:20}} source={require('../scr/assets/3.png')}></Image>
            <Text style={{color:focused ? '#320571':'#7375D8'}}>Перевод</Text>
        </View>  
      )}} name="Перевод" component={mail} />
      <Tab.Screen options={{tabBarIcon: ({focused}) =>(
        <View style={{alignItems:'center', justifyContent:'center'}}>
            <Image style={{tintColor:focused  ? '#320571':'#7375D8',width:30,height:30, marginTop:20}} source={require('../scr/assets/4.png')}></Image>
            <Text style={{color:focused ? '#320571':'#7375D8'}}>Настройки</Text>
        </View>  
      )}} name="Настройки" component={profile} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}
const style = StyleSheet.create({
  shadow:{
    shadowColor: '#7c7c7c',
    shadowOffset:{
      width:0.25,
      height: 10
    },
    shadowOpacity:0.95,
    shadowRadius:10,
    elevation:10
    

  }
})
export default MyTabs