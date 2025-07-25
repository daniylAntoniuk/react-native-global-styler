import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import BaseGlobalStyles, { BaseMatcher } from "./types/BaseGlobalStyles";
import { detectStyleKeys, detectStyleValue } from "./styleDetector";
import ImageGlobalStyles, {
  ImageGlobalMatcher,
} from "./types/ImageGlobalStyles";
import TextGlobalStyles, { TextGlobalMatcher } from "./types/TextGlobalStyles";

export type CombinedStyle = ViewStyle & ImageStyle & TextStyle;
export type GlobalStyles = BaseGlobalStyles &
  ImageGlobalStyles &
  TextGlobalStyles;
export const GlobalMatcher = {
  ...BaseMatcher,
  ...ImageGlobalMatcher,
  ...TextGlobalMatcher,
};

const useGlobalStyler = (keys: GlobalStyles, prefix?: string) => {
  const generatedStyles: CombinedStyle = {};
  let activeKeys: (keyof GlobalStyles)[] = (
    Object.keys(keys) as (keyof GlobalStyles)[]
  ).filter((k) => keys[k]);
  if(prefix){
    activeKeys = activeKeys.map((e) => e.replace(prefix,'')) as (keyof GlobalStyles)[];
  }
  activeKeys.forEach((k) => {
    if (GlobalMatcher[k]) {
      generatedStyles[GlobalMatcher[k].key] = GlobalMatcher[k].value;
    } else {
      const styles = detectStyleKeys(k);
      styles.forEach((gk) => {
        if (detectStyleValue(k) != gk) {
          generatedStyles[gk] = detectStyleValue(k);
        }
      });
    }
  });

  return generatedStyles;
};

export default useGlobalStyler;
