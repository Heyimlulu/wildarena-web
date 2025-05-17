import React from 'react';
import { render, screen } from '@testing-library/react';
import CorporateEvents from '../CorporateEvents';

describe('CorporateEvents', () => {
  it('renders the section heading', () => {
    render(<CorporateEvents />);
    expect(screen.getByRole('heading', { name: /votre équipe/i })).toBeInTheDocument();
  });
  it('renders the reservation link', () => {
    render(<CorporateEvents />);
    expect(screen.getByRole('link', { name: /réservez votre événement/i })).toBeInTheDocument();
  });
});
