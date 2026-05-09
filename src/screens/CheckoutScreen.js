import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
import { ArrowLeft, CreditCard, Smartphone, DollarSign, Lock } from 'lucide-react-native';
import { COLORS, SPACING } from '../theme';

export default function CheckoutScreen({ onBack, onSuccess }) {
  const [method, setMethod] = useState('mobile');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <ArrowLeft color={COLORS.primary} size={24} />
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          <Text style={styles.title}>Checkout</Text>
          <CreditCard color={COLORS.textSecondary} size={20} style={{marginLeft: 8}} />
        </View>
        <View style={styles.headerTotal}>
          <Text style={styles.totalValue}>Frw 16,000</Text>
          <Text style={styles.totalLabel}>Including VAT (18%)</Text>
        </View>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, method === 'card' && styles.tabActive]}
          onPress={() => setMethod('card')}
        >
          <Text style={[styles.tabText, method === 'card' && styles.tabTextActive]}>Credit card</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, method === 'mobile' && styles.tabActive]}
          onPress={() => setMethod('mobile')}
        >
          <Text style={[styles.tabText, method === 'mobile' && styles.tabTextActive]}>Mobile & Cash</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.methodList}>
        <PaymentMethod 
          icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/MTN_Logo.svg/1024px-MTN_Logo.svg.png" 
          label="MTN Mobile Money" 
        />
        <PaymentMethod 
          icon="https://seeklogo.com/images/A/airtel-money-logo-1A5D3B3F6E-seeklogo.com.png" 
          label="Airtel Money" 
        />
        <PaymentMethod 
          icon="https://cdn-icons-png.flaticon.com/512/2489/2489756.png" 
          label="Cash" 
        />

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>We will send you an order details to your email after the successful payment</Text>
        </View>

        <TouchableOpacity style={styles.payBtn} onPress={onSuccess}>
          <Lock size={18} color={COLORS.white} style={{marginRight: 10}} />
          <Text style={styles.payBtnText}>Pay for the order</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function PaymentMethod({ icon, label }) {
  return (
    <TouchableOpacity style={styles.methodCard}>
      <Image source={{ uri: icon }} style={styles.methodIcon} />
      <Text style={styles.methodLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    padding: SPACING.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: '40%',
    top: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
  },
  headerTotal: {
    alignItems: 'flex-end',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#10B981', // Green for amount
  },
  totalLabel: {
    fontSize: 10,
    color: COLORS.textSecondary,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    marginHorizontal: SPACING.md,
    borderRadius: 15,
    padding: 5,
    marginTop: 20,
  },
  tab: {
    flex: 1,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  tabActive: {
    backgroundColor: '#10B981',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textSecondary,
  },
  tabTextActive: {
    color: COLORS.white,
  },
  methodList: {
    flex: 1,
    padding: SPACING.md,
  },
  methodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  methodIcon: {
    width: 50,
    height: 30,
    resizeMode: 'contain',
  },
  methodLabel: {
    marginLeft: 20,
    fontSize: 14,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  infoBox: {
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 40,
  },
  infoText: {
    textAlign: 'center',
    fontSize: 12,
    color: COLORS.textSecondary,
    lineHeight: 18,
  },
  payBtn: {
    backgroundColor: '#10B981',
    flexDirection: 'row',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  payBtnText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
  },
});
