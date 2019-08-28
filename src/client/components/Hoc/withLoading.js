import ClipLoader from 'react-spinners/ClipLoader';
import { SECONDARY_COLOR } from '../../styles/constant';

export default (BaseComponent, isLoading = (props) => props.loading) => props => {
//	const loading = isLoading ? isLoading(props) : props.loading;
	return isLoading(props) ? <ClipLoader
		sizeUnit={"px"}
		size={150}
		color={SECONDARY_COLOR}
		loading={true}
	/> : <BaseComponent {...props} />
};
