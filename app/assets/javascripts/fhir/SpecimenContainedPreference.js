const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const SpecimenContainedPreferenceSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'SpecimenContainedPreference' },
  _type: { type: String, default: 'FHIR::SpecimenContainedPreference' },
});

class SpecimenContainedPreference extends mongoose.Document {
  constructor(object) {
    super(object, SpecimenContainedPreferenceSchema);
    this.typeName = 'SpecimenContainedPreference';
    this._type = 'FHIR::SpecimenContainedPreference';
  }
}

module.exports.SpecimenContainedPreferenceSchema = SpecimenContainedPreferenceSchema;
module.exports.SpecimenContainedPreference = SpecimenContainedPreference;
