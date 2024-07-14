import React from 'react';
import './FigureCard.css';

export interface FigureCardProps {
    name: string;
    birthYear: string;
    gender: string;
}

const FigureCard: React.FC<FigureCardProps> = ({ name, birthYear, gender }) => {
    return (
        <article className="figure-card">
            <h2>{name}</h2>
            <p>Birth Year: {birthYear}</p>
            <p>Gender: {gender}</p>
        </article>
    );
};

export default FigureCard;