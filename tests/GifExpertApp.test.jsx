import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en <GifExpertApp />', () => {

    test('se renderiza sin ningún problema. ', () => {
        render(  <GifExpertApp />);
    });

});