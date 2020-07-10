const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { VisionPrescriptionLensSpecificationSchema } = require('./allSchemaHeaders.js');
const { VisionStatusSchema } = require('./allSchemaHeaders.js');
const { VisionPrescriptionSchema } = require('./allSchemaHeaders.js');

VisionPrescriptionSchema.add(DomainResourceSchema);
VisionPrescriptionSchema.remove('id');
VisionPrescriptionSchema.add({
  identifier: [IdentifierSchema],
  status: VisionStatusSchema,
  created: PrimitiveDateTimeSchema,
  patient: ReferenceSchema,
  encounter: ReferenceSchema,
  dateWritten: PrimitiveDateTimeSchema,
  prescriber: ReferenceSchema,
  lensSpecification: [VisionPrescriptionLensSpecificationSchema],
});

module.exports.VisionPrescriptionSchema = VisionPrescriptionSchema;
