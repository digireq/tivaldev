import { BaseDoc } from "src/models/BaseDoc";
import { IOption } from 'src/models/Option/IOption';

export class OptionModel extends BaseDoc implements IOption {
  price: number;
  name: string;
  get: () => Promise<IOption>;
}