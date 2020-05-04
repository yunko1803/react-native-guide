import React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

const ControlColor = ({ title, onIncrease, onDecrease }) => {
	return (
		<View>
			<Text>{title}</Text>
			<Button title={`more ${title}`} onPress={onIncrease} />
			<Button title={`less ${title}`} onPress={onDecrease} />
		</View>
	);
};

const styles = StyleSheet.create({});

export default ControlColor;
