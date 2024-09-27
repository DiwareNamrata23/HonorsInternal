// Import necessary components
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from '@expo/vector-icons/AntDesign';

const Stack = createStackNavigator();

// Home Screen Component
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/Work from home.png')} // Reference your local image here
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

// Login Screen Component
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loginTitle}>Login here</Text>
      <Text style={styles.subtitle}>Welcome back you’ve been missed!</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={styles.loginButton} onPress={() => alert('Login')}>
        <Text style={styles.loginButtonText}>Sign in</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      <Text style={styles.createAccount}>Create new account</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}><Text><AntDesign name="google" size={24} color="black" /></Text></TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}><Text><AntDesign name="facebook-square" size={24} color="black" /></Text></TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}><Text><AntDesign name="apple1" size={24} color="black" /></Text></TouchableOpacity>
      </View>
    </View>
  );
};

// Register Screen Component
const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.registerTitle}>Create Account</Text>
      <Text style={styles.subtitle}>Create an account so you can explore all the existing jobs</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={styles.registerButton} onPress={() => alert('Account Created')}>
        <Text style={styles.registerButtonText}>Sign up</Text>
      </TouchableOpacity>
      <Text style={styles.alreadyHaveAccount}>Already have an account</Text>
      <Text style={styles.orContinueWith}>Or continue with</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}><Text><AntDesign name="google" size={24} color="black" /></Text></TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}><Text><AntDesign name="facebook-square" size={24} color="black" /></Text></TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}><Text><AntDesign name="apple1" size={24} color="black" /></Text></TouchableOpacity>
      </View>
    </View>
  );
};

// Main App Component with Navigation
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 400,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#292929',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    width: '48%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  loginTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#292929',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  forgotPassword: {
    color: '#007bff',
    textAlign: 'center',
    marginTop: 15,
  },
  createAccount: {
    marginTop: 20,
    textAlign: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  socialButton: {
    width: 50,
    height: 50,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginHorizontal: 10,
  },
  registerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#292929',
    textAlign: 'center',
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: '#0055ff',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  alreadyHaveAccount: {
    marginTop: 20,
    textAlign: 'center',
  },
  orContinueWith: {
    marginTop: 30,
    textAlign: 'center',
    color: '#666666',
  },
});
