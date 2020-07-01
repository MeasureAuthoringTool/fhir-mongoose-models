const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveInstantSchema } = require('./PrimitiveInstant');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ProvenanceAgentSchema } = require('./ProvenanceAgent');
const { ProvenanceEntitySchema } = require('./ProvenanceEntity');
const { ReferenceSchema } = require('./Reference');
const { SignatureSchema } = require('./Signature');

const ProvenanceSchema = DomainResourceSchemaFunction({
  target: [ReferenceSchema],
  occurredPeriod: PeriodSchema,
  occurredDateTime: PrimitiveDateTimeSchema,
  recorded: PrimitiveInstantSchema,
  policy: [PrimitiveUriSchema],
  location: ReferenceSchema,
  reason: [CodeableConceptSchema],
  activity: CodeableConceptSchema,
  agent: [ProvenanceAgentSchema],
  entity: [ProvenanceEntitySchema],
  signature: [SignatureSchema],
  typeName: { type: String, default: 'Provenance' },
  _type: { type: String, default: 'FHIR::Provenance' },
});

class Provenance extends mongoose.Document {
  constructor(object) {
    super(object, ProvenanceSchema);
    this.typeName = 'Provenance';
    this._type = 'FHIR::Provenance';
  }
}

module.exports.ProvenanceSchema = ProvenanceSchema;
module.exports.Provenance = Provenance;
