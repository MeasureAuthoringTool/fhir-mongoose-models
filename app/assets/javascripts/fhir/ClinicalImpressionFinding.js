const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ClinicalImpressionFindingSchema } = require('./allSchemaHeaders.js');

ClinicalImpressionFindingSchema.add(BackboneElementSchema);
ClinicalImpressionFindingSchema.remove('id');
ClinicalImpressionFindingSchema.add({
  itemCodeableConcept: CodeableConceptSchema,
  itemReference: ReferenceSchema,
  basis: PrimitiveStringSchema,
});

module.exports.ClinicalImpressionFindingSchema = ClinicalImpressionFindingSchema;
