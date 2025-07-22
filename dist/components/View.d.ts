import { ViewProps } from 'react-native';
import BaseGlobalStyles from '../styles/types/BaseGlobalStyles';
interface GSViewProps extends BaseGlobalStyles, ViewProps {
}
declare const GSView: (props: GSViewProps) => any;
export default GSView;
