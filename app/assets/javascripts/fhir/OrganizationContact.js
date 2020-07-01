const mongoose = require('mongoose/browser');
const { AddressSchema } = require('./Address');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactPointSchema } = require('./ContactPoint');
const { HumanNameSchema } = require('./HumanName');

const OrganizationContactSchema = BackboneElementSchemaFunction({
  purpose: CodeableConceptSchema,
  name: HumanNameSchema,
  telecom: [ContactPointSchema],
  address: AddressSchema,
  typeName: { type: String, default: 'OrganizationContact' },
  _type: { type: String, default: 'FHIR::OrganizationContact' },
});

class OrganizationContact extends mongoose.Document {
  constructor(object) {
    super(object, OrganizationContactSchema);
    this.typeName = 'OrganizationContact';
    this._type = 'FHIR::OrganizationContact';
  }
}

module.exports.OrganizationContactSchema = OrganizationContactSchema;
module.exports.OrganizationContact = OrganizationContact;
