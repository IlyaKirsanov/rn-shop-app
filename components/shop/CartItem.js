import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const CartItem = props => {

	return (
		<View style={styles.cartItem}>
			<View style={styles.itemData}>
				<Text style={styles.quantity}>{props.quantity} </Text>
				<Text style={styles.mainText}>{props.title}</Text>
			</View>
			<View style={styles.itemData}>
				<Text style={styles.quantity}>${props.amount.toFixed(2)}</Text>
				{props.deleteable && <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton}>
					<Ionicons
						name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
						size={23}
						color="red"
					/>
				</TouchableOpacity>}
			</View>
		</View>

	)
}

const styles = StyleSheet.create({
	cartItem: {
		flex: 1,
		padding: 10,
		backgroundColor: '#ffffff66',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 20,
		borderRadius: 5
	},
	itemData: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},
	quantity: {
		fontFamily: 'open-sans',
		color: '#000',
		fontSize: 16,
		marginRight: 10
	},
	mainText: {
		flex: 1,
		fontFamily: 'open-sans-bold',
		fontSize: 16,
	},
	deleteButton: {
		marginLeft: 20
	},
})


export default CartItem;