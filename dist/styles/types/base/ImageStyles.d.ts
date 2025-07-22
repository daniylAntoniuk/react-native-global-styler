declare const ImgMatcher: {
    resize_cover: {
        key: string;
        value: string;
    };
    resize_contain: {
        key: string;
        value: string;
    };
    resize_stretch: {
        key: string;
        value: string;
    };
    resize_center: {
        key: string;
        value: string;
    };
    resize_repeat: {
        key: string;
        value: string;
    };
};
export declare const ImageMatcher: {
    resize_cover: {
        key: string;
        value: string;
    };
    resize_contain: {
        key: string;
        value: string;
    };
    resize_stretch: {
        key: string;
        value: string;
    };
    resize_center: {
        key: string;
        value: string;
    };
    resize_repeat: {
        key: string;
        value: string;
    };
};
type ImageStyles = {
    [N in keyof typeof ImgMatcher as `${N}`]?: boolean;
};
export default ImageStyles;
