import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { User, Phone, Mail } from 'lucide-react-native';
import { COLORS, SPACING } from '../theme';

export default function RegisterScreen({ onRegister, onGoToLogin }) {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.content}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Supa<Text style={{color: COLORS.primary}}>Menu</Text></Text>
          <Text style={styles.subtitle}>Welcome ...</Text>
          <Text style={styles.instruction}>Please fill in the information</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <User size={20} color={COLORS.textSecondary} />
            <TextInput 
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor={COLORS.textSecondary}
            />
          </View>

          <View style={styles.inputContainer}>
            <Phone size={20} color={COLORS.textSecondary} />
            <TextInput 
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor={COLORS.textSecondary}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputContainer}>
            <Mail size={20} color={COLORS.textSecondary} />
            <TextInput 
              style={styles.input}
              placeholder="Your Email"
              placeholderTextColor={COLORS.textSecondary}
              keyboardType="email-address"
            />
          </View>

          <TouchableOpacity style={styles.proceedBtn} onPress={onRegister}>
            <Text style={styles.proceedBtnText}>Proceed</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>OR</Text>
          <Text style={styles.pmsText}>If you have a PMS account</Text>

          <TouchableOpacity style={styles.loginBtn} onPress={onGoToLogin}>
            <Text style={styles.loginBtnText}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={onGoToLogin}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: SPACING.xl,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a237e',
  },
  instruction: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 5,
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 55,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  proceedBtn: {
    backgroundColor: COLORS.primary,
    height: 55,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  proceedBtnText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
  },
  orText: {
    textAlign: 'center',
    marginTop: 15,
    color: COLORS.textSecondary,
    fontWeight: '600',
  },
  pmsText: {
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  loginBtn: {
    backgroundColor: COLORS.primary,
    height: 55,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtnText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  footerText: {
    color: COLORS.textSecondary,
  },
  registerText: {
    color: COLORS.primary,
    fontWeight: '700',
  },
});
