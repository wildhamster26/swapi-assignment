import React from 'react';
import FilterView from '../../components/FilterView/FilterView';
import './Filter.css';

const Filter: React.FC = () => {
    return (
        <section className="filter">
            <h1>Filter</h1>
            <FilterView />
        </section>
    );
};

export default Filter;