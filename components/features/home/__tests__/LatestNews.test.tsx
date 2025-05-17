import { render, screen } from '@testing-library/react';
import { LatestNews } from '../LatestNews';

describe('LatestNews', () => {
  it('renders the blog section title', async () => {
    render(await LatestNews());
    expect(screen.getByRole('heading', { name: /blog/i })).toBeInTheDocument();
  });
});
