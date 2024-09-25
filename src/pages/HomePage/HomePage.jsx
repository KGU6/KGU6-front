import React from 'react';
import {styled} from 'styled-components';
import GoogleMap from './GoogleMap';

const HomePage = () => {
    

    return (
        <>
            <Container>
                <GoogleMap/>
            </Container>
        </>
    );
};

export default HomePage;

const Container = styled.div`
    
`
