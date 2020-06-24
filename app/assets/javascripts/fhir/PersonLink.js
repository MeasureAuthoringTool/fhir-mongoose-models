const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { IdentityAssuranceLevelSchema } = require('./IdentityAssuranceLevel');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PersonLinkSchema = BackboneElementSchemaFunction({
   target : ReferenceSchema,
   assurance : IdentityAssuranceLevelSchema,
   fhirTitle: { type: String, default: 'PersonLink' },
});

class PersonLink extends mongoose.Document {
  constructor(object) {
    super(object, PersonLinkSchema);
    this._type = 'FHIR::PersonLink';
  }
};


module.exports.PersonLinkSchema = PersonLinkSchema;
module.exports.PersonLink = PersonLink;
