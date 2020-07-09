const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ObservationReferenceRangeSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveTimeSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { RatioSchema } = require('./allSchemaHeaders.js');
const { SampledDataSchema } = require('./allSchemaHeaders.js');
const { ObservationComponentSchema } = require('./allSchemaHeaders.js');

ObservationComponentSchema.add(BackboneElementSchema);
ObservationComponentSchema.remove('id');
ObservationComponentSchema.add({
  code: CodeableConceptSchema,
  valueQuantity: QuantitySchema,
  valueCodeableConcept: CodeableConceptSchema,
  valueString: PrimitiveStringSchema,
  valueBoolean: PrimitiveBooleanSchema,
  valueInteger: PrimitiveIntegerSchema,
  valueRange: RangeSchema,
  valueRatio: RatioSchema,
  valueSampledData: SampledDataSchema,
  valueTime: PrimitiveTimeSchema,
  valueDateTime: PrimitiveDateTimeSchema,
  valuePeriod: PeriodSchema,
  dataAbsentReason: CodeableConceptSchema,
  interpretation: [CodeableConceptSchema],
  referenceRange: [ObservationReferenceRangeSchema],
});

module.exports.ObservationComponentSchema = ObservationComponentSchema;
