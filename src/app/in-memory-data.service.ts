import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      {id: 1, manufacturer: 'Zeiss', name: 'Lentila', description: 'Lentila',
        category: 'LENTILA', quantity: 10, price: 200},
      {id: 2, manufacturer: 'Zeiss', name: 'Lentila', description: 'Lentila',
        category: 'LENTILA', quantity: 10, price: 200},
      {id: 3, manufacturer: 'Zeiss', name: 'Lentila', description: 'Lentila',
        category: 'LENTILA', quantity: 10, price: 200},
      {id: 4, manufacturer: 'Zeiss', name: 'Lentila', description: 'Lentila',
        category: 'LENTILA', quantity: 10, price: 200},
      {id: 5, manufacturer: 'Zeiss', name: 'Lentila', description: 'Lentila',
        category: 'LENTILA', quantity: 10, price: 200},
      {id: 6, manufacturer: 'Zeiss', name: 'Lentila', description: 'Lentila',
        category: 'LENTILA', quantity: 10, price: 200},
      {id: 7, manufacturer: 'Zeiss', name: 'Lentila', description: 'Lentila',
        category: 'LENTILA', quantity: 10, price: 200},
      {id: 8, manufacturer: 'Zeiss', name: 'Lentila', description: 'Lentila',
        category: 'LENTILA', quantity: 10, price: 200},
    ];
    return (items);
  }
}
