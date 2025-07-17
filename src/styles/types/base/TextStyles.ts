import { TextStyle } from "react-native";
import Nums from "./Nums";

const TxtMatcher = {
  size_xs: { key: "fontSize", value: 10 },
  size_sm: { key: "fontSize", value: 12 },
  size_md: { key: "fontSize", value: 14 },
  size_lg: { key: "fontSize", value: 16 },
  size_xl: { key: "fontSize", value: 18 },
  size_2xl: { key: "fontSize", value: 20 },
};

export const TextMatcher = {
  ...TxtMatcher,
};

type TextStyles = {
  [T in TextStyle["fontWeight"] as `weight_${T}`]?: boolean;
} & {
  [T in TextStyle["fontStyle"] as `fontStyle_${T}`]?: boolean;
} & {
  [T in TextStyle["textDecorationLine"] as `decoration_${T}`]?: boolean;
} & {
  [T in TextStyle["textAlign"] as `textAlign_${T}`]?: boolean;
} & {
  [T in TextStyle["textTransform"] as `textTransform_${T}`]?: boolean;
} & {
  [N in Nums as `size_${N}`]?: boolean;
} & {
  [N in Nums as `size_${N}`]?: boolean;
} & {
  [N in keyof typeof TxtMatcher as `${N}`]?: boolean;
};

export default TextStyles;
