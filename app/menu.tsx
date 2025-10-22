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
import { MenuItem } from '../lib/types';
import { theme } from '../lib/theme';

export default function MenuScreen() {
  const { menuItems } = useAppContext();

  const starters = menuItems.filter(item => item.course === 'Starter');
  const mains = menuItems.filter(item => item.course === 'Main');
  const desserts = menuItems.filter(item => item.course === 'Dessert');

  const renderCourseSection = (title: string, items: MenuItem[]) => (
    <View key={title} style={styles.courseSection}>
      <Text style={styles.courseTitle}>{title}</Text>
      {items.map((item) => (
        <View key={item.id} style={styles.menuItem}>
          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
          </View>
          <Text style={styles.itemPrice}>R{item.price.toFixed(2)}</Text>
        </View>
      ))}
    </View>
  );

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
            <Text style={styles.header}>Menu Screen</Text>

            {/* Decorative Elements */}
            <View style={styles.decorativeTop}>
            </View>

            {/* Screen Title */}
            <Text style={styles.title}>Full Menu</Text>

            {/* Menu Sections */}
            {renderCourseSection('Starters', starters)}
            {renderCourseSection('Mains', mains)}
            {renderCourseSection('Desserts', desserts)}

            {/* Action Buttons */}
            <View style={styles.buttonsContainer}>
              <TouchableOpacity 
                style={styles.actionButton} 
                onPress={() => router.push('/add-dish')}
              >
                <Text style={styles.buttonText}>Add Menu Item</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.actionButton} 
                onPress={() => router.push('/remove-dish')}
              >
                <Text style={styles.buttonText}>Remove Menu Item</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.actionButton} 
                onPress={() => router.push('/filter')}
              >
                <Text style={styles.buttonText}>Filter Menu</Text>
              </TouchableOpacity>
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
  courseSection: {
    marginBottom: theme.spacing.xl,
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: theme.spacing.md,
    textAlign: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: theme.spacing.xs,
  },
  itemDescription: {
    color: theme.colors.textMuted,
    fontSize: 14,
  },
  itemPrice: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    marginBottom: theme.spacing.xl,
  },
  actionButton: {
    backgroundColor: theme.colors.primaryDark,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.sm,
    alignItems: 'center',
  },
  buttonText: {
    color: '#001514',
    fontSize: 16,
    fontWeight: 'bold',
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
