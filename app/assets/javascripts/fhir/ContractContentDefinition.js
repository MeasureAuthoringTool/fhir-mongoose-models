const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContractPublicationStatusSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ContractContentDefinitionSchema } = require('./allSchemaHeaders.js');

ContractContentDefinitionSchema.add(BackboneElementSchema);
ContractContentDefinitionSchema.remove('id');
ContractContentDefinitionSchema.add({
  type: CodeableConceptSchema,
  subType: CodeableConceptSchema,
  publisher: ReferenceSchema,
  publicationDate: PrimitiveDateTimeSchema,
  publicationStatus: ContractPublicationStatusSchema,
  copyright: PrimitiveMarkdownSchema,
});

module.exports.ContractContentDefinitionSchema = ContractContentDefinitionSchema;
