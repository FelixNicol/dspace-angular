import { FormFieldModel } from '../models/form-field.model';
import { FormFieldMetadataValueObject } from '../models/form-field-metadata-value.model';
import { LookupFieldParser } from './lookup-field-parser';

export class LookupNameFieldParser extends LookupFieldParser {

  constructor(protected configData: FormFieldModel,
              protected initFormValues,
              protected readOnly: boolean,
              protected authorityUuid: string) {
    super(configData, initFormValues, readOnly, authorityUuid);
  }

  public modelFactory(fieldValue: FormFieldMetadataValueObject | any): any {
    const lookupModel = super.modelFactory(fieldValue);
    lookupModel.separator = ',';
    lookupModel.placeholder = 'submission.sections.form.last_name';
    lookupModel.placeholder2 = 'submission.sections.form.first_name';
    return lookupModel;

  }
}
