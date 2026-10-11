import { describe, expect, it } from 'vitest';
import { serviceGroups } from '@/lib/barber-services';

describe('Preços da tabela oficial em MZN', () => {
  const expected = [
    [500, 600, 200, 250, 150, 100, 50, 150, 150],
    [50, 50, 100, 500, 350, 100],
    [300],
  ];
  expected.forEach((prices, group) => {
    prices.forEach((price, row) => {
      it(`preserva o preço do grupo ${group}, linha ${row}: ${price} MZN`, () => {
        expect(serviceGroups[group]?.items[row]?.price).toBe(price);
      });
    });
  });
});