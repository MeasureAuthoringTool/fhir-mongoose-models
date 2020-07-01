const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { GraphDefinitionLinkSchema } = require('./GraphDefinitionLink');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { ResourceTypeSchema } = require('./ResourceType');
const { UsageContextSchema } = require('./UsageContext');

const GraphDefinitionSchema = DomainResourceSchemaFunction({
  url: PrimitiveUriSchema,
  version: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  status: PublicationStatusSchema,
  experimental: PrimitiveBooleanSchema,
  date: PrimitiveDateTimeSchema,
  publisher: PrimitiveStringSchema,
  contact: [ContactDetailSchema],
  description: PrimitiveMarkdownSchema,
  useContext: [UsageContextSchema],
  jurisdiction: [CodeableConceptSchema],
  purpose: PrimitiveMarkdownSchema,
  start: ResourceTypeSchema,
  profile: PrimitiveCanonicalSchema,
  link: [GraphDefinitionLinkSchema],
  typeName: { type: String, default: 'GraphDefinition' },
  _type: { type: String, default: 'FHIR::GraphDefinition' },
});

class GraphDefinition extends mongoose.Document {
  constructor(object) {
    super(object, GraphDefinitionSchema);
    this.typeName = 'GraphDefinition';
    this._type = 'FHIR::GraphDefinition';
  }
}

module.exports.GraphDefinitionSchema = GraphDefinitionSchema;
module.exports.GraphDefinition = GraphDefinition;
