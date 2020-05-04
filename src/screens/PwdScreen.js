import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, View } from 'react-native';

const PwdScreen = () => {
	const [password, setPassword] = useState('');
	const validate = password.length < 5 ? <Text>Password Must be at least 5 characters long</Text> : null;
	return (
		<View>
			<TextInput
				style={styles.input}
				autoCapitalize="none"
				autoCorrect={false}
				value={password}
				onChangeText={(newValue) => setPassword(newValue)}
			/>

			{validate}
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderColor: 'black',
		borderWidth: 1,
	},
});

export default PwdScreen;
