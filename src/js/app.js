export default class ErrorRepository {
  constructor() {
    this.map = new Map([
      [444, 'Ошибка доступа'],
      [222, 'Потеря соединения'],
    ]);
  }

  translate(code) {
    if (this.map.has(code)) {
      return this.map.get(code);
    }
    return 'Unknown error';
  }
}
