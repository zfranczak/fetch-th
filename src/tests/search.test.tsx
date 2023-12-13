import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../components/Search';

describe('Search Component', () => {
  it('selects each breed in the dropdown menu', () => {
    render(<Search />);

    const breedsDropdown = screen.getByLabelText('Breeds') as HTMLSelectElement;

    for (let i = 0; i < breedsDropdown.options.length; i++) {
      fireEvent.change(breedsDropdown, {
        target: { value: breedsDropdown.options[i].value },
      });

      expect(breedsDropdown.value).toBe(breedsDropdown.options[i].value);
    }
  });
});
