import TextStyles, { TextMatcher } from "./base/TextStyles";
import BaseGlobalStyles from "./BaseGlobalStyles";

type TextGlobalStyles = BaseGlobalStyles & TextStyles ;

export const TextGlobalMatcher = {
    ...TextMatcher,
}

export default TextGlobalStyles;