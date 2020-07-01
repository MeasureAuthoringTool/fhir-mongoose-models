const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const FHIRDefinedTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'FHIRDefinedType' },
  _type: { type: String, default: 'FHIR::FHIRDefinedType' },
});

class FHIRDefinedType extends mongoose.Document {
  constructor(object) {
    super(object, FHIRDefinedTypeSchema);
    this.typeName = 'FHIRDefinedType';
    this._type = 'FHIR::FHIRDefinedType';
  }
}

module.exports.FHIRDefinedTypeSchema = FHIRDefinedTypeSchema;
module.exports.FHIRDefinedType = FHIRDefinedType;
