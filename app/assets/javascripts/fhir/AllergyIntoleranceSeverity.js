const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const AllergyIntoleranceSeveritySchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'AllergyIntoleranceSeverity' },
  _type: { type: String, default: 'FHIR::AllergyIntoleranceSeverity' },
});

class AllergyIntoleranceSeverity extends mongoose.Document {
  constructor(object) {
    super(object, AllergyIntoleranceSeveritySchema);
    this.typeName = 'AllergyIntoleranceSeverity';
    this._type = 'FHIR::AllergyIntoleranceSeverity';
  }
}

module.exports.AllergyIntoleranceSeveritySchema = AllergyIntoleranceSeveritySchema;
module.exports.AllergyIntoleranceSeverity = AllergyIntoleranceSeverity;
