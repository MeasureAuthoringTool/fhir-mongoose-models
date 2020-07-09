const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactDetailSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { NamingSystemTypeSchema } = require('./allSchemaHeaders.js');
const { NamingSystemUniqueIdSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PublicationStatusSchema } = require('./allSchemaHeaders.js');
const { UsageContextSchema } = require('./allSchemaHeaders.js');
const { NamingSystemSchema } = require('./allSchemaHeaders.js');

NamingSystemSchema.add(DomainResourceSchema);
NamingSystemSchema.remove('id');
NamingSystemSchema.add({
  name: PrimitiveStringSchema,
  status: PublicationStatusSchema,
  kind: NamingSystemTypeSchema,
  date: PrimitiveDateTimeSchema,
  publisher: PrimitiveStringSchema,
  contact: [ContactDetailSchema],
  responsible: PrimitiveStringSchema,
  type: CodeableConceptSchema,
  description: PrimitiveMarkdownSchema,
  useContext: [UsageContextSchema],
  jurisdiction: [CodeableConceptSchema],
  usage: PrimitiveStringSchema,
  uniqueId: [NamingSystemUniqueIdSchema],
});

module.exports.NamingSystemSchema = NamingSystemSchema;
