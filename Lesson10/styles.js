import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#f3f8f9', // Light blue background
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4a90e2', // Blue color for title text
        fontFamily: 'Comic Sans MS', // Playful font
        marginBottom: 15,
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        backgroundColor: '#ffffff', // White input background
        fontFamily: 'Comic Sans MS',
        fontSize: 16,
    },
    itemContainer: {
        width: '100%',
        backgroundColor: '#ffffff',
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
        borderColor: '#d1d8e0',
        borderWidth: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
    },
    flavorText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4a90e2', // Blue flavor text
    },
    descriptionText: {
        fontSize: 14,
        color: '#7f8c8d', // Light gray for descriptions
    },
    error: {
        color: '#e74c3c', // Red error message
        fontSize: 16,
        fontFamily: 'Comic Sans MS',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#55b19f', // Green color for buttons
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Comic Sans MS',
    },
});

export default styles;
