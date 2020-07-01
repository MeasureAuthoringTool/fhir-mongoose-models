const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { IdentityAssuranceLevelSchema } = require('./IdentityAssuranceLevel');
const { ReferenceSchema } = require('./Reference');

const PersonLinkSchema = BackboneElementSchemaFunction({
  target: ReferenceSchema,
  assurance: IdentityAssuranceLevelSchema,
  typeName: { type: String, default: 'PersonLink' },
  _type: { type: String, default: 'FHIR::PersonLink' },
});

class PersonLink extends mongoose.Document {
  constructor(object) {
    super(object, PersonLinkSchema);
    this.typeName = 'PersonLink';
    this._type = 'FHIR::PersonLink';
  }
}

module.exports.PersonLinkSchema = PersonLinkSchema;
module.exports.PersonLink = PersonLink;
