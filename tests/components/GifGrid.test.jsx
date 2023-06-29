import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
  const catergory = 'One Punch';

  test('debe de mostrar el loading al inicio', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render(<GifGrid category={catergory} />);

    expect(screen.getByText('Loading...'));
    expect(screen.getByText(catergory));
  });

  test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    const gifs = [
      { id: 'ABC', title: 'Saitama', url: 'https://algo.com/imagen.jpg' },
      { id: '12', title: 'Goku', url: 'https://algo.com/imagen.jpg' }
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render(<GifGrid category={catergory} />);

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
