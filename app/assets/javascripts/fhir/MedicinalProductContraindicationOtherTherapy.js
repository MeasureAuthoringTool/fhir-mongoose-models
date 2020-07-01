const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const MedicinalProductContraindicationOtherTherapySchema = BackboneElementSchemaFunction({
  therapyRelationshipType: CodeableConceptSchema,
  medicationCodeableConcept: CodeableConceptSchema,
  medicationReference: ReferenceSchema,
  typeName: { type: String, default: 'MedicinalProductContraindicationOtherTherapy' },
  _type: { type: String, default: 'FHIR::MedicinalProductContraindicationOtherTherapy' },
});

class MedicinalProductContraindicationOtherTherapy extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductContraindicationOtherTherapySchema);
    this.typeName = 'MedicinalProductContraindicationOtherTherapy';
    this._type = 'FHIR::MedicinalProductContraindicationOtherTherapy';
  }
}

module.exports.MedicinalProductContraindicationOtherTherapySchema = MedicinalProductContraindicationOtherTherapySchema;
module.exports.MedicinalProductContraindicationOtherTherapy = MedicinalProductContraindicationOtherTherapy;
