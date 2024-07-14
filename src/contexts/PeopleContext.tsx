import React, { createContext, ReactNode } from 'react';
import useFetchPeople from '../hooks/useFetchPeople';
import { Person } from '../types';

export interface PeopleContextProps {
    people: Person[];
    loading: boolean;
    error: string | null;
}

const PeopleContext = createContext<PeopleContextProps>({
    people: [],
    loading: true,
    error: null,
});

const PeopleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { people, loading, error } = useFetchPeople();

    return (
        <PeopleContext.Provider value={{ people, loading, error }}>
            {children}
        </PeopleContext.Provider>
    );
};

export { PeopleContext, PeopleProvider };