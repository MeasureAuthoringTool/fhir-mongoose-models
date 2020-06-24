const mongoose = require('mongoose/browser');
const { AccountCoverageSchema } = require('./AccountCoverage');
const { AccountGuarantorSchema } = require('./AccountGuarantor');
const { AccountStatusSchema } = require('./AccountStatus');
const { CodeableConceptSchema } = require('./CodeableConcept');
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

const AccountSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : AccountStatusSchema,
   type : CodeableConceptSchema,
   name : String,
   subject : [ReferenceSchema],
   servicePeriod : PeriodSchema,
   coverage : [AccountCoverageSchema],
   owner : ReferenceSchema,
   description : String,
   guarantor : [AccountGuarantorSchema],
   partOf : ReferenceSchema,
   fhirTitle: { type: String, default: 'Account' },
});

class Account extends mongoose.Document {
  constructor(object) {
    super(object, AccountSchema);
    this._type = 'FHIR::Account';
  }
};


module.exports.AccountSchema = AccountSchema;
module.exports.Account = Account;
