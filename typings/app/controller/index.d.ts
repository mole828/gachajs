// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArk from '../../../app/controller/ark';

declare module 'egg' {
  interface IController {
    ark: ExportArk;
  }
}
