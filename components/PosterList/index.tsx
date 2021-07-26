import React, { useState, useEffect } from "react";
import {
	Text,
	FlatList,
	View,
	StyleSheet, ListRenderItemInfo
} from "react-native";
import { IPosterListProps, IEpisode, IMovie } from "../../types/interfaces";
import PosterItem from "../PosterItem";

const PosterList = (props: IPosterListProps) => {
	const { medias, title } = props;
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			{medias !== null && (
				<FlatList
					horizontal
					data={medias}
					renderItem={(item) => <PosterItem item={item.item} />}
					keyExtractor={item => item.id}
					style={styles.flatlist}
					//ListHeaderComponent={() => <Text style={styles.title}>{title}</Text>}
				/>
			)}
			
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		justifyContent: 'space-between',
		paddingVertical: 10,
		paddingLeft: 10
	},
	flatlist: {
		width: '100%',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		padding: 5,
		color: 'white'
	}
});

export default PosterList;