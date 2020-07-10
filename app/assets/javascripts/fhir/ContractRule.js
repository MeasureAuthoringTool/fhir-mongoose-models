const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ContractRuleSchema } = require('./allSchemaHeaders.js');

ContractRuleSchema.add(BackboneElementSchema);
ContractRuleSchema.remove('id');
ContractRuleSchema.add({
  contentAttachment: AttachmentSchema,
  contentReference: ReferenceSchema,
});

module.exports.ContractRuleSchema = ContractRuleSchema;
