import React, { useState } from "react";
import { SafeAreaView, View, Text, ScrollView, Image } from 'react-native';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SIZES, COLORS } from '../../constants/theme'
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./signin.style";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  email: Yup.string()
    .email("Provide a valid email")
    .required("Required"),
});

const Signin = ({navigation}) => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecureText] = useState(false);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {}}
      >
        {({
          handleChange, 
          touched,
          handleSubmit, 
          values, 
          errors, 
          isValid, 
          setFieldTouched
        }) => (
          <View>
            <View style={styles.inputWrapper(
                    touched.email ? COLORS.lightBlue : COLORS.lightGrey
                  )}>

            </View>
          </View>
        )}
        
      </Formik>
    </View>
  );
}

export default Signin;