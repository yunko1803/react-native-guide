import React from 'react';
import { Text, StyleSheet, TextInput, View } from 'react-native';

const BoxScreen = () => {
	return (
		<View style={styles.viewStyle}>
			<View style={styles.BoxContainer1}>
				<View style={styles.Box}></View>
				<View style={styles.Box}></View>
			</View>
			<View style={styles.BoxContainer2}>
				<View style={styles.Box}></View>
			</View>
		</View>
	);
};

const randomRgb = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({
	viewStyle: {
		borderWidth: 1,
		borderColor: 'black',
	},
	BoxContainer1: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	BoxContainer2: {
		alignItems: 'center',
	},
	Box: {
		height: 100,
		width: 100,
		backgroundColor: randomRgb(),
	},
});

export default BoxScreen;
