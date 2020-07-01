const mongoose = require('mongoose/browser');
const { AccountCoverageSchema } = require('./AccountCoverage');
const { AccountGuarantorSchema } = require('./AccountGuarantor');
const { AccountStatusSchema } = require('./AccountStatus');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const AccountSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  status: AccountStatusSchema,
  type: CodeableConceptSchema,
  name: PrimitiveStringSchema,
  subject: [ReferenceSchema],
  servicePeriod: PeriodSchema,
  coverage: [AccountCoverageSchema],
  owner: ReferenceSchema,
  description: PrimitiveStringSchema,
  guarantor: [AccountGuarantorSchema],
  partOf: ReferenceSchema,
  typeName: { type: String, default: 'Account' },
  _type: { type: String, default: 'FHIR::Account' },
});

class Account extends mongoose.Document {
  constructor(object) {
    super(object, AccountSchema);
    this.typeName = 'Account';
    this._type = 'FHIR::Account';
  }
}

module.exports.AccountSchema = AccountSchema;
module.exports.Account = Account;
