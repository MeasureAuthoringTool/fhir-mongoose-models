const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { VisionBaseSchema } = require('./VisionBase');

const VisionPrescriptionLensSpecificationPrismSchema = BackboneElementSchemaFunction({
  amount: PrimitiveDecimalSchema,
  base: VisionBaseSchema,
  typeName: { type: String, default: 'VisionPrescriptionLensSpecificationPrism' },
  _type: { type: String, default: 'FHIR::VisionPrescriptionLensSpecificationPrism' },
});

class VisionPrescriptionLensSpecificationPrism extends mongoose.Document {
  constructor(object) {
    super(object, VisionPrescriptionLensSpecificationPrismSchema);
    this.typeName = 'VisionPrescriptionLensSpecificationPrism';
    this._type = 'FHIR::VisionPrescriptionLensSpecificationPrism';
  }
}

module.exports.VisionPrescriptionLensSpecificationPrismSchema = VisionPrescriptionLensSpecificationPrismSchema;
module.exports.VisionPrescriptionLensSpecificationPrism = VisionPrescriptionLensSpecificationPrism;
