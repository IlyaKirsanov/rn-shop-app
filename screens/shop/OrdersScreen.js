import React from 'react'
import { FlatList, Platform, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton'

import OrderItem from '../../components/shop/OrderItem'

const OrdersScreen = props => {
	const orders = useSelector(state => state.orders.orders)

	return (
		<FlatList
			data={orders}
			keyExtractor={item => item.id}
			renderItem={itemData => <OrderItem
				items={itemData.item.items}
				amount={itemData.item.totalAmount}
				date={itemData.item.readableDate} />}
		/>
	)
}

OrdersScreen.navigationOptions = navData => {
	return {

		headerTitle: 'Your orders',
		headerLeft: () => {
			return (<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Menu"
					iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
					onPress={() => { navData.navigation.toggleDrawer() }}
				/>
			</HeaderButtons>)
		},
	};
}

export default OrdersScreen