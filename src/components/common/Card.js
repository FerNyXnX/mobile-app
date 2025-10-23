import { StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../../styles/colors';

const Card = ({ 
  children, 
  style, 
  onPress,
  variant = 'default',
  elevation = 2,
}) => {
  const cardStyles = [
    styles.card,
    styles[variant],
    style,
    elevation && { elevation },
  ];

  if (onPress) {
    return (
      <TouchableOpacity 
        style={cardStyles}
        onPress={onPress}
        activeOpacity={0.8}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View style={cardStyles}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
  },
  
  // Variants
  default: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  primary: {
    backgroundColor: colors.surfaceLight,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  gradient: {
    backgroundColor: 'rgba(118, 75, 162, 0.2)',
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  outlined: {
    backgroundColor: colors.transparent,
    borderWidth: 2,
    borderColor: colors.borderActive,
  },
});

export default Card;