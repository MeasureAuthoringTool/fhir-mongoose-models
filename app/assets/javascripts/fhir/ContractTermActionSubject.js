const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ContractTermActionSubjectSchema } = require('./allSchemaHeaders.js');

ContractTermActionSubjectSchema.add(BackboneElementSchema);
ContractTermActionSubjectSchema.remove('id');
ContractTermActionSubjectSchema.add({
  reference: [ReferenceSchema],
  role: CodeableConceptSchema,
});

module.exports.ContractTermActionSubjectSchema = ContractTermActionSubjectSchema;
