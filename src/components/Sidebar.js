import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { Home, User, ShoppingBag, Settings, LogOut, X } from 'lucide-react-native';
import { COLORS, SPACING } from '../theme';

const { width } = Dimensions.get('window');

export default function Sidebar({ isOpen, onClose, onLogout }) {
  if (!isOpen) return null;

  return (
    <View style={styles.overlay}>
      <TouchableOpacity style={styles.backdrop} onPress={onClose} activeOpacity={1} />
      <SafeAreaView style={styles.drawer}>
        <View style={styles.header}>
          <View style={styles.profileInfo}>
            <View style={styles.avatar}>
              <User color={COLORS.white} size={30} />
            </View>
            <View>
              <Text style={styles.userName}>John Doe</Text>
              <Text style={styles.userEmail}>john@example.com</Text>
            </View>
          </View>
          <TouchableOpacity onPress={onClose}>
            <X color={COLORS.text} size={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.menu}>
          <MenuItem icon={Home} label="Home" active onPress={onClose} />
          <MenuItem icon={User} label="Profile" onPress={onClose} />
          <MenuItem icon={ShoppingBag} label="My Orders" onPress={onClose} />
          <MenuItem icon={Settings} label="Settings" onPress={onClose} />
        </View>

        <TouchableOpacity style={styles.logout} onPress={onLogout}>
          <LogOut color={COLORS.error} size={20} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

function MenuItem({ icon: Icon, label, active, onPress }) {
  return (
    <TouchableOpacity 
      style={[styles.menuItem, active && styles.menuItemActive]} 
      onPress={onPress}
    >
      <Icon color={active ? COLORS.primary : COLORS.textSecondary} size={22} />
      <Text style={[styles.menuLabel, active && styles.menuLabelActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1000,
    flexDirection: 'row',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  drawer: {
    width: width * 0.75,
    backgroundColor: COLORS.white,
    height: '100%',
    padding: SPACING.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 40,
    marginTop: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  userName: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
  },
  userEmail: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  menu: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  menuItemActive: {
    backgroundColor: 'rgba(255, 156, 39, 0.1)',
  },
  menuLabel: {
    marginLeft: 15,
    fontSize: 16,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  menuLabelActive: {
    color: COLORS.primary,
    fontWeight: '700',
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  logoutText: {
    marginLeft: 15,
    fontSize: 16,
    color: COLORS.error,
    fontWeight: '600',
  },
});
