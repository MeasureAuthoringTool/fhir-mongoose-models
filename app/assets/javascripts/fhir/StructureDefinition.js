const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { FHIRVersionSchema } = require('./FHIRVersion');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { StructureDefinitionContextSchema } = require('./StructureDefinitionContext');
const { StructureDefinitionDifferentialSchema } = require('./StructureDefinitionDifferential');
const { StructureDefinitionKindSchema } = require('./StructureDefinitionKind');
const { StructureDefinitionMappingSchema } = require('./StructureDefinitionMapping');
const { StructureDefinitionSnapshotSchema } = require('./StructureDefinitionSnapshot');
const { TypeDerivationRuleSchema } = require('./TypeDerivationRule');
const { UsageContextSchema } = require('./UsageContext');

const StructureDefinitionSchema = DomainResourceSchemaFunction({
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
  keyword: [CodingSchema],
  fhirVersion: FHIRVersionSchema,
  mapping: [StructureDefinitionMappingSchema],
  kind: StructureDefinitionKindSchema,
  abstract: PrimitiveBooleanSchema,
  context: [StructureDefinitionContextSchema],
  contextInvariant: [PrimitiveStringSchema],
  type: PrimitiveUriSchema,
  baseDefinition: PrimitiveCanonicalSchema,
  derivation: TypeDerivationRuleSchema,
  snapshot: StructureDefinitionSnapshotSchema,
  differential: StructureDefinitionDifferentialSchema,
  typeName: { type: String, default: 'StructureDefinition' },
  _type: { type: String, default: 'FHIR::StructureDefinition' },
});

class StructureDefinition extends mongoose.Document {
  constructor(object) {
    super(object, StructureDefinitionSchema);
    this.typeName = 'StructureDefinition';
    this._type = 'FHIR::StructureDefinition';
  }
}

module.exports.StructureDefinitionSchema = StructureDefinitionSchema;
module.exports.StructureDefinition = StructureDefinition;
