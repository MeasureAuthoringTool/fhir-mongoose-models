const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ProvenanceEntityRoleSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ProvenanceEntityRole' },
  _type: { type: String, default: 'FHIR::ProvenanceEntityRole' },
});

class ProvenanceEntityRole extends mongoose.Document {
  constructor(object) {
    super(object, ProvenanceEntityRoleSchema);
    this.typeName = 'ProvenanceEntityRole';
    this._type = 'FHIR::ProvenanceEntityRole';
  }
}

module.exports.ProvenanceEntityRoleSchema = ProvenanceEntityRoleSchema;
module.exports.ProvenanceEntityRole = ProvenanceEntityRole;
