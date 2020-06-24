const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { VisionEyesSchema } = require('./VisionEyes');
const { VisionPrescriptionLensSpecificationPrismSchema } = require('./VisionPrescriptionLensSpecificationPrism');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const VisionPrescriptionLensSpecificationSchema = BackboneElementSchemaFunction({
   product : CodeableConceptSchema,
   eye : VisionEyesSchema,
   sphere : Number,
   cylinder : Number,
   axis : Number,
   prism : [VisionPrescriptionLensSpecificationPrismSchema],
   add : Number,
   power : Number,
   backCurve : Number,
   diameter : Number,
   duration : SimpleQuantitySchema,
   color : String,
   brand : String,
   note : [AnnotationSchema],
   fhirTitle: { type: String, default: 'VisionPrescriptionLensSpecification' },
});

class VisionPrescriptionLensSpecification extends mongoose.Document {
  constructor(object) {
    super(object, VisionPrescriptionLensSpecificationSchema);
    this._type = 'FHIR::VisionPrescriptionLensSpecification';
  }
};


module.exports.VisionPrescriptionLensSpecificationSchema = VisionPrescriptionLensSpecificationSchema;
module.exports.VisionPrescriptionLensSpecification = VisionPrescriptionLensSpecification;
