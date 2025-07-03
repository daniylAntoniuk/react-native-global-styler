import { ViewStyle } from "react-native";
import BaseGlobalStyles, { BaseMatcher } from "./types/BaseGlobalStyles"
import { detectStyleKeys, detectStyleValue } from "./styleDetector";

export type CombinedStyle = ViewStyle;
export type GlobalStyles = BaseGlobalStyles;
export const GlobalMatcher = { ...BaseMatcher };

const useGlobalStyler = (keys: GlobalStyles) => {
    const generatedStyles : CombinedStyle = {};
    const activeKeys = (Object.keys(keys) as (keyof GlobalStyles)[]).filter(k => keys[k]);
    activeKeys.forEach((k) => {
        if(GlobalMatcher[k]){
            generatedStyles[GlobalMatcher[k].key] = GlobalMatcher[k].value;
        }
        const styles = detectStyleKeys(k);
        styles.forEach((gk) => {
            generatedStyles[gk] = detectStyleValue(k);
        });
    });

    return generatedStyles;
}

export default useGlobalStyler;