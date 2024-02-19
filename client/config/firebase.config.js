// Importar las funciones necesarias de los SDK que necesitas
import { initializeApp } from 'firebase/app';
import { initializeAuth, getAuth } from 'firebase/auth'; // Corregir la importación aquí
import { getReactNativePersistence } from 'firebase/auth'; // Eliminar la importación redundante
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'; // Agregar la importación de ReactNativeAsyncStorage

// Configuración de tu aplicación Firebase
const firebaseConfig = {
	apiKey: "AIzaSyCqJT46EKfKJfuWy-xR3CM-aib7lEEOvWA",
	authDomain: "racapp-f3d6c.firebaseapp.com",
	projectId: "racapp-f3d6c",
	storageBucket: "racapp-f3d6c.appspot.com",
	messagingSenderId: "637164010629",
	appId: "1:637164010629:web:2dee608ccfcf9befa57dec",
	measurementId: "G-XTVP4FEBDS"
};

// Inicializar la aplicación Firebase
const app = initializeApp(firebaseConfig);

// Inicializar el servicio de autenticación de Firebase
export const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
