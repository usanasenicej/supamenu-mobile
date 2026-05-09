import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Star, Plus } from 'lucide-react-native';
import { COLORS, SPACING } from '../theme';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width > 600 ? 250 : width * 0.44;

export default function ProductCard({ item }) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.9}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.ratingContainer}>
        <Star size={12} color={COLORS.primary} fill={COLORS.primary} />
        <Text style={styles.ratingText}>{item.rating}</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
        <Text style={styles.category}>{item.category}</Text>
        
        <View style={styles.footer}>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          <TouchableOpacity style={styles.addButton}>
            <Plus size={20} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    width: CARD_WIDTH,
    marginBottom: SPACING.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  ratingContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    backdropFilter: 'blur(4px)',
  },
  ratingText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: '700',
    marginLeft: 4,
  },
  content: {
    padding: SPACING.sm,
  },
  name: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: '600',
  },
  category: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginTop: 2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.sm,
  },
  price: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
  },
  addButton: {
    backgroundColor: COLORS.primary,
    padding: 6,
    borderRadius: 10,
  },
});
