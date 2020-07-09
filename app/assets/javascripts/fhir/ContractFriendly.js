const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ContractFriendlySchema } = require('./allSchemaHeaders.js');

ContractFriendlySchema.add(BackboneElementSchema);
ContractFriendlySchema.remove('id');
ContractFriendlySchema.add({
  contentAttachment: AttachmentSchema,
  contentReference: ReferenceSchema,
});

module.exports.ContractFriendlySchema = ContractFriendlySchema;
