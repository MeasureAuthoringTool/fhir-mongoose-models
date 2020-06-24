const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { VisionPrescriptionLensSpecificationSchema } = require('./VisionPrescriptionLensSpecification');
const { VisionStatusSchema } = require('./VisionStatus');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const VisionPrescriptionSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : VisionStatusSchema,
   created : DateTime,
   patient : ReferenceSchema,
   encounter : ReferenceSchema,
   dateWritten : DateTime,
   prescriber : ReferenceSchema,
   lensSpecification : [VisionPrescriptionLensSpecificationSchema],
   fhirTitle: { type: String, default: 'VisionPrescription' },
});

class VisionPrescription extends mongoose.Document {
  constructor(object) {
    super(object, VisionPrescriptionSchema);
    this._type = 'FHIR::VisionPrescription';
  }
};


module.exports.VisionPrescriptionSchema = VisionPrescriptionSchema;
module.exports.VisionPrescription = VisionPrescription;
