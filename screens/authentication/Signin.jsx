import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Image } from 'react-native';
import { SIZES, COLORS } from '../../constants/theme'
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./signin.style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  WidthSpacer,
  HeightSpacer,
  ReusableBtn,
  Button,
} from "../../components";
import reusable from "../../components/Reusable/reusable.style";
import { AntDesign } from "@expo/vector-icons";

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
          <View style={{ paddingTop: 30 }}>
            <View style={styles.wrapper}>
              <Text style={styles.label}>Email</Text>
              <View>
                <View style={styles.inputWrapper(
                    touched.email ? COLORS.lightBlue : COLORS.lightGrey
                  )}
                >
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={20}
                    color={COLORS.gray}
                  />

                  <WidthSpacer width={10} />

                  <TextInput
                    placeholder="Enter email"
                    onFocus={() => {
                      setFieldTouched("email");
                    }}
                    onBlur={() => {
                      setFieldTouched("email", "");
                    }}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{ flex: 1 }}
                  />

                </View>
                {touched.password && errors.password && (
                  <Text style={styles.errorMessage}>{errors.password}</Text>
                )}
              </View>
            </View>

            <View style={styles.wrapper}>
              <Text style={styles.label}>Password</Text>
              <View>
                <View style={styles.inputWrapper(
                    touched.password ? COLORS.lightBlue : COLORS.lightGrey
                  )}
                >
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={20}
                    color={COLORS.gray}
                  />

                  <WidthSpacer width={10} />

                  <TextInput
                    secureTextEntry={obsecureText}
                    placeholder="Enter password"
                    onFocus={() => {
                      setFieldTouched("password");
                    }}
                    onBlur={() => {
                      setFieldTouched("password", "");
                    }}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{ flex: 1 }}
                  />

                  <TouchableOpacity
                    onPress={() => {
                      setObsecureText(!obsecureText);
                    }}
                  >
                    <MaterialCommunityIcons
                      name={obsecureText ? "eye-outline" : "eye-off-outline"}
                      size={18}
                    />
                  </TouchableOpacity>
                </View>
                {touched.password && errors.password && (
                  <Text style={styles.errorMessage}>{errors.password}</Text>
                )}
              </View>
            </View>

            <HeightSpacer height={20} />

            <View style={reusable.rowWithSpace("space-between")}>
            <AntDesign name="leftcircleo" size={45} color={COLORS.blue} 
                      onPress={()=> navigation.navigate('Bottom')}
            />

            <Button
              onPress={isValid ? handleSubmit : errorLogin}
              title={"SIGN IN"}
              width={SIZES.width - 100}
              backgroundColor={COLORS.blue}
              borderColor={COLORS.blue}
              borderWidth={0}
              textColor={COLORS.white}
            />

            </View>
          </View>
        )}
        
      </Formik>
    </View>
  );
}

export default Signin;