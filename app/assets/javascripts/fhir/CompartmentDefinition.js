const { CompartmentDefinitionResourceSchema } = require('./allSchemaHeaders.js');
const { CompartmentTypeSchema } = require('./allSchemaHeaders.js');
const { ContactDetailSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { PublicationStatusSchema } = require('./allSchemaHeaders.js');
const { UsageContextSchema } = require('./allSchemaHeaders.js');
const { CompartmentDefinitionSchema } = require('./allSchemaHeaders.js');

CompartmentDefinitionSchema.add(DomainResourceSchema);
CompartmentDefinitionSchema.remove('id');
CompartmentDefinitionSchema.add({
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
});

module.exports.CompartmentDefinitionSchema = CompartmentDefinitionSchema;
