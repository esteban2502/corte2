// components/Button.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  isBlue?: boolean;
  isGray?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, isBlue, isGray }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        isBlue ? styles.blueButton : isGray ? styles.grayButton : styles.darkButton,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
  },
  blueButton: {
    backgroundColor: '#3B82F6',
  },
  grayButton: {
    backgroundColor: '#9CA3AF',
  },
  darkButton: {
    backgroundColor: '#1F2937',
  },
});

export default Button;