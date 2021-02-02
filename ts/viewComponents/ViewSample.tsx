import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'react-native'
import {TextInput, Text, View, Image, StyleSheet} from 'react-native'
export default function ViewSample() {
    return (
        <>
            <View style={styles.container} >
                <View style={styles.box} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: 100,
        height: 100,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 4,
        backgroundColor: 'blue',
    }
})