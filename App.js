import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NativeBaseProvider } from "native-base";
import { AppRouter } from "./src/app-router";
import { UsersProvider } from './src/context'


export default function App() {

  return (
    <NativeBaseProvider>
      <UsersProvider>
        <StatusBar hidden/>
        <AppRouter/>
      </UsersProvider>
    </NativeBaseProvider>
  );
}
