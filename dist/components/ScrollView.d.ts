import { ScrollViewProps } from 'react-native';
import BaseGlobalStyles from '../styles/types/BaseGlobalStyles';
interface GSScrollViewProps extends BaseGlobalStyles, ScrollViewProps {
}
declare const GSScrollView: (props: GSScrollViewProps) => any;
export default GSScrollView;
