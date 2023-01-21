import React from 'react';
import {Document, Page, Text, View, StyleSheet, PDFViewer} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    height: '500px',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  text: {
    color: 'red'
  }
});
const PDF = () => (
  <PDFViewer
    showToolbar={false}
    style={{
      height: '500px',
      border: 'none'
    }}
  >
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
          <Text style={styles.text}>Section #2</Text>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default PDF