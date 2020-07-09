const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ClinicalImpressionInvestigationSchema } = require('./allSchemaHeaders.js');

ClinicalImpressionInvestigationSchema.add(BackboneElementSchema);
ClinicalImpressionInvestigationSchema.remove('id');
ClinicalImpressionInvestigationSchema.add({
  code: CodeableConceptSchema,
  item: [ReferenceSchema],
});

module.exports.ClinicalImpressionInvestigationSchema = ClinicalImpressionInvestigationSchema;
