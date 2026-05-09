import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { ArrowLeft, Search, Bell, Clock, ShoppingCart, Home, History } from 'lucide-react-native';
import { COLORS, SPACING } from '../theme';
import { RESTAURANTS } from '../data';

export default function RestaurantListScreen({ onBack, onSelectRestaurant }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <ArrowLeft color={COLORS.primary} size={24} />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <Search color={COLORS.textSecondary} size={18} />
          <TextInput placeholder="Search..." style={styles.searchInput} />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Nearby Restaurant</Text>
        <FlatList
          data={RESTAURANTS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.card} 
              onPress={() => onSelectRestaurant(item)}
            >
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.cardInfo}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.address}>{item.address}</Text>
              </View>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </View>

      <View style={styles.bottomNav}>
        <Home color={COLORS.textSecondary} size={24} />
        <Bell color={COLORS.textSecondary} size={24} />
        <View style={styles.navActive}>
          <View style={styles.navActiveLine} />
          <Text style={styles.navActiveDot}>□</Text>
        </View>
        <History color={COLORS.textSecondary} size={24} />
        <ShoppingCart color={COLORS.textSecondary} size={24} />
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
  backBtn: {
    padding: 8,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
    marginLeft: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
  },
  content: {
    flex: 1,
    paddingHorizontal: SPACING.md,
  },
  title: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '600',
    marginVertical: 15,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  cardInfo: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
  },
  address: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 2,
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
