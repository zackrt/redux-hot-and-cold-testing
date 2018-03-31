import React from 'react';

import { shallow } from 'enzyme';

import { 
    GENERATE_AURAL_UPDATE,
    generateAuralUpdate,
    RESTART_GAME,
    restartGame,
    MAKE_GUESS,
    makeGuess
    } from './actions.js';

describe ('restartGame', () => {
    it('Should return the action', () => {
        const correctAnswer = 10;
        const action = restartGame(correctAnswer);
        expect(action.type).toEqual(RESTART_GAME);
        expect(action.correctAnswer).toEqual(correctAnswer);
    });
});

describe('makeGuess', () => {
    it('Should return the action', () => {
        const guess = 10;
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    });
});

describe('generateAuralUpdat', () => {
    it('Should return the action', () => {
        const action = generateAuralUpdate();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    });
});