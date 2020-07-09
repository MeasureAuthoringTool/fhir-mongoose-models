const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { RepositoryTypeSchema } = require('./allSchemaHeaders.js');
const { MolecularSequenceRepositorySchema } = require('./allSchemaHeaders.js');

MolecularSequenceRepositorySchema.add(BackboneElementSchema);
MolecularSequenceRepositorySchema.remove('id');
MolecularSequenceRepositorySchema.add({
  type: RepositoryTypeSchema,
  url: PrimitiveUriSchema,
  name: PrimitiveStringSchema,
  datasetId: PrimitiveStringSchema,
  variantsetId: PrimitiveStringSchema,
  readsetId: PrimitiveStringSchema,
});

module.exports.MolecularSequenceRepositorySchema = MolecularSequenceRepositorySchema;
