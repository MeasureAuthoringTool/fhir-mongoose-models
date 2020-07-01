const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const SpecimenStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'SpecimenStatus' },
  _type: { type: String, default: 'FHIR::SpecimenStatus' },
});

class SpecimenStatus extends mongoose.Document {
  constructor(object) {
    super(object, SpecimenStatusSchema);
    this.typeName = 'SpecimenStatus';
    this._type = 'FHIR::SpecimenStatus';
  }
}

module.exports.SpecimenStatusSchema = SpecimenStatusSchema;
module.exports.SpecimenStatus = SpecimenStatus;
