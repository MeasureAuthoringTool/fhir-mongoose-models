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

const OrganizationContactSchema = BackboneElementSchemaFunction({
   purpose : CodeableConceptSchema,
   name : HumanNameSchema,
   telecom : [ContactPointSchema],
   address : AddressSchema,
   fhirTitle: { type: String, default: 'OrganizationContact' },
});

class OrganizationContact extends mongoose.Document {
  constructor(object) {
    super(object, OrganizationContactSchema);
    this._type = 'FHIR::OrganizationContact';
  }
};


module.exports.OrganizationContactSchema = OrganizationContactSchema;
module.exports.OrganizationContact = OrganizationContact;
