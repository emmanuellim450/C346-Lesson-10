import React, { useState, useEffect } from 'react';
import { FlatList, StatusBar, Text, TextInput, View } from 'react-native';
import styles from './styles'; // Import the custom stylesheet

const App = () => {
    const [mydata, setMydata] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://mysafeinfo.com/api/data?list=benandjerryflavors&format=json&case=default")
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Log the data to check the structure
                setMydata(data);
                setOriginalData(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError("Failed to load data. Please try again later.");
            });
    }, []);

    const filterData = (text) => {
        if (text) {
            const filteredData = originalData.filter((item) =>
                (item.Flavor && item.Flavor.toLowerCase().includes(text.toLowerCase()))
            );
            setMydata(filteredData);
        } else {
            setMydata(originalData);
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.flavorText}>{item.Flavor || "N/A"}</Text>
            <Text style={styles.descriptionText}>{item.Description || "Unknown Description"}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar />
            <Text style={styles.title}>Ben and Jerry's:</Text>
            <TextInput
                style={styles.input}
                placeholder="Search for flavors"
                onChangeText={(text) => filterData(text)}
            />
            {error ? (
                <Text style={styles.error}>{error}</Text>
            ) : mydata.length === 0 ? (
                <Text style={styles.error}>No results found</Text>
            ) : (
                <FlatList
                    data={mydata}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => item.Flavor ? item.Flavor : index.toString()}
                />
            )}
        </View>
    );
};

export default App;
