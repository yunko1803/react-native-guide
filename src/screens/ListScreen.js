import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
	const friends = [
		{ name: 'james', key: '1', age: '12' },
		{ name: 'mike', key: '2', age: '13' },
		{ name: 'yoon', key: '3', age: '15' },
		{ name: 'boram', key: '4', age: '19' },
		{ name: 'boram', key: '5', age: '23' },
		{ name: 'boram', key: '6', age: '19' },
		{ name: 'boram', key: '7', age: '25' },
		{ name: 'boram', key: '8', age: '14' },
		{ name: 'boram', key: '9', age: '24' },
		{ name: 'boram', key: '10', age: '12' },
	];
	return (
		<View>
			<FlatList
				// keyExtractor={(friend) => friend.key}
				// horizontal
				// showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				data={friends}
				renderItem={({ item }) => {
					//element === {item:{name:"james"},index:0}
					return <Text style={style.textStyle}>{`${item.name} - ${item.age}`}</Text>;
				}}
			/>
		</View>
	);
};

const style = StyleSheet.create({
	textStyle: {
		marginVertical: 50,
	},
});
export default ListScreen;
