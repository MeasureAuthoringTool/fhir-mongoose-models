const mongoose = require('mongoose/browser');
const { AddressSchema } = require('./Address');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactPointSchema } = require('./ContactPoint');
const { HumanNameSchema } = require('./HumanName');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const InsurancePlanContactSchema = BackboneElementSchemaFunction({
   purpose : CodeableConceptSchema,
   name : HumanNameSchema,
   telecom : [ContactPointSchema],
   address : AddressSchema,
   fhirTitle: { type: String, default: 'InsurancePlanContact' },
});

class InsurancePlanContact extends mongoose.Document {
  constructor(object) {
    super(object, InsurancePlanContactSchema);
    this._type = 'FHIR::InsurancePlanContact';
  }
};


module.exports.InsurancePlanContactSchema = InsurancePlanContactSchema;
module.exports.InsurancePlanContact = InsurancePlanContact;
