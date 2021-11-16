/* eslint-disable no-undef */
import ErrorRepository from '../js/app';

test('Существующая ошибка', () => {
  const newError = new ErrorRepository();
  const received = newError.translate(444);
  expect(received).toEqual('Ошибка доступа');
});

test('ошибка не существует', () => {
  const newError = new ErrorRepository();
  const received = newError.translate(666);
  expect(received).toEqual('Unknown error');
});
