const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CarePlanActivitySchema } = require('./allSchemaHeaders.js');
const { CarePlanIntentSchema } = require('./allSchemaHeaders.js');
const { CarePlanStatusSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { CarePlanSchema } = require('./allSchemaHeaders.js');

CarePlanSchema.add(DomainResourceSchema);
CarePlanSchema.remove('id');
CarePlanSchema.add({
  identifier: [IdentifierSchema],
  instantiatesCanonical: [PrimitiveCanonicalSchema],
  instantiatesUri: [PrimitiveUriSchema],
  basedOn: [ReferenceSchema],
  replaces: [ReferenceSchema],
  partOf: [ReferenceSchema],
  status: CarePlanStatusSchema,
  intent: CarePlanIntentSchema,
  category: [CodeableConceptSchema],
  title: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  period: PeriodSchema,
  created: PrimitiveDateTimeSchema,
  author: ReferenceSchema,
  contributor: [ReferenceSchema],
  careTeam: [ReferenceSchema],
  addresses: [ReferenceSchema],
  supportingInfo: [ReferenceSchema],
  goal: [ReferenceSchema],
  activity: [CarePlanActivitySchema],
  note: [AnnotationSchema],
});

module.exports.CarePlanSchema = CarePlanSchema;
