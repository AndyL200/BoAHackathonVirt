import { StatusBar } from 'expo-status-bar';
import React from "react";
import { 
  StyleSheet,
   Text,
    View,
     Image,
      TouchableHighlight,
       SafeAreaView,
        Button,
         Platform,
          Dimensions,
          useWindowDimensions,
          TouchableWithoutFeedback,
          Linking,
  } from 'react-native';
  import { useDeviceOrientation } from "@react-native-community/hooks";
  import * as FileSystem from 'expo-file-system';

export default function App() {
  const orient = useDeviceOrientation();
  console.log(Dimensions.get("screen"));
  const handlePress = () => console.log("Text Pressed");
  let x = 1;

  const openPDF = async () => {
    const pdf_uri = Platform.OS == 'web' ? 'web' : FileSystem.bundleDirectory + '/assets/CodeOfStudentConduct.pdf';
    if(pdf_uri == 'web') {
      window.open('./assets/CodeOfStudentConduct.pdf')
      return;
    }

    const supported = await Linking.canOpenURL(pdf_uri);

    if(supported) {
      await Linking.openURL(pdf_uri);
    }
    else {
      console.error('Unable to open PDF File');
    }
  }

  return (
    <SafeAreaView style={styles.main}>

        <Text numberOfLines={1} onPress={handlePress}>Home</Text>

        {/* Title */}
      <View style={styles.titleWrapper}>
          <Text style={styles.title}>TSU Student Safety Standard</Text>

          <TouchableHighlight style={Platform.OS == 'web'? { cursor:'pointer' } : {}} onPress={() => console.log("Image tapped")}>
          <Image source={require('./assets/TSULogo.png')} style={styles.logo}/>
          </TouchableHighlight>
      </View>

      {/* Tiger Standard Safety */}
      <View style={styles.safetySection}>
        <Text style={styles.safetyTitle}>Tiger Safety Standard</Text>

        <View style={styles.safetyItem}>
          <Text style={styles.safetyHeader}>Student Conduct</Text>
          <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.tnstate.edu/mediation/')}>
            <Text style={styles.safetyText}>Web: https://www.tnstate.edu/mediation/</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback  onPress={openPDF}>
            <Text style={styles.safetyText}>Code of Student Conduct: </Text>
          </TouchableWithoutFeedback>

        </View>
        <View style={styles.safetyItem}>
          <Text style={styles.safetyHeader}>Counseling Services</Text>
          <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.tnstate.edu/counseling/')}>
            <Text style={styles.safetyText}>Web: https://www.tnstate.edu/counseling/</Text>
          </TouchableWithoutFeedback>
          <Text style={styles.safetyText}>Mobile: 615.963.5611</Text>
        </View>
        <View style={styles.safetyItem}>
          <Text style={styles.safetyHeader}>Campus Police</Text>
          <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.tnstate.edu/police/')}>
            <Text style={styles.safetyText}>Web: https://www.tnstate.edu/police/</Text>
          </TouchableWithoutFeedback>
          <Text style={styles.safetyText}>Mobile: 615.963.5171</Text>
          <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.google.com/maps/place/Queen+Washington+Building/@36.1681751,-86.8320098,17z/data=!3m1!4b1!4m6!3m5!1s0x8864612ff59664d1:0xca49a57fd94e36e4!8m2!3d36.1681751!4d-86.8320098!16s%2Fg%2F11dymfvm90?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D')}>
          <Text style={styles.safetyText}>Queen Washington Building: 1120 37th Ave. N 37209</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>

        {/* Bottom Buttons */}
        <View style={styles.bottomButtons}>
        <Button
          title="Private Video"
          color="#2099c8"
          onPress={() => alert('Private Video')}
        />
        <Button
          title="Private Audio"
          color="#2099c8"
          onPress={() => alert('Private Audio')}
        />
      </View>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex:1,
    backgroundColor: '#00539F',
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0, //secondary
  },
  titleWrapper: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  logo: {
    width: 400,
    height: 200,
    resizeMode: 'stretch',
  },
  safetySection: {
    marginVertical: 20,
    paddingHorizontal: 20,
    alignItems:'center',
  },
  safetyTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  safetyItem: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  safetyHeader: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  safetyText: {
    color: '#FFFFFF',
    fontSize: 16,
    cursor: Platform.OS == 'web'? 'pointer' : 'auto',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  
});
