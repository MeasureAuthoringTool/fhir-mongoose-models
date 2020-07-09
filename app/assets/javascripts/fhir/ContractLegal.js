const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ContractLegalSchema } = require('./allSchemaHeaders.js');

ContractLegalSchema.add(BackboneElementSchema);
ContractLegalSchema.remove('id');
ContractLegalSchema.add({
  contentAttachment: AttachmentSchema,
  contentReference: ReferenceSchema,
});

module.exports.ContractLegalSchema = ContractLegalSchema;
