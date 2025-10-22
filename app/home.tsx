import React, { useState, useEffect, useCallback } from 'react';
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
import { MenuStats } from '../lib/types';

// Background image is now handled through theme

export default function HomeScreen() {
  const { user, menuItems } = useAppContext();

  const [stats, setStats] = useState<MenuStats>({
    totalItems: 0,
    avgPriceStarters: 0,
    avgPriceMains: 0,
    avgPriceDesserts: 0,
  });

  const calculateStats = useCallback(() => {
    const starters = menuItems.filter(item => item.course === 'Starter');
    const mains = menuItems.filter(item => item.course === 'Main');
    const desserts = menuItems.filter(item => item.course === 'Dessert');

    const avgStarters = starters.length > 0 ? starters.reduce((sum, item) => sum + item.price, 0) / starters.length : 0;
    const avgMains = mains.length > 0 ? mains.reduce((sum, item) => sum + item.price, 0) / mains.length : 0;
    const avgDesserts = desserts.length > 0 ? desserts.reduce((sum, item) => sum + item.price, 0) / desserts.length : 0;

    setStats({
      totalItems: menuItems.length,
      avgPriceStarters: avgStarters,
      avgPriceMains: avgMains,
      avgPriceDesserts: avgDesserts,
    });
  }, [menuItems]);

  useEffect(() => {
    calculateStats();
  }, [calculateStats]);

  const sampleItems = menuItems.slice(0, 3);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={theme.images.background}
        style={styles.background}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.scrim} />
        <ScrollView style={styles.scrollView}>
          <View style={styles.content}>
            {/* Decorative Elements */}
            <View style={styles.decorativeTop}>
            </View>

            {/* Welcome Message */}
            <Text style={styles.welcomeTitle}>Welcome, Chef {user?.username || 'Christoffel'}</Text>

            {/* Menu Statistics */}
            <View style={styles.statsContainer}>
              <Text style={styles.statsText}>Total Menu (items: {stats.totalItems})</Text>
              <Text style={styles.statsText}>Avg Price (Starters): R {stats.avgPriceStarters.toFixed(2)}</Text>
              <Text style={styles.statsText}>Avg Price (Mains): R {stats.avgPriceMains.toFixed(2)}</Text>
              <Text style={styles.statsText}>Avg Price (Desserts): R {stats.avgPriceDesserts.toFixed(2)}</Text>
            </View>

            {/* Sample Menu Items */}
            <View style={styles.sampleItemsContainer}>
              {sampleItems.map((item) => (
                <View key={item.id} style={styles.sampleItem}>
                  <Text style={styles.sampleItemName}>{item.name} ({item.course})</Text>
                  <Text style={styles.sampleItemPrice}>R{item.price.toFixed(2)}</Text>
                </View>
              ))}
            </View>

            {/* Action Buttons */}
            <View style={styles.buttonsContainer}>
              <TouchableOpacity 
                style={styles.actionButton} 
                onPress={() => router.push('/add-dish')}
              >
                <Text style={styles.actionButtonText}>Add Menu Item</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.actionButton} 
                onPress={() => router.push('/menu')}
              >
                <Text style={styles.actionButtonText}>View Full Menu</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.actionButton} 
                onPress={() => router.push('/remove-dish')}
              >
                <Text style={styles.actionButtonText}>Remove Menu Item</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.actionButton} 
                onPress={() => router.push('/filter')}
              >
                <Text style={styles.actionButtonText}>Filter Menu</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.actionButton} 
                onPress={() => router.push('/help')}
              >
                <Text style={styles.actionButtonText}>Help</Text>
              </TouchableOpacity>
            </View>

            {/* Navigation Buttons */}
            <View style={styles.navigationContainer}>
              <TouchableOpacity 
                style={styles.navButton} 
                onPress={() => router.back()}
              >
                <Text style={styles.navButtonText}>← Back to Login</Text>
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
    opacity: 0.4,
  },
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.lg,
  },
  decorativeTop: {
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  decorativeText: {
    fontSize: 18,
    color: theme.colors.secondary,
    fontWeight: '500',
  },
  welcomeTitle: {
    fontSize: theme.typography.h2.fontSize,
    fontWeight: theme.typography.h2.fontWeight as any,
    lineHeight: theme.typography.h2.lineHeight,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  statsContainer: {
    marginBottom: theme.spacing.xl,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  statsText: {
    fontSize: theme.typography.body.fontSize,
    fontWeight: '500' as any,
    lineHeight: theme.typography.body.lineHeight,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.sm,
  },
  sampleItemsContainer: {
    marginBottom: theme.spacing.lg,
  },
  sampleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sampleItemName: {
    fontSize: theme.typography.body.fontSize,
    lineHeight: theme.typography.body.lineHeight,
    color: theme.colors.text,
    flex: 1,
    fontWeight: '600' as any,
  },
  sampleItemPrice: {
    fontSize: theme.typography.body.fontSize,
    lineHeight: theme.typography.body.lineHeight,
    color: theme.colors.primary,
    fontWeight: '700' as any,
  },
  buttonsContainer: {
    marginBottom: theme.spacing.md,
  },
  actionButton: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.lg,
    borderRadius: theme.radius.lg,
    marginBottom: theme.spacing.md,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  actionButtonText: {
    fontSize: theme.typography.button.fontSize,
    fontWeight: theme.typography.button.fontWeight as any,
    lineHeight: theme.typography.button.lineHeight,
    color: '#001514',
  },
  navigationContainer: {
    marginBottom: theme.spacing.xl,
  },
  navButton: {
    backgroundColor: theme.colors.surfaceStrong,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    alignItems: 'center',
  },
  navButtonText: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold' as any,
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