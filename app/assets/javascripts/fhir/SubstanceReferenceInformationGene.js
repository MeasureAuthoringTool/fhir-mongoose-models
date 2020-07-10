const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SubstanceReferenceInformationGeneSchema } = require('./allSchemaHeaders.js');

SubstanceReferenceInformationGeneSchema.add(BackboneElementSchema);
SubstanceReferenceInformationGeneSchema.remove('id');
SubstanceReferenceInformationGeneSchema.add({
  geneSequenceOrigin: CodeableConceptSchema,
  gene: CodeableConceptSchema,
  source: [ReferenceSchema],
});

module.exports.SubstanceReferenceInformationGeneSchema = SubstanceReferenceInformationGeneSchema;
