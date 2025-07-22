const AlignMatcher = {
    'align_start': { key: 'alignItems', value: 'flex-start' },
    'align_end': { key: 'alignItems', value: 'flex-start' }
};
const AlignSMatcher = {
    'alignSelf_start': { key: 'alignSelf', value: 'flex-start' },
    'alignSelf_end': { key: 'alignSelf', value: 'flex-start' }
};
const JustifyMatcher = {
    'justify_start': { key: 'justifyContent', value: 'flex-start' },
    'justify_end': { key: 'justifyContent', value: 'flex-start' }
};
const FMatcher = {
    'flex': { key: 'flex', value: 1 },
    'flexGrow': { key: 'flexGrow', value: 1 },
    'column': { key: 'flexDirection', value: 'column' },
    'row': { key: 'flexDirection', value: 'row' },
    'wrap': { key: 'flexWrap', value: 'wrap' },
    'nowrap ': { key: 'flexWrap', value: 'nowrap' },
};
export const FlexMatcher = Object.assign(Object.assign(Object.assign(Object.assign({}, FMatcher), AlignMatcher), JustifyMatcher), AlignSMatcher);
