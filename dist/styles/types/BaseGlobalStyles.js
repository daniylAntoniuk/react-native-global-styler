import { BorderMatcher } from "./base/BorderStyles";
import { FlexMatcher } from "./base/FlexStyles";
import { LayoutMatcher } from "./base/LayoutStyles";
export const BaseMatcher = Object.assign(Object.assign(Object.assign({}, FlexMatcher), BorderMatcher), LayoutMatcher);
