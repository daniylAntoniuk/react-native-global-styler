import BorderStyles, { BorderMatcher } from "./base/BorderStyles";
import FlexStyles, { FlexMatcher } from "./base/FlexStyles";

type BaseGlobalStyles = FlexStyles & BorderStyles;

const Matcher = {
    ...FlexMatcher,
    ...BorderMatcher
}