import { StyleSheet } from "react-native";
import { Image } from "expo-image";

type Props = {
  placeholderImageSource: string;
  selectedImage?: string;
};

export default function ImageViewer({
  placeholderImageSource,
  selectedImage,
}: Props) {
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
