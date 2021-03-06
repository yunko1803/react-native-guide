import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, FlatList } from 'react-native';
import ControlColor from '../components/ControlColor';

const reducer = (state, action) => {
	switch (action.type) {
		case 'change_red':
			return state.red + action.payload > 255 || state.red + action.payload < 0
				? state
				: { ...state, red: state.red + action.payload };
		case 'change_green':
			return state.green + action.payload > 255 || state.green + action.payload < 0
				? state
				: { ...state, green: state.green + action.payload };
		case 'change_blue':
			return state.blue + action.payload > 255 || state.blue + action.payload < 0
				? state
				: { ...state, blue: state.blue + action.payload };
		default:
			return state;
	}
};

const ColorScreen2 = () => {
	// const [red, setRed] = useState(0);
	// const [green, setGreen] = useState(0);
	// const [blue, setBlue] = useState(0);

	// const setColor = (color, change) => {
	// 	switch (color) {
	// 		case 'red':
	// 			red + change > 255 || red + change < 0 ? null : setRed(red + change);
	// 			return;
	// 		case 'green':
	// 			green + change > 255 || green + change < 0 ? null : setGreen(green + change);
	// 			return;

	// 		case 'blue':
	// 			blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
	// 			return;
	// 		default:
	// 			return;
	// 	}
	// };

	const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
	const { red, green, blue } = state;

	return (
		<View>
			{/* <ControlColor color={red} title={'red'} setColor={setColor} />
			<ControlColor color={green} title={'green'} setColor={setColor} />
			<ControlColor color={blue} title={'blue'} setColor={setColor} /> */}
			<ControlColor
				color={red}
				title={'red'}
				onIncrease={() => dispatch({ type: 'change_red', payload: 15 })}
				onDecrease={() => dispatch({ type: 'change_red', payload: -15 })}
			/>
			<ControlColor
				color={green}
				title={'green'}
				onIncrease={() => dispatch({ type: 'change_green', payload: 15 })}
				onDecrease={() => dispatch({ type: 'change_green', payload: -15 })}
			/>
			<ControlColor
				color={blue}
				title={'blue'}
				onIncrease={() => dispatch({ type: 'change_blue', payload: 15 })}
				onDecrease={() => dispatch({ type: 'change_blue', payload: -15 })}
			/>
			<View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }}></View>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ColorScreen2;
