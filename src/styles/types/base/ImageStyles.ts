
const ImgMatcher = {
  resize_cover:      { key: 'resizeMode', value: 'cover' },
  resize_contain:    { key: 'resizeMode', value: 'contain' },
  resize_stretch:    { key: 'resizeMode', value: 'stretch' },
  resize_center:     { key: 'resizeMode', value: 'center' },
  resize_repeat:     { key: 'resizeMode', value: 'repeat' },
};

export const ImageMatcher = {
    ...ImgMatcher,
}

type ImageStyles = {
    [N in keyof typeof ImgMatcher as `${N}`]?: boolean
}

export default ImageStyles;