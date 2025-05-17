import React from 'react';
import { render, screen } from '@testing-library/react';
import Gallery from '../Gallery';

describe('Gallery', () => {
  it('renders the gallery section', () => {
    render(<Gallery />);
    expect(screen.getByRole('region')).toBeInTheDocument();
  });
  it('renders the video element', () => {
    render(<Gallery />);
    expect(screen.getByLabelText(/featured wild arena video/i)).toBeInTheDocument();
  });
});
