import { newSpecPage } from '@stencil/core/testing';
import { AppWitir } from './app-witir';

describe('app-witir', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppWitir],
      html: `<app-witir></app-witir>`,
    });
    expect(page.root).toEqualHtml(`
      <app-witir>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-witir>
    `);
  });
});
