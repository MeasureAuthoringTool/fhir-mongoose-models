const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ResearchStudyArmSchema } = require('./allSchemaHeaders.js');

ResearchStudyArmSchema.add(BackboneElementSchema);
ResearchStudyArmSchema.remove('id');
ResearchStudyArmSchema.add({
  name: PrimitiveStringSchema,
  type: CodeableConceptSchema,
  description: PrimitiveStringSchema,
});

module.exports.ResearchStudyArmSchema = ResearchStudyArmSchema;
