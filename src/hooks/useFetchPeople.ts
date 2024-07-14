import { useState, useEffect } from 'react';
import { Person } from '../types';

const useFetchPeople = () => {
    const [people, setPeople] = useState<Person[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                let allPeople: Person[] = [];
                let nextUrl = 'https://swapi.dev/api/people/?format=json';

                while (nextUrl) {
                    const response = await fetch(nextUrl);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    allPeople = allPeople.concat(data.results);
                    nextUrl = data.next;
                }

                setPeople(allPeople);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch people');
                setLoading(false);
            }
        };

        fetchPeople();
    }, []);

    return { people, loading, error };
};

export default useFetchPeople;
