const mongoose = require('mongoose/browser');
const { AddressSchema } = require('./Address');
const { AdministrativeGenderSchema } = require('./AdministrativeGender');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactPointSchema } = require('./ContactPoint');
const { HumanNameSchema } = require('./HumanName');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PatientContactSchema = BackboneElementSchemaFunction({
   relationship : [CodeableConceptSchema],
   name : HumanNameSchema,
   telecom : [ContactPointSchema],
   address : AddressSchema,
   gender : AdministrativeGenderSchema,
   organization : ReferenceSchema,
   period : PeriodSchema,
   fhirTitle: { type: String, default: 'PatientContact' },
});

class PatientContact extends mongoose.Document {
  constructor(object) {
    super(object, PatientContactSchema);
    this._type = 'FHIR::PatientContact';
  }
};


module.exports.PatientContactSchema = PatientContactSchema;
module.exports.PatientContact = PatientContact;
