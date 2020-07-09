const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { VisionBaseSchema } = require('./allSchemaHeaders.js');
const { VisionPrescriptionLensSpecificationPrismSchema } = require('./allSchemaHeaders.js');

VisionPrescriptionLensSpecificationPrismSchema.add(BackboneElementSchema);
VisionPrescriptionLensSpecificationPrismSchema.remove('id');
VisionPrescriptionLensSpecificationPrismSchema.add({
  amount: PrimitiveDecimalSchema,
  base: VisionBaseSchema,
});

module.exports.VisionPrescriptionLensSpecificationPrismSchema = VisionPrescriptionLensSpecificationPrismSchema;
