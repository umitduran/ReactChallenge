import React from 'react';

const List = props => (

    <ul>
        {props.items.map((item, key) => (
            <li key={key}>
                {item.value}
                <div className='actions'>
                    <span onClick={() => props.onClick()}></span>
                </div>

            </li>
        ))}
    </ul>
)
