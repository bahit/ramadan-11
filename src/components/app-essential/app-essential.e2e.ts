import { newE2EPage } from '@stencil/core/testing';

describe('app-essential', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-essential></app-essential>');

    const element = await page.find('app-essential');
    expect(element).toHaveClass('hydrated');
  });
});
