import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DashboardPage from './page';
import { describe, it, expect } from 'vitest';

describe('DashboardPage', () => {
  it('renders without crashing', () => {
    render(<DashboardPage />);
    
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });
}); 