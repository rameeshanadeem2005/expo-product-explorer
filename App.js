import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

// Sample product catalog data
const PRODUCTS = [
  { id: '1', name: 'Wireless Noise-Canceling Headphones', price: '$199' },
  { id: '2', name: 'Smartwatch Series 9', price: '$299' },
  { id: '3', name: 'Ergonomic Gaming Mouse', price: '$59' },
  { id: '4', name: 'Mechanical RGB Keyboard', price: '$129' },
  { id: '5', name: '4K Ultra-HD Monitor 27"', price: '$349' },
  { id: '6', name: 'USB-C Multi-Port Hub', price: '$45' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header / Developer Info */}
      <View style={styles.header}>
        <Text style={styles.title}>Expo Product Explorer</Text>
        <Text style={styles.info}>Developer: Rameesha Nadeem</Text>
      </View>

      {/* Scrollable Product List */}
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f7',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5ea',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1c1c1e',
  },
  info: {
    fontSize: 14,
    color: '#8e8e93',
    marginTop: 4,
  },
  listContainer: {
    padding: 16,
  },
  productCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1c1c1e',
  },
  productPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: '#007aff',
    marginTop: 6,
  },
});