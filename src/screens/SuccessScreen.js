import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { CheckCircle2, ArrowRight } from 'lucide-react-native';
import { COLORS, SPACING } from '../theme';

export default function SuccessScreen({ onNext }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5902/5902500.png' }} 
            style={styles.image} 
          />
          <View style={styles.checkIcon}>
            <CheckCircle2 color="#10B981" size={40} fill="white" />
          </View>
        </View>

        <Text style={styles.title}>Payment Success, Yayy!</Text>
        <Text style={styles.subtitle}>we will send order details and invoice in your contact no. and registered email</Text>

        <TouchableOpacity style={styles.detailsLink}>
          <Text style={styles.detailsText}>Check Details</Text>
          <ArrowRight color={COLORS.primary} size={16} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.downloadBtn} onPress={onNext}>
          <Text style={styles.downloadText}>Download Invoice</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerLogo}>Supa<Text style={{color: COLORS.primary}}>Menu</Text></Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xl,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 40,
  },
  image: {
    width: 200,
    height: 200,
    tintColor: COLORS.surface,
  },
  checkIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  title: {
    color: COLORS.primary,
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: COLORS.textSecondary,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 30,
  },
  detailsLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  detailsText: {
    color: COLORS.text,
    fontSize: 16,
    marginRight: 8,
  },
  downloadBtn: {
    backgroundColor: COLORS.primary,
    width: '100%',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
  },
  footer: {
    marginTop: 60,
  },
  footerLogo: {
    fontSize: 28,
    fontWeight: '900',
    color: COLORS.text,
  },
});
