export interface IData {
  phone?: string;
  email?: string;
  nickname?: string;
  name?: string;
  sername?: string;
  gender?: { label: string; value: string };
  advantages?: string[];
  checkbox?: string[];
  radio?: string;
  about?: string;
}

export interface FormState {
  activeStep: number;
  steps: {
    id: number;
    title: string;
    isDone: boolean;
  }[];
  data: IData;
}
