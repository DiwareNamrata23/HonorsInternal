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
  container: { /*...*/ },
  loginTitle: { /*...*/ },
  input: { /*...*/ },
  loginButton: { /*...*/ },
  loginButtonText: { /*...*/ },
  forgotPassword: { /*...*/ },
  createAccount: { /*...*/ },
  socialContainer: { /*...*/ },
  socialButton: { /*...*/ },
});

export default LoginScreen;
