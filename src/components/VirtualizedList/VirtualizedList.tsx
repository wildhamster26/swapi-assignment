import React from 'react';
import { FixedSizeList as List } from 'react-window';
import FigureCard from '../FigureCard/FigureCard';
import { Person } from '../../types';
import './VirtualizedList.css';

interface VirtualizedListProps {
    people: Person[];
    height: number;
    width: string | number;
    itemSize?: number;
    columnCount?: number;
}

const VirtualizedList: React.FC<VirtualizedListProps> = ({ people, height, width, itemSize = 150, columnCount = 1 }) => {
    const rowCount = Math.ceil(people.length / columnCount);
    
    return (
        <List
            height={height}
            itemCount={people.length}
            itemSize={itemSize}
            width={width}
            itemData={people}
        >
            {({ index, style }) => {
                const person = people[index];
                return (
                    <div style={style}>
                        <FigureCard
                            name={person.name}
                            birthYear={person.birth_year}
                            gender={person.gender}
                        />
                    </div>
                );
            }}
        </List>
    );
};

export default VirtualizedList;
