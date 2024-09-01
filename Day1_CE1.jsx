import React from 'react';


function compare() {
        const name1 = "Sheema";
        const name2 = "Sheema";

        const object1 = { name: "Sheema" };
        const object2 = { name: "Sheema" };

        console.log(name1 === name2);
        console.log(object1 === object2);
}

function A() {
    return (
        <div>
            <button onClick={compare()}>Compare</button>
        </div>
    );
}

export default A;