import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';
import { GifGrid } from '../src/components';

describe('Pruebas en GifExpertApp', () => {
  test('Debe renderizar correctamente el componente', () => {
    render(<GifExpertApp />);

    const headingElement = screen.getByText('GifExpertApp');

    expect(headingElement).toBeTruthy();
  });

  test('No debe agregar una categoria duplicada', () => {
    render(<GifExpertApp />);
    const inputElement = screen.getByRole('textbox');
    const addButtonElement = screen.getByRole('button', { name: 'Agregar' });

    fireEvent.change(inputElement, { target: { value: 'One Punch' } });
    fireEvent.click(addButtonElement);

    const categoryElements = screen.getAllByRole('heading', { level: 3 });
    expect(categoryElements.length).toBe(1);
  });

  test('Debe agregar una nueva categoria', () => {
    render(<GifExpertApp />);
    const inputElement = screen.getByRole('textbox');
    const addButtonElement = screen.getByRole('button', { name: 'Agregar' });

    fireEvent.change(inputElement, { target: { value: 'Naruto' } });
    fireEvent.click(addButtonElement);

    const categoryElement = screen.getByText('Naruto');
    expect(categoryElement).toBeTruthy();
  });
});
