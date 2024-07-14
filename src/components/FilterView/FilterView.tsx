import React, { useState, useContext } from 'react';
import { PeopleContext } from '../../contexts/PeopleContext';
import FigureCard, { FigureCardProps } from '../FigureCard/FigureCard';
import FilterForm from '../FilterForm/FilterForm';
import './FilterView.css';
import Loader from '../Loader/Loader';

const FilterView: React.FC = () => {
    const { people, loading, error } = useContext(PeopleContext);
    const [filters, setFilters] = useState({ name: '', birthYear: '', gender: '' });
    const handleFilterChange = (newFilters: FigureCardProps) => {
        setFilters(newFilters);
    };

    const filteredPeople = people.filter((person) => {
        return (
            (filters.name === '' || person.name.toLowerCase().includes(filters.name.toLowerCase())) &&
            (filters.birthYear === '' || person.birth_year === filters.birthYear) &&
            (filters.gender === '' || person.gender === filters.gender)
        );
    });

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div className="error">Error loading data</div>;
    }

    return (
        <section className="filter-view">
            <FilterForm onFilterChange={handleFilterChange} />
            <div className="filter-view__count">Matching Figures: {filteredPeople.length}</div>
            <div className="filter-view__results">
                {filteredPeople.map((person) => (
                    <FigureCard
                        key={person.name}
                        name={person.name}
                        birthYear={person.birth_year}
                        gender={person.gender}
                    />
                ))}
            </div>
        </section>
    );
};

export default FilterView;