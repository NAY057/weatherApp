import React from 'react';
import PropTypes from 'prop-types';
import {LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';

const ForecastChart = ({data}) => {
    return (
        <ResponsiveContainer height={250} width={"95%"}>
            <LineChart data={data}  margin={{top:20, botton: 20, left: 5, right: 5 }}>
                <Tooltip></Tooltip>
                <XAxis dataKey='dayHour'></XAxis>
                <YAxis></YAxis>
                <CartesianGrid></CartesianGrid>
                <Legend></Legend>
                <Line type='monotone' dataKey='max' stroke='#FF0000'></Line>
                <Line type='monotone' dataKey='min' stroke='#0000FF'></Line>
            </LineChart>
        </ResponsiveContainer>
    );
};

ForecastChart.propTypes = {
    // ptaor
    data: PropTypes.arrayOf(
        // ptsh
        PropTypes.shape({
            dayHour: PropTypes.string.isRequired,
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired,
        }),
    ).isRequired,
}

export default ForecastChart;