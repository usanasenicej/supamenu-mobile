import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  SafeAreaView, 
  TextInput, 
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { Search, ShoppingBag, Menu as MenuIcon } from 'lucide-react-native';
import { COLORS, SPACING } from '../theme';
import { CATEGORIES, MENU_ITEMS } from '../data';
import CategoryBar from '../components/CategoryBar';
import ProductCard from '../components/ProductCard';

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('1');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = selectedCategory === '1' || item.category === CATEGORIES.find(c => c.id === selectedCategory)?.name;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn}>
          <MenuIcon color={COLORS.white} size={24} />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>SUPA</Text>
          <Text style={[styles.logoText, { color: COLORS.primary }]}>MENU</Text>
        </View>
        <TouchableOpacity style={styles.cartBtn}>
          <ShoppingBag color={COLORS.white} size={24} />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchSection}>
        <View style={styles.searchContainer}>
          <Search color={COLORS.textSecondary} size={20} />
          <TextInput 
            style={styles.searchInput}
            placeholder="Search for dishes..."
            placeholderTextColor={COLORS.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Categories */}
      <CategoryBar 
        categories={CATEGORIES} 
        selectedId={selectedCategory} 
        onSelect={setSelectedCategory} 
      />

      {/* Menu Grid */}
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard item={item} />}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Popular Dishes</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View all</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
  },
  iconBtn: {
    padding: 8,
    backgroundColor: COLORS.surface,
    borderRadius: 12,
  },
  logoContainer: {
    flexDirection: 'row',
  },
  logoText: {
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 1,
    color: COLORS.white,
  },
  cartBtn: {
    padding: 8,
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: COLORS.accent,
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.background,
  },
  badgeText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: '700',
  },
  searchSection: {
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.md,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    paddingHorizontal: SPACING.md,
    borderRadius: 15,
    height: 50,
  },
  searchInput: {
    flex: 1,
    color: COLORS.white,
    marginLeft: 10,
    fontSize: 16,
  },
  listContent: {
    paddingHorizontal: SPACING.md,
    paddingBottom: 100,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: SPACING.md,
  },
  listTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
  },
  viewAll: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: '600',
  },
});
