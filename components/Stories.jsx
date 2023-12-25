
import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react';
import {Story} from './Story.jsx'

export default function Stories() {
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            avatar: faker.image.avatar(),
            username: faker.internet.userName(),
            phone: faker.phone.number(),
            email: faker.internet.email(),
            id: i
        }));
        setSuggestions(suggestions);
    }, []);
   

    return (
        <div>
          {suggestions.map(( profile) =>{
            <Story key={profile.id} img={profile.avatar} username={profile.username}/>
          })}

        </div>);


};



