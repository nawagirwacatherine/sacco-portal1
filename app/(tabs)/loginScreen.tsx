import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useTailwind } from 'tailwind-rn';

export default function LoginScreen() {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('flex-1 justify-center items-center bg-white')}>
      <TextInput placeholder="Email" style={tailwind('border p-2 my-2 w-3/4')} />
      <TextInput placeholder="Password" secureTextEntry style={tailwind('border p-2 my-2 w-3/4')} />
      <TouchableOpacity style={tailwind('bg-blue-600 px-4 py-2 rounded-lg')}>
        <Text style={tailwind('text-white font-bold')}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}