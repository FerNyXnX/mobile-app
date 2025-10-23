import { useState } from 'react';
import {
  Alert,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../styles/colors';

export default function ContactScreen() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    Alert.alert(
      '¡Mensaje Enviado!',
      'Gracias por contactarnos. Te responderemos pronto.',
      [{ text: 'OK', onPress: () => setFormData({ name: '', email: '', message: '' }) }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Contáctanos</Text>
        <Text style={styles.subtitle}>
          ¿Listo para llevar tu negocio al siguiente nivel?
        </Text>
      </View>

      <View style={styles.contactInfoSection}>
        <TouchableOpacity 
          style={styles.contactItem}
          onPress={() => Linking.openURL('mailto:pixyn@gmail.com')}
        >
          <Text style={styles.contactIcon}>📧</Text>
          <View style={styles.contactDetails}>
            <Text style={styles.contactLabel}>Email</Text>
            <Text style={styles.contactValue}>info@devsaaspro.com</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.contactItem}
          onPress={() => Linking.openURL('tel:+521234567890')}
        >
          <Text style={styles.contactIcon}>📞</Text>
          <View style={styles.contactDetails}>
            <Text style={styles.contactLabel}>Teléfono</Text>
            <Text style={styles.contactValue}>+52 123 456 7890</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.contactItem}
          onPress={() => Linking.openURL('https://wa.me/521234567890')}
        >
          <Text style={styles.contactIcon}>💬</Text>
          <View style={styles.contactDetails}>
            <Text style={styles.contactLabel}>WhatsApp</Text>
            <Text style={styles.contactValue}>Chat directo</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.formSection}>
        <Text style={styles.formTitle}>Envíanos un mensaje</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          placeholderTextColor={colors.textDisabled}
          value={formData.name}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={colors.textDisabled}
          keyboardType="email-address"
          autoCapitalize="none"
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
        />

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="¿En qué podemos ayudarte?"
          placeholderTextColor={colors.textDisabled}
          multiline
          numberOfLines={6}
          textAlignVertical="top"
          value={formData.message}
          onChangeText={(text) => setFormData({ ...formData, message: text })}
        />

        <TouchableOpacity 
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>Enviar Mensaje</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.scheduleSection}>
        <Text style={styles.scheduleTitle}>Horario de Atención</Text>
        <Text style={styles.scheduleText}>Lunes a Viernes: 9:00 AM - 6:00 PM</Text>
        <Text style={styles.scheduleText}>Sábados: 10:00 AM - 2:00 PM</Text>
        <Text style={styles.scheduleText}>Domingos: Cerrado</Text>
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
  contactInfoSection: {
    padding: 20,
    paddingTop: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  contactIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  contactDetails: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 12,
    color: colors.textTertiary,
    marginBottom: 4,
  },
  contactValue: {
    fontSize: 16,
    color: colors.textPrimary,
    fontWeight: '600',
  },
  formSection: {
    padding: 20,
    paddingTop: 10,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 20,
  },
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 15,
    color: colors.textPrimary,
    fontSize: 16,
    marginBottom: 15,
  },
  textArea: {
    height: 120,
    paddingTop: 15,
  },
  submitButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  scheduleSection: {
    margin: 20,
    padding: 20,
    backgroundColor: colors.surface,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 40,
  },
  scheduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 15,
    textAlign: 'center',
  },
  scheduleText: {
    fontSize: 14,
    color: colors.textTertiary,
    marginBottom: 8,
    textAlign: 'center',
  },
});