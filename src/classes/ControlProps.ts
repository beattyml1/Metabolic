import Events from './Events';
import FieldMetaData from './FieldMetaData';
export default class ControlProps {
  value: any;
  events: Events;
  metaData: FieldMetaData;
  parentId: string;
  inputId: string;
  type: string;
  options: Array<any>;
  hlevel: number;
  actions: Array<any>;
}
