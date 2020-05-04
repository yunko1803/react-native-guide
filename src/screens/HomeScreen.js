import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.text}>HomeScreen</Text>
			<Button style={styles.button} onPress={() => navigation.navigate('Components')} title="ComponentsScreen" />
			<Button style={styles.button} onPress={() => navigation.navigate('List')} title="List" />
			<Button style={styles.button} onPress={() => navigation.navigate('Image')} title="ImageScreen" />
			<Button style={styles.button} onPress={() => navigation.navigate('Count')} title="CountingApp" />
			<Button style={styles.button} onPress={() => navigation.navigate('Color')} title="ColorScreen" />
			<Button style={styles.button} onPress={() => navigation.navigate('Color2')} title="ColorScreen2" />
			<Button style={styles.button} onPress={() => navigation.navigate('Text')} title="Textscreen" />
			<Button style={styles.button} onPress={() => navigation.navigate('Password')} title="Password Screen" />
			<Button style={styles.button} onPress={() => navigation.navigate('Box')} title="BoxScreen" />
			{/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
				<Text>Hi</Text>
			</TouchableOpacity> */}
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
	button: {
		paddingTop: 20,
	},
});

export default HomeScreen;
