const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const IdentityAssuranceLevelSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'IdentityAssuranceLevel' },
  _type: { type: String, default: 'FHIR::IdentityAssuranceLevel' },
});

class IdentityAssuranceLevel extends mongoose.Document {
  constructor(object) {
    super(object, IdentityAssuranceLevelSchema);
    this.typeName = 'IdentityAssuranceLevel';
    this._type = 'FHIR::IdentityAssuranceLevel';
  }
}

module.exports.IdentityAssuranceLevelSchema = IdentityAssuranceLevelSchema;
module.exports.IdentityAssuranceLevel = IdentityAssuranceLevel;
