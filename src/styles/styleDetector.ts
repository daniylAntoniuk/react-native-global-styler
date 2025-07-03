import { SideMatcher } from "./types/base/Sides";
import { GlobalStyles } from "./useGlobalStyler";

const uniqueMaps = {
    'align' : 'alignItems',
    'justify' : 'justifyContent',
    'radius' : 'borderRadius',
    'border' : 'borderWidth',
}

export const detectStyleKeys = (key: keyof GlobalStyles): string[] => {
  const items = key.split("_");
  const sides: string[] = [];
  let generatedKey: string = '';
  if (items.length === 3) {
    items[1].split("").map((char) => {
      sides.push(SideMatcher[char]);
    });
  }

  if(uniqueMaps[items[0]]){
    generatedKey = uniqueMaps[items[0]];
  } else {
    generatedKey = items[0];
  }

  return sides.length > 0 ? sides.map((s) => `${generatedKey}${s}`) : [generatedKey];
};

export const detectStyleValue = (key: keyof GlobalStyles) => {
  const items = key.split("_");
  const last = items[items.length - 1];
  const value = Number(last);
  return isNaN(value) ? last : value;
};
