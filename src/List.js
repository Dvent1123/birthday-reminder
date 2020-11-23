import React from 'react';

//had to destructure people coming from data to 
//get the data inside of that
const List = ({people}) => {
        return (
        <> 
            {people.map((person) => {
                //then must destrucutre person bc that is also
                ///coming from an object
                const {id, name, age, image} = person
            return <article key={id} className='person'>
                <img src={image} alt={name}/>
                <div>
                    <h4>{name}</h4>
                    <p>{age} years</p>
                </div>
            </article>
            })}
        </>
        );
};

export default List;