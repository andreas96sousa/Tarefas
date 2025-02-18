import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./ride.style.js";
import { json_rides } from "../../constants/dados.js";
import icons from "../../constants/icons.js";

function Ride(props) {

    function ClickRide(id) {
        console.log("Ride=" + id);
        props.navigation.navigate("ride-detail");
    }

    return <View style={styles.container}>
        <FlatList data={json_rides}
            keyExtractor={(ride) => ride.ride_id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <TouchableOpacity style={styles.ride}
                    onPress={() => ClickRide(item.ride_id)}>
                    <View style={styles.containerName}>
                        <Image source={icons.car} style={styles.car} />
                        <Text style={styles.name}>{item.passenger_name}</Text>
                    </View>
                    <Text style={styles.address}>Origem: {item.pickup_address}</Text>
                    <Text style={styles.address}>Destino: {item.dropoff_address}</Text>
                </TouchableOpacity>
            }}
        />
    </View>
}

export default Ride;