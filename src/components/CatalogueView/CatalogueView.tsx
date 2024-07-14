import React, { useContext, useState } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { PeopleContext } from '../../contexts/PeopleContext';
import Loader from '../Loader/Loader';
import VirtualizedList from '../VirtualizedList/VirtualizedList';
import VirtualizedGrid from '../VirtualizedGrid/VirtualizedGrid';
import Switch from '../Switch/Switch';
import './CatalogueView.css';

const CatalogueView: React.FC = () => {
    const { people, loading, error } = useContext(PeopleContext);
    const [isGridView, setIsGridView] = useState(true);
    const columnCount = 4;

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div className="error">Error loading data</div>;
    }

    return (
        <section className="catalogue-view">
            <Switch label="Grid / List" isChecked={isGridView} toggleView={() => setIsGridView(!isGridView)} />
            <div className="grid-container">
                <AutoSizer>
                    {({ height, width }: {height: number, width: number}) => (
                        isGridView ? (
                            <VirtualizedGrid
                                people={people}
                                height={height}
                                width={width}
                            />
                        ) : (
                            <VirtualizedList
                                people={people}
                                height={height}
                                width={width}
                            />
                        )
                    )}
                </AutoSizer>
            </div>
        </section>
    );
};

export default CatalogueView;
