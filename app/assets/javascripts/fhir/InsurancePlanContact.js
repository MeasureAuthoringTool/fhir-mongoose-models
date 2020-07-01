const mongoose = require('mongoose/browser');
const { AddressSchema } = require('./Address');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactPointSchema } = require('./ContactPoint');
const { HumanNameSchema } = require('./HumanName');

const InsurancePlanContactSchema = BackboneElementSchemaFunction({
  purpose: CodeableConceptSchema,
  name: HumanNameSchema,
  telecom: [ContactPointSchema],
  address: AddressSchema,
  typeName: { type: String, default: 'InsurancePlanContact' },
  _type: { type: String, default: 'FHIR::InsurancePlanContact' },
});

class InsurancePlanContact extends mongoose.Document {
  constructor(object) {
    super(object, InsurancePlanContactSchema);
    this.typeName = 'InsurancePlanContact';
    this._type = 'FHIR::InsurancePlanContact';
  }
}

module.exports.InsurancePlanContactSchema = InsurancePlanContactSchema;
module.exports.InsurancePlanContact = InsurancePlanContact;
