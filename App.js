import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { COLORS } from './src/theme';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import Sidebar from './src/components/Sidebar';
import RestaurantListScreen from './src/screens/RestaurantListScreen';
import MenuScreen from './src/screens/MenuScreen';
import DrinkDetailsScreen from './src/screens/DrinkDetailsScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import SuccessScreen from './src/screens/SuccessScreen';
import RatingScreen from './src/screens/RatingScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    if (currentScreen === 'splash') {
      setTimeout(() => {
        setCurrentScreen('login');
      }, 2000);
    }
  }, [currentScreen]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  if (currentScreen === 'splash') {
    return (
      <View style={styles.splashContainer}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.splashLogo}>Supa<Text style={{color: '#000'}}>Menu</Text></Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {currentScreen === 'login' && (
        <LoginScreen 
          onLogin={() => setCurrentScreen('home')} 
          onGoToRegister={() => setCurrentScreen('register')} 
        />
      )}
      {currentScreen === 'register' && (
        <RegisterScreen 
          onRegister={() => setCurrentScreen('home')} 
          onGoToLogin={() => setCurrentScreen('login')} 
        />
      )}
      {currentScreen === 'home' && (
        <HomeScreen 
          onToggleMenu={toggleSidebar} 
          onExplore={() => setCurrentScreen('restaurantList')}
        />
      )}
      {currentScreen === 'restaurantList' && (
        <RestaurantListScreen 
          onBack={() => setCurrentScreen('home')}
          onSelectRestaurant={(res) => {
            setSelectedRestaurant(res);
            setCurrentScreen('menu');
          }}
        />
      )}
      {currentScreen === 'menu' && (
        <MenuScreen 
          restaurantName={selectedRestaurant?.name}
          onSelectCategory={() => setCurrentScreen('drinks')}
          onBack={() => setCurrentScreen('restaurantList')}
        />
      )}
      {currentScreen === 'drinks' && (
        <DrinkDetailsScreen 
          onBack={() => setCurrentScreen('menu')}
          onCheckout={() => setCurrentScreen('checkout')}
        />
      )}
      {currentScreen === 'checkout' && (
        <CheckoutScreen 
          onBack={() => setCurrentScreen('drinks')}
          onSuccess={() => setCurrentScreen('success')}
        />
      )}
      {currentScreen === 'success' && (
        <SuccessScreen onNext={() => setCurrentScreen('rating')} />
      )}
      {currentScreen === 'rating' && (
        <RatingScreen onFinish={() => setCurrentScreen('home')} />
      )}

      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        onLogout={() => {
          setIsSidebarOpen(false);
          setCurrentScreen('login');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  splashContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashLogo: {
    fontSize: 48,
    fontWeight: '900',
    color: '#fff',
    letterSpacing: -1,
  },
});
