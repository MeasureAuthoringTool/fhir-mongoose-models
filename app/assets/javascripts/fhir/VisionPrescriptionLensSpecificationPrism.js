const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { VisionBaseSchema } = require('./VisionBase');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const VisionPrescriptionLensSpecificationPrismSchema = BackboneElementSchemaFunction({
   amount : Number,
   base : VisionBaseSchema,
   fhirTitle: { type: String, default: 'VisionPrescriptionLensSpecificationPrism' },
});

class VisionPrescriptionLensSpecificationPrism extends mongoose.Document {
  constructor(object) {
    super(object, VisionPrescriptionLensSpecificationPrismSchema);
    this._type = 'FHIR::VisionPrescriptionLensSpecificationPrism';
  }
};


module.exports.VisionPrescriptionLensSpecificationPrismSchema = VisionPrescriptionLensSpecificationPrismSchema;
module.exports.VisionPrescriptionLensSpecificationPrism = VisionPrescriptionLensSpecificationPrism;
