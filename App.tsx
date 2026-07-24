import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { PaperBackground } from './src/components/PaperBackground';
import { InkCanvas } from './src/components/InkCanvas';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <PaperBackground style={styles.background}>
        <InkCanvas />
      </PaperBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
});

export default App;