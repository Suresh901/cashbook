import { CameraView, useCameraPermissions } from "expo-camera";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const handleScan = ({ data, type }) => {
    if (scanned) return;
    setScanned(true);

    if (data) {
      Alert.alert("Scanned Data", data);
      // console.log("Scanned barcode type:", type);
    } else {
      console.warn("No data found in scanned barcode.");
    }

    setTimeout(() => setScanned(false), 1000);
  };

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }
  return (
    <CameraView
      style={styles.camera}
      facing={facing}
      onBarcodeScanned={scanned ? undefined : handleScan}
      barcodeScannerSettings={{
        barcodeTypes: [
          "aztec",
          "code128",
          "code39",
          "code93",
          "ean13",
          "ean8",
          "pdf417",
          "qr",
          "upc_e",
          "datamatrix",
          "itf14",
        ],
      }}
    >
      <View style={styles.overlay}>
        <View style={styles.scanArea} />
      </View>
      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <Text style={styles.text}>Flip Camera</Text>
        </TouchableOpacity>
      </View> */}
    </CameraView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scanArea: {
    width: 250,
    height: 250,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
  },
});
