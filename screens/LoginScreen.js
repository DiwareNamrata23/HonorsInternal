import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

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
        <TouchableOpacity style={styles.socialButton}><AntDesign name="google" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}><AntDesign name="facebook-square" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}><AntDesign name="apple1" size={24} color="black" /></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  loginTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#292929',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 30,
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
});

export default LoginScreen;
