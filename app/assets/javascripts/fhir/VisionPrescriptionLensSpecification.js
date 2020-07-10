const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { VisionEyesSchema } = require('./allSchemaHeaders.js');
const { VisionPrescriptionLensSpecificationPrismSchema } = require('./allSchemaHeaders.js');
const { VisionPrescriptionLensSpecificationSchema } = require('./allSchemaHeaders.js');

VisionPrescriptionLensSpecificationSchema.add(BackboneElementSchema);
VisionPrescriptionLensSpecificationSchema.remove('id');
VisionPrescriptionLensSpecificationSchema.add({
  product: CodeableConceptSchema,
  eye: VisionEyesSchema,
  sphere: PrimitiveDecimalSchema,
  cylinder: PrimitiveDecimalSchema,
  axis: PrimitiveIntegerSchema,
  prism: [VisionPrescriptionLensSpecificationPrismSchema],
  add: PrimitiveDecimalSchema,
  power: PrimitiveDecimalSchema,
  backCurve: PrimitiveDecimalSchema,
  diameter: PrimitiveDecimalSchema,
  duration: SimpleQuantitySchema,
  color: PrimitiveStringSchema,
  brand: PrimitiveStringSchema,
  note: [AnnotationSchema],
});

module.exports.VisionPrescriptionLensSpecificationSchema = VisionPrescriptionLensSpecificationSchema;
