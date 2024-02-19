import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { AuthContext } from '../../context/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

import {
	FORM_DEFAULT_VALUES,
	FORM_VALIDATIONS
} from '../../constants/inputValidation';
import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';
import { USERS_URLS } from '../../constants/urls';
import { auth } from '../../config/firebase.config';

const Register = () => {
  const { currentUser ,loadingFirebase} = useContext(AuthContext);
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
      <Text>REGISTER</Text>


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
        <Text onPress={handleSubmit((formData) => onSubmit(formData,data,setFetchInfo,auth))}>Create Account</Text>
      </View>

      <Text>You already have an account?</Text>
      {/* <SecondaryButton text={'Login here'} url={'/login'} /> */}
    </View>
  );
};



export const onSubmit = async (formData, data, setFetchInfo, auth) => {
  const { email, password } = formData;

  const emailUsed = data.find(user => user.email === email);
  if (!emailUsed) {
    try {
      const userRegistered = await createUserWithEmailAndPassword(auth,email, password);
   
      await setFetchInfo({
        url: USERS_URLS.CREATE_USER,
        options: {
          method: METHODS.POST,
          body: JSON.stringify({
            _id: userRegistered.user.uid,
            email,
            userName: 'User' + Date.now(),
            ...FORM_DEFAULT_VALUES
          }),
          headers: HEADERS
        }
      });
    } catch (error) {
      console.log(error);
      // setFirebaseErrors(error.error);
    }
  }
};
export default Register;