import React from 'react';
import { render, screen } from '@testing-library/react';
import Testimonials from '../Testimonials';

describe('Testimonials', () => {
  it('renders the testimonials section title', () => {
    render(<Testimonials />);
    expect(screen.getByRole('heading', { name: /Avis de nos clients/i })).toBeInTheDocument();
  });
  it('renders at least one testimonial', () => {
    render(<Testimonials />);
    expect(screen.getAllByText(/Wild Arena|team building|birthday/i).length).toBeGreaterThan(0);
  });
});
