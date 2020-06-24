const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AccountCoverageSchema = BackboneElementSchemaFunction({
   coverage : ReferenceSchema,
   priority : Number,
   fhirTitle: { type: String, default: 'AccountCoverage' },
});

class AccountCoverage extends mongoose.Document {
  constructor(object) {
    super(object, AccountCoverageSchema);
    this._type = 'FHIR::AccountCoverage';
  }
};


module.exports.AccountCoverageSchema = AccountCoverageSchema;
module.exports.AccountCoverage = AccountCoverage;
