import BorderStyles, { BorderMatcher } from "./base/BorderStyles";
import FlexStyles, { FlexMatcher } from "./base/FlexStyles";

type BaseGlobalStyles = FlexStyles & BorderStyles;

export const BaseMatcher = {
    ...FlexMatcher,
    ...BorderMatcher
}

export default BaseGlobalStyles;