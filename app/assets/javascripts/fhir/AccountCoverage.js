const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { ReferenceSchema } = require('./Reference');

const AccountCoverageSchema = BackboneElementSchemaFunction({
  coverage: ReferenceSchema,
  priority: PrimitivePositiveIntSchema,
  typeName: { type: String, default: 'AccountCoverage' },
  _type: { type: String, default: 'FHIR::AccountCoverage' },
});

class AccountCoverage extends mongoose.Document {
  constructor(object) {
    super(object, AccountCoverageSchema);
    this.typeName = 'AccountCoverage';
    this._type = 'FHIR::AccountCoverage';
  }
}

module.exports.AccountCoverageSchema = AccountCoverageSchema;
module.exports.AccountCoverage = AccountCoverage;
