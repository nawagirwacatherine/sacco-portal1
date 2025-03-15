import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useTailwind } from 'tailwind-rn';

const loans = [
  { id: '1', amount: '$1,000', status: 'Approved' },
  { id: '2', amount: '$500', status: 'Pending' }
];

export default function LoanScreen() {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('p-4')}>
      <Text style={tailwind('text-2xl font-bold text-blue-600')}>My Loans</Text>
      <FlatList
        data={loans}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={tailwind('p-4 bg-white my-2 rounded-lg')}>
            <Text style={tailwind('text-lg font-bold')}>{item.amount}</Text>
            <Text style={tailwind('text-sm text-gray-600')}>{item.status}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={tailwind('p-4 bg-green-600 rounded-lg mt-4')}>
        <Text style={tailwind('text-white font-bold text-center')}>Apply for a Loan</Text>
      </TouchableOpacity>
    </View>
  );
}