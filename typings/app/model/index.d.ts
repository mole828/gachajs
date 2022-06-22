// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDoctor from '../../../app/model/doctor';
import ExportGacha from '../../../app/model/gacha';

declare module 'egg' {
  interface IModel {
    Doctor: ReturnType<typeof ExportDoctor>;
    Gacha: ReturnType<typeof ExportGacha>;
  }
}
