const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CompositionAttesterSchema } = require('./CompositionAttester');
const { CompositionEventSchema } = require('./CompositionEvent');
const { CompositionRelatesToSchema } = require('./CompositionRelatesTo');
const { CompositionSectionSchema } = require('./CompositionSection');
const { CompositionStatusSchema } = require('./CompositionStatus');
const { DocumentConfidentialitySchema } = require('./DocumentConfidentiality');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const CompositionSchema = DomainResourceSchemaFunction({
  identifier: IdentifierSchema,
  status: CompositionStatusSchema,
  type: CodeableConceptSchema,
  category: [CodeableConceptSchema],
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  date: PrimitiveDateTimeSchema,
  author: [ReferenceSchema],
  title: PrimitiveStringSchema,
  confidentiality: DocumentConfidentialitySchema,
  attester: [CompositionAttesterSchema],
  custodian: ReferenceSchema,
  relatesTo: [CompositionRelatesToSchema],
  event: [CompositionEventSchema],
  section: [CompositionSectionSchema],
  typeName: { type: String, default: 'Composition' },
  _type: { type: String, default: 'FHIR::Composition' },
});

class Composition extends mongoose.Document {
  constructor(object) {
    super(object, CompositionSchema);
    this.typeName = 'Composition';
    this._type = 'FHIR::Composition';
  }
}

module.exports.CompositionSchema = CompositionSchema;
module.exports.Composition = Composition;
