import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { ChevronRight, Utensils, UserCheck } from 'lucide-react-native';
import { COLORS, SPACING } from '../theme';
import { MENU_CATEGORIES } from '../data';

export default function MenuScreen({ restaurantName, onSelectCategory, onBack }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.restaurantName}>{restaurantName || 'Choose Kigali'}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Utensils color={COLORS.primary} size={24} />
          <Text style={styles.statLabel}>N8</Text>
          <Text style={styles.statValue}>Ordered</Text>
        </View>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.statBox}>
          <UserCheck color={COLORS.primary} size={24} />
          <Text style={styles.statValue}>call waiter</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuTitleContainer}>
        <Text style={styles.menuTitle}>menu</Text>
      </View>

      <ScrollView style={styles.categoryList}>
        {MENU_CATEGORIES.map((cat) => (
          <TouchableOpacity 
            key={cat.id} 
            style={styles.categoryItem}
            onPress={() => onSelectCategory(cat.name)}
          >
            <Text style={styles.categoryText}>{cat.name}</Text>
            <ChevronRight color={COLORS.textSecondary} size={20} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    padding: SPACING.xl,
    alignItems: 'center',
  },
  restaurantName: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: '700',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    marginHorizontal: SPACING.xl,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
  },
  statLabel: {
    color: COLORS.textSecondary,
    fontSize: 14,
    marginTop: 5,
  },
  statValue: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: '700',
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: COLORS.border,
  },
  menuTitleContainer: {
    alignItems: 'center',
    marginVertical: 40,
  },
  menuTitle: {
    color: COLORS.primary,
    fontSize: 28,
    fontWeight: '900',
    textTransform: 'lowercase',
  },
  categoryList: {
    paddingHorizontal: SPACING.xl,
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  categoryText: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: '500',
  },
});
