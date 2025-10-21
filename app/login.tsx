import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { router } from 'expo-router';
import { useAppContext } from '../lib/AppContext';
import { UserRole } from '../lib/types';
import { theme } from '../lib/theme';

export default function LoginScreen() {
  const { setUser } = useAppContext();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole>('Chef');
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);

  const roles: UserRole[] = ['Chef', 'User'];

  const handleLogin = () => {
    if (login.trim() && password.trim()) {
      setUser({
        role: selectedRole,
        username: login.trim(),
      });
      
      if (selectedRole === 'Chef') {
        router.push('/home');
      } else {
        router.push('/user-menu');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: theme.images.background }}
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.scrim} />
        <View style={styles.content}>
          {/* Fork and Knife Icon */}
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🍴</Text>
          </View>

          {/* App Title */}
          <Text style={styles.title}>Christoffel&apos;s</Text>
          <Text style={styles.subtitle}>Culinary App</Text>

          {/* Login Form */}
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Login"
              placeholderTextColor="#999"
              value={login}
              onChangeText={setLogin}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            
            {/* Role Selection Dropdown */}
            <TouchableOpacity
              style={styles.dropdown}
              onPress={() => setShowRoleDropdown(!showRoleDropdown)}
            >
              <Text style={styles.dropdownText}>Role: {selectedRole}</Text>
              <Text style={styles.dropdownArrow}>▼</Text>
            </TouchableOpacity>

            {showRoleDropdown && (
              <View style={styles.dropdownOptions}>
                {roles.map((role) => (
                  <TouchableOpacity
                    key={role}
                    style={[
                      styles.dropdownOption,
                      selectedRole === role && styles.selectedOption
                    ]}
                    onPress={() => {
                      setSelectedRole(role);
                      setShowRoleDropdown(false);
                    }}
                  >
                    <Text style={styles.dropdownOptionText}>{role}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
            
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          {/* Chicken Wing Icon */}
          <View style={styles.bottomIcon}>
            <Text style={styles.chickenIcon}>🍗</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  backgroundImage: {
    opacity: 0.4,
  },
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.xl,
  },
  iconContainer: {
    marginBottom: theme.spacing.lg,
  },
  icon: {
    fontSize: 48,
    color: theme.colors.primary,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  title: {
    fontSize: theme.typography.h1.fontSize,
    fontWeight: theme.typography.h1.fontWeight as any,
    lineHeight: theme.typography.h1.lineHeight,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.h4.fontWeight as any,
    lineHeight: theme.typography.h4.lineHeight,
    color: theme.colors.textMuted,
    textAlign: 'center',
    marginBottom: theme.spacing.xxl,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 56,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    paddingHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    fontSize: theme.typography.body.fontSize,
    fontWeight: theme.typography.body.fontWeight as any,
    lineHeight: theme.typography.body.lineHeight,
    color: theme.colors.text,
    backgroundColor: theme.colors.surface,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  dropdown: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    paddingHorizontal: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
  },
  dropdownText: {
    color: theme.colors.text,
    fontSize: 16,
  },
  dropdownArrow: {
    color: theme.colors.textMuted,
    fontSize: 12,
  },
  dropdownOptions: {
    width: '100%',
    backgroundColor: theme.colors.surfaceStrong,
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  dropdownOption: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  selectedOption: {
    backgroundColor: theme.colors.primaryDark,
  },
  dropdownOptionText: {
    color: theme.colors.text,
    fontSize: 16,
  },
  loginButton: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  loginButtonText: {
    fontSize: theme.typography.button.fontSize,
    fontWeight: theme.typography.button.fontWeight as any,
    lineHeight: theme.typography.button.lineHeight,
    color: '#001514',
  },
  forgotPassword: {
    marginTop: theme.spacing.sm,
  },
  forgotPasswordText: {
    color: theme.colors.textMuted,
    fontSize: 14,
  },
  bottomIcon: {
    position: 'absolute',
    bottom: theme.spacing.lg,
    left: theme.spacing.lg,
  },
  chickenIcon: {
    fontSize: 20,
    color: theme.colors.secondary,
  },
});