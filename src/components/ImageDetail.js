import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, imageSource, score }) => {
	return (
		<View>
			<Image source={imageSource}></Image>
			<Text>{title}</Text>
			<Text>Image Score - {score}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageDetail;
