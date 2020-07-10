const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { RiskEvidenceSynthesisCertaintyCertaintySubcomponentSchema } = require('./allSchemaHeaders.js');

RiskEvidenceSynthesisCertaintyCertaintySubcomponentSchema.add(BackboneElementSchema);
RiskEvidenceSynthesisCertaintyCertaintySubcomponentSchema.remove('id');
RiskEvidenceSynthesisCertaintyCertaintySubcomponentSchema.add({
  type: CodeableConceptSchema,
  rating: [CodeableConceptSchema],
  note: [AnnotationSchema],
});

module.exports.RiskEvidenceSynthesisCertaintyCertaintySubcomponentSchema = RiskEvidenceSynthesisCertaintyCertaintySubcomponentSchema;
