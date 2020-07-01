const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ConceptMapGroupSchema } = require('./ConceptMapGroup');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { UsageContextSchema } = require('./UsageContext');

const ConceptMapSchema = DomainResourceSchemaFunction({
  url: PrimitiveUriSchema,
  identifier: IdentifierSchema,
  version: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  title: PrimitiveStringSchema,
  status: PublicationStatusSchema,
  experimental: PrimitiveBooleanSchema,
  date: PrimitiveDateTimeSchema,
  publisher: PrimitiveStringSchema,
  contact: [ContactDetailSchema],
  description: PrimitiveMarkdownSchema,
  useContext: [UsageContextSchema],
  jurisdiction: [CodeableConceptSchema],
  purpose: PrimitiveMarkdownSchema,
  copyright: PrimitiveMarkdownSchema,
  sourceUri: PrimitiveUriSchema,
  sourceCanonical: PrimitiveCanonicalSchema,
  targetUri: PrimitiveUriSchema,
  targetCanonical: PrimitiveCanonicalSchema,
  group: [ConceptMapGroupSchema],
  typeName: { type: String, default: 'ConceptMap' },
  _type: { type: String, default: 'FHIR::ConceptMap' },
});

class ConceptMap extends mongoose.Document {
  constructor(object) {
    super(object, ConceptMapSchema);
    this.typeName = 'ConceptMap';
    this._type = 'FHIR::ConceptMap';
  }
}

module.exports.ConceptMapSchema = ConceptMapSchema;
module.exports.ConceptMap = ConceptMap;
