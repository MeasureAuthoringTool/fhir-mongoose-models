const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { OperationDefinitionOverloadSchema } = require('./OperationDefinitionOverload');
const { OperationDefinitionParameterSchema } = require('./OperationDefinitionParameter');
const { OperationKindSchema } = require('./OperationKind');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { ResourceTypeSchema } = require('./ResourceType');
const { UsageContextSchema } = require('./UsageContext');

const OperationDefinitionSchema = DomainResourceSchemaFunction({
  url: PrimitiveUriSchema,
  version: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  title: PrimitiveStringSchema,
  status: PublicationStatusSchema,
  kind: OperationKindSchema,
  experimental: PrimitiveBooleanSchema,
  date: PrimitiveDateTimeSchema,
  publisher: PrimitiveStringSchema,
  contact: [ContactDetailSchema],
  description: PrimitiveMarkdownSchema,
  useContext: [UsageContextSchema],
  jurisdiction: [CodeableConceptSchema],
  purpose: PrimitiveMarkdownSchema,
  affectsState: PrimitiveBooleanSchema,
  code: PrimitiveCodeSchema,
  comment: PrimitiveMarkdownSchema,
  base: PrimitiveCanonicalSchema,
  resource: [ResourceTypeSchema],
  system: PrimitiveBooleanSchema,
  type: PrimitiveBooleanSchema,
  instance: PrimitiveBooleanSchema,
  inputProfile: PrimitiveCanonicalSchema,
  outputProfile: PrimitiveCanonicalSchema,
  parameter: [OperationDefinitionParameterSchema],
  overload: [OperationDefinitionOverloadSchema],
  typeName: { type: String, default: 'OperationDefinition' },
  _type: { type: String, default: 'FHIR::OperationDefinition' },
});

class OperationDefinition extends mongoose.Document {
  constructor(object) {
    super(object, OperationDefinitionSchema);
    this.typeName = 'OperationDefinition';
    this._type = 'FHIR::OperationDefinition';
  }
}

module.exports.OperationDefinitionSchema = OperationDefinitionSchema;
module.exports.OperationDefinition = OperationDefinition;
