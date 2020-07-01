const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
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
const { StructureMapGroupSchema } = require('./StructureMapGroup');
const { StructureMapStructureSchema } = require('./StructureMapStructure');
const { UsageContextSchema } = require('./UsageContext');

const StructureMapSchema = DomainResourceSchemaFunction({
  url: PrimitiveUriSchema,
  identifier: [IdentifierSchema],
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
  structure: [StructureMapStructureSchema],
  import: [PrimitiveCanonicalSchema],
  group: [StructureMapGroupSchema],
  typeName: { type: String, default: 'StructureMap' },
  _type: { type: String, default: 'FHIR::StructureMap' },
});

class StructureMap extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapSchema);
    this.typeName = 'StructureMap';
    this._type = 'FHIR::StructureMap';
  }
}

module.exports.StructureMapSchema = StructureMapSchema;
module.exports.StructureMap = StructureMap;
