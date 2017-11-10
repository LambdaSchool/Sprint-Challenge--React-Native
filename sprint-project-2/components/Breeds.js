// Get Route Component for Breeds
import React from 'react';
import { View, Text, StyleSheet } from react-native;

import axios from 'axios';

export default class Breed extends React.Component {


}


fetch('https://dog.ceo/api/breeds/list/all')
.then(function(response) {
    return response.json()
});




