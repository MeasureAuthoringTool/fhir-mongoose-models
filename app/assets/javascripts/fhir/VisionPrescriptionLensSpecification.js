const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { VisionEyesSchema } = require('./VisionEyes');
const { VisionPrescriptionLensSpecificationPrismSchema } = require('./VisionPrescriptionLensSpecificationPrism');

const VisionPrescriptionLensSpecificationSchema = BackboneElementSchemaFunction({
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
  typeName: { type: String, default: 'VisionPrescriptionLensSpecification' },
  _type: { type: String, default: 'FHIR::VisionPrescriptionLensSpecification' },
});

class VisionPrescriptionLensSpecification extends mongoose.Document {
  constructor(object) {
    super(object, VisionPrescriptionLensSpecificationSchema);
    this.typeName = 'VisionPrescriptionLensSpecification';
    this._type = 'FHIR::VisionPrescriptionLensSpecification';
  }
}

module.exports.VisionPrescriptionLensSpecificationSchema = VisionPrescriptionLensSpecificationSchema;
module.exports.VisionPrescriptionLensSpecification = VisionPrescriptionLensSpecification;
