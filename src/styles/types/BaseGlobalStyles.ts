import BorderStyles, { BorderMatcher } from "./base/BorderStyles";
import FlexStyles, { FlexMatcher } from "./base/FlexStyles";
import LayoutStyles, { LayoutMatcher } from "./base/LayoutStyles";

type BaseGlobalStyles = FlexStyles & BorderStyles & LayoutStyles;

export const BaseMatcher = {
    ...FlexMatcher,
    ...BorderMatcher,
    ...LayoutMatcher,
}

export default BaseGlobalStyles;