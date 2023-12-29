
import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react';
import Story from './Story';

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
        <div className='flex pt-5 p-5 overflow-x-scroll scrollbar-thumb-black space-x-2 scrollbar-thin bg-white sticky rounded-sm border-gray-300 cursor-pointer'>
          {suggestions.map(( profile) =>{
            return(
            <Story key={profile.id} img={profile.avatar} username={profile.username}/>
         ) })}

        </div>);


};



