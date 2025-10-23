import { LinearGradient } from 'expo-linear-gradient';
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import colors from '../styles/colors';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const stats = [
    { number: '100+', label: 'Proyectos' },
    { number: '50+', label: 'Clientes' },
    { number: '99%', label: 'Satisfacción' },
  ];

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={[colors.gradientStart, colors.gradientEnd]}
        style={styles.heroSection}
      >
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>
            Transformamos Ideas en{'\n'}
            <Text style={styles.heroHighlight}>Realidad Digital</Text>
          </Text>
          <Text style={styles.heroSubtitle}>
            Desarrollo web y móvil de clase mundial para empresas que buscan destacar
          </Text>
          
          <View style={styles.buttonGroup}>
            <TouchableOpacity 
              style={styles.primaryButton}
              onPress={() => navigation.navigate('Contacto')}
            >
              <Text style={styles.primaryButtonText}>Empezar Proyecto</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.outlineButton}
              onPress={() => navigation.navigate('Servicios')}
            >
              <Text style={styles.outlineButtonText}>Ver Servicios</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.statsContainer}>
            {stats.map((stat, index) => (
              <View key={index} style={styles.statItem}>
                <Text style={styles.statNumber}>{stat.number}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>
      </LinearGradient>

      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>¿Por qué elegirnos?</Text>
        
        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>🚀</Text>
          <Text style={styles.featureTitle}>Entrega Rápida</Text>
          <Text style={styles.featureDescription}>
            Proyectos completados en tiempo récord sin sacrificar calidad
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>💎</Text>
          <Text style={styles.featureTitle}>Calidad Premium</Text>
          <Text style={styles.featureDescription}>
            Código limpio, escalable y siguiendo las mejores prácticas
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>🛡️</Text>
          <Text style={styles.featureTitle}>Soporte 24/7</Text>
          <Text style={styles.featureDescription}>
            Estamos aquí para ti cuando nos necesites
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>📱</Text>
          <Text style={styles.featureTitle}>Diseño Responsive</Text>
          <Text style={styles.featureDescription}>
            Perfecto en todos los dispositivos y tamaños de pantalla
          </Text>
        </View>
      </View>

      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>
          ¿Listo para llevar tu negocio al siguiente nivel?
        </Text>
        <TouchableOpacity 
          style={styles.ctaButton}
          onPress={() => navigation.navigate('Contacto')}
        >
          <Text style={styles.ctaButtonText}>Contáctanos Ahora</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  heroSection: {
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  heroContent: {
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 15,
  },
  heroHighlight: {
    color: colors.warning,
  },
  heroSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 30,
  },
  primaryButton: {
    backgroundColor: colors.white,
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 25,
  },
  primaryButtonText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },
  outlineButton: {
    borderWidth: 2,
    borderColor: colors.white,
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 25,
  },
  outlineButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 5,
  },
  featuresSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 20,
    textAlign: 'center',
  },
  featureCard: {
    backgroundColor: colors.surface,
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.border,
  },
  featureIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: colors.textTertiary,
    lineHeight: 20,
  },
  ctaSection: {
    padding: 30,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 30,
  },
  ctaButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
  },
  ctaButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});