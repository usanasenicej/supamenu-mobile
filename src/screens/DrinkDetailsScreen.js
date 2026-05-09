import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { ArrowLeft, ChevronRight, ShoppingCart, Plus, Minus, Home, Bell, History } from 'lucide-react-native';
import { COLORS, SPACING } from '../theme';
import { DRINKS } from '../data';

export default function DrinkDetailsScreen({ onBack, onCheckout }) {
  const [quantities, setQuantities] = useState({ d1: 2, d2: 1, d3: 0 });

  const updateQty = (id, delta) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, prev[id] + delta)
    }));
  };

  const total = Object.entries(quantities).reduce((acc, [id, qty]) => {
    const drink = DRINKS.find(d => d.id === id);
    return acc + (drink.price * qty);
  }, 0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <ArrowLeft color={COLORS.primary} size={24} />
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <Text style={styles.restaurantName}>Choose Kigali</Text>
          <Text style={styles.categoryName}>Drinks</Text>
        </View>
      </View>

      <ScrollView style={styles.list}>
        {DRINKS.map((drink) => (
          <View key={drink.id} style={styles.itemCard}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=200&auto=format&fit=crop' }} 
              style={styles.itemImage} 
            />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{drink.name}</Text>
              <Text style={styles.itemDesc}>{drink.description}</Text>
              <Text style={styles.itemPriceUsd}>Singapore Sling - {drink.priceUsd}</Text>
              <Text style={styles.itemPriceFrw}>Frw {drink.price.toLocaleString()}</Text>
            </View>
            <View style={styles.qtyContainer}>
              <TouchableOpacity onPress={() => updateQty(drink.id, -1)} style={styles.qtyBtn}>
                <Minus size={14} color={COLORS.primary} />
              </TouchableOpacity>
              <Text style={styles.qtyText}>{quantities[drink.id]}</Text>
              <TouchableOpacity onPress={() => updateQty(drink.id, 1)} style={styles.qtyBtn}>
                <Plus size={14} color={COLORS.primary} />
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <TouchableOpacity style={styles.moreDrinks}>
          <Text style={styles.moreDrinksText}>more drinks</Text>
          <Plus size={18} color={COLORS.primary} />
        </TouchableOpacity>

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>Frw {total.toLocaleString()}</Text>
        </View>

        <TouchableOpacity style={styles.checkoutBtn} onPress={onCheckout}>
          <Text style={styles.checkoutBtnText}>Proceed to checkout</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.bottomNav}>
        <Home color={COLORS.textSecondary} size={24} />
        <Bell color={COLORS.textSecondary} size={24} />
        <View style={styles.navActive}>
          <View style={styles.navActiveLine} />
          <Text style={styles.navActiveDot}>□</Text>
        </View>
        <History color={COLORS.textSecondary} size={24} />
        <ShoppingCart color={COLORS.primary} size={24} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.md,
  },
  headerInfo: {
    flex: 1,
    alignItems: 'center',
    marginRight: 24,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
  },
  categoryName: {
    fontSize: 14,
    color: COLORS.primary,
  },
  list: {
    flex: 1,
    paddingHorizontal: SPACING.md,
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 15,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.text,
  },
  itemDesc: {
    fontSize: 10,
    color: COLORS.textSecondary,
    marginVertical: 2,
  },
  itemPriceUsd: {
    fontSize: 10,
    color: COLORS.textSecondary,
  },
  itemPriceFrw: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.primary,
    marginTop: 2,
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: 8,
    padding: 4,
  },
  qtyBtn: {
    padding: 4,
  },
  qtyText: {
    paddingHorizontal: 8,
    fontWeight: '700',
    fontSize: 14,
  },
  moreDrinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  moreDrinksText: {
    color: COLORS.primary,
    fontSize: 16,
    marginRight: 10,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.primary,
  },
  checkoutBtn: {
    backgroundColor: COLORS.primary,
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  checkoutBtnText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navActive: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navActiveLine: {
    width: 30,
    height: 3,
    backgroundColor: COLORS.primary,
    borderRadius: 2,
    marginBottom: 2,
  },
  navActiveDot: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
