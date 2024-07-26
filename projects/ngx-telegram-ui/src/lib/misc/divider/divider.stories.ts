import type { Meta, StoryObj } from '@storybook/angular';
import { DividerComponent } from './divider.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<DividerComponent> = {
  title: 'Misc/Divider',
  component: DividerComponent,
  tags: ['autodocs'],
  argTypes: {
    class: {
      control: 'text',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

export default meta;
type Story = StoryObj<DividerComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    class: 'divider--primary',
  },
};
