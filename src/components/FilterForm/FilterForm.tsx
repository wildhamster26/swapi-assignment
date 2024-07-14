import React, { useState } from 'react';
import { FigureCardProps } from '../FigureCard/FigureCard';
import './FilterForm.css';

interface FilterFormProps {
    onFilterChange: (filters: FigureCardProps) => void;
}

const FilterForm: React.FC<FilterFormProps> = ({ onFilterChange }) => {
    const [name, setName] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onFilterChange({ name, birthYear, gender });
    };

    return (
        <form className="filter-form" onSubmit={handleSubmit}>
            <div className="filter-form__group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="filter-form__group">
                <label htmlFor="birthYear">Birth Year:</label>
                <input
                    type="text"
                    id="birthYear"
                    value={birthYear}
                    onChange={(e) => setBirthYear(e.target.value)}
                />
            </div>
            <div className="filter-form__group">
                <label htmlFor="gender">Gender:</label>
                <select
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="n/a">N/A</option>
                </select>
            </div>
            <button type="submit" className="filter-form__submit">Apply Filters</button>
        </form>
    );
};

export default FilterForm;
