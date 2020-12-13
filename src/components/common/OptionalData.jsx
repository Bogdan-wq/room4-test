import React from 'react';
import PropTypes from 'prop-types';
import Error from "../Error";
import Loading from "../Loading";
import NoItems from "../NoItems";


const OptionalData = (props) => {
    const {
        loading,
        error,
        data,
        children,
    } = props;

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <Error />
    }

    if(data && data.length === 0) {
        return <NoItems />
    }

    if(data) {
        return children(data);
    }

    return null;
}


OptionalData.propTypes = {
    loading:PropTypes.bool,
    error:PropTypes.bool,
    data:PropTypes.oneOfType([PropTypes.array,PropTypes.object]),
    children:PropTypes.func,
}

export default OptionalData;