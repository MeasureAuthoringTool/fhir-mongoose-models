const { BackboneElementSchema } = require('./BackboneElement');
const { CarePlanActivityKindSchema } = require('./allSchemaHeaders.js');
const { CarePlanActivityStatusSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { TimingSchema } = require('./allSchemaHeaders.js');
const { CarePlanActivityDetailSchema } = require('./allSchemaHeaders.js');

CarePlanActivityDetailSchema.add(BackboneElementSchema);
CarePlanActivityDetailSchema.remove('id');
CarePlanActivityDetailSchema.add({
  kind: CarePlanActivityKindSchema,
  instantiatesCanonical: [PrimitiveCanonicalSchema],
  instantiatesUri: [PrimitiveUriSchema],
  code: CodeableConceptSchema,
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  goal: [ReferenceSchema],
  status: CarePlanActivityStatusSchema,
  statusReason: CodeableConceptSchema,
  doNotPerform: PrimitiveBooleanSchema,
  scheduledTiming: TimingSchema,
  scheduledPeriod: PeriodSchema,
  scheduledString: PrimitiveStringSchema,
  location: ReferenceSchema,
  performer: [ReferenceSchema],
  productCodeableConcept: CodeableConceptSchema,
  productReference: ReferenceSchema,
  dailyAmount: SimpleQuantitySchema,
  quantity: SimpleQuantitySchema,
  description: PrimitiveStringSchema,
});

module.exports.CarePlanActivityDetailSchema = CarePlanActivityDetailSchema;
