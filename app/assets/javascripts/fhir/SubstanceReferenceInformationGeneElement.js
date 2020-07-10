const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SubstanceReferenceInformationGeneElementSchema } = require('./allSchemaHeaders.js');

SubstanceReferenceInformationGeneElementSchema.add(BackboneElementSchema);
SubstanceReferenceInformationGeneElementSchema.remove('id');
SubstanceReferenceInformationGeneElementSchema.add({
  type: CodeableConceptSchema,
  element: IdentifierSchema,
  source: [ReferenceSchema],
});

module.exports.SubstanceReferenceInformationGeneElementSchema = SubstanceReferenceInformationGeneElementSchema;
