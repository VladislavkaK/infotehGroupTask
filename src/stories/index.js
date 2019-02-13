import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Input from '../components/Input';
import IntegerInput from '../components/IntegerInput';
import FloatInput from '../components/FloatInput';
import SearchInput from '../components/SearchInput';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
));

storiesOf('Задание от Infotech Group', module)
        .add('1) Обычный инпут', () => <Input placeholder='simple input' />)
        .add('2) Инпут для целых чисел', () => <IntegerInput placeholder='number input' min={0} max={100} />)
        .add('3) Инпут для дробных чисел', () => <FloatInput placeholder='float number input' min={0} max={100.50} precision={2} />)
        .add('4) Инпут с иконкой поиска', () => <SearchInput />);
