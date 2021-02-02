import React, { useEffect, useRef, useState } from 'react'
import { Image, StyleSheet, View } from 'react-native';
import SignatureScreen from 'react-native-signature-canvas'

const Sign = () => {
    const ref = useRef()
    const [sign, setSign] = useState(null);
    
    const handleSignature = signature => {
        console.log("handleSignature = data...")// + signature)
        setSign(signature);
    }

    const handleEmpty = () => {
      console.log('Empty');
    }
  
    const handleClear = () => {
      console.log('clear success!');
      setSign(null);
    }
  
    const style = `.m-signature-pad--footer
    .button {
      background-color: red;
      color: #FFF;
    }`;
    return(
        <View style={{ flex: 1 }}>
          <View style={styles.preview}>
            <Image
                resizeMode={"contain"}
                style={{ width: 335, height: 114 }}
                source={{ uri: sign }}
                />
          </View>
            <SignatureScreen
                ref={ref}
                onOK={handleSignature}
                onEmpty={handleEmpty}
                onClear={handleClear}
                descriptionText="Sign"
                clearText="Clear"
                confirmText="Save"
                autoClear={true}
                penColor={'black'}
                minWidth={10}
                webStyle={style}
            />
        </View>
    )
}
 
const styles = StyleSheet.create({
  preview: {
    width: 335,
    height: 114,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },
  previewText: {
    color: "#FFF",
    fontSize: 14,
    height: 40,
    lineHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#69B2FF",
    width: 120,
    textAlign: "center",
    marginTop: 10
  }
})

export default Sign