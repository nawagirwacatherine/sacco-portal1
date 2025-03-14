import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router'; 

export default function HomeScreen() {
  const tailwind = useTailwind();
  const router = useRouter(); 

  return (
    <ScrollView style={tailwind('bg-gray-100 h-full')}>
     
      <ThemedView style={tailwind('p-4 bg-blue-600')}>
        <Text style={tailwind('text-white text-xl font-bold')}>
          Welcome to Your SACCO Portal
        </Text>
      </ThemedView>

      <ThemedView style={tailwind('m-4 p-4 bg-white rounded-lg shadow')}>
        <Text style={tailwind('text-lg font-semibold')}>Account Balance</Text>
        <Text style={tailwind('text-2xl font-bold text-green-600')}>$5,250</Text>
      </ThemedView>

      
      <View style={tailwind('flex-row justify-around mt-4')}>
        <TouchableOpacity
          style={tailwind('p-4 bg-blue-500 rounded-lg')}
          onPress={() => router.push('/savings')} 
        >
          <Text style={tailwind('text-white font-bold')}>Savings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tailwind('p-4 bg-red-500 rounded-lg')}
          onPress={() => router.push('/loans')} 
        >
          <Text style={tailwind('text-white font-bold')}>Loans</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Transactions */}
      <ThemedView style={tailwind('m-4 p-4 bg-white rounded-lg shadow')}>
        <Text style={tailwind('text-lg font-semibold')}>Recent Transactions</Text>
        <Text style={tailwind('text-sm text-gray-600 mt-2')}>
          - Loan Repayment: -$250
        </Text>
        <Text style={tailwind('text-sm text-gray-600')}>
          - Savings Deposit: +$500
        </Text>
      </ThemedView>
    </ScrollView>
  );
}


