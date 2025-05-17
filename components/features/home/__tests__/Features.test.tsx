import React from 'react';
import { render, screen } from '@testing-library/react';
import Features from '../Features';

describe('Features', () => {
  it('renders the section title', () => {
    render(<Features />);
    expect(screen.getByRole('heading', { name: /Pourquoi choisir Wild Arena/i })).toBeInTheDocument();
  });
  it('renders all feature cards', () => {
    render(<Features />);
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3);
  });
});
