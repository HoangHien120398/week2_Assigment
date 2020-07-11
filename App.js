import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
   StyleSheet,
   Text,
    View,
    Image, 
    TouchableOpacity,
    ScrollView
   } from 'react-native';

    const POLO_BLUE_COLOR = 'rgb(51,60,87)';
    const FOLLOW_COLOR = 'rgb(71,113,246)';
    const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

    const imgData = [
      { id: 1, imgSource: require('./assets/1.png') },
      { id: 2, imgSource: require('./assets/3.png') },
      { id: 3, imgSource: require('./assets/1.png') },
      { id: 4, imgSource: require('./assets/2.png') },
      { id: 5, imgSource: require('./assets/4.png') },
      { id: 6, imgSource: require('./assets/2.png') },
      { id: 7, imgSource: require('./assets/3.png') },
      { id: 8, imgSource: require('./assets/4.png') },
      { id: 9, imgSource: require('./assets/doc.jpg') }
    ];
    const centerImgData = Math.floor(imgData.length / 2);
export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.headerInfor}>
            <View style={styles.imageWrapper}>
              <Image 
                style={styles.avatarImage}
                source={require('./assets/avatar_1.jpg')}
                />
            </View>
              
            <View style={styles.Describe}>
              <Text style={styles.name}>
                  Gia đình nhà Sâu
                </Text>
                <Text style={styles.infor}>
                 Family is not an important thing, it's everything
                </Text>
                
                <View style={styles.buttonWrapper}>
                  <TouchableOpacity style={styles.followButton} >
                   <Text style={styles.followText}>Follow</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.sendButton}>
                    <Feather name="send" size={24} color="white" />
                  </TouchableOpacity>
                  
                </View>
                
            </View>

        </View>

        <View style={styles.countLiked}>
          <View style={styles.photoWrapper}>
            <Text style={styles.countText}> 120</Text>
            <Text style={styles.photoText}> Photo</Text>
          </View>
          <View style={styles.followWrapper}>
            <Text style={styles.countText}> 3K</Text>
            <Text style={styles.peopleText}> Follower</Text>
          </View>
          <View style={styles.followingWrapper}>
            <Text style={styles.countText}> 98</Text>
            <Text style={styles.FollowingText}> Following</Text>
          </View>
        </View>

        <ScrollView style={{
          flex: 0.65
        }}>
          <View style={styles.imageGroup}>
            <View style={styles.imageColumn}>
            {imgData.slice(0, centerImgData).map(item =>{
              //thuoc tinh slice la de cat mang
              //map như vong lap for, qua tung item
              return <Image source={item.imgSource} style={styles.image}/>
            })}
            </View>
            <View style={styles.imageColumn}>
            {imgData.slice(centerImgData).map(item =>{
              return <Image source={item.imgSource} style={styles.image}/>
            })}
            </View>
          </View>
          
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headerInfor: {
    flex: 0.25,
    // backgroundColor: 'red',
    flexDirection: 'row',
    marginTop: 15
  },
  imageWrapper: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
    
  },
  avatarImage: {
    width: 120,
    height: 120,
    borderRadius:60

  },
  Describe: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    shadowOpacity: 0.15,
    color: 'black'
  },
  infor: {
    fontSize: 15,
    fontWeight: '500',
    color: 'gray'
  },
  buttonWrapper:{
    flexDirection: 'row',
  },
  followButton: {
    backgroundColor:FOLLOW_COLOR,
    width: 100,
    height:35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    shadowOpacity: 0.15,
  },
  sendButton: {
    backgroundColor:SEND_MESSAGE_COLOR,
    width: 60,
    height:35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginLeft: 10  
  },
  followText: {
    color: "white",
    fontSize: 15,
    fontWeight:"700"
  },
  sendText: {
    color: "white",
    fontSize: 15,
    fontWeight: "700"
  },
  countLiked: {
    flex: 0.1,
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center'// căn giữa theo cả row và column
  },
  photoWrapper: {
    flexDirection: 'column',
    alignItems:'center'
  },
  followWrapper: {
    flexDirection: 'column',
    alignItems:'center'
  },
  followingWrapper: {
    flexDirection: 'column',
    alignItems:'center'
  },
  countText: {
    fontSize: 15,
    fontWeight:'bold'
  },
  photoText:{
    color:'gray',
    fontWeight:'bold'
  },
  peopleText: {
    color:'gray',
    fontWeight:'bold'
  }, 
  FollowingText: {
    color: 'gray',
    fontWeight:'bold'
  },
  imageGroup: {
    flex: 0.65,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center'
  },
  imageColumn: {
    flexDirection: 'column',
    
  },
  image: {
    width:170,
    height:170 ,
    borderRadius: 20,
    marginTop: 10,
    marginRight: 10,
    resizeMode:'cover'
    
  },
  // scoll: {
  //   flex: 0.65,
  //   flexDirection:'row',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // }
  
});

//Cach 2: header flatList
 // duwoi la flatList=> code se sang on
 //size kc nhau

//  ===>in View onLAyout
