import { newSpecPage } from '@stencil/core/testing';
import { AppEssential } from './app-essential';

describe('app-essential', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppEssential],
      html: `<app-essential></app-essential>`,
    });
    expect(page.root).toEqualHtml(`
      <app-essential>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-essential>
    `);
  });
});
