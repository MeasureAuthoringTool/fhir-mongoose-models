const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SubstanceAmountSchema } = require('./allSchemaHeaders.js');
const { SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationSchema } = require('./allSchemaHeaders.js');
const { SubstancePolymerRepeatRepeatUnitStructuralRepresentationSchema } = require('./allSchemaHeaders.js');
const { SubstancePolymerRepeatRepeatUnitSchema } = require('./allSchemaHeaders.js');

SubstancePolymerRepeatRepeatUnitSchema.add(BackboneElementSchema);
SubstancePolymerRepeatRepeatUnitSchema.remove('id');
SubstancePolymerRepeatRepeatUnitSchema.add({
  orientationOfPolymerisation: CodeableConceptSchema,
  repeatUnit: PrimitiveStringSchema,
  amount: SubstanceAmountSchema,
  degreeOfPolymerisation: [SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationSchema],
  structuralRepresentation: [SubstancePolymerRepeatRepeatUnitStructuralRepresentationSchema],
});

module.exports.SubstancePolymerRepeatRepeatUnitSchema = SubstancePolymerRepeatRepeatUnitSchema;
