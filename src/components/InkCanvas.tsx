import React from 'react';
import { View, StyleSheet } from 'react-native';
// Note: Import from the actual package once installed
// For now, we'll use a placeholder view
// import { InfiniteInkCanvas } from '@mathnotes/mobile-ink';

export const InkCanvas: React.FC = () => {
  // Placeholder until @mathnotes/mobile-ink is properly installed
  return (
    <View style={styles.container}>
      {/* 
        <InfiniteInkCanvas
          style={styles.canvas}
          onStroke={(stroke) => console.log('Stroke:', stroke)}
          onUndo={() => console.log('Undo')}
        /> 
      */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  canvas: {
    flex: 1,
  },
});