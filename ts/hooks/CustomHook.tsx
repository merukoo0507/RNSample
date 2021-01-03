import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'react-native'
import {TextInput, Text, View, Image, StyleSheet} from 'react-native'

function useInterval(callback, delay) {
    const savedCallback = useRef()
    
    //remember latest callback
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        if (delay !== null) {
            let id = setInterval(() => {
                    savedCallback.current()
                }, delay)
            return () => clearInterval(id)
        }
    }, [delay])
}

export default function CustomHook() {
    const [count, setCount] = useState(0)

    useInterval(() => {
        setCount(count + 1)
    }, 1000)

    return (
        <>
            <Text style={{ fontSize: 100}}>{count}</Text>
        </>
    )
}