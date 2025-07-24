# react-native-global-styler

`react-native-global-styler` is a lightweight styling toolkit designed to **speed up your React Native development process** by letting you apply clean, consistent styles using shorthand props like `p_10`, `width_100`, `radius_10`, and more — no need to touch `StyleSheet.create` again.

It includes:  
- Default React Native predefined components (like `<View />`, `<Image />`, `<Text />`, etc.)  
- `useGlobalStyler` hook for styling your custom components 
- Support for composable, extendable style types (base, image, text)  

---

## Installation

```bash
npm install react-native-global-styler
```

---

## ✨ Usage Examples

### Prebuilt Styled Components

You can use both full names (`GSView`, `GSText`, etc.) or short aliases (`View`, `Text`, etc.) — both work the same.

```tsx
import { Image, View, Text } from 'react-native-global-styler';

const MyComponent = () => (
  <>
    <Image
      source={{ uri: 'https://example.com/cat.jpg' }}
      width_100
      height_90
      radius_10
      resize_cover
    />
    <View
      p_15
      border_1
      radius_tr_11
    >
        <Text size_lg weight_bold>
            Hello world
        </Text>
    </View>
  </>
);
```

---

## Supported Style Shorthands

### Base Styles (`BaseGlobalStyles`)

- Margin, padding, layout: `m_10`, `p_15`, `mv_5`, `pt_20`, `gap_1`  
- Size and border: `width_100`, `height_200`, `radius_tb_10`, `border_1`  
- Flexbox: `row`, `center`, `justify_between`, `items_end`  

### Image Styles (`ImageGlobalStyles`)
includes everything from `BaseGlobalStyles`

- Resize modes: `resize_cover`, `resize_contain`, `resize_stretch` 

### Text Styles (`TextGlobalStyles`)
includes everything from `BaseGlobalStyles`

- Font size and weight: `size_md`, `size_lg`, `weight_bold`, `align_center`  
- Colors and line height: `color_primary`, `color_secondary`, `lh_20`  

---

## Creating Custom Components

Use the `useGlobalStyler` hook to apply global styles in any component (you can also use prefix in keys if needed):

```tsx
import React from 'react';
import { Pressable as RNPressable, Text } from 'react-native';
import { useGlobalStyler, BaseGlobalStyles } from 'react-native-global-styler';

type MyButtonProps = BaseGlobalStyles & {
  title: string;
  onPress: () => void;
};

const MyButton = ({ title, onPress, ...styleProps }: MyButtonProps) => {
  const styled = useGlobalStyler(styleProps);
  return (
    <RNPressable onPress={onPress} style={[styled]}>
      <Text>{title}</Text>
    </RNPressable>
  );
};

export default MyButton;
```

---

## Available Predefined Components

All components come in two variants (full and short names):

| Component               | Aliases           |
| ----------------------- | ----------------- |
| `GSView`                | `View`            |
| `GSText`                | `Text`            |
| `GSImage`               | `Image`           |
| `GSImageBackground`     | `ImageBackground` |
| `GSPressable`           | `Pressable`       |
| `GSTouchableOpacity`    | `TouchableOpacity`|
| `GSTouchableHighlight`  | `TouchableHighlight` |
| `GSScrollView`          | `ScrollView`      |
| `GSTextInput`           | `TextInput`       |

All accept shorthand style props as defined by their style types.

---

## Available Styles

ImageGlobalStyles

| Style                   | Description       |
| ----------------------- | ----------------- |
| `resize_{value}`        | Resize mode       |


TextGlobalStyles 

| Prop                              | Description                                      |
| --------------------------------- | ------------------------------------------------ |
| `size_xs`                         | Font size 10                                     |
| `size_sm`                         | Font size 12                                     |
| `size_md`                         | Font size 14                                     |
| `size_lg`                         | Font size 16                                     |
| `size_xl`                         | Font size 18                                     |
| `size_2xl`                        | Font size 20                                     |
| `size_{N}`                        | Font size for numeric values from `Nums` (0-100) |
| `weight_{fontWeight}`             | Font weight (e.g., `weight_bold`, `weight_400`)  |
| `fontStyle_{fontStyle}`           | Font style (e.g., `fontStyle_italic`)            |
| `decoration_{textDecorationLine}` | Text decoration (e.g., `decoration_underline`)   |
| `textAlign_{textAlign}`           | Text alignment (e.g., `textAlign_center`)        |
| `textTransform_{textTransform}`   | Text transform (e.g., `textTransform_uppercase`) |


BaseGlobalStyles

| Prop                  | Description                                                          |
| --------------------- | -------------------------------------------------------------------- |
| `absolute`            | Position: absolute                                                   |
| `relative`            | Position: relative                                                   |
| `top_{N}`             | Top position (numeric value from `Nums`)                             |
| `bottom_{N}`          | Bottom position (numeric value from `Nums`)                          |
| `left_{N}`            | Left position (numeric value from `Nums`)                            |
| `right_{N}`           | Right position (numeric value from `Nums`)                           |
| `width_{N}`           | Width (numeric value from `Nums`)                                    |
| `height_{N}`          | Height (numeric value from `Nums`)                                   |
| `opacity_{N}`         | Opacity (numeric value from `Nums`)                                  |
| `zIndex_{N}`          | zIndex (numeric value from `Nums`)                                   |
| `m_{N}`               | Margin (numeric value from `Nums`)                                   |
| `p_{N}`               | Padding (numeric value from `Nums`)                                  |
| `gap_{N}`             | Gap between elements (numeric value from `Nums`)                     |
| `m{side}_{N}`         | Margin on side (l, r, b, t, tl, bl, tr, br, h, v) with numeric value |
| `p{side}_{N}`         | Padding on side (same sides as above)                                |
| `flex`                | flex: 1                                                              |
| `flexGrow`            | flexGrow: 1                                                          |
| `flex_{N}`            | flex numeric value                                                   |
| `flexGrow_{N}`        | flexGrow numeric value                                               |
| `column`              | flexDirection: column                                                |
| `row`                 | flexDirection: row                                                   |
| `wrap`                | flexWrap: wrap                                                       |
| `nowrap`              | flexWrap: nowrap                                                     |
| `align_start`         | alignItems: flex-start                                               |
| `align_end`           | alignItems: flex-end                                                 |
| `align_center`        | alignItems: center                                                   |
| `align_stretch`       | alignItems: stretch                                                  |
| `align_baseline`      | alignItems: baseline                                                 |
| `alignSelf_start`     | alignSelf: flex-start                                                |
| `alignSelf_end`       | alignSelf: flex-end                                                  |
| `alignSelf_center`    | alignSelf: center                                                    |
| `alignSelf_stretch`   | alignSelf: stretch                                                   |
| `alignSelf_baseline`  | alignSelf: baseline                                                  |
| `justify_start`       | justifyContent: flex-start                                           |
| `justify_end`         | justifyContent: flex-end                                             |
| `justify_center`      | justifyContent: center                                               |
| `justify_between`     | justifyContent: space-between                                        |
| `justify_around`      | justifyContent: space-around                                         |
| `justify_evenly`      | justifyContent: space-evenly                                         |
| `border_{N}`          | Border width (numeric value from `Nums`)                             |
| `border_{side}_{N}`   | Border width on side (l, r, b, t, etc.)                              |
| `radius_{N}`          | Border radius (numeric value from `Nums`)                            |
| `radius_{corner}_{N}` | Border radius on corner (tl, tr, bl, br)                             |


---

## Tips

- Mix inline styles and shorthand props freely. Shorthand props are applied **after** your `style` prop, so inline styles can override shorthand styles if needed.
  
---

## Upcoming Features

- Coloring and theming support is **coming soon**! Stay tuned for more customization options.

---

## Issues & Contributions

Any issues, feature requests, or proposals are very welcome! Please open an issue or a pull request on the GitHub repository.

---

Thank you for using **react-native-global-styler** — happy styling! 🎉
