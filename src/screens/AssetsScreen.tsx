import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Colors from '../styles/Colors';



const AssetsScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.BLACK }}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to CryptoApp</Text>
        <Text style={styles.subtitle}>Track your assets and market trends</Text>

        <TouchableOpacity 
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.grayText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.signupText}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AssetsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 20
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.WHITE,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    color: Colors.GRAY,
    textAlign: 'center'
  },
  loginButton: {
    backgroundColor: Colors.WHITE,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  loginText: {
    color: Colors.BLACK,
    fontWeight: '700',
    fontSize: 16
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  grayText: {
    color: Colors.GRAY
  },
  signupText: {
    color: Colors.WHITE,
    fontWeight: '600'
  },
});
