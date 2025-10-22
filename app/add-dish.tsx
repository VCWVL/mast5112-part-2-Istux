import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
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

export default function AddDishScreen() {
  const { addMenuItem } = useAppContext();
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<'Starter' | 'Main' | 'Dessert'>('Starter');
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);

  const courses: ('Starter' | 'Main' | 'Dessert')[] = ['Starter', 'Main', 'Dessert'];

  const handleAddDish = () => {
    if (dishName.trim() && description.trim() && price.trim()) {
      const newDish: MenuItem = {
        id: Date.now().toString(),
        name: dishName.trim(),
        description: description.trim(),
        course: selectedCourse,
        price: parseFloat(price),
      };
      
      addMenuItem(newDish);
      
      // Clear form
      setDishName('');
      setDescription('');
      setPrice('');
      setSelectedCourse('Starter');
      
      // Navigate back to home
      router.back();
    }
  };

  const handleClearForm = () => {
    setDishName('');
    setDescription('');
    setPrice('');
    setSelectedCourse('Starter');
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
            <Text style={styles.header}>Add Dish Screen</Text>

            {/* Decorative Elements */}
            <View style={styles.decorativeTop}>
            </View>

            {/* Screen Title */}
            <Text style={styles.title}>Add New Dish</Text>

            {/* Form Fields */}
            <View style={styles.formContainer}>
              <TextInput
                style={styles.input}
                placeholder="Dish Name"
                placeholderTextColor="#999"
                value={dishName}
                onChangeText={setDishName}
              />

              {/* Course Dropdown */}
              <TouchableOpacity
                style={styles.dropdown}
                onPress={() => setShowCourseDropdown(!showCourseDropdown)}
              >
                <Text style={styles.dropdownText}>Course</Text>
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

              <TextInput
                style={styles.input}
                placeholder="Description"
                placeholderTextColor="#999"
                value={description}
                onChangeText={setDescription}
                multiline
                numberOfLines={3}
              />

              <TextInput
                style={styles.input}
                placeholder="Price"
                placeholderTextColor="#999"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
              />
            </View>

            {/* Action Buttons */}
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.addButton} onPress={handleAddDish}>
                <Text style={styles.buttonText}>Add Dish</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.clearButton} onPress={handleClearForm}>
                <Text style={styles.buttonText}>Clear Form</Text>
              </TouchableOpacity>
            </View>

            {/* Navigation Buttons */}
            <View style={styles.navigationContainer}>
              <TouchableOpacity 
                style={styles.navButton} 
                onPress={() => router.back()}
              >
                <Text style={styles.navButtonText}>← Back to Home</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.navButton} 
                onPress={() => router.push('/menu')}
              >
                <Text style={styles.navButtonText}>View Menu →</Text>
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
  formContainer: {
    marginBottom: theme.spacing.xl,
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
    color: theme.colors.text,
    fontSize: 16,
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
  },
  buttonsContainer: {
    marginBottom: theme.spacing.lg,
  },
  addButton: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.sm,
    alignItems: 'center',
  },
  clearButton: {
    backgroundColor: theme.colors.secondary,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
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
    left: theme.spacing.lg,
  },
  leafIcon: {
    fontSize: 20,
    color: theme.colors.secondary,
  },
});