import React, { useContext } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { AuthContext } from '../../context/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

import {
	FORM_DEFAULT_VALUES,
	FORM_VALIDATIONS
} from '../../constants/inputValidation';
import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';
import { USERS_URLS } from '../../constants/urls';
import { auth } from '../../config/firebase.config';


const Login = () => {
  const { currentUser ,loadingFirebase} = useContext(AuthContext);
  // const [firebaseErrors, setFirebaseErrors] = useState('');
  const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur' });
  const { data, loading, error, setFetchInfo } = useFetch({ url: USERS_URLS.ALL_USERS });
  const navigation = useNavigation();
  console.log(loadingFirebase)
  if (loading || loadingFirebase) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (currentUser) {
    navigation.navigate('Home');

  }

  if (error) return <Text>Error</Text>;

  return (
    <View>
   

      <View>
   
        <Controller
          control={control}
          rules={{
            required: FORM_VALIDATIONS.email.required,
            pattern: FORM_VALIDATIONS.email.pattern,
            
          }}
          render={({ field }) =>( 
    
            <TextInput
              placeholder="Email"
              onChangeText={field.onChange}
              value={field.value}
              onBlur={field.onBlur}
            />
          )}
          name="email"
          defaultValue=""
        />
        
        
        {errors.email && <Text>{errors.email.message}</Text>}

        <Controller
          control={control}
          rules={{
            required: FORM_VALIDATIONS.password.required,
            pattern: FORM_VALIDATIONS.password.pattern,
          }}
          render={({ field }) => (
            <TextInput
              secureTextEntry
              placeholder="Password"
              onChangeText={field.onChange}
              value={field.value}
              onBlur={field.onBlur}
            />
          )}
          name="password"
          defaultValue=""
        />
        {errors.password && <Text>{errors.password.message}</Text>}

        {/* {firebaseErrors && <Text>{firebaseErrors}</Text>} */}
        <Text onPress={handleSubmit((formData) => onSubmit(formData,data,setFetchInfo,auth))}>Login</Text>
      </View>

      <Text>You already have an account?</Text>
      {/* <SecondaryButton text={'Login here'} url={'/login'} /> */}
    </View>
  );
};



 const onSubmit = async (formData, auth) => {
    const { email, password } = formData;
  
    try {
   
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
  


    } catch (error) {
      // Si ocurre un error durante el inicio de sesión, puedes manejarlo aquí
      console.error('Error al iniciar sesión:', error);
    }
  };
  

export default Login;