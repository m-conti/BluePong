import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { SECONDARY_COLOR } from '../../styles/constant';

const style = {
	margin: 'auto',

};

export default (BaseComponent, isLoading = (props) => props.loading) => props => {
//	const loading = isLoading ? isLoading(props) : props.loading;
	return isLoading(props) ? <div style={style}><ClipLoader
		sizeUnit={"px"}
		size={150}
		color={SECONDARY_COLOR}
		loading={true}
	/></div> : <BaseComponent {...props} />
};
