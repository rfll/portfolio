import { render } from "@testing-library/react";
import Projects from "@/components/Projects"
import "@testing-library/jest-dom";
import { useInView } from 'react-intersection-observer';

jest.mock('react-intersection-observer', () => ({
  __esModule: true,
  useInView: jest.fn(),
}));

test('renders Projects component without errors', () => {
  useInView.mockReturnValue([{}, true]);

  render(<Projects />);
});
