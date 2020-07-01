const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const AccountStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'AccountStatus' },
  _type: { type: String, default: 'FHIR::AccountStatus' },
});

class AccountStatus extends mongoose.Document {
  constructor(object) {
    super(object, AccountStatusSchema);
    this.typeName = 'AccountStatus';
    this._type = 'FHIR::AccountStatus';
  }
}

module.exports.AccountStatusSchema = AccountStatusSchema;
module.exports.AccountStatus = AccountStatus;
