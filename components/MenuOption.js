import {StyleSheet, Text, Pressable} from "react-native";
import {
    MaterialCommunityIcons,
    MaterialIcons,
} from '@expo/vector-icons';
import {Link} from "expo-router";

export const MenuOption = ({item}) => {
    return (
        <Link href={item.href} asChild>
            <Pressable style={styles.optionRow}>
                <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />
                <Text style={styles.optionText}>{item.name}</Text>
                <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    color="gray"
                    style={{ marginLeft: 'auto' }}
                />
            </Pressable>
        </Link>
    )
}

const styles= StyleSheet.create({
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
    optionText: {
        color: '#eee',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
})