import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, FlatList } from 'react-native';

const ColorScreen = () => {
	const [colors, setColors] = useState([]);

	return (
		<View>
			<Button
				onPress={() => {
					setColors([...colors, randomRgb()]);
				}}
				title="Add Color"
			/>

			<FlatList
				keyExtractor={(item) => item}
				showsVerticalScrollIndicator={false}
				data={colors}
				renderItem={({ item }) => {
					return <View style={{ height: 100, width: 100, backgroundColor: item }}></View>;
				}}
			/>
		</View>
	);
};

const randomRgb = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
