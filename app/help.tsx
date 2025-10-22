import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';
import { useAppContext } from '../lib/AppContext';
import { theme } from '../lib/theme';

export default function HelpScreen() {
  const { user } = useAppContext();
  const isChef = user?.role === 'Chef';
  const faqItems = [
    {
      question: 'How do I add a new menu item?',
      answer: 'Go to the Add Dish screen and fill in the dish name, course, description, and price. Then tap "Add Dish".'
    },
    {
      question: 'How do I remove menu items?',
      answer: 'Go to the Remove Dish screen, select the items you want to remove, and tap "Remove Selected".'
    },
    {
      question: 'How do I filter the menu?',
      answer: 'Go to the Filter screen and select a course (Starter, Main, or Dessert) to filter the menu items.'
    },
    {
      question: 'How do I view the full menu?',
      answer: 'Go to the Menu screen to see all menu items organized by course.'
    },
    {
      question: 'What courses are available?',
      answer: 'The app supports three courses: Starter, Main, and Dessert.'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={theme.images.background}
        resizeMode="cover"
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.scrim} />
        <ScrollView style={styles.scrollView}>
          <View style={styles.content}>
            {/* Header */}
            <Text style={styles.header}>Help Screen</Text>

            {/* Decorative Elements */}
            <View style={styles.decorativeTop}>
            </View>

            {/* Screen Title */}
            <Text style={styles.title}>Help & FAQ</Text>

            {/* FAQ Section */}
            <View style={styles.faqContainer}>
              <Text style={styles.faqTitle}>Frequently Asked Questions</Text>
              
              {faqItems.map((item, index) => (
                <View key={index} style={styles.faqItem}>
                  <Text style={styles.faqQuestion}>Q: {item.question}</Text>
                  <Text style={styles.faqAnswer}>A: {item.answer}</Text>
                </View>
              ))}
            </View>

            {/* Navigation Section */}
            <View style={styles.navigationContainer}>
              <Text style={styles.navigationTitle}>Quick Navigation</Text>
              {isChef ? (
                <>
                  <TouchableOpacity 
                    style={styles.navButton} 
                    onPress={() => router.push('/home')}
                  >
                    <Text style={styles.navButtonText}> Home</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.navButton} 
                    onPress={() => router.push('/menu')}
                  >
                    <Text style={styles.navButtonText}> Full Menu</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.navButton} 
                    onPress={() => router.push('/add-dish')}
                  >
                    <Text style={styles.navButtonText}> Add Dish</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.navButton} 
                    onPress={() => router.push('/remove-dish')}
                  >
                    <Text style={styles.navButtonText}> Remove Dish</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.navButton} 
                    onPress={() => router.push('/filter')}
                  >
                    <Text style={styles.navButtonText}> Filter Menu</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TouchableOpacity 
                    style={styles.navButton} 
                    onPress={() => router.push('/user-menu')}
                  >
                    <Text style={styles.navButtonText}> User Menu</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.navButton} 
                    onPress={() => router.push('/filter')}
                  >
                    <Text style={styles.navButtonText}> Filter Menu</Text>
                  </TouchableOpacity>
                </>
              )}
              <TouchableOpacity 
                style={styles.navButton} 
                onPress={() => router.push('/login')}
              >
                <Text style={styles.navButtonText}>Back to Login</Text>
              </TouchableOpacity>
            </View>

            {/* Contact Section */}
            <View style={styles.contactContainer}>
              <Text style={styles.contactTitle}>Contact Support</Text>
              <Text style={styles.contactText}>
                For additional help, please contact Chef Christoffel&apos;s support team on WWW.christoffel.co.za.
              </Text>
            </View>

            {/* Decorative Elements */}
            <View style={styles.decorativeBottom}>
            </View>
          </View>
        </ScrollView>
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
    opacity: 0.35,
  },
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.lg,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
    backgroundColor: theme.colors.surfaceStrong,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.radius.md,
  },
  decorativeTop: {
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  decorativeText: {
    fontSize: 16,
    color: theme.colors.secondary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  },
  faqContainer: {
    marginBottom: theme.spacing.xl,
  },
  faqTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
  },
  faqItem: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  faqQuestion: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: theme.spacing.sm,
  },
  faqAnswer: {
    color: theme.colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  navigationContainer: {
    marginBottom: theme.spacing.xl,
  },
  navigationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
  },
  navButton: {
    backgroundColor: theme.colors.primaryDark,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.sm,
    alignItems: 'center',
  },
  navButtonText: {
    color: '#001514',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactContainer: {
    marginBottom: theme.spacing.xl,
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.lg,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  contactText: {
    color: theme.colors.textMuted,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  decorativeBottom: {
    position: 'absolute',
    bottom: theme.spacing.lg,
    right: theme.spacing.lg,
  },
  crownIcon: {
    fontSize: 20,
    color: theme.colors.secondary,
  },
});
