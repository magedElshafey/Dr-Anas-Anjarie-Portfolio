export interface BaseProcedure {
  id: number;
  name: string;
  slug: string;
  image?: string | null;
  icon?: string;
}

export interface Procedure extends BaseProcedure {
  description: string;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface ProcedureListType extends BaseProcedure {
  children?: ProcedureListType[];
}
