const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const AllergyIntoleranceCriticalitySchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'AllergyIntoleranceCriticality' },
  _type: { type: String, default: 'FHIR::AllergyIntoleranceCriticality' },
});

class AllergyIntoleranceCriticality extends mongoose.Document {
  constructor(object) {
    super(object, AllergyIntoleranceCriticalitySchema);
    this.typeName = 'AllergyIntoleranceCriticality';
    this._type = 'FHIR::AllergyIntoleranceCriticality';
  }
}

module.exports.AllergyIntoleranceCriticalitySchema = AllergyIntoleranceCriticalitySchema;
module.exports.AllergyIntoleranceCriticality = AllergyIntoleranceCriticality;
