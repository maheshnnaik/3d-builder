import Dexie, { type Table } from 'dexie';
import type { HouseProject } from '@/types/model';

export interface ProjectRecord {
  id: string;
  name: string;
  updatedAt: string;
  createdAt: string;
  floorCount: number;
  data: HouseProject;
}

class HouseDatabase extends Dexie {
  projects!: Table<ProjectRecord, string>;

  constructor() {
    super('homecraft-3d');
    this.version(1).stores({ projects: 'id, name, updatedAt' });
  }
}

export const db = new HouseDatabase();
