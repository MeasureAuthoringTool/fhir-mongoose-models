const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { RiskEvidenceSynthesisCertaintyCertaintySubcomponentSchema } = require('./allSchemaHeaders.js');
const { RiskEvidenceSynthesisCertaintySchema } = require('./allSchemaHeaders.js');

RiskEvidenceSynthesisCertaintySchema.add(BackboneElementSchema);
RiskEvidenceSynthesisCertaintySchema.remove('id');
RiskEvidenceSynthesisCertaintySchema.add({
  rating: [CodeableConceptSchema],
  note: [AnnotationSchema],
  certaintySubcomponent: [RiskEvidenceSynthesisCertaintyCertaintySubcomponentSchema],
});

module.exports.RiskEvidenceSynthesisCertaintySchema = RiskEvidenceSynthesisCertaintySchema;
