import { newE2EPage } from '@stencil/core/testing';

describe('app-witir', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-witir></app-witir>');

    const element = await page.find('app-witir');
    expect(element).toHaveClass('hydrated');
  });
});
