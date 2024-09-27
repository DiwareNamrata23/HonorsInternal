import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Work from home.png')} // Ensure the image is correctly referenced
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Discover Your Dream Job</Text>
      <Text style={styles.subtitle}>Explore job roles based on your interests.</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { /*...*/ },
  image: { /*...*/ },
  title: { /*...*/ },
  subtitle: { /*...*/ },
  buttonContainer: { /*...*/ },
  button: { /*...*/ },
  buttonText: { /*...*/ },
});

export default HomeScreen;
