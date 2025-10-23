import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import colors from '../styles/colors';

export default function ServicesScreen({ navigation }) {
  const services = [
    {
      icon: '🌐',
      title: 'Desarrollo Web',
      description: 'Sitios web modernos, rápidos y optimizados para SEO.',
      features: [
        'Landing Pages profesionales',
        'E-commerce completo',
        'Aplicaciones web progresivas (PWA)',
        'Dashboards y paneles de control',
      ],
    },
    {
      icon: '📱',
      title: 'Aplicaciones Móviles',
      description: 'Apps nativas y multiplataforma para iOS y Android.',
      features: [
        'React Native / Flutter',
        'Diseño UX/UI moderno',
        'Integración con APIs',
        'Publicación en tiendas',
      ],
    },
    {
      icon: '☁️',
      title: 'Cloud & Backend',
      description: 'Infraestructura escalable y segura en la nube.',
      features: [
        'APIs RESTful / GraphQL',
        'Bases de datos optimizadas',
        'AWS / Google Cloud / Azure',
        'DevOps y CI/CD',
      ],
    },
    {
      icon: '🎨',
      title: 'Diseño UI/UX',
      description: 'Experiencias de usuario excepcionales.',
      features: [
        'Wireframes y prototipos',
        'Diseño responsive',
        'Branding y identidad visual',
        'Testing con usuarios reales',
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Nuestros Servicios</Text>
        <Text style={styles.subtitle}>
          Soluciones completas para llevar tu negocio al siguiente nivel
        </Text>
      </View>

      {services.map((service, index) => (
        <View key={index} style={styles.serviceCard}>
          <Text style={styles.serviceIcon}>{service.icon}</Text>
          <Text style={styles.serviceTitle}>{service.title}</Text>
          <Text style={styles.serviceDescription}>{service.description}</Text>
          
          <View style={styles.featuresContainer}>
            {service.features.map((feature, idx) => (
              <View key={idx} style={styles.featureItem}>
                <Text style={styles.featureBullet}>✓</Text>
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}

      <TouchableOpacity 
        style={styles.contactButton}
        onPress={() => navigation.navigate('Contacto')}
      >
        <Text style={styles.contactButtonText}>Contáctanos</Text>
      </TouchableOpacity>
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
  serviceCard: {
    backgroundColor: colors.surface,
    margin: 15,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.border,
  },
  serviceIcon: {
    fontSize: 48,
    textAlign: 'center',
    marginBottom: 15,
  },
  serviceTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 10,
    textAlign: 'center',
  },
  serviceDescription: {
    fontSize: 14,
    color: colors.textTertiary,
    lineHeight: 22,
    marginBottom: 15,
    textAlign: 'center',
  },
  featuresContainer: {
    marginTop: 10,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureBullet: {
    color: colors.success,
    fontSize: 16,
    marginRight: 10,
    fontWeight: 'bold',
  },
  featureText: {
    color: colors.textSecondary,
    fontSize: 14,
    flex: 1,
  },
  contactButton: {
    backgroundColor: colors.primary,
    margin: 20,
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 40,
  },
  contactButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});