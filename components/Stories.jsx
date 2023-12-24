import faker from '@faker-js/faker';
import Story from '../components/Story'
import { useState,useEffect } from 'react';

export function Stories() {
    const [suggestions , setSuggestions] = useState([]);
    useEffect(() => {
        const suggestions = [...Array(20)].map((_,i)=>({
           avatar: avatar.image.avatar(),
            name : faker.name.firstName(),
            username : faker.internet.userName(),
            phone : faker.phone.number(),
            email : faker.internet.email(),
            id : i  
    }));
    setSuggestions(suggestions);
    },[]);

    return( 
    <div>
       {suggestions.map((profile)=>{
        <Story key={profile.id} image={profile.avatar} userName={profile.username}/>
       })}
    </div>);


}