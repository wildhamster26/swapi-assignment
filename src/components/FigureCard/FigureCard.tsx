import React from 'react';
import './FigureCard.css';

interface FigureCardProps {
    name: string;
    birthYear: string;
    gender: string;
}

const FigureCard: React.FC<FigureCardProps> = ({ name, birthYear, gender }) => {
    return (
        <article className="figure-card">
            <h2 className="figure-card__name">{name}</h2>
            <p className="figure-card__birth-year">Birth Year: {birthYear}</p>
            <p className="figure-card__gender">Gender: {gender}</p>
        </article>
    );
};

export default FigureCard;