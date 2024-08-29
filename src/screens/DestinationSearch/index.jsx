import React, {useState} from 'react';
import { View, TextInput, SafeAreaView } from 'react-native';
import styles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const DestinationSearch = (props) => {

	const [fromText, setFromText] = useState('');
    const [destinationText, setDestinationText] = useState('');

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<TextInput 
				    value={fromText}
					onChangeText={setFromText}
					style={styles.textInput} 
					placeholder="From"
				/>
            	<TextInput 
				    value={destinationText}
					onChangeText={setDestinationText}
					style={styles.textInput} 
					placeholder="Where to?" 
				/>
				
			</View>
			<GooglePlacesAutocomplete
				placeholder='Search'
				onPress={(data, details = null) => {
					// 'details' is provided when fetchDetails = true
					console.log(data, details);
				}}
				query={{
					key: '',
					language: 'en',
				}}
    		/>
		</SafeAreaView>
	);
};
export default DestinationSearch;