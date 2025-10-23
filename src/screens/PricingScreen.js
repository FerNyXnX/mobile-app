import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import colors from '../styles/colors';

export default function PricingScreen({ navigation }) {
  const plans = [
    {
      name: 'Basic',
      price: '$299',
      period: '/mes',
      description: 'Perfecto para empezar',
      features: [
        'Landing Page Responsiva',
        'Diseño Moderno',
        'Optimización SEO Básica',
        'Formulario de Contacto',
        'Hosting 1 año incluido',
        'Soporte por Email',
      ],
      color: colors.primary,
      popular: false,
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/mes',
      description: 'El más popular',
      features: [
        'Todo en Basic +',
        'Sistema de Gestión CMS',
        'Blog Integrado',
        'Panel de Analíticas',
        'Integraciones API',
        'Soporte Prioritario 24/7',
        'SSL Premium',
        '3 Revisiones Mensuales',
      ],
      color: colors.secondary,
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/mes',
      description: 'Para grandes proyectos',
      features: [
        'Todo en Professional +',
        'Aplicación Móvil (iOS/Android)',
        'Sistema de Usuarios',
        'Dashboard Personalizado',
        'Integraciones Avanzadas',
        'Arquitectura Cloud Escalable',
        'DevOps & CI/CD',
        'Consultoría Técnica Ilimitada',
      ],
      color: colors.accent,
      popular: false,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Planes y Precios</Text>
        <Text style={styles.subtitle}>
          Elige el plan perfecto para tu negocio{'\n'}
          Todos incluyen soporte técnico
        </Text>
      </View>

      <View style={styles.plansContainer}>
        {plans.map((plan, index) => (
          <View 
            key={index}
            style={[
              styles.planCard,
              plan.popular && styles.popularCard,
            ]}
          >
            {plan.popular && (
              <View style={styles.popularBadge}>
                <Text style={styles.popularText}>MÁS POPULAR</Text>
              </View>
            )}

            <View style={styles.planHeader}>
              <Text style={styles.planName}>{plan.name}</Text>
              <Text style={styles.planDescription}>{plan.description}</Text>
            </View>

            <View style={styles.priceContainer}>
              <Text style={[styles.price, { color: plan.color }]}>
                {plan.price}
              </Text>
              <Text style={styles.period}>{plan.period}</Text>
            </View>

            <View style={styles.featuresContainer}>
              {plan.features.map((feature, idx) => (
                <View key={idx} style={styles.featureRow}>
                  <Text style={styles.checkIcon}>✓</Text>
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>

            <TouchableOpacity 
              style={[
                styles.selectButton,
                plan.popular && styles.popularButton,
                { borderColor: plan.color },
              ]}
              onPress={() => navigation.navigate('Contacto')}
            >
              <Text style={[
                styles.buttonText,
                plan.popular && { color: colors.white },
              ]}>
                Comenzar Ahora
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={styles.guaranteeSection}>
        <Text style={styles.guaranteeTitle}>💯 Garantía de Satisfacción</Text>
        <Text style={styles.guaranteeText}>
          Si no estás completamente satisfecho con nuestro trabajo, 
          te devolvemos el 100% de tu inversión. Sin preguntas.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: colors.textTertiary,
    textAlign: 'center',
    lineHeight: 24,
  },
  plansContainer: {
    padding: 10,
  },
  planCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: colors.border,
  },
  popularCard: {
    backgroundColor: colors.surfaceLight,
    borderColor: colors.secondary,
  },
  popularBadge: {
    position: 'absolute',
    top: -10,
    right: 20,
    backgroundColor: colors.secondary,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    zIndex: 1,
  },
  popularText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  planHeader: {
    marginBottom: 20,
  },
  planName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 5,
  },
  planDescription: {
    fontSize: 14,
    color: colors.textTertiary,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 25,
  },
  price: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  period: {
    fontSize: 18,
    color: colors.textTertiary,
    marginBottom: 8,
    marginLeft: 5,
  },
  featuresContainer: {
    marginBottom: 25,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  checkIcon: {
    color: colors.success,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    marginTop: 2,
  },
  featureText: {
    flex: 1,
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 22,
  },
  selectButton: {
    borderWidth: 2,
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
  },
  popularButton: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  buttonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  guaranteeSection: {
    margin: 20,
    padding: 20,
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(76, 175, 80, 0.3)',
    marginBottom: 40,
  },
  guaranteeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 10,
    textAlign: 'center',
  },
  guaranteeText: {
    fontSize: 14,
    color: colors.textTertiary,
    textAlign: 'center',
    lineHeight: 22,
  },
});