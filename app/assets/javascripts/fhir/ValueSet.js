const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { UsageContextSchema } = require('./UsageContext');
const { ValueSetComposeSchema } = require('./ValueSetCompose');
const { ValueSetExpansionSchema } = require('./ValueSetExpansion');

const ValueSetSchema = DomainResourceSchemaFunction({
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
  immutable: PrimitiveBooleanSchema,
  purpose: PrimitiveMarkdownSchema,
  copyright: PrimitiveMarkdownSchema,
  compose: ValueSetComposeSchema,
  expansion: ValueSetExpansionSchema,
  typeName: { type: String, default: 'ValueSet' },
  _type: { type: String, default: 'FHIR::ValueSet' },
});

class ValueSet extends mongoose.Document {
  constructor(object) {
    super(object, ValueSetSchema);
    this.typeName = 'ValueSet';
    this._type = 'FHIR::ValueSet';
  }
}

module.exports.ValueSetSchema = ValueSetSchema;
module.exports.ValueSet = ValueSet;
