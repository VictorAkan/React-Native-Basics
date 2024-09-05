import { View, Text, SectionList, StyleSheet } from "react-native";

const Item = ({ name, price }: any) => {
    return (
        <View style={styles.listContainer}>
            <Text style={styles.dataText}>{name}</Text>
            <Text style={styles.dataText}>{price}</Text>
        </View>
    )
}

const MenuItemsSections = () => {
    const menuItemsToDisplay = [
        {
            title: 'Appetizers',
            data: [
                { name: 'Hummus', price: '$5.00' },
                { name: 'Moutabal', price: '$5.00' },
                { name: 'Falafel', price: '$7.50' },
                { name: 'Marinated Olives', price: '$5.00' },
                { name: 'Kofta', price: '$5.00' },
                { name: 'Eggplant Salad', price: '$8.50' },
            ],
        },
        {
            title: 'Main Dishes',
            data: [
                { name: 'Lentil Burger', price: '$10.00' },
                { name: 'Smoked Salmon', price: '$14.00' },
                { name: 'Kofta Burger', price: '$11.00' },
                { name: 'Turkish Kebab', price: '$15.50' },
            ],
        },
        {
            title: 'Sides',
            data: [
                { name: 'Fries', price: '$3.00', id: '11K' },
                { name: 'Buttered Rice', price: '$3.00' },
                { name: 'Bread Sticks', price: '$3.00' },
                { name: 'Pita Pocket', price: '$3.00' },
                { name: 'Lentil Soup', price: '$3.75' },
                { name: 'Greek Salad', price: '$6.00' },
                { name: 'Rice Pilaf', price: '$4.00' },
            ],
        },
        {
            title: 'Desserts',
            data: [
                { name: 'Baklava', price: '$3.00' },
                { name: 'Tartufo', price: '$3.00' },
                { name: 'Tiramisu', price: '$5.00' },
                { name: 'Panna Cotta', price: '$5.00' },
            ],
        },
    ];

    const renderItem = ({item}:any) => <Item name={item.name} price={item.price} />

    const renderSectionHeader = ({section: {title}}:any) => {
        return <Text style={styles.sectionHeaderText}>{title}</Text>
    }


    return (
        <View style={styles.container}>
            <SectionList 
                sections={menuItemsToDisplay}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                // keyExtractor={(item, index) => item + index}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333333",
    },
    dataText: {
        color: "#F4CE14",
        fontSize: 25,
        padding: 10,
    },
    listContainer: {
        flex: 1,
        padding: 20,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    sectionHeaderText: {
        backgroundColor: '#F4CE14',
        textAlign: 'center',
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default MenuItemsSections