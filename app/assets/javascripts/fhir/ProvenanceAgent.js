const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const ProvenanceAgentSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  role: [CodeableConceptSchema],
  who: ReferenceSchema,
  onBehalfOf: ReferenceSchema,
  typeName: { type: String, default: 'ProvenanceAgent' },
  _type: { type: String, default: 'FHIR::ProvenanceAgent' },
});

class ProvenanceAgent extends mongoose.Document {
  constructor(object) {
    super(object, ProvenanceAgentSchema);
    this.typeName = 'ProvenanceAgent';
    this._type = 'FHIR::ProvenanceAgent';
  }
}

module.exports.ProvenanceAgentSchema = ProvenanceAgentSchema;
module.exports.ProvenanceAgent = ProvenanceAgent;
