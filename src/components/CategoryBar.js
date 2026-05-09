import React from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import * as LucideIcons from 'lucide-react-native';
import { COLORS, SPACING } from '../theme';

export default function CategoryBar({ categories, selectedId, onSelect }) {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle={styles.container}
    >
      {categories.map((cat) => {
        const IconComponent = LucideIcons[cat.icon] || LucideIcons.LayoutGrid;
        const isSelected = selectedId === cat.id;
        
        return (
          <TouchableOpacity 
            key={cat.id}
            style={[styles.item, isSelected && styles.itemSelected]}
            onPress={() => onSelect(cat.id)}
          >
            <View style={[styles.iconContainer, isSelected && styles.iconSelected]}>
              <IconComponent 
                size={20} 
                color={isSelected ? COLORS.white : COLORS.textSecondary} 
              />
            </View>
            <Text style={[styles.text, isSelected && styles.textSelected]}>
              {cat.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    gap: SPACING.md,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingRight: SPACING.md,
    borderRadius: 30,
  },
  itemSelected: {
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  iconSelected: {
    backgroundColor: COLORS.primary,
  },
  text: {
    color: COLORS.textSecondary,
    fontSize: 14,
    fontWeight: '500',
  },
  textSelected: {
    color: COLORS.white,
    fontWeight: '700',
  },
});
