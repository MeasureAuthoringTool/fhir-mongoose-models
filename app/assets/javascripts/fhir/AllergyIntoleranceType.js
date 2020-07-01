const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const AllergyIntoleranceTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'AllergyIntoleranceType' },
  _type: { type: String, default: 'FHIR::AllergyIntoleranceType' },
});

class AllergyIntoleranceType extends mongoose.Document {
  constructor(object) {
    super(object, AllergyIntoleranceTypeSchema);
    this.typeName = 'AllergyIntoleranceType';
    this._type = 'FHIR::AllergyIntoleranceType';
  }
}

module.exports.AllergyIntoleranceTypeSchema = AllergyIntoleranceTypeSchema;
module.exports.AllergyIntoleranceType = AllergyIntoleranceType;
