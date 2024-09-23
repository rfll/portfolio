import { render } from "@testing-library/react";
import IndividualProject from "@/components/IndividualProject"
import "@testing-library/jest-dom";
import { useInView } from 'react-intersection-observer';

jest.mock('react-intersection-observer', () => ({
  __esModule: true,
  useInView: jest.fn(),
}));

test('renders Individual Project component without errors', () => {
  useInView.mockReturnValue([{}, true]);

  render(<IndividualProject />);
});
