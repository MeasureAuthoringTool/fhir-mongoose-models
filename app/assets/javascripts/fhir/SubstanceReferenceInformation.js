const { DomainResourceSchema } = require('./DomainResource');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SubstanceReferenceInformationClassificationSchema } = require('./allSchemaHeaders.js');
const { SubstanceReferenceInformationGeneSchema } = require('./allSchemaHeaders.js');
const { SubstanceReferenceInformationGeneElementSchema } = require('./allSchemaHeaders.js');
const { SubstanceReferenceInformationTargetSchema } = require('./allSchemaHeaders.js');
const { SubstanceReferenceInformationSchema } = require('./allSchemaHeaders.js');

SubstanceReferenceInformationSchema.add(DomainResourceSchema);
SubstanceReferenceInformationSchema.remove('id');
SubstanceReferenceInformationSchema.add({
  comment: PrimitiveStringSchema,
  gene: [SubstanceReferenceInformationGeneSchema],
  geneElement: [SubstanceReferenceInformationGeneElementSchema],
  classification: [SubstanceReferenceInformationClassificationSchema],
  target: [SubstanceReferenceInformationTargetSchema],
});

module.exports.SubstanceReferenceInformationSchema = SubstanceReferenceInformationSchema;
