const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ContractTermAssetContextSchema } = require('./allSchemaHeaders.js');

ContractTermAssetContextSchema.add(BackboneElementSchema);
ContractTermAssetContextSchema.remove('id');
ContractTermAssetContextSchema.add({
  reference: ReferenceSchema,
  code: [CodeableConceptSchema],
  text: PrimitiveStringSchema,
});

module.exports.ContractTermAssetContextSchema = ContractTermAssetContextSchema;
