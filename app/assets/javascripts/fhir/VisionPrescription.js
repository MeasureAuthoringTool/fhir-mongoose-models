const mongoose = require('mongoose/browser');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { ReferenceSchema } = require('./Reference');
const { VisionPrescriptionLensSpecificationSchema } = require('./VisionPrescriptionLensSpecification');
const { VisionStatusSchema } = require('./VisionStatus');

const VisionPrescriptionSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  status: VisionStatusSchema,
  created: PrimitiveDateTimeSchema,
  patient: ReferenceSchema,
  encounter: ReferenceSchema,
  dateWritten: PrimitiveDateTimeSchema,
  prescriber: ReferenceSchema,
  lensSpecification: [VisionPrescriptionLensSpecificationSchema],
  typeName: { type: String, default: 'VisionPrescription' },
  _type: { type: String, default: 'FHIR::VisionPrescription' },
});

class VisionPrescription extends mongoose.Document {
  constructor(object) {
    super(object, VisionPrescriptionSchema);
    this.typeName = 'VisionPrescription';
    this._type = 'FHIR::VisionPrescription';
  }
}

module.exports.VisionPrescriptionSchema = VisionPrescriptionSchema;
module.exports.VisionPrescription = VisionPrescription;
