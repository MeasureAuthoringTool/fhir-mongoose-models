const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const MedicinalProductIndicationOtherTherapySchema = BackboneElementSchemaFunction({
  therapyRelationshipType: CodeableConceptSchema,
  medicationCodeableConcept: CodeableConceptSchema,
  medicationReference: ReferenceSchema,
  typeName: { type: String, default: 'MedicinalProductIndicationOtherTherapy' },
  _type: { type: String, default: 'FHIR::MedicinalProductIndicationOtherTherapy' },
});

class MedicinalProductIndicationOtherTherapy extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductIndicationOtherTherapySchema);
    this.typeName = 'MedicinalProductIndicationOtherTherapy';
    this._type = 'FHIR::MedicinalProductIndicationOtherTherapy';
  }
}

module.exports.MedicinalProductIndicationOtherTherapySchema = MedicinalProductIndicationOtherTherapySchema;
module.exports.MedicinalProductIndicationOtherTherapy = MedicinalProductIndicationOtherTherapy;
