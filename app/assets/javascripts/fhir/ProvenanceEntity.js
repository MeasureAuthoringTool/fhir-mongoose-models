const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ProvenanceAgentSchema } = require('./ProvenanceAgent');
const { ProvenanceEntityRoleSchema } = require('./ProvenanceEntityRole');
const { ReferenceSchema } = require('./Reference');

const ProvenanceEntitySchema = BackboneElementSchemaFunction({
  role: ProvenanceEntityRoleSchema,
  what: ReferenceSchema,
  agent: [ProvenanceAgentSchema],
  typeName: { type: String, default: 'ProvenanceEntity' },
  _type: { type: String, default: 'FHIR::ProvenanceEntity' },
});

class ProvenanceEntity extends mongoose.Document {
  constructor(object) {
    super(object, ProvenanceEntitySchema);
    this.typeName = 'ProvenanceEntity';
    this._type = 'FHIR::ProvenanceEntity';
  }
}

module.exports.ProvenanceEntitySchema = ProvenanceEntitySchema;
module.exports.ProvenanceEntity = ProvenanceEntity;
