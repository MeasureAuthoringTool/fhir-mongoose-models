const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { RiskEvidenceSynthesisSampleSizeSchema } = require('./allSchemaHeaders.js');

RiskEvidenceSynthesisSampleSizeSchema.add(BackboneElementSchema);
RiskEvidenceSynthesisSampleSizeSchema.remove('id');
RiskEvidenceSynthesisSampleSizeSchema.add({
  description: PrimitiveStringSchema,
  numberOfStudies: PrimitiveIntegerSchema,
  numberOfParticipants: PrimitiveIntegerSchema,
});

module.exports.RiskEvidenceSynthesisSampleSizeSchema = RiskEvidenceSynthesisSampleSizeSchema;
