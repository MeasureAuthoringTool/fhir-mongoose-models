const mongoose = require('mongoose/browser');
const { AddressSchema } = require('./Address');
const { AdministrativeGenderSchema } = require('./AdministrativeGender');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactPointSchema } = require('./ContactPoint');
const { HumanNameSchema } = require('./HumanName');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');

const PatientContactSchema = BackboneElementSchemaFunction({
  relationship: [CodeableConceptSchema],
  name: HumanNameSchema,
  telecom: [ContactPointSchema],
  address: AddressSchema,
  gender: AdministrativeGenderSchema,
  organization: ReferenceSchema,
  period: PeriodSchema,
  typeName: { type: String, default: 'PatientContact' },
  _type: { type: String, default: 'FHIR::PatientContact' },
});

class PatientContact extends mongoose.Document {
  constructor(object) {
    super(object, PatientContactSchema);
    this.typeName = 'PatientContact';
    this._type = 'FHIR::PatientContact';
  }
}

module.exports.PatientContactSchema = PatientContactSchema;
module.exports.PatientContact = PatientContact;