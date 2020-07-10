const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DosageDoseAndRateSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { RatioSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { TimingSchema } = require('./allSchemaHeaders.js');
const { DosageSchema } = require('./allSchemaHeaders.js');

DosageSchema.add(BackboneElementSchema);
DosageSchema.remove('id');
DosageSchema.add({
  sequence: PrimitiveIntegerSchema,
  text: PrimitiveStringSchema,
  additionalInstruction: [CodeableConceptSchema],
  patientInstruction: PrimitiveStringSchema,
  timing: TimingSchema,
  asNeededBoolean: PrimitiveBooleanSchema,
  asNeededCodeableConcept: CodeableConceptSchema,
  site: CodeableConceptSchema,
  route: CodeableConceptSchema,
  method: CodeableConceptSchema,
  doseAndRate: [DosageDoseAndRateSchema],
  maxDosePerPeriod: RatioSchema,
  maxDosePerAdministration: SimpleQuantitySchema,
  maxDosePerLifetime: SimpleQuantitySchema,
});

module.exports.DosageSchema = DosageSchema;
