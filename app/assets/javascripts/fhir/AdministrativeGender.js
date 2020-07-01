const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const AdministrativeGenderSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'AdministrativeGender' },
  _type: { type: String, default: 'FHIR::AdministrativeGender' },
});

class AdministrativeGender extends mongoose.Document {
  constructor(object) {
    super(object, AdministrativeGenderSchema);
    this.typeName = 'AdministrativeGender';
    this._type = 'FHIR::AdministrativeGender';
  }
}

module.exports.AdministrativeGenderSchema = AdministrativeGenderSchema;
module.exports.AdministrativeGender = AdministrativeGender;
