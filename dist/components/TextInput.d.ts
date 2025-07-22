import { TextProps } from 'react-native';
import TextGlobalStyles from '../styles/types/TextGlobalStyles';
interface GSTextProps extends TextGlobalStyles, TextProps {
}
declare const GSText: (props: GSTextProps) => any;
export default GSText;
