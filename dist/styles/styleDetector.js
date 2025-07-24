import { SideMatcher, sidesArr } from "./types/base/Sides";
const uniqueMaps = {
    align: "alignItems",
    justify: "justifyContent",
    radius: "border{sc}Radius",
    border: "border{s}Width",
    weight: "fontWeight",
    decoration: "textDecorationLine",
    size: "fontSize",
    "p{s}": "padding",
    p: "padding",
    "m{s}": "margin",
    m: "margin",
};
export const detectStyleKeys = (key) => {
    const items = key.split("_");
    const sides = [];
    let generatedKey = "";
    const generateSides = (side) => {
        side.split("").forEach((char) => {
            sides.push(...SideMatcher[char]);
        });
    };
    if (items.length === 3) {
        generateSides(items[1]);
    }
    sidesArr.forEach((e) => {
        if (items[0].endsWith(e)) {
            const subkey = items[0].slice(0, items[0].length - e.length);
            if (uniqueMaps[subkey + "{s}"]) {
                generateSides(e);
                generatedKey = uniqueMaps[subkey + "{s}"];
            }
        }
    });
    if (!generatedKey) {
        if (uniqueMaps[items[0]]) {
            generatedKey = uniqueMaps[items[0]];
        }
        else {
            generatedKey = items[0];
        }
    }
    return sides.length > 0
        ? generatedKey.includes("{sc}")
            ? [generatedKey.replace("{sc}", sides.join(""))]
            : sides.map((s) => generatedKey.includes("{s}")
                ? generatedKey.replace("{s}", s)
                : `${generatedKey}${s}`)
        : [generatedKey.replace("{s}", "").replace("{sc}", "")];
};
export const detectStyleValue = (key) => {
    const items = key.split("_");
    const last = items[items.length - 1];
    const value = Number(last);
    return isNaN(value) ? last : items[0] === "opacity" ? value / 100 : value;
};
