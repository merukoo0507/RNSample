import React, {useEffect, useLayoutEffect, useReducer, useRef, useState} from 'react'
import { Button, ImageBackground, View } from 'react-native';
import Canvas from 'react-native-canvas';

const CanvasTest = () => {
    const [value, setValue] = useState(50)

    const handleCanvas = (canvas) => {
        const ctx = canvas?.getContext('2d');
        if (ctx == null) return

        console.log(value) 
        ctx.fillStyle = 'purple';
        let width = 5
        ctx.beginPath();
        ctx.arc(100 + value, 75 + value, width, 0, 2 * Math.PI);
        ctx.stroke();
    }

    useEffect

    return (
        <View style={{flex: 1, width: '100%', height: '100%'}}>
            <Button 
                title="plus value"
                onPress={() => {
                    setValue(value + 5)
                }}/>
            <Canvas 
                ref={handleCanvas} 
            />
        </View>
    )
}

export default CanvasTest