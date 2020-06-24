const mongoose = require('mongoose/browser');
const { AddressSchema } = require('./Address');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactPointSchema } = require('./ContactPoint');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { OrganizationContactSchema } = require('./OrganizationContact');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const OrganizationSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   active : Boolean,
   type : [CodeableConceptSchema],
   name : String,
   alias : [String],
   telecom : [ContactPointSchema],
   address : [AddressSchema],
   partOf : ReferenceSchema,
   contact : [OrganizationContactSchema],
   endpoint : [ReferenceSchema],
   fhirTitle: { type: String, default: 'Organization' },
});

class Organization extends mongoose.Document {
  constructor(object) {
    super(object, OrganizationSchema);
    this._type = 'FHIR::Organization';
  }
};


module.exports.OrganizationSchema = OrganizationSchema;
module.exports.Organization = Organization;
