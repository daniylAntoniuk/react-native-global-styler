import { BaseMatcher } from "./types/BaseGlobalStyles";
import { detectStyleKeys, detectStyleValue } from "./styleDetector";
import { ImageGlobalMatcher, } from "./types/ImageGlobalStyles";
import { TextGlobalMatcher } from "./types/TextGlobalStyles";
export const GlobalMatcher = Object.assign(Object.assign(Object.assign({}, BaseMatcher), ImageGlobalMatcher), TextGlobalMatcher);
const useGlobalStyler = (keys, prefix) => {
    const generatedStyles = {};
    let activeKeys = Object.keys(keys).filter((k) => keys[k]);
    if (prefix) {
        activeKeys = activeKeys.map((e) => e.replace(prefix, ''));
    }
    activeKeys.forEach((k) => {
        if (GlobalMatcher[k]) {
            generatedStyles[GlobalMatcher[k].key] = GlobalMatcher[k].value;
        }
        else {
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
