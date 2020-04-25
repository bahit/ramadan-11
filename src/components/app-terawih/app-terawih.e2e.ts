import { newE2EPage } from '@stencil/core/testing';

describe('app-terawih', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-terawih></app-terawih>');

    const element = await page.find('app-terawih');
    expect(element).toHaveClass('hydrated');
  });
});
