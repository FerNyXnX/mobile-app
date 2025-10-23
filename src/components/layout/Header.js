import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../styles/colors';

const Header = ({ 
  title, 
  showBack = false, 
  onBack,
  rightIcon,
  onRightPress,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.leftSection}>
        {showBack ? (
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={colors.white} />
          </TouchableOpacity>
        ) : (
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>DS</Text>
          </View>
        )}
      </View>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.rightSection}>
        {rightIcon && (
          <TouchableOpacity onPress={onRightPress} style={styles.iconButton}>
            <Ionicons name={rightIcon} size={24} color={colors.white} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  leftSection: {
    width: 40,
  },
  rightSection: {
    width: 40,
    alignItems: 'flex-end',
  },
  logoContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    padding: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
    flex: 1,
    textAlign: 'center',
  },
  iconButton: {
    padding: 5,
  },
});

export default Header;