import React, {PropTypes} from 'react';

const Field = () => (




	);


Field.PropTypes = {

 onChange: PropTypes.func.isRequired,
 value: PropTypes.string.isRequired,
 textarea: PropTypes.bool.isRequired,


};

Field.defaultProps = {

	textarea: false,



};



	export default Field;