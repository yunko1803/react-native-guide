import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
	return (
		<View>
			<ImageDetail title="forest" imageSource={require('../../assets/forest.jpg')} score={5} />
			<ImageDetail title="beach" imageSource={require('../../assets/beach.jpg')} score={8} />
			<ImageDetail title="mountain" imageSource={require('../../assets/mountain.jpg')} score={10} />
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageScreen;
