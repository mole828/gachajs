// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDoctor from '../../../app/model/doctor';

declare module 'egg' {
  interface IModel {
    Doctor: ReturnType<typeof ExportDoctor>;
  }
}
