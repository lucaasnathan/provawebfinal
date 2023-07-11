import React from 'react';
import Title from './../components/Title/index';
import Card from './../components/Card/index';

function Home() {
    return (
        <div>
            <Title
                title={"biblioteca"}
                text={"Filmes Disponíveis"} />
            {/* <Title title=""/> */}
            <Card />
        </div>
    )
}
export default Home;