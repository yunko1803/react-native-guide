import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
	const name = 'YOON';
	return (
		<View>
			<Text style={styles.textStyle}>Getting Started with React Native!</Text>
			<Text style={styles.name}>My name is {name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 45,
	},
	name: {
		fontSize: 20,
	},
});

export default ComponentsScreen;
