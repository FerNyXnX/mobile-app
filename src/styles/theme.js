export const theme = {
  colors: {
    primary: '#667eea',
    secondary: '#764ba2',
    accent: '#f093fb',
    success: '#4caf50',
    warning: '#fbbf24',
    error: '#ef4444',
    info: '#3b82f6',
    
    background: '#0a0e27',
    surface: 'rgba(102, 126, 234, 0.1)',
    
    text: {
      primary: '#ffffff',
      secondary: '#e5e7eb',
      disabled: '#9ca3af',
      hint: '#6b7280',
    },
    
    border: 'rgba(255, 255, 255, 0.1)',
    borderActive: '#667eea',
    
    gradient: {
      primary: ['#667eea', '#764ba2'],
      secondary: ['#f093fb', '#f5576c'],
      success: ['#4caf50', '#81c784'],
    },
  },
  
  spacing: {
    xs: 4,
    sm: 8,
    md: 15,
    lg: 20,
    xl: 30,
    xxl: 40,
  },
  
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 15,
    xl: 20,
    round: 25,
    circle: 9999,
  },
  
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 28,
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    h4: {
      fontSize: 20,
      fontWeight: '600',
    },
    body: {
      fontSize: 16,
      fontWeight: 'normal',
    },
    bodySmall: {
      fontSize: 14,
      fontWeight: 'normal',
    },
    caption: {
      fontSize: 12,
      fontWeight: 'normal',
    },
  },
  
  shadows: {
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 4,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.2,
      shadowRadius: 16,
      elevation: 8,
    },
  },
};

export default theme;