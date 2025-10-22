import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Pressable,
  Modal,
} from 'react-native';
import { router } from 'expo-router';
import { useAppContext } from '../lib/AppContext';
import { MenuItem } from '../lib/types';
import { theme } from '../lib/theme';

export default function MenuScreen() {
  const { menuItems } = useAppContext();

  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const starters = menuItems.filter(item => item.course === 'Starter');
  const mains = menuItems.filter(item => item.course === 'Main');
  const desserts = menuItems.filter(item => item.course === 'Dessert');

  const handleOpenDetails = (item: MenuItem) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleCloseDetails = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  const renderCourseSection = (title: string, items: MenuItem[]) => (
    <View key={title} style={styles.courseSection}>
      <Text style={styles.courseTitle}>{title}</Text>
      {items.map((item) => (
        <Pressable
          key={item.id}
          onPress={() => handleOpenDetails(item)}
          style={({ pressed }) => [
            styles.menuItem,
            pressed && styles.menuItemPressed,
          ]}
        >
          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
          </View>
          <Text style={styles.itemPrice}>R{item.price.toFixed(2)}</Text>
        </Pressable>
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

            {/* Navigation Buttons */}
            <View style={styles.navigationContainer}>
              <TouchableOpacity 
                style={styles.navButton} 
                onPress={() => router.push('/home')}
              >
                <Text style={styles.navButtonText}>← Back to Home</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.navButton} 
                onPress={() => router.push('/help')}
              >
                <Text style={styles.navButtonText}>Help →</Text>
              </TouchableOpacity>
            </View>

            {/* Decorative Elements */}
            <View style={styles.decorativeBottom}>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>

      {/* Details Modal */}
      <Modal
        visible={isModalVisible}
        transparent
        animationType="slide"
        onRequestClose={handleCloseDetails}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Dish Details</Text>
            {selectedItem && (
              <View style={styles.modalContent}>
                <Text style={styles.modalLabel}>Name</Text>
                <Text style={styles.modalValue}>{selectedItem.name}</Text>

                <Text style={styles.modalLabel}>Description</Text>
                <Text style={styles.modalValue}>{selectedItem.description}</Text>

                <Text style={styles.modalLabel}>Course</Text>
                <Text style={styles.modalValue}>{selectedItem.course}</Text>

                <Text style={styles.modalLabel}>Price</Text>
                <Text style={styles.modalValue}>R{selectedItem.price.toFixed(2)}</Text>
              </View>
            )}
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalSecondaryButton} onPress={handleCloseDetails}>
                <Text style={styles.modalSecondaryText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalPrimaryButton} onPress={() => router.push('/user-menu')}>
                <Text style={styles.modalPrimaryText}>View in User Menu</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  menuItemPressed: {
    backgroundColor: theme.colors.surfaceStrong,
    borderColor: theme.colors.primaryDark,
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
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xl,
  },
  navButton: {
    backgroundColor: theme.colors.surfaceStrong,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.radius.md,
    flex: 0.45,
    alignItems: 'center',
  },
  navButtonText: {
    color: theme.colors.text,
    fontSize: 14,
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.lg,
  },
  modalCard: {
    width: '100%',
    backgroundColor: '#0F172A',
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 12,
  },
  modalTitle: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: theme.spacing.md,
    textAlign: 'center',
  },
  modalContent: {
    marginBottom: theme.spacing.lg,
    gap: theme.spacing.xs,
  },
  modalLabel: {
    color: theme.colors.textSecondary,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  modalValue: {
    color: theme.colors.text,
    fontSize: 16,
    marginBottom: theme.spacing.sm,
  },
  modalButtons: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  modalSecondaryButton: {
    flex: 1,
    backgroundColor: theme.colors.surfaceStrong,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: 'center',
    marginRight: theme.spacing.sm,
  },
  modalSecondaryText: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalPrimaryButton: {
    flex: 1,
    backgroundColor: theme.colors.primaryDark,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.radius.md,
    alignItems: 'center',
    marginLeft: theme.spacing.sm,
  },
  modalPrimaryText: {
    color: '#001514',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: theme.colors.primaryDark,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.radius.md,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#001514',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
