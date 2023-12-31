import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en GifItem', () => {
  const title = 'Saitama';
  const url = 'https://algo.com/imagen.jpg';

  test('debe de hacer match con el snapshoot', () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar la imagen con el url y alt correspondiente', () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    const { src, alt } = screen.getByRole('img');

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('debe de mostrar el titulo en el componente', () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
