import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

// class CountingApp extends React.Component {
// 	state = {
// 		cnt: 0,
// 	};

// 	render() {
// 		const { cnt } = this.state;
// 		return (
// 			<View style={styles.body}>
// 				<Text>Current Count: {cnt}</Text>
// 				<View>
// 					<Button
// 						onPress={() => {
// 							this.setState({ cnt: cnt + 1 });
// 						}}
// 						title="Increase"
// 					/>
// 					<Button
// 						onPress={() => {
// 							this.setState({ cnt: cnt - 1 });
// 						}}
// 						title="Decrease"
// 					/>
// 				</View>
// 			</View>
// 		);
// 	}
// }

const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return { ...state, counter: state.counter + action.payload };
		case 'decrement':
			return { ...state, counter: state.counter - action.payload };
		default:
			return state;
	}
};
const CountingApp = () => {
	const [state, dispatch] = useReducer(reducer, { counter: 0 });
	const { counter } = state;
	return (
		<View>
			<Button title="Increase" onPress={() => dispatch({ type: 'increment', payload: 1 })} />
			<Button title="Decrease" onPress={() => dispatch({ type: 'decrement', payload: 1 })} />

			<Text>Current Count: {counter}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	body: { justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' },
});

export default CountingApp;
