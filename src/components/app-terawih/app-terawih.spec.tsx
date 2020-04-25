import { newSpecPage } from '@stencil/core/testing';
import { AppTerawih } from './app-terawih';

describe('app-terawih', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppTerawih],
      html: `<app-terawih></app-terawih>`,
    });
    expect(page.root).toEqualHtml(`
      <app-terawih>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-terawih>
    `);
  });
});
