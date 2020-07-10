const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SubstanceReferenceInformationClassificationSchema } = require('./allSchemaHeaders.js');

SubstanceReferenceInformationClassificationSchema.add(BackboneElementSchema);
SubstanceReferenceInformationClassificationSchema.remove('id');
SubstanceReferenceInformationClassificationSchema.add({
  domain: CodeableConceptSchema,
  classification: CodeableConceptSchema,
  subtype: [CodeableConceptSchema],
  source: [ReferenceSchema],
});

module.exports.SubstanceReferenceInformationClassificationSchema = SubstanceReferenceInformationClassificationSchema;
