import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const displayImage = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;
  return <Image source={displayImage} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
