import React from 'react'
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'
import Colors from '../../constants/Colors'

const ProductItem = props => {

	let TouchableComp = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version > 22) {
		TouchableComp = TouchableNativeFeedback
	}

	return (
		<View style={styles.product}>
			<View style={styles.c}>
				<TouchableComp onPress={props.onViewDetail} useForeground>
					<View>
						<View style={styles.imageContainer}>
							<Image style={styles.image} source={{ uri: props.image }} />
						</View>
						<View style={styles.details}>
							<Text style={styles.title}>{props.title}</Text>
							<Text style={styles.price}>${props.price.toFixed(2)}</Text>
						</View>
						<View style={styles.actions}>
							<Button color={Colors.primary} title="View details" onPress={props.onViewDetail} />
							<Button color={Colors.primary} title="To cart" onPress={props.onAddToCart} />
						</View>
					</View>
				</TouchableComp>
			</View>

		</View>

	)
}

const styles = StyleSheet.create({
	product: {
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		elevation: 5,
		borderRadius: 10,
		backgroundColor: 'white',
		height: 300,
		margin: 20,
		overflow: 'hidden'
	},

	imageContainer: {
		width: '100%',
		height: '60%',
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		overflow: 'hidden'
	},
	image: {
		width: '100%',
		height: '100%',
	},
	details: {
		alignItems: 'center',
		height: '15%',
		padding: 10
	},
	title: {
		fontSize: 18,
		marginVertical: 4,
		fontFamily:'open-sans-bold'
	},
	price: {
		fontSize: 14,
		color: '#888',
		fontFamily: 'open-sans'
	},
	actions: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '25%',
		paddingHorizontal: 20
	},
	touchable: {
		borderRadius: 10,
		overflow: 'hidden'
	}
})


export default ProductItem;