import Dexie from 'dexie';
import {IClass} from '../interfaces/core';
import { Injectable } from '@angular/core';
import { DexieService } from './dexie.service';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  table: Dexie.Table<IClass, number>;

  constructor(private dexieService: DexieService) {
    this.table = this.dexieService.table('class');
  }

  getAll(): Promise<IClass[]> {
    return this.table.toArray();
  }

  add(data: IClass): Promise<number> {
    return this.table.add(data);
  }

  update(id: number, data: IClass): Promise<number> {
    return this.table.update(id, data);
  }

  remove(id: number): Promise<void> {
    return this.table.delete(id);
  }
}
