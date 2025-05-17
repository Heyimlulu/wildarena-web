import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Newsletter from '../Newsletter';

describe('Newsletter', () => {
  it('renders the newsletter input', () => {
    render(<Newsletter />);
    expect(screen.getByPlaceholderText(/adresse e-mail/i)).toBeInTheDocument();
  });

});
