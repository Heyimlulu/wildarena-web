import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { name: /Le Laser Game Réinventé/i })).toBeInTheDocument();
  });
  it('renders the reservation button', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: /réserver maintenant/i })).toBeInTheDocument();
  });
});
