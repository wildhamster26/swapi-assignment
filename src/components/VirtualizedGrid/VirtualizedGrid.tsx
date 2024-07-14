import React from 'react';
import { VariableSizeGrid as Grid } from 'react-window';
import FigureCard from '../FigureCard/FigureCard';
import { Person } from '../../types';
import './VirtualizedGrid.css';

interface VirtualizedGridProps {
    people: Person[];
    height: number;
    width: number;
    columnCount: number;
}

const VirtualizedGrid: React.FC<VirtualizedGridProps> = ({ people, height, width, columnCount }) => {
    const rowCount = Math.ceil(people.length / columnCount);
    const itemSize = Math.floor(width / columnCount);

    return (
        <Grid
            columnCount={columnCount}
            columnWidth={() => itemSize}
            height={height}
            rowCount={rowCount}
            rowHeight={() => itemSize}
            width={width}
        >
            {({ columnIndex, rowIndex, style }) => {
                const index = rowIndex * columnCount + columnIndex;
                if (index >= people.length) {
                    return null;
                }
                const person = people[index];
                return (
                    <div style={style} className="virtualized-grid-item">
                        <FigureCard
                            name={person.name}
                            birthYear={person.birth_year}
                            gender={person.gender}
                            // Add other necessary props here
                        />
                    </div>
                );
            }}
        </Grid>
    );
};

export default VirtualizedGrid;
