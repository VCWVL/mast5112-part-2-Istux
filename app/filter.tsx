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
import { router } from 'expo-router';
import { useAppContext } from '../lib/AppContext';
import { theme } from '../lib/theme';

export default function FilterScreen() {
  const { menuItems } = useAppContext();
  const [selectedCourse, setSelectedCourse] = useState<'All' | 'Starter' | 'Main' | 'Dessert'>('All');
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);

  const courses: ('All' | 'Starter' | 'Main' | 'Dessert')[] = ['All', 'Starter', 'Main', 'Dessert'];

  const filteredItems = selectedCourse === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.course === selectedCourse);

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
            <Text style={styles.header}>Filter Screen</Text>

            {/* Decorative Elements */}
            <View style={styles.decorativeTop}>
            </View>

            {/* Screen Title */}
            <Text style={styles.title}>Filter Menu</Text>

            {/* Course Filter Dropdown */}
            <View style={styles.filterContainer}>
              <Text style={styles.filterTitle}>Filter by Course:</Text>
              
              <TouchableOpacity
                style={styles.dropdown}
                onPress={() => setShowCourseDropdown(!showCourseDropdown)}
              >
                <Text style={styles.dropdownText}>Course: {selectedCourse}</Text>
                <Text style={styles.dropdownArrow}>▼</Text>
              </TouchableOpacity>

              {showCourseDropdown && (
                <View style={styles.dropdownOptions}>
                  {courses.map((course) => (
                    <TouchableOpacity
                      key={course}
                      style={[
                        styles.dropdownOption,
                        selectedCourse === course && styles.selectedOption
                      ]}
                      onPress={() => {
                        setSelectedCourse(course);
                        setShowCourseDropdown(false);
                      }}
                    >
                      <Text style={styles.dropdownOptionText}>{course}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            {/* Filtered Results */}
            <View style={styles.resultsContainer}>
              <Text style={styles.resultsTitle}>
                {selectedCourse} ({filteredItems.length} items)
              </Text>
              
              {filteredItems.map((item) => (
                <View key={item.id} style={styles.filteredItem}>
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemDescription}>{item.description}</Text>
                    <Text style={styles.itemCourse}>{item.course}</Text>
                  </View>
                  <Text style={styles.itemPrice}>R{item.price.toFixed(2)}</Text>
                </View>
              ))}
            </View>

            {/* Action Buttons */}
            <View style={styles.buttonsContainer}>
              <TouchableOpacity 
                style={styles.actionButton} 
                onPress={() => router.push('/menu')}
              >
                <Text style={styles.buttonText}>Back to Full Menu</Text>
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
  filterContainer: {
    marginBottom: theme.spacing.xl,
  },
  filterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
    textAlign: 'center',
  },
  dropdown: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropdownArrow: {
    color: theme.colors.textMuted,
    fontSize: 12,
  },
  dropdownOptions: {
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
    fontWeight: 'bold',
  },
  resultsContainer: {
    marginBottom: theme.spacing.xl,
  },
  resultsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: theme.spacing.md,
    textAlign: 'center',
  },
  filteredItem: {
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
