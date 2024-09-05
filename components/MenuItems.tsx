import { View, Text, FlatList, StyleSheet } from "react-native";

const MenuItems = () => {
    const menuItemsToDisplay = [
        { name: "Hummus", price: "$5.00", id: "1A" },
        { name: "Moutabal", price: "$5.00", id: "2B" },
        { name: "Falafel", price: "$7.50", id: "3C" },
        { name: "Marinated Olives", price: "$5.00", id: "4D" },
        { name: "Kofta", price: "$5.00", id: "5E" },
        { name: "Eggplant Salad", price: "$8.50", id: "6F" },
        { name: "Lentil Burger", price: "$10.00", id: "7G" },
        { name: "Smoked Salmon", price: "$14.00", id: "8H" },
        { name: "Kofta Burger", price: "$11.00", id: "9I" },
        { name: "Turkish Kebab", price: "$15.50", id: "10J" },
        { name: "Fries", price: "$3.00", id: "11K" },
        { name: "Buttered Rice", price: "$3.00", id: "12L" },
        { name: "Bread Sticks", price: "$3.00", id: "13M" },
        { name: "Pita Pocket", price: "$3.00", id: "14N" },
        { name: "Lentil Soup", price: "$3.75", id: "15O" },
        { name: "Greek Salad", price: "$6.00", id: "16Q" },
        { name: "Rice Pilaf", price: "$4.00", id: "17R" },
        { name: "Baklava", price: "$3.00", id: "18S" },
        { name: "Tartufo", price: "$3.00", id: "19T" },
        { name: "Tiramisu", price: "$5.00", id: "20U" },
        { name: "Panna Cotta", price: "$5.00", id: "21V" },
    ];

    const Item = ({ name, price }: any) => {
        return (
            <View style={styles.listContainer}>
                <Text style={styles.dataText}>{name}</Text>
                <Text style={styles.dataText}>{price}</Text>
            </View>
        );
    };

    const Separators = () => <View style={styles.separator} />;

    const Header = () => <Text style={styles.headText}>Different Cuisines and their Prices</Text>;

    const renderItem = ({ item }: any) => (
        <Item name={item.name} price={item.price} />
    );

    return (
        <View style={styles.container}>
            {/* <Text style={styles.headText}>Different Cuisines and their Prices</Text> */}
            <FlatList
                data={menuItemsToDisplay}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ItemSeparatorComponent={Separators}
                ListHeaderComponent={Header}
            />
        </View>
    );
};

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
    headText: {
        fontSize: 27,
        color: "white",
        padding: 30,
        textAlign: "center",
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: "#EDEFEE",
    },
    // sectionHeader: {
    //     backgroundColor: '#fbdabb',
    //     color: '#333333',
    //     fontSize: 34,
    //     flexWrap: 'wrap',
    //     textAlign: 'center',
    // },
});

export default MenuItems;
