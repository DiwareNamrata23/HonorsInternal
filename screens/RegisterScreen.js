import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

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
        <TouchableOpacity style={styles.socialButton}><AntDesign name="google" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}><AntDesign name="facebook-square" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}><AntDesign name="apple1" size={24} color="black" /></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { /*...*/ },
  registerTitle: { /*...*/ },
  input: { /*...*/ },
  registerButton: { /*...*/ },
  registerButtonText: { /*...*/ },
  alreadyHaveAccount: { /*...*/ },
  orContinueWith: { /*...*/ },
  socialContainer: { /*...*/ },
  socialButton: { /*...*/ },
});

export default RegisterScreen;
