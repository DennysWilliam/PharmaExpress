import { IIsOpened } from '@/screens/Home/Home';

import { PHARMACYS } from './pharmacy ';

interface IScheduling {
  [value: number]: Array<{
    [num: number]: IIsOpened;
  }>;
}

const FARMACIA_TESTE_1 = PHARMACYS[0];
const FARMACIA_TESTE_2 = PHARMACYS[1];
const FARMACIA_TESTE_3 = PHARMACYS[2];
const FARMACIA_TESTE_4 = PHARMACYS[3];
const FARMACIA_TESTE_5 = PHARMACYS[4];
const FARMACIA_TESTE_6 = PHARMACYS[5];
const FARMACIA_TESTE_7 = PHARMACYS[0];
const FARMACIA_TESTE_8 = PHARMACYS[1];
const FARMACIA_TESTE_9 = PHARMACYS[2];
const FARMACIA_TESTE_10 = PHARMACYS[3];
const FARMACIA_TESTE_11 = PHARMACYS[4];
const FARMACIA_TESTE_12 = PHARMACYS[5];

export const SCHEDULING: IScheduling = {
  3: [
    {
      2: FARMACIA_TESTE_4,
      3: FARMACIA_TESTE_4,
      9: FARMACIA_TESTE_5,
      10: FARMACIA_TESTE_5,
      16: FARMACIA_TESTE_6,
      17: FARMACIA_TESTE_6,
      23: FARMACIA_TESTE_1,
      24: FARMACIA_TESTE_1,
      29: FARMACIA_TESTE_2,
      30: FARMACIA_TESTE_3,
      31: FARMACIA_TESTE_3,
    },
  ],
  4: [
    {
      6: FARMACIA_TESTE_4,
      7: FARMACIA_TESTE_4,
      13: FARMACIA_TESTE_5,
      14: FARMACIA_TESTE_5,
      20: FARMACIA_TESTE_6,
      21: FARMACIA_TESTE_6,
      27: FARMACIA_TESTE_1,
      28: FARMACIA_TESTE_1,
    },
  ],
  5: [
    {
      1: FARMACIA_TESTE_2,
      4: FARMACIA_TESTE_3,
      5: FARMACIA_TESTE_3,
      7: FARMACIA_TESTE_4,
      11: FARMACIA_TESTE_5,
      12: FARMACIA_TESTE_5,
      18: FARMACIA_TESTE_6,
      19: FARMACIA_TESTE_6,
      25: FARMACIA_TESTE_1,
      26: FARMACIA_TESTE_1,
      30: FARMACIA_TESTE_2,
    },
  ],
  6: [
    {
      1: FARMACIA_TESTE_3,
      2: FARMACIA_TESTE_3,
      8: FARMACIA_TESTE_4,
      9: FARMACIA_TESTE_4,
      15: FARMACIA_TESTE_5,
      16: FARMACIA_TESTE_5,
      22: FARMACIA_TESTE_6,
      23: FARMACIA_TESTE_6,
      29: FARMACIA_TESTE_1,
      30: FARMACIA_TESTE_1,
    },
  ],
  7: [
    {
      6: FARMACIA_TESTE_2,
      7: FARMACIA_TESTE_2,
      13: FARMACIA_TESTE_3,
      14: FARMACIA_TESTE_3,
      20: FARMACIA_TESTE_4,
      21: FARMACIA_TESTE_4,
      27: FARMACIA_TESTE_5,
      28: FARMACIA_TESTE_5,
    },
  ],
  8: [
    {
      3: FARMACIA_TESTE_6,
      4: FARMACIA_TESTE_6,
      10: FARMACIA_TESTE_1,
      11: FARMACIA_TESTE_1,
      17: FARMACIA_TESTE_2,
      18: FARMACIA_TESTE_2,
      24: FARMACIA_TESTE_3,
      25: FARMACIA_TESTE_3,
      30: FARMACIA_TESTE_4,
    },
  ],
  9: [
    {
      1: FARMACIA_TESTE_4,
      7: FARMACIA_TESTE_5,
      8: FARMACIA_TESTE_5,
      14: FARMACIA_TESTE_6,
      15: FARMACIA_TESTE_6,
      21: FARMACIA_TESTE_1,
      22: FARMACIA_TESTE_1,
      28: FARMACIA_TESTE_2,
      29: FARMACIA_TESTE_2,
    },
  ],
  10: [
    {
      5: FARMACIA_TESTE_3,
      6: FARMACIA_TESTE_3,
      12: FARMACIA_TESTE_4,
      13: FARMACIA_TESTE_4,
      19: FARMACIA_TESTE_5,
      20: FARMACIA_TESTE_5,
      26: FARMACIA_TESTE_6,
      27: FARMACIA_TESTE_6,
    },
  ],
  11: [
    {
      2: FARMACIA_TESTE_1,
      3: FARMACIA_TESTE_1,
      9: FARMACIA_TESTE_2,
      10: FARMACIA_TESTE_2,
      15: FARMACIA_TESTE_3,
      16: FARMACIA_TESTE_4,
      17: FARMACIA_TESTE_4,
      20: FARMACIA_TESTE_5,
      22: FARMACIA_TESTE_6,
      23: FARMACIA_TESTE_6,
      30: FARMACIA_TESTE_1,
    },
  ],
  12: [
    {
      1: FARMACIA_TESTE_1,
      7: FARMACIA_TESTE_2,
      8: FARMACIA_TESTE_2,
      14: FARMACIA_TESTE_3,
      15: FARMACIA_TESTE_3,
      21: FARMACIA_TESTE_4,
      22: FARMACIA_TESTE_4,
      25: FARMACIA_TESTE_5,
      28: FARMACIA_TESTE_6,
      29: FARMACIA_TESTE_6,
    },
  ],
};
