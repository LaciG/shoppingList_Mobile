import { View, type ViewProps } from "react-native";

export function ThemedView(props: ViewProps) {
  const { style, ...otherProps } = props;

  return (
    <View style={[{ backgroundColor: "transparent" }, style]} {...otherProps} />
  );
}
