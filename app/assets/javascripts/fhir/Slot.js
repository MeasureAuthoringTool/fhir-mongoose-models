const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveInstantSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SlotStatusSchema } = require('./allSchemaHeaders.js');
const { SlotSchema } = require('./allSchemaHeaders.js');

SlotSchema.add(DomainResourceSchema);
SlotSchema.remove('id');
SlotSchema.add({
  identifier: [IdentifierSchema],
  serviceCategory: [CodeableConceptSchema],
  serviceType: [CodeableConceptSchema],
  specialty: [CodeableConceptSchema],
  appointmentType: CodeableConceptSchema,
  schedule: ReferenceSchema,
  status: SlotStatusSchema,
  start: PrimitiveInstantSchema,
  end: PrimitiveInstantSchema,
  overbooked: PrimitiveBooleanSchema,
  comment: PrimitiveStringSchema,
});

module.exports.SlotSchema = SlotSchema;
