import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'
// import  Typography  from '@mui/material';
import'typeface-roboto'

const CityInfo = ({city,country}) => {
    return (
        
        
            <>
             {/* {`${city}, ${country}`} */}
            <Typography display="inline" variant="h4">{city}, </Typography>
            <Typography display="inline" variant="h6">{country}</Typography>
            </>
    
    );
};

CityInfo.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
};

export default CityInfo;
 