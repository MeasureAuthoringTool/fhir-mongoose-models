const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ResearchStudyObjectiveSchema } = require('./allSchemaHeaders.js');

ResearchStudyObjectiveSchema.add(BackboneElementSchema);
ResearchStudyObjectiveSchema.remove('id');
ResearchStudyObjectiveSchema.add({
  name: PrimitiveStringSchema,
  type: CodeableConceptSchema,
});

module.exports.ResearchStudyObjectiveSchema = ResearchStudyObjectiveSchema;
