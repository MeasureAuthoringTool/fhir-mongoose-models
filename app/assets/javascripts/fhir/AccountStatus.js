const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AccountStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'AccountStatus' },
});

class AccountStatus extends mongoose.Document {
  constructor(object) {
    super(object, AccountStatusSchema);
    this._type = 'FHIR::AccountStatus';
  }
};


module.exports.AccountStatusSchema = AccountStatusSchema;
module.exports.AccountStatus = AccountStatus;
