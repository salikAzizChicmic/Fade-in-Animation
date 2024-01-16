import { useEffect, useRef } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity,Animated } from "react-native";

function App(): React.JSX.Element {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim1 = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const fadeAnim3 = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim2, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start(()=>{});
    Animated.timing(fadeAnim3, {
      toValue: 1,
      duration: 1600,
      useNativeDriver: true,
    }).start(()=>{

    });
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeAnim1, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }, []);

  const fadeAnims1 = useRef(new Animated.Value(0)).current; 
  const fadeAnims2 = useRef(new Animated.Value(0)).current; 
  const fadeAnims3 = useRef(new Animated.Value(0)).current; 
  const fadeAnims4 = useRef(new Animated.Value(0)).current; 
  const fadeAnims5 = useRef(new Animated.Value(0)).current;
  const fadeAnims6 = useRef(new Animated.Value(0)).current;  
  const fadeAnims7 = useRef(new Animated.Value(0)).current; 
  const fadeAnims8 = useRef(new Animated.Value(0)).current; 
  useEffect(() => {
    
      Animated.timing(fadeAnims1, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();

      Animated.timing(fadeAnims2, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();

      Animated.timing(fadeAnims3, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();

      Animated.timing(fadeAnims4, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();

      Animated.timing(fadeAnims5, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();

      Animated.timing(fadeAnims6, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();

      Animated.timing(fadeAnims7, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();

      Animated.timing(fadeAnims8, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();
  
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Experience Omni-Presence</Text>
      <View style={styles.circleContainer}>
        <View style={styles.circleBorder} />
        <Animated.View
        style={[
          {
            opacity: fadeAnim2,
            transform: [{ translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [50, 0] }) }],
          },
        ]}
      >
        <Image style={styles.logoImage} source={require('./src/Assets/logo.png')} />
      </Animated.View>
        
        <View style={styles.smallLogosContainer}>
          {/* Rotate and position small logos on the circular line */}
          <Animated.Image
            style={[
              styles.smallLogo,
              {
                opacity: fadeAnims1,
                transform: [{ rotate: '0deg' }],
                position: 'absolute',
                left: 125, // Fine-tune based on circle size
                top: -35,
              },
            ]}
            source={require(`./src/Assets/aone.png`)} // Dynamically load based on index
          />
         
         <Animated.Image
            style={[
              styles.smallLogo,
              {
                opacity: fadeAnims2,
                transform: [{ rotate: '0deg' }],
                position: 'absolute',
                left: 260, // Adjust for spacing
                top: 120,
              },
            ]}
            source={require(`./src/Assets/atwo.png`)} // Dynamically load based on index
          />
           <Animated.Image
            style={[
              styles.smallLogo,
              {
                opacity: fadeAnims3,
                transform: [{ rotate: '0deg' }],
                position: 'absolute',
                left: 125,
                bottom: -25,
              },
            ]}
            source={require(`./src/Assets/athree.png`)} // Dynamically load based on index
          />
          <Animated.Image
            style={[
              styles.smallLogo,
              {
                opacity: fadeAnims4,
                transform: [{ rotate: '0deg' }],
                position: 'absolute',
                left: -25,
                bottom: 120,
              },
            ]}
            source={require(`./src/Assets/afour.png`)} // Dynamically load based on index
          />
          <Animated.Image
            style={[
              styles.smallLogo,
              {
                opacity: fadeAnims4,
                transform: [{ rotate: '60deg' }],
                position: 'absolute',
                left: 10,
                bottom: 20,
              },
            ]}
            source={require(`./src/Assets/afive.png`)} // Dynamically load based on index
          />

<Animated.Image
            style={[
              styles.smallLogo,
              {
                opacity: fadeAnims4,
                transform: [{ rotate: '60deg' }],
                position: 'absolute',
                left: -1,
                bottom: 220,
              },
            ]}
            source={require(`./src/Assets/asix.png`)} // Dynamically load based on index
          />

<Animated.Image
            style={[
              styles.smallLogo,
              {
                opacity: fadeAnims4,
                transform: [{ rotate: '60deg' }],
                position: 'absolute',
                left: 230,
                bottom: 220,
              },
            ]}
            source={require(`./src/Assets/aseven.png`)} // Dynamically load based on index
          />
          
          <Animated.Image
            style={[
              styles.smallLogo,
              {
                opacity: fadeAnims4,
                transform: [{ rotate: '60deg' }],
                position: 'absolute',
                left: 230,
                bottom: 10,
              },
            ]}
            source={require(`./src/Assets/aeight.png`)} // Dynamically load based on index
          />
         
        
        </View>
      </View>
      <Animated.View
        style={[
          {
            opacity: fadeAnim3,
            transform: [{ translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [50, 0] }) }],
          },
        ]}
      >
      <Text style={{marginTop:40,fontSize:40,color:"white",fontWeight:"bold"}} >tria</Text>
      <Text style={{marginTop:1,fontSize:20,color:"white"}} >{`One name,`}</Text>
      <Text style={{marginTop:1,fontSize:20,color:"white"}} >{`all things Web3`}</Text>

      </Animated.View>
      
      <Animated.View
        style={[
          styles.getStartedButton,
          {
            opacity: fadeAnim,
            transform: [{ translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [50, 0] }) }],
          },
        ]}
      >
        <TouchableOpacity
          style={styles.buttonInner}
          onPress={() => { /* Handle button press here */ }}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
         
      </Animated.View>

      <Animated.View
        style={[
       
          {
            opacity: fadeAnim1,
            transform: [{ translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [50, 0] }) }],
          },
        ]}
      >
<Text style={{textDecorationLine: 'underline'}}>Continue as Guest</Text>
      </Animated.View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
  },
  titleText: {
    color: "#fff",
    fontSize: 20,
    marginTop: 100,
    marginBottom: 70,
  },
  circleContainer: {
    position: "relative",
    width: 300,
    height: 300,
  },
  circleBorder: {
    width: "100%",
    height: "100%",
    borderRadius: 150,
    borderWidth: 10,
    borderColor: "black",
    position: "absolute",
    top: 0,
    left: 0,
  },
  logoImage: {
    width: 170,
    height: 170,
    marginHorizontal: 70,
    marginTop: 60,
  },
  smallLogosContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 300, // Match circleBorder width
    height: 300, // Match circleBorder height
    borderRadius: 150, // Equal to circleBorder borderRadius
    borderWidth: 10, // Adjust as needed
    borderColor: "black", // White border for circular line
    justifyContent: "space-around",
    alignItems: "center",
  },
  smallLogo: {
    position: "absolute",
    width: 50,
    height: 50,
  },
  triaText: {
    marginTop: 40,
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
  },
  descriptionText: {
    marginTop: 1,
    fontSize: 20,
    color: "white",
  },
  getStartedButton: {
    backgroundColor: "white",
    marginVertical: 20,
    borderRadius: 40,
  },
  buttonInner: {
    // ... adjust if needed ...
  },
  buttonText: {
    color: "black",
    fontSize: 24,
    paddingHorizontal: 80,
    paddingVertical: 8,
    fontWeight:"400"
  },
  guestText: {
    textDecorationLine: "underline",
  },
});

export default App;
