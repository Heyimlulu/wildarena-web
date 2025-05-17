import React from 'react';
import { render, screen } from '@testing-library/react';
import GameModes from '../GameModes';

describe('GameModes', () => {
  it('renders the section title', () => {
    render(<GameModes />);
    expect(screen.getByRole('heading', { name: /Modes de jeu/i })).toBeInTheDocument();
  });
  it('renders all game mode cards', () => {
    render(<GameModes />);
    // There are 4 game modes in the data array
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThanOrEqual(4);
  });
});
