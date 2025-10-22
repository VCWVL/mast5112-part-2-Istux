import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useAppContext } from '../lib/AppContext';
import { theme } from '../lib/theme';

export default function RemoveDishScreen() {
  const { menuItems, removeMenuItems } = useAppContext();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleSelection = (itemId: string) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleRemoveSelected = () => {
    removeMenuItems(selectedItems);
    setSelectedItems([]);
  };

  const handleRemoveAll = () => {
    removeMenuItems(menuItems.map(item => item.id));
    setSelectedItems([]);
  };

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
            <Text style={styles.header}>Remove Dish Screen</Text>

            {/* Decorative Elements */}
            <View style={styles.decorativeTop}>
            </View>

            {/* Screen Title */}
            <Text style={styles.title}>Remove Dishes</Text>

            {/* Menu Items List */}
            <View style={styles.itemsContainer}>
              {menuItems.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.itemRow,
                    selectedItems.includes(item.id) && styles.selectedItem
                  ]}
                  onPress={() => toggleSelection(item.id)}
                >
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemDescription}>{item.description}</Text>
                    <Text style={styles.itemCourse}>{item.course}</Text>
                  </View>
                  <Text style={styles.itemPrice}>R{item.price.toFixed(2)}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Action Buttons */}
            <View style={styles.buttonsContainer}>
              <TouchableOpacity 
                style={styles.removeButton} 
                onPress={handleRemoveSelected}
                disabled={selectedItems.length === 0}
              >
                <Text style={styles.buttonText}>
                  Remove Selected ({selectedItems.length})
                </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.removeAllButton} 
                onPress={handleRemoveAll}
                disabled={menuItems.length === 0}
              >
                <Text style={styles.buttonText}>Remove All</Text>
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
  itemsContainer: {
    marginBottom: theme.spacing.xl,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  selectedItem: {
    backgroundColor: theme.colors.primaryDark,
    borderColor: theme.colors.primary,
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
    marginBottom: theme.spacing.xs,
  },
  itemCourse: {
    color: theme.colors.primary,
    fontSize: 12,
    fontWeight: 'bold',
  },
  itemPrice: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    marginBottom: theme.spacing.xl,
  },
  removeButton: {
    backgroundColor: theme.colors.primaryDark,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.sm,
    alignItems: 'center',
  },
  removeAllButton: {
    backgroundColor: theme.colors.danger,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
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
