import { Text, type TextProps } from "react-native";

export function ThemedText(props: TextProps) {
  const { style, ...otherProps } = props;

  return (
    <Text style={[{ color: "#000000", fontSize: 16 }, style]} {...otherProps} />
  );
}
