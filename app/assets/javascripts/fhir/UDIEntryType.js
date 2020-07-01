const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const UDIEntryTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'UDIEntryType' },
  _type: { type: String, default: 'FHIR::UDIEntryType' },
});

class UDIEntryType extends mongoose.Document {
  constructor(object) {
    super(object, UDIEntryTypeSchema);
    this.typeName = 'UDIEntryType';
    this._type = 'FHIR::UDIEntryType';
  }
}

module.exports.UDIEntryTypeSchema = UDIEntryTypeSchema;
module.exports.UDIEntryType = UDIEntryType;
