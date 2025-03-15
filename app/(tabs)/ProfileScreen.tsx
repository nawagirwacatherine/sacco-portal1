import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useTailwind } from 'tailwind-rn';

export default function ProfileScreen() {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('p-4')}>
      <Text style={tailwind('text-2xl font-bold text-blue-600')}>My Profile</Text>

      <Image source={{ uri: 'https://via.placeholder.com/100' }} style={tailwind('w-24 h-24 rounded-full mt-4')} />

      <TextInput placeholder="Full Name" style={tailwind('border p-2 my-2')} />
      <TextInput placeholder="Email" style={tailwind('border p-2 my-2')} />
      <TextInput placeholder="Phone Number" style={tailwind('border p-2 my-2')} />

      <TouchableOpacity style={tailwind('p-4 bg-blue-600 rounded-lg mt-4')}>
        <Text style={tailwind('text-white font-bold text-center')}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
}