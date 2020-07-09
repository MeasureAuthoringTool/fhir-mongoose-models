const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { SubstanceAmountSchema } = require('./allSchemaHeaders.js');
const { SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationSchema } = require('./allSchemaHeaders.js');

SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationSchema.add(BackboneElementSchema);
SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationSchema.remove('id');
SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationSchema.add({
  degree: CodeableConceptSchema,
  amount: SubstanceAmountSchema,
});

module.exports.SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationSchema = SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationSchema;
