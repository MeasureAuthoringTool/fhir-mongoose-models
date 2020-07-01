const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MessageDefinitionAllowedResponseSchema } = require('./MessageDefinitionAllowedResponse');
const { MessageDefinitionFocusSchema } = require('./MessageDefinitionFocus');
const { MessageheaderResponseRequestSchema } = require('./MessageheaderResponseRequest');
const { MessageSignificanceCategorySchema } = require('./MessageSignificanceCategory');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { UsageContextSchema } = require('./UsageContext');

const MessageDefinitionSchema = DomainResourceSchemaFunction({
  url: PrimitiveUriSchema,
  identifier: [IdentifierSchema],
  version: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  title: PrimitiveStringSchema,
  replaces: [PrimitiveCanonicalSchema],
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
  base: PrimitiveCanonicalSchema,
  parent: [PrimitiveCanonicalSchema],
  eventCoding: CodingSchema,
  eventUri: PrimitiveUriSchema,
  category: MessageSignificanceCategorySchema,
  focus: [MessageDefinitionFocusSchema],
  responseRequired: MessageheaderResponseRequestSchema,
  allowedResponse: [MessageDefinitionAllowedResponseSchema],
  graph: [PrimitiveCanonicalSchema],
  typeName: { type: String, default: 'MessageDefinition' },
  _type: { type: String, default: 'FHIR::MessageDefinition' },
});

class MessageDefinition extends mongoose.Document {
  constructor(object) {
    super(object, MessageDefinitionSchema);
    this.typeName = 'MessageDefinition';
    this._type = 'FHIR::MessageDefinition';
  }
}

module.exports.MessageDefinitionSchema = MessageDefinitionSchema;
module.exports.MessageDefinition = MessageDefinition;
