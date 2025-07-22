import { SideMatcher, sidesArr } from "./types/base/Sides";
import { GlobalStyles } from "./useGlobalStyler";

const uniqueMaps = {
    'align' : 'alignItems',
    'justify' : 'justifyContent',
    'radius' : 'border{s}Radius',
    'border' : 'border{s}Width',
    'weight' : 'fontWeight',
    'decoration' : 'textDecorationLine',
    'size' : 'fontSize',
    'p{s}': 'padding',
    'p': 'padding',
    'm{s}': 'margin',
    'm': 'margin',
}

export const detectStyleKeys = (key: keyof GlobalStyles): string[] => {
  const items = key.split("_");
  const sides: string[] = [];
  let generatedKey: string = '';

  const generateSides = (side) => {
    side.split("").forEach((char) => {
      sides.push(...SideMatcher[char]);
    });
  }

  if (items.length === 3) {
    generateSides(items[1]);
  }

  sidesArr.forEach(e => {
    if(items[0].endsWith(e)){
      const subkey = items[0].slice(0, items[0].length - e.length);
      if(uniqueMaps[subkey +'{s}']) {
        generateSides(e);
        generatedKey = uniqueMaps[subkey +'{s}'];
      }
    }
  })

  if(!generatedKey){
    if(uniqueMaps[items[0]]){
      generatedKey = uniqueMaps[items[0]];
    } else {
      generatedKey = items[0];
    }
  }
  return sides.length > 0 ? sides.map((s) => generatedKey.includes('{s}') ? generatedKey.replace('{s}',s) : `${generatedKey}${s}`) : [generatedKey];
};

export const detectStyleValue = (key: keyof GlobalStyles) => {
  const items = key.split("_");
  const last = items[items.length - 1];
  const value = Number(last);
  return isNaN(value) ? last : items[0] === 'opacity' ? value / 100 : value;
};
