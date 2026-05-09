import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Star } from 'lucide-react-native';
import { COLORS, SPACING } from '../theme';

export default function RatingScreen({ onFinish }) {
  const [rating, setRating] = useState(3);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Yayy!</Text>
        <Text style={styles.subtitle}>We value all feedback, please rate your experience below:</Text>

        <View style={styles.stars}>
          {[1, 2, 3, 4, 5].map((s) => (
            <TouchableOpacity key={s} onPress={() => setRating(s)}>
              <Star 
                size={40} 
                color={s <= rating ? COLORS.primary : COLORS.textSecondary} 
                fill={s <= rating ? COLORS.primary : 'transparent'} 
                style={{ marginHorizontal: 5 }}
              />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.thanksContainer}>
          <Text style={styles.thanksText}>Thank you for helping us improve our service!</Text>
        </View>

        <TouchableOpacity style={styles.finishBtn} onPress={onFinish}>
          <Text style={styles.finishBtnText}>Go back to Home</Text>
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
  title: {
    color: COLORS.primary,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
  },
  subtitle: {
    color: COLORS.primary,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  stars: {
    flexDirection: 'row',
    marginBottom: 60,
  },
  thanksContainer: {
    paddingHorizontal: 40,
    marginBottom: 60,
  },
  thanksText: {
    color: COLORS.primary,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
  finishBtn: {
    backgroundColor: COLORS.primary,
    width: '100%',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  finishBtnText: {
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
