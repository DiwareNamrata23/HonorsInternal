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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  registerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#292929',
    textAlign: 'center',
    marginBottom: 10,
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

export default RegisterScreen;
