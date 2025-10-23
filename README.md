# 🚀 DevSaasPro - Mobile App

Aplicación móvil multiplataforma desarrollada con React Native y Expo para DevSaasPro, una empresa de desarrollo de software.

## 📋 Características

- ✅ Navegación con tabs (Home, Servicios, Precios, Contacto)
- ✅ Gestión de estado con Redux Toolkit
- ✅ Diseño moderno con gradientes y animaciones
- ✅ Completamente responsive
- ✅ Compatible con iOS, Android y Web
- ✅ Componentes reutilizables
- ✅ Arquitectura escalable

## 🛠️ Tecnologías

- **React Native** 0.81.5
- **Expo** ~54.0
- **React Navigation** 7.x
- **Redux Toolkit** 2.9.2
- **Expo Linear Gradient**
- **React Native Gesture Handler**
- **React Native Reanimated**

## 📦 Instalación

### Prerrequisitos

- Node.js 18+
- npm o yarn
- Expo CLI

### Pasos
```bash
# Clonar el repositorio
git clone <repository-url>

# Navegar a la carpeta
cd mobile-app

# Instalar dependencias
npm install

# Iniciar el proyecto
npm start

# O con Expo CLI
npx expo start
```

## 🚀 Scripts Disponibles
```bash
# Iniciar desarrollo
npm start

# Abrir en Android
npm run android

# Abrir en iOS
npm run ios

# Abrir en web
npm run web
```

## 📂 Estructura del Proyecto
```
mobile-app/
├── App.js                    # Punto de entrada
├── app.json                  # Configuración de Expo
├── package.json              # Dependencias
├── assets/                   # Imágenes e iconos
└── src/
    ├── components/           # Componentes reutilizables
    │   ├── common/          # Button, Card, Input
    │   └── layout/          # Header, Footer
    ├── navigation/          # Configuración de navegación
    │   └── AppNavigator.js
    ├── redux/               # Estado global
    │   ├── store.js
    │   └── slices/
    │       ├── uiSlice.js
    │       └── userSlice.js
    ├── screens/             # Pantallas principales
    │   ├── HomeScreen.js
    │   ├── ServicesScreen.js
    │   ├── PricingScreen.js
    │   └── ContactScreen.js
    ├── styles/              # Estilos globales
    │   ├── colors.js
    │   └── theme.js
    └── utils/               # Utilidades
        └── constants.js
```

## 🎨 Paleta de Colores
```javascript
Primary: #667eea      // Azul
Secondary: #764ba2    // Púrpura
Accent: #f093fb       // Rosa
Success: #4caf50      // Verde
Warning: #fbbf24      // Amarillo
Error: #ef4444        // Rojo
Background: #0a0e27   // Azul oscuro
```

## 📱 Pantallas

### 1. Home
- Hero section con gradiente
- Estadísticas (100+ Proyectos, 50+ Clientes, 99% Satisfacción)
- Features cards
- Call to action

### 2. Servicios
- Lista de servicios ofrecidos
- Desarrollo Web
- Apps Móviles
- Cloud & Backend
- Diseño UI/UX
- Consultoría Tech
- Seguridad

### 3. Precios
- 3 planes (Basic, Professional, Enterprise)
- Comparación de características
- Garantía de satisfacción

### 4. Contacto
- Formulario de contacto
- Información de contacto
- Integración con email, teléfono y WhatsApp
- Horarios de atención

## 🔧 Configuración

### Redux Store

El store de Redux está configurado con dos slices principales:

- **uiSlice**: Manejo del estado de la UI (dark mode, loading, etc.)
- **userSlice**: Gestión de autenticación y datos del usuario

### Navegación

Se utiliza React Navigation con:
- Bottom Tab Navigator para las 4 pantallas principales
- Stack Navigator como contenedor principal

## 🚀 Deploy

### Web (Netlify)
```bash
# Build para producción
npx expo export:web

# El output estará en web-build/
# Sube esta carpeta a Netlify
```

### Android
```bash
# Build APK
eas build --platform android

# O si usas Expo Go
npx expo build:android
```

### iOS
```bash
# Build IPA
eas build --platform ios

# O si usas Expo Go
npx expo build:ios
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'feat: add amazing feature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es propiedad de DevSaasPro.

## 👥 Autores

- **DevSaasPro Team**

## 📞 Contacto

- Email: info@devsaaspro.com
- Website: https://devsaaspro.com
- WhatsApp: +52 123 456 7890

## 🙏 Agradecimientos

- React Native Community
- Expo Team
- React Navigation Team