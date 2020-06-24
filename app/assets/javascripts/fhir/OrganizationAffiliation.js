const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactPointSchema } = require('./ContactPoint');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const OrganizationAffiliationSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   active : Boolean,
   period : PeriodSchema,
   organization : ReferenceSchema,
   participatingOrganization : ReferenceSchema,
   network : [ReferenceSchema],
   code : [CodeableConceptSchema],
   specialty : [CodeableConceptSchema],
   location : [ReferenceSchema],
   healthcareService : [ReferenceSchema],
   telecom : [ContactPointSchema],
   endpoint : [ReferenceSchema],
   fhirTitle: { type: String, default: 'OrganizationAffiliation' },
});

class OrganizationAffiliation extends mongoose.Document {
  constructor(object) {
    super(object, OrganizationAffiliationSchema);
    this._type = 'FHIR::OrganizationAffiliation';
  }
};


module.exports.OrganizationAffiliationSchema = OrganizationAffiliationSchema;
module.exports.OrganizationAffiliation = OrganizationAffiliation;
