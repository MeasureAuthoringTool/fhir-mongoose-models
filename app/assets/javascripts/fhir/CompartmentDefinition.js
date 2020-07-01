const mongoose = require('mongoose/browser');
const { CompartmentDefinitionResourceSchema } = require('./CompartmentDefinitionResource');
const { CompartmentTypeSchema } = require('./CompartmentType');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { UsageContextSchema } = require('./UsageContext');

const CompartmentDefinitionSchema = DomainResourceSchemaFunction({
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
  purpose: PrimitiveMarkdownSchema,
  code: CompartmentTypeSchema,
  search: PrimitiveBooleanSchema,
  resource: [CompartmentDefinitionResourceSchema],
  typeName: { type: String, default: 'CompartmentDefinition' },
  _type: { type: String, default: 'FHIR::CompartmentDefinition' },
});

class CompartmentDefinition extends mongoose.Document {
  constructor(object) {
    super(object, CompartmentDefinitionSchema);
    this.typeName = 'CompartmentDefinition';
    this._type = 'FHIR::CompartmentDefinition';
  }
}

module.exports.CompartmentDefinitionSchema = CompartmentDefinitionSchema;
module.exports.CompartmentDefinition = CompartmentDefinition;
