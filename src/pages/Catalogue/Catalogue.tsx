import React from 'react';
import CatalogueView from '../../components/CatalogueView/CatalogueView';
import './Catalogue.css';

const Catalogue: React.FC = () => {
    return (
        <section className="catalogue">
            <h1>Catalogue</h1>
            <CatalogueView />
        </section>
    );
};

export default Catalogue;